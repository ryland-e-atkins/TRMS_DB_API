'use strict';

module.exports = function (app, db) {

    /* Here is where we store our CRUD functions for accessing the TRMS forms.
     * Create: Accepts a JSON string and parses it, then stores the data in the database.
     * Read: Returns a JSON string of the requested data.
     * Update: Similar to create. Accepts a JSON string and parses it, then updates the correct data in the database.
     * Delete: Accepts a JSON string of required data, deletes the corresponding records in the database
     *      -In reality this won't delete database entries but will create a deletedAt attribute and set the newly 
     *       added attribute deletedAt to the current date (when deletion was done).
     */

    app.get('/api/forms', function(req, res) {

        db.sequelize.query("SELECT \
            REQ_AUTHOR_FIRST_NAME\
            ,REQ_AUTHOR_LAST_NAME\
            ,EVENT_NAME\
            ,EVENT_DESCRIPTION\
            ,TRMS_EVENT_TYPES.TYPE\
            ,EVENT_COST\
            ,EVENT_DATETIME\
            ,STREET_ADDRESS\
            ,CITY\
            ,STATE\
            ,ZIPCODE\
            ,FORMAT\
            ,CUTOFF\
            ,TRMS_EVENT_ATTACHMENTS.ATTACHMENT AS EVENT_ATTACHMENT\
            ,TRMS_APPROVAL_ATTACHMENTS.ATTACHMENT AS APPROVAL_ATTACHMENT\
            ,APPROVAL_TYPE\
            ,TIME_TO_BE_MISSED\
            FROM\
            TRMS_REIMB_REQ_FORMS\
            ,TRMS_ADDRESSES\
            ,TRMS_APPROVAL_ATTACHMENTS\
            ,TRMS_EVENT_ATTACHMENTS\
            ,TRMS_EVENT_TYPES\
            ,TRMS_GRADE_FORMATS;", { type: db.sequelize.QueryTypes.SELECT})
        .then(forms => {
            res.json(forms);
        });
    });

    app.post('/api/forms', function(req, res) {
        // Simple
        const authFiNa = req.body.authFN;
        const authLaNa = req.body.authLN;
        const eventName = req.body.eventName;
        const eventDT = req.body.eventDT;
        const eventDesc = req.body.eventDesc;
        const eventCost = req.body.eventCost;
        const just = req.body.just;
        // Complex
        const eventLoc = req.body.eventLoc;
        const gradeFmt = req.body.gradeFmt;
        const eventTyp = req.body.eventTyp;
        const eventAtt = req.body.eventAtt;
        const aprvlAtt = req.body.aprvlAtt;

        return db.sequelize.transaction(function(t) {
            // Chaining create statements using promises. If all resolve
            // successfully then the transaction is automatically committed,
            // otherwise the transaction is rolled back.
            return db.addresses.create({
                STREET_ADDRESS : eventLoc.streetAddress,
                CITY : eventLoc.city,
                STATE : eventLoc.state,
                ZIPCODE : eventLoc.zipcode
            }, {transaction : t}).then(function (address) {
                return db.gradeFormats.create({
                    FORMAT : gradeFmt.format,
                    CUTOFF : gradeFmt.cutoff
            }, {transaction: t}).then(function (gradeFormat) {
                return db.eventTypes.create({
                    TYPE : eventTyp
            }, {transaction: t}).then(function (eventType) {
                return db.eventAttachments.create({
                    ATTACHMENT: eventAtt
            }, {transaction: t}).then(function (eventAttachment) {
                return db.approvalAttachments.create({
                    ATTACHMENT: aprvlAtt.attachment,
                    APPROVAL_TYPE: aprvlAtt.approvalType,
                    TIME_TO_BE_MISSED: aprvlAtt.timeMissed
            }, {transaction: t}).then(function (approvalAttachment) {
                return db.reimbReqForms.create({
                    REQ_AUTHOR_FIRST_NAME : authFiNa,
                    REQ_AUTHOR_LAST_NAME : authLaNa,
                    EVENT_NAME : eventName,
                    EVENT_DATETIME : eventDT,
                    EVENT_LOCATION : address.ADDRESS_ID,
                    EVENT_DESCRIPTION : eventDesc,
                    EVENT_COST : eventCost,
                    GRADE_FORMAT : gradeFormat.GRADE_FORMAT_ID,
                    EVENT_TYPE : eventType.EVENT_TYPE_ID,
                    JUSTIFICATION : just,
                    EVENT_ATTACHMENT : eventAttachment.EVENT_ATTACHMENT_ID,
                    APPROVAL_ATTACHMENT : approvalAttachment.APPROVAL_ATTACHMENT_ID
            }, {transaction: t}).then(function (reimbReqForm) {
                return true;
            }, {transaction: t});
            });
            });
            });
            });
            });
        }).then(function (result) {
            // Transaction has been committed
            console.log(result);
            res.json(result);
        }).catch(function (err) {
            // Transaction has been rolled back
            console.log(err);
            res.send(err);
        });
    });
};

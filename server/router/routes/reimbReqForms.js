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
    

    //OLD EXAMPLES TO COPY FROM
    /*
    // GET all users
    app.get('/api/users', function(req, res) {
        res.send(200, console.log("Within users"));
        
        db.users.findAll()
            .then(usrs => {
                res.send(200, 'a');
            });
    });
    // GET one user by id
    app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        req.
        db.users.findOne({
            where: { ERS_USERS_ID: id }
        }).then(user => {
            res.send(user.json());
        });
    });
    */
};

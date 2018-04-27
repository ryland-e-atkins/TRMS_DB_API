'use strict';

module.exports = function (sequelize, Sequelize) {
    const ApprovalAttachments = sequelize.define('TRMS_APPROVAL_ATTACHMENTS', {
        APPROVAL_ATTACHMENT_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // IMPORTANT: The BLOB data type allows you to insert data both as strings and as buffers. 
        // When you do a find or findAll on a model which has a BLOB column, that data will always 
        // be returned as a buffer.
        // src: http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
        ATTACHMENT: {
            type: Sequelize.BLOB('medium'),
            allowNull: true
        },
        APPROVAL_TYPE: {
            type: Sequelize.ENUM('FULL','PARTIAL'),
            allowNull: true
        },
        TIME_TO_BE_MISSED: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, 
    {
        timestamps: true,
        paranoid: true,
        freezeTableName: true
    });
    
    return ApprovalAttachments;
};

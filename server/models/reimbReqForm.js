'use strict';

module.exports = function (sequelize, Sequelize) {
    const TRMS_ADDRESSES = require('../models/address.js');
    const TRMS_GRADE_FORMATS = require('../models/gradeFormat.js');
    const TRMS_EVENT_TYPES = require('../models/eventType.js');
    const TRMS_EVENT_ATTACHMENTS = require('../models/eventAttachment.js');
    const TRMS_APPROVAL_ATTACHMENTS = require('../models/approvalAttachment.js');
    
    const ReimbReqForm = sequelize.define('TRMS_REIMB_REQ_FORMS', {
        REQ_FORM_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        REQ_AUTHOR_FIRST_NAME: {
            type: Sequelize.STRING,
            allowNull: false
        },
        REQ_AUTHOR_LAST_NAME: {
            type: Sequelize.STRING,
            allowNull: false
        },
        EVENT_NAME: {
            type: Sequelize.STRING,
            allowNull: false
        },
        EVENT_DATETIME: {
            type: Sequelize.DATE,
            allowNull: false
        },
        EVENT_LOCATION: {
            type: Sequelize.INTEGER,
            references: {
                model: 'TRMS_ADDRESSES',
                key: 'ADDRESS_ID'
            }
        },
        EVENT_DESCRIPTION: {
            type: Sequelize.STRING,
            allowNull: false
        },
        EVENT_COST: {
            type: Sequelize.DECIMAL(7,2),
            allowNull: false
        },
        GRADE_FORMAT: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'TRMS_GRADE_FORMATS',
                key: 'GRADE_FORMAT_ID'
            }
        },
        EVENT_TYPE: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'TRMS_EVENT_TYPES',
                key: 'EVENT_TYPE_ID'
            }
        },
        JUSTIFICATION: {
            type: Sequelize.STRING,
            allowNull: true
        },
        EVENT_ATTACHMENT: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'TRMS_EVENT_ATTACHMENTS',
                key: 'EVENT_ATTACHMENT_ID'
            }
        },
        APPROVAL_ATTACHMENT: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'TRMS_APPROVAL_ATTACHMENTS',
                key: 'APPROVAL_ATTACHMENT_ID'
            }
        }
    }, 
    {
        timestamps: true,
        paranoid: true,
        freezeTableName: true
    });

    return ReimbReqForm;
};

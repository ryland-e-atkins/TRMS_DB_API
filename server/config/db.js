'use strict';

const Sequelize = require('sequelize');
const env =  require('./env');

const sequelize = new Sequelize({
    database: env.DATABASE_NAME,
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    operatorsAliases: false,
    freezeTableName: true
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.reimbReqForms = require('../models/reimbReqForm.js')(sequelize, Sequelize);
db.addresses = require('../models/address.js')(sequelize, Sequelize);
db.gradeFormats = require('../models/gradeFormat.js')(sequelize, Sequelize);
db.eventTypes = require('../models/eventType.js')(sequelize, Sequelize);
db.eventAttachments = require('../models/eventAttachment.js')(sequelize, Sequelize);
db.approvalAttachments = require('../models/approvalAttachment.js')(sequelize, Sequelize);

module.exports = db;

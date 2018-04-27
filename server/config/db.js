'use strict';

// Get dependencies
const Sequelize = require('sequelize');
const env =  require('./env');

// Create database connection
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

// Check connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Lump it all together for export
const db = {};

// Datatypes and database connection instance
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Build models
db.addresses = require('../models/address.js')(sequelize, Sequelize);
db.gradeFormats = require('../models/gradeFormat.js')(sequelize, Sequelize);
db.eventTypes = require('../models/eventType.js')(sequelize, Sequelize);
db.eventAttachments = require('../models/eventAttachment.js')(sequelize, Sequelize);
db.approvalAttachments = require('../models/approvalAttachment.js')(sequelize, Sequelize);
db.reimbReqForms = require('../models/reimbReqForm.js')(sequelize, Sequelize);

// Connect models to MySQL database
db.addresses.sync();
db.gradeFormats.sync();
db.eventTypes.sync();
db.eventAttachments.sync();
db.approvalAttachments.sync();
db.reimbReqForms.sync();

module.exports = db;

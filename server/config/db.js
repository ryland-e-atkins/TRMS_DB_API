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

//db.users = require('../models/user.js')(sequelize, Sequelize);
//db.reimbForms = require('../models/reimbForm.js')(sequelize, Sequelize);

//db.reimbForms.belongsTo(db.users);
//db.users.hasMany(db.reimbForms);

module.exports = db;

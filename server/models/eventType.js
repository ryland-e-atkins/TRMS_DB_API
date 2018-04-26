'use strict';

module.exports = function (sequelize, Sequelize) {
    const EventTypes = sequelize.define('TRMS_EVENT_TYPES', {
        EVENT_TYPE_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        TYPE: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, 
    {
        timestamps: true,
        paranoid: true,
        freezeTableName: true
    });

    return EventTypes;
};

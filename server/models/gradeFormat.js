'use strict';

module.exports = function (sequelize, Sequelize) {
    const GradeFormats = sequelize.define('TRMS_GRADE_FORMATS', {
        GRADE_FORMAT_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        FORMAT: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CUTOFF: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, 
    {
        timestamps: true,
        paranoid: true,
        freezeTableName: true
    });

    return GradeFormats;
};

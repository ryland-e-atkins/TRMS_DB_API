'use strict';

module.exports = function (sequelize, Sequelize) {
    const Addresses = sequelize.define('TRMS_ADDRESSES', {
        ADDRESS_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        STREET_ADDRESS: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CITY: {
            type: Sequelize.STRING,
            allowNull: false
        },
        STATE: {
            type: Sequelize.ENUM('AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
                                 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD',
                                 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
                                 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
                                 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY',
                                 'DC'),
            allowNull: false
        },
        ZIPCODE: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }, 
    {
        timestamps: true,
        paranoid: true,
        freezeTableName: true
    });
    
    return Addresses;
};

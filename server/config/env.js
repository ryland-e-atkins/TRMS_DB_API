'use strict';

const env = {
  PORT: process.env.PORT || 4700,
  DATABASE_NAME: process.env.DATABASE_NAME || 'TRMS_DB',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'trms_user',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'jZnNbhkLk3aHw4KTzq9qwD9G7!6+ubW$',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'development',

  SECRET: 'h6G4vUVSMH#r9ueZcmRt_uAp4rtZk!=z'
};

module.exports = env;
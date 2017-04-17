const Sequelize = require('sequelize');
const logger = require('../logger');
const config = require('../config');

let db = new Sequelize(config.database.db, config.database.user, config.database.password, {
    dialect: 'postgres',
    host: config.database.host,
    logging: config.isDevelopment ? logger.debug : false
})

let User = require('./schema/user')(Sequelize, db);
let Event = require('./schema/event')(Sequelize, db);
let Attendance = require('./schema/attendance')(Sequelize, db);

let setup = (force) => {
    db.sync({ force: !!force });
};

module.exports = { User, Event, Attendance, setup }; 

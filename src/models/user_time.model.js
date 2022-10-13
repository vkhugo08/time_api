const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const Users = require('./user.model')
const TimeZone = require('./time_zone.model')

const UserTimes = db.define('user_time', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    userId: {
        allowNull: false,
        type: DataTypes.UUID,
        references:{
            model: Users,
            key: 'id'
        },
        field: 'user_id'
    },
    timeZoneId: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
            model: TimeZone,
            key: 'id'
        },
        field: 'time_zone_id'
    },
});

module.exports = UserTimes
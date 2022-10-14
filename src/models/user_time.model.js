const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const Users = require('./user.model')

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
    timeZone: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'time_zone'
    },
});

module.exports = UserTimes
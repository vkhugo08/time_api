const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const TimeZone = db.define('time_zone',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull:false
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    }
});

module.exports = TimeZone
const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const Roles = require('./roles.model')

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(30),
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  birthdayDate: {
    allowNull: false,
    type: DataTypes.DATEONLY,
    field: "birthday_date",
  },
  roleId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: Roles,
      key: 'id'
    },
    field: "role_id"
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "updated_at",
  },
});

module.exports = Users;
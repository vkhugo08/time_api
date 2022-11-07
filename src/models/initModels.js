const Users = require('./user.model')
const UserTimes = require('./user_time.model')
const Roles = require('./roles.model')


const initModel = () => {
//? users -> userTimes
Users.hasMany(UserTimes)
UserTimes.belongsTo(Users)

 //? Roles
 Roles.hasMany(Users)
 Users.belongsTo(Roles)


};

module.exports = initModel;
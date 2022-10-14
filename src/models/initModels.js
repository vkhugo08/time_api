const Users = require('./user.model')
const UserTimes = require('./user_time.model')

const initModel = () => {
//? users -> userTimes
Users.hasMany(UserTimes)
UserTimes.belongsTo(Users)




};

module.exports = initModel;
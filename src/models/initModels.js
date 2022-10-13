const Users = require('./user.model')
const TimeZone = require('./time_zone.model')
const UserTimes = require('./user_time.model')

const initModel = () => {
//? users -> userTimes
Users.hasMany(UserTimes)
UserTimes.belongsTo(Users)

//? TimeZone -> UsersTimes
TimeZone.hasMany(UserTimes)
UserTimes.belongsTo(TimeZone)


};

module.exports = initModel;
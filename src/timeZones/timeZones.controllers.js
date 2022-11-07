const axios = require("axios");
const uuid = require('uuid')
const UserTimes = require('../models/user_times.model')

const getAllTimeZones = () => {
  const URL = 'http://worldtimeapi.org/api/timezone'
  //"https://pokeapi.co/api/v2/pokemon"
  //"http://worldtimeapi.org/api/timezone"
  return axios.get(URL)
    .then(res => res.data)
    .catch(err => console.log(err))
};
//getAllTimeZones()

const getTimeZoneByName = (name) => {
  const URL = `http://worldtimeapi.org/api/timezone/${name}`

  return axios.get(URL)
    .then( res => res.data)
    .catch( err => console.log(err))
  //return Promise.resolve({})
};

const createUserTimes = async (userId, name) => {
  const findData = await UserTimes.findOne({
    where: {
      userId: userId,
      timeZone: name
    }
  })
  if(!findData){
    const data = await UserTimes.create({
      id: uuid.v4(),
      userId: userId,
      timeZone: name
    })
    return {data, created: true}
  }else{
    return {findData, created: false} 
  }
};

const removeUserTime = (userId, name) => {
  const data = UserTimes.destroy({
    where: {
      userId: userId,
      timeZone: name
    }
  })
  return data
};

module.exports = {
  getAllTimeZones,
  getTimeZoneByName,
  createUserTimes,
  removeUserTime
}
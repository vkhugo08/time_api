const { response } = require('express');
const timeZonesControllers = require('./timeZones.controllers');

const getAll = (req, res) => {
  timeZonesControllers.getAllTimeZones()
    .then( response => {
      res.status(200).json({items: response.length, timeZones: response})
    })
    .catch( error => {
      res.status(400).json({error})
    })
};

const getByName = (req, res) => {
  //console.log("soy yo Byname")
  const name = req.params.name
  console.log(name)
  timeZonesControllers.getTimeZoneByName(name)
    .then( response => {
      //console.log(response)
      res.status(200).json({timeZone: response})
    })
    .catch( error => {
      res.status(400).json({error})
    })
}

const createUserTimes = (req, res) => {
  //const userId = req.user.id
  const userId = req.body.id
  const name = req.params.name
  timeZonesControllers.createUserTimes(userId, name)
    .then(response => {
      if(response.created){
        res.status(200).json({
          message: `Time Zone with id: ${response.id} added successfully at user with id: ${userId}`,
          userTimeZone: response,
        })
      }else{
        res.status(401).json({
          message: `Time Zone with id: ${response.id} and user id: ${userId} already exists`
        })
      }
    })
    .catch( error => {
      res.status(400).json({error: error})
    })
}

const removeUserTime = (req, res) => {
  const userId = req.body.id
  const name = req.params.name
  timeZonesControllers.removeUserTime(userId, name)
    .then( response => {
      if(response){
        res.status(204).json()
      }else{
        res.status(400).json({message: `Time Zone in User with id: ${userId} not found`})
      }
    })
}

module.exports = {
  getAll,
  getByName,
  createUserTimes,
  removeUserTime
}
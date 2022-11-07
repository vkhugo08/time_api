const authControllers = require('./auth.controllers')
const jwt = require('jsonwebtoken')

const login = (req, res) => {
  const data = req.body

  if(!data.email || !data.password){
    return res.status(400).json({message: 'Missing data'})
  }

  authControllers.loginUser(data.email, data.password)
    .then( response => {
      if(response){
        const token = jwt.sign(
          {
            id: response.id,
            email: response.email,
            rol: response.rol
          },
          'academlo'
        );
        return res.status(200).json({message: 'User autenticated', token: token})
      } else {
        return res.status(401).json({message: 'Invalid Credentials'})
      }
    })
    .catch( err => {
      return res.status(401).json({message: 'Invalid Credentials'})
    })
};


module.exports = { login }
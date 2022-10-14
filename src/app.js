const express = require('express')
const initModel  = require('./models/initModels')
const { db } = require('./utils/database')
const app = express()
//* Aplicando rutas
const userRouter = require('./users/user.router').router

app.use(express.json())


initModel()

db.authenticate()
  .then(() => console.log('Database Authenticated'))
  .catch(err => console.log(err))

if(process.env.NODE_ENV === 'production'){
  db.sync() 
    .then(() => {
      console.log('Database synced')
      //defaultData()
    })
    .catch(err => console.log(err))
} else{
  db.sync({force:true})
    .then(() => {
      console.log('Database synced')
      //defaultData()
    })
    .catch(err => console.log(err))
}
//* peticiones de rutas
app.use('/api/v1/users', userRouter);
app.get('/', (req, res) =>{
    res.status(200).json({message: 'welcome to me api'})
})

//Generateport
const PORT = process.env.PORT || 8000
app.listen(PORT, () =>{
    console.log(`server started at port ${PORT}`)
})
const express = require('express')

const app = express()
const cors = require('cors')
//* Archivos de rutas
const userRouter = require('./users/users.router').router
const authRouter = require('./auth/auth.router').router
const timeZonesRouter = require('./timeZones/timeZones.router').router
//* Configuraciones iniciales
const { db } = require('./utils/database')
const initModels = require('./models/initModels')
const { generateData } = require('./utils/defaultData')

app.use(cors())
app.use(express.json())

//* Database
initModels()

db.authenticate()
  .then(() => console.log('Database Authenticated'))
  .catch(err => console.log(err))

// if(process.env.NODE_ENV === 'production'){
//   db.sync() 
//     .then(() => {
//       console.log('Database synced')
//       generateData()
//     })
//     .catch(err => console.log(err))
// } else{
//   db.sync({force:true})
//     .then(() => {
//       console.log('Database synced')
//       generateData()
//     })
//     .catch(err => console.log(err))
// }
//* Requests
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/timezones', timeZonesRouter);
app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to my WorldTime API'})
})


//* Generate port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})


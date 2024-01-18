import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

//import requests from './Requests/routes.js'

// import swaggerUI from 'swagger-ui-express'
// import swaggerJSDoc from 'swagger-jsdoc'

import auth from './Auth/auth.js'
import ngo from './Ngo/routes.js'
import user from './User/routes.js'
import issue from './Issue/routes.js'
import request from './Request/routes.js'
import chatbot from './chatbot/routes.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

app.use('/api/auth', auth)
app.use('/api/ngo', ngo)
app.use('/api/user', user)
app.use('/api/issue', issue)
app.use('/api/request', request)
app.use('/api/chatbot', chatbot)

app.get('/', (req, res) => {
  res.send('Hello from homepage')
})

require ('dotenv').config()
const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')
const socketio = require('socketio')
const authRouter = require('./lib/auth.router')
const passportInit = require('./lib/passport.init')
const app = express()

const certOptions = {
    key: fs.readFileSync(path.resolve('certs/server.key')),
    cert: fs.readFileSync(path.resolve('certs/server.crt'))
}

const server = https.createServer(certOptions, app)

//Setup passport and to accept JSON object
app.use(express.json())
app.use(passport.initialize())
passportInit()

//Requests accepted from client
app.use(cors({
    origin: CLIENT_ORIGIN
}))

app.use(session({
   secret: process.env.SESSION_SECRET,
   resave: true,
   saveUninitialized: true 
}))

//Connection sockets to server and adding them to the request
const io = socketio(server)
app.set('io', io)

//Direct all requests to the auth router
app.use('/', authRouter)

server.listen(process.envPORT || 3000, () =>{
    console.log('listening...')
})



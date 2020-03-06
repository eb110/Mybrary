//MVC
//routes are going to be set inside routes folder
//database models will go to models folder
//views will go into views folder

//attaching env environmental variables
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//connecting routin from index.js - we have to use it!
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
//location of views - where they will come from
app.set('views', __dirname + '/views')
//footer and header is going to be the same so we want to autome it
app.set('layout', 'layouts/layout')
//we have to tell app to use layouts
app.use(expressLayouts)
//public files
app.use(express.static('public'))

//dbdriver
const mongoose = require('mongoose')
//at this example we will use process.env
//we have to set that variable do we have to install
//npm i --save-dev dotenv
const url = 'mongodb+srv://eb110:fhekjrs343Df@cluster0-rnf08.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology : true
})

    const db = mongoose.connection
    db.on('error', error => console.error(error))
    db.once('open', () => console.log('Connected to Mongoose'))

//using routing
app.use('/', indexRouter)

//we are hooking env variables as well
app.listen(process.env.PORT || 8080)
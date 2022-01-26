console.clear()

const express = require('express');
const { PORT } = require('./config/server.js');
const registerRouter = require('./routes/register.js');
const responceRouter = require("./routes/respoce.js")
const studentRouter = require("./routes/student.js")
const homeRouter = require("./routes/home.js")
const privateInfoRouter = require("./routes/privateInfo.js")

const app = express();

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(responceRouter)
app.use(registerRouter);
app.use(studentRouter)
app.use(homeRouter)
app.use(privateInfoRouter)

app.listen(PORT, () =>
  console.log(`The server is ready on http://localhost:${PORT}`)
);

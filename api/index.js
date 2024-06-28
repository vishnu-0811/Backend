const express = require("express");

const app = express();
const { APP_PORT,DB_URL} = require("./config")
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')

mongoose.connect(DB_URL)
    .then(() => console.log('Connected!'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + "/public"));
app.use("/upload",express.static ("upload"));

app.use(cors())

app.use(routes);


app.listen(APP_PORT, () => {
    console.log(`app run on ${APP_PORT}`)
})

// app.get((req,res)=>{
//     res.send("hello")
// })


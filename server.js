/* Requiring env file. */
require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.port;



app.listen(port,function(){
    console.log(`Picture of the Day App Started (port: ${port}).`)
})
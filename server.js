/* Requiring env file. */
require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.port;
/* Requiring Database connection file for db connection */
require(`./db-connection`);



app.listen(port,function(){
    console.log(`Picture of the Day App Started (port: ${port}).`)
})
/* Requiring env file. */
require('dotenv').config();
const express = require("express");
const axios = require("axios");
const app = express();
const {port} = process.env;
/* Requiring Database connection file for db connection */
require(`./db-connection`);
const Apod = require(`./models/Apod`);

/* Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

/* routes */
app.get("/", async (req, res) => {
    let date = req.query.date || new Date().toISOString().slice(0, 10);
    let ApodData = await Apod.findOne({
        date: date    
    });
    if(!ApodData){
        let {data} = await axios(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        /* creating a new instance of Apod model.*/
        ApodData = new Apod({   
            date: data.date,
            title: data.title,
            explanation: data.explanation,
            url: data.url,
            media_type: data.media_type
        });
        /* Saving data into db. */
        await ApodData.save();
        ApodData = data
    }
    return res.render("index", { ApodData });
});


app.listen(port,function(){
    console.log(`Picture of the Day App Started (port: ${port}).`)
})
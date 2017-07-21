//The npm packages
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars"); //This is where all the HTML will be entered.
var mongoose = require("mongoose"); //Use Mongo Databases on Command Prompt to enter data. Remember you can use Mongo DB Compass as a Workbench.
var cheerio = require("cheerio"); //This is the scraping tool.
var request = require("request");
//
var app = express();
//Configuring the Rikki Tikki Tavi DB
mongoose.connect("mongodb://localhost/___");
var rikkiTikkiTavi = mongoose.connection;
//Detecting errors in mongoose
rikkiTikkiTavi.on("error", function(error){
	console.log("Oh no, a cobra bite! ", error);
});
//Informing successful database login
rikkiTikkiTavi.once("open", function(){
	console.log("No cobras here. Connection successful.");
});

var Schema

//Creating Routes
app.get("/");

//

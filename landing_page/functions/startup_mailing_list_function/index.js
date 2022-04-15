"use strict";
var express = require("express");
var app = express();
app.use(express.json());

var catalyst = require("zcatalyst-sdk-node");



app.post("/mailingList", function (req, res) {
  var app = catalyst.initialize(req);
  var datastore = app.datastore();

  var table = datastore.table("mailingList");

  var data = req.body;
  

  var insertPromise = table.insertRow(data);

  insertPromise
    .then((row) => {
	 
	  if (row.status === 409) {
		 return  res.status(409).json({
			  status: 'error', 
			  message: 'Email already exists'
		  })
	  }
      res.status(200).json({
        status: "ok",
        message: "You email is added to our mailing list ",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;

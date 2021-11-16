const express = require("express");
const app = express();

const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");

app.get("/check/:zip", validateZip, (req, res, next) => {
    const zip = req.params.zip;
    if (getZoos(zip)) {
        next(`${zip} exists in our records.`)
    } else {
        next(`${zip} does not exist in our records.`)
    }
})

app.get("/zoos:zip", (req, res, next) => {

})

app.get("/zoos/all", (req, res, next) => {

})

app.use((req, res, next) => {
    res.send(`The route ${req.path} does not exist!`);
})

app.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
})

module.exports = app;
const express = require("express");
const app = express();

const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");

app.get("/check/:zip", validateZip, (req, res, next) => {
    const { zip } = req.params;
    if (getZoos(zip)) {
        res.send(`${zip} exists in our records.`)
    } else {
        res.send(`${zip} does not exist in our records.`)
    }
})

app.get("/zoos/:zip", validateZip, (req, res, next) => {
    const { zip } = req.params;
    const zoos = getZoos(zip);
    if(zoos) {
        next();
    } else {
        res.send(`${zip} has no zoos.`)
    }
})

app.get("/zoos/all", (req, res, next) => {
    next();
})

app.use((req, res, next) => {
    res.send(`That route could not be found!`);
})

app.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
})

module.exports = app;
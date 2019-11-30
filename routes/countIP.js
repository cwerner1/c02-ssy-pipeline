const express = require('express');
const Request = require('request');
const router = express.Router();

let IPCount = {};

function getResults(req, res) {
    res.json(IPCount);
}

function newLogentry(req, res) {
    if(IPCount[req.body.host] ===undefined) {
        IPCount[req.body.host]=0;
    }
    IPCount[req.body.host]++;
    res.status(200).end();
}

router.post("/", newLogentry);

router.get("/", getResults);
module.exports = router;

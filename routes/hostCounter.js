const express = require('express');
const router = express.Router();

let hostStats = {};

router.get("/", readHosts);
function readHosts(req, res) {
    res.json(hostStats);
}

router.post("/", newLogEntry);
function newLogEntry(req, res) {
    let host = req.body.host;
    if (host in hostStats) {
        hostStats[host]++;
    } else {
        hostStats[host] = 1;
    }
    res.status(200).end();
}

module.exports = router;

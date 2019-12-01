const express = require('express');
const Request = require('request');
const router = express.Router();

let sumBytes = 0;

router.get("/", readBytes);

function readBytes(req, res) {
    res.json(sumBytes);
}


router.post("/", newLogEntry);

function newLogEntry(req, res) {
    sumBytes += req.body.bytes;
    res.status(200).end();
}



// setTimeout(readQueue, 500);

function readQueue() {
    setTimeout(readQueue, 500);

    Request.get({
        url: 'http://127.0.0.1:3000/queue',
        json: true
    }, queueAntwort);

    function queueAntwort(err, resp, body) {
        if (resp.statusCode === 200) {
            sumBytes += body.bytes;
        }
    }
}

module.exports = router;

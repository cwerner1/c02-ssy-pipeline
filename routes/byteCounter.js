const express = require('express');
const Request = require('request');
const router = express.Router();

let sumBytes = 0;

function getBytes(req, res) {
    res.json(sumBytes);
}

//setTimeout(readQueue, 500);

function readQueue() {
    setTimeout(readQueue, 500);

    function queueAnwort(req, res, body) {
        if (res.statusCode === 200) {
            sumBytes += parseInt(body.bytes);
        }
    }

    Request.get(
        {
            url: "http://127.0.0.1:3000/queue/",
            json: true

        }, queueAnwort
    );
}

function newLogentry(req, res) {
console.log("sub");
    sumBytes += req.body.bytes;
    res.status(200).end();
}

router.post("/", newLogentry);

router.get("/", getBytes);
module.exports = router;

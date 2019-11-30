const express = require('express');
const Request = require('request');
const router = express.Router();


const subscription = [];

function subscribe(req, res) {
    const worker_url = req.body.url;
    subscription.push(worker_url);
    res.status(200).end();
}

router.post("/subscribe", subscribe);

function publish(req, res) {
    let msg = req.body.msg;
    for (let wu of subscription) {
        Request.post({url: wu, json: msg},
        );
    }
    res.status(200).end();
}

router.post("/", publish);
module.exports = router;



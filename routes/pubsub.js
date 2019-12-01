const express = require('express');
const Request = require('request');
const router = express.Router();

router.post("/subscribe", subscribe);

const subscriptions = [];

function subscribe(req, res) {
    const worker_url = req.body.url;
    subscriptions.push(worker_url);
    res.status(200).end();
}

router.post("/", publish);

function publish(req, res) {
    let msg = req.body.msg;
    for (let subscriber of subscriptions) {
        Request.post({
            url: subscriber,
            json: msg
        });
    }
    res.status(200).end();
}


module.exports = router;

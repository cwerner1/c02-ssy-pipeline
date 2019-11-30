const express = require('express');
const router = express.Router();


const queue = [];

function newMessage(req, res) {
    queue.push(req.body.msg);
    res.status(200).end();
}

router.post("/", newMessage);

function getMessage(req, res) {
    if (queue.length === 0) {
        res.status(204).end();
    } else {
        let msg = queue.shift();
        res.json(msg);
    }
}

router.get("/", getMessage);
module.exports = router;



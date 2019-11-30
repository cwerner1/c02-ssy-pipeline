const express = require('express');
const router = express.Router();

const queue = [];

router.post("/", newMessage);
router.get("/", getMessage);

function newMessage(req, res) {
    queue.push(req.body.msg);
    res.status(200);
    res.end();
}

function getMessage(req, res) {
   if (queue.length === 0) {
       res.status(204).end();
   } else {
       let msg = queue.shift();
       res.json(msg);
   }
}

module.exports = router;

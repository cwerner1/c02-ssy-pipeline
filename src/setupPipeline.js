const Request = require('request');


function setup() {
    Request.post({
        url: "http://127.0.0.1:3000/pubsub/subscribe",
        json: {
            url: "http://127.0.0.1:3000/byte-counter"
        }
    }, subscribeResponse);

    function subscribeResponse(err, resp, body) {
        console.log("Subscription erfolgreich.");
    }
}

module.exports = setup;

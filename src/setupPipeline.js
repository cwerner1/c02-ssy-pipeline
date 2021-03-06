const Request = require('request');


function setup() {

    Request.post({
        url: "http://127.0.0.1:3000/pubsub/subscribe",
        json: {
            url: "http://127.0.0.1:3000/byte-counter"
        }
    }, subscribeResponse);
    Request.post({
        url: "http://127.0.0.1:3000/pubsub/subscribe",
        json: {
            url: "http://127.0.0.1:3000/host-counter"
        }
    }, subscribeResponse);

    function subscribeResponse(err, resp, body) {
        console.log("finished sub");
    }
}

module.exports = setup;

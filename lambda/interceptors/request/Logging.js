// This request interceptor will log all incoming requests to this lambda
const Logging = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope)}`);
    }
};


module.exports = Logging;

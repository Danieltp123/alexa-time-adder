const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = handlerInput.t('ADD_TIMES_MSG');
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speakOutput)
            .getResponse();
    }
};

module.exports = LaunchRequestHandler;

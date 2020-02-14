const Alexa = require('ask-sdk-core');

const TimeAdderIntent = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TimeAdderIntent';
    },
    handle(handlerInput) {
        const speechText = handlerInput.t('ADD_TIMES_MSG');
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


module.exports = TimeAdderIntent;

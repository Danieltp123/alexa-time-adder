const Alexa = require('ask-sdk-core');

const TimeAdderIntent = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TimeAdderIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('ADD_TIMES_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


module.exports = TimeAdderIntent;

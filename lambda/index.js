// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const LaunchRequest = require('./handlers/LaunchRequest');
const TimeAdderIntent = require('./handlers/TimeAdderIntent');
const HelpIntent = require('./handlers/HelpIntent');
const CancelAndStopIntent = require('./handlers/CancelAndStopIntent');
const SessionEndedRequest = require('./handlers/SessionEndedRequest');
const IntentReflector = require('./handlers/IntentReflector');

const ErrorHandler = require('./handlers/Error');

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequest,
        SessionEndedRequest,
        TimeAdderIntent,
        HelpIntent,
        CancelAndStopIntent,
        IntentReflector
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();

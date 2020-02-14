// Handlers
const Alexa = require('ask-sdk-core');
const LaunchRequest = require('./handlers/LaunchRequest');
const TimeAdderIntent = require('./handlers/TimeAdderIntent');
const HelpIntent = require('./handlers/HelpIntent');
const CancelAndStopIntent = require('./handlers/CancelAndStopIntent');
const SessionEndedRequest = require('./handlers/SessionEndedRequest');
const IntentReflector = require('./handlers/IntentReflector');
const ErrorHandler = require('./handlers/Error');

// Interceptors
const LocalisationRequestInterceptor = require('./interceptors/request/localization');
const LoggingRequestInterceptor = require('./interceptors/request/Logging');

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequest,
        TimeAdderIntent,
        HelpIntent,
        CancelAndStopIntent,
        SessionEndedRequest,
        IntentReflector
    )
    .addRequestInterceptors(
        LocalisationRequestInterceptor,
        LoggingRequestInterceptor
    )
    .addErrorHandlers(
        ErrorHandler
    )
    .lambda();

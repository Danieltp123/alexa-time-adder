const LaunchRequest = require('./LaunchRequest');
const HelloWorldIntent = require('./HelloWorldIntent');
const HelpIntent = require('./HelpIntent');
const CancelAndStopIntent = require('./CancelAndStopIntent');
const SessionEndedRequest = require('./SessionEndedRequest');
const IntentReflecto = require('./IntentReflecto');

module.exports = [
    LaunchRequest,
    HelloWorldIntent,
    HelpIntent,
    CancelAndStopIntent,
    SessionEndedRequest,
    IntentReflector
];

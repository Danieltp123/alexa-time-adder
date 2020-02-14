const languageStrings = ('./localisation');
const i18n = require('i18next');

// This request interceptor will bind a translation function 't' to the handlerInput
// Additionally it will handle picking a random value if instead of a string it receives an array
const Localisation = {
    process(handlerInput) {
        const localisationClient = i18n.init({
            lng: Alexa.getLocale(handlerInput.requestEnvelope),
            resources: languageStrings,
            returnObjects: true
        });
        localisationClient.localise = function localise() {
            const args = arguments;
            const value = i18n.t(...args);
            if (Array.isArray(value)) {
                return value[Math.floor(Math.random() * value.length)];
            }
            return value;
        };
        handlerInput.t = function translate(...args) {
            return localisationClient.localise(...args);
        }
    }
};

module.exports = Localisation;
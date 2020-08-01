


  // This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const aplHelper = require('./aplHelper');

const RequestLog = {
    process(handlerInput) {
        console.log("REQUEST ENVELOPE = " + JSON.stringify(handlerInput.requestEnvelope));
        return;
    }
};
const ResponseLog = {
  process(handlerInput) {
    console.log(`RESPONSE = ${JSON.stringify(handlerInput.responseBuilder.getResponse())}`);
  }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = '<speak>Welcome to Forecasts, where ,we  plot down every possible dream which we could turn into reality<break time="1.5s"/> Hope, this section is interesting and kindles the elon musk within you.</speak>';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            // .addDirective({
            //     type: 'Alexa.Presentation.APL.RenderDocument',
            //     document: require('./one.json'),
            //     datasources: require('./two.json'),
            //     token: "VideoPlayerToken"
            //   })
            .reprompt(speakOutput)
            .getResponse();
    }
};
const SmartMirrorHandler = {
    canHandle(handlerInput) {
    return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
    Alexa.getIntentName(handlerInput.requestEnvelope) === 'SmartMirrorIntent') ||
    (Alexa.getRequestType(handlerInput.requestEnvelope) === 'Alexa.Presentation.APL.UserEvent' &&
    handlerInput.requestEnvelope.request.source.id === '1')
    },
    handle(handlerInput) {
        const speakOutput = '';
        if(aplHelper.supportsAPL(handlerInput)) {
            return handlerInput.responseBuilder
              .speak(speakOutput)
              .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: require('./SmartMirror.json'),
                token: "VideoPlayerToken"
              })
              .getResponse();
          }
          else {
            return handlerInput.responseBuilder
              .speak("Sorry, this device doesn't show video.")
              .getResponse();
          }
    }
};
const SingleCueHandler = {
    canHandle(handlerInput) {
    return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
    Alexa.getIntentName(handlerInput.requestEnvelope) === 'SingleCueIntent') ||
    (Alexa.getRequestType(handlerInput.requestEnvelope) === 'Alexa.Presentation.APL.UserEvent' &&
    handlerInput.requestEnvelope.request.source.id === '2')
    },
    handle(handlerInput) {
        const speakOutput = '';
        if(aplHelper.supportsAPL(handlerInput)) {
            return handlerInput.responseBuilder
              .speak(speakOutput)
              .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: require('./SingleCue.json'),
                token: "VideoPlayerToken"
              })
              .getResponse();
          }
          else {
            return handlerInput.responseBuilder
              .speak("Sorry, this device doesn't show video.")
              .getResponse();
          }
    }
};
const JarvisHandler = {
    canHandle(handlerInput) {
    return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
    Alexa.getIntentName(handlerInput.requestEnvelope) === 'JarvisIntent') ||
    (Alexa.getRequestType(handlerInput.requestEnvelope) === 'Alexa.Presentation.APL.UserEvent' &&
    handlerInput.requestEnvelope.request.source.id === '3')
    },
    handle(handlerInput) {
        const speakOutput = '';
        if(aplHelper.supportsAPL(handlerInput)) {
            return handlerInput.responseBuilder
              .speak(speakOutput)
              .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: require('./Jarvis.json'),
                token: "VideoPlayerToken"
              })
              .getResponse();
          }
          else {
            return handlerInput.responseBuilder
              .speak("Sorry, this device doesn't show video.")
              .getResponse();
          }
    }
};
const HologramHandler = {
    canHandle(handlerInput) {
    return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
    Alexa.getIntentName(handlerInput.requestEnvelope) === 'HologramIntent') ||
    (Alexa.getRequestType(handlerInput.requestEnvelope) === 'Alexa.Presentation.APL.UserEvent' &&
    handlerInput.requestEnvelope.request.source.id === '4')
    },
    handle(handlerInput) {
        const speakOutput = '';
        if(aplHelper.supportsAPL(handlerInput)) {
            return handlerInput.responseBuilder
              .speak(speakOutput)
              .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: require('./Hologram.json'),
                token: "VideoPlayerToken"
              })
              .getResponse();
          }
          else {
            return handlerInput.responseBuilder
              .speak("Sorry, this device doesn't show video.")
              .getResponse();
          }
    }
};
const HologramComputersHandler = {
    canHandle(handlerInput) {
    return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
    Alexa.getIntentName(handlerInput.requestEnvelope) === 'HologramComputersIntent') ||
    (Alexa.getRequestType(handlerInput.requestEnvelope) === 'Alexa.Presentation.APL.UserEvent' &&
    handlerInput.requestEnvelope.request.source.id === '5')
    },
    handle(handlerInput) {
        const speakOutput = '';
        if(aplHelper.supportsAPL(handlerInput)) {
            return handlerInput.responseBuilder
              .speak(speakOutput)
              .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: require('./HologramComputers.json'),
                token: "VideoPlayerToken"
              })
              .getResponse();
          }
          else {
            return handlerInput.responseBuilder
              .speak("Sorry, this device doesn't show video.")
              .getResponse();
          }
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = '';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: require('./one.json'),
                datasources: require('./two.json'),
                token: "VideoPlayerToken"
              })
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SmartMirrorHandler,
        SingleCueHandler,
        JarvisHandler,
        HologramHandler,
        HologramComputersHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .addRequestInterceptors(RequestLog)
    .addResponseInterceptors(ResponseLog)
    .lambda();

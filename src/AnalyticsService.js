import * as Adjust from '@adjustcom/adjust-web-sdk';
import TagManager from 'react-gtm-module';
import { v4 as uuidv4 } from 'uuid';

import warn from './utils/warn';

/**
 * adjust:
 * Adjust init set method
 * @param {String} enviornment - enviornment can be either `sandbox` or `production`
 * @param {String} adjustToken - App Token recieved from Adjust.com
 */
export function adjust(enviornment, adjustToken) {
  const adjustinit = Adjust.initSdk({
    appToken: adjustToken,
    environment: enviornment === 'production' ? enviornment : 'sandbox',
    logLevel: enviornment === 'production' ? 'none' : 'verbose'
  });
  return adjustinit;
}

/**
 * adjustEvent:
 * Adjust event function
 * @param {String} EventToken - Event Token recieved from Adjust.com
 * @param {Object} params - params to pass for adjust events
 */
export function adjustEvent(EventToken, eventName, eventAttributes) {
  const timeStamp = new Date().toJSON().split('.').slice(0, -1).toString();
  const uuid = uuidv4();
  const event = Adjust.trackEvent({
    eventToken: EventToken,
    partnerParams: [
      {
        key: 'name',
        value: eventName
      },
      {
        key: 'attributes',
        value: eventAttributes
      },
      {
        key: 'date',
        value: timeStamp
      },

      {
        key: 'uuid',
        value: uuid
      }
    ]
  });
  return event;
}

/**
 * tagManager:
 * Tag Manager event
 * @param {Object} tagManagerArgs - Google Tag manager Arguments
 */
export function tagManager(tagManagerArgs) {
  return TagManager.initialize(tagManagerArgs);
}

/**
 * tagManager:
 * Tag Manager event
 * @param {Object} tagManagerArgs - Google Tag manager Arguments
 */
export function init({ enviornment = 'sandbox', adjustToken, tagManagerArgs }) {
  if (enviornment === 'sandbox') {
    warn('Using sandbox Enviornment !!');
  }
  if (adjustToken) adjust(enviornment, adjustToken);
  if (tagManagerArgs) tagManager(tagManagerArgs);
}

export default {
  init,
  tagManager,
  adjustEvent,
  adjust
};

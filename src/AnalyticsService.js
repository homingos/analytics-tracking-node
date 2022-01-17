import * as Adjust from '@adjustcom/adjust-web-sdk';
import TagManager from 'react-gtm-module';
import { v4 as uuidv4 } from 'uuid';
import warn from './utils/warn';

export function adjust(enviornment, adjustToken) {
  const adjustinit = Adjust.initSdk({
    appToken: adjustToken,
    environment: enviornment === 'production' ? enviornment : 'sandbox',
    logLevel: enviornment === 'production' ? 'none' : 'verbose'
  });
  return adjustinit;
}

export function adjustEvent(EventToken, params) {
  const timeStamp = new Date().toJSON().split('.').slice(0, -1).toString();
  const uuid = uuidv4();
  const event = Adjust.trackEvent({
    eventToken: EventToken,
    partnerParams: [
      params,
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

export function tagManager(tagManagerArgs) {
  return TagManager.initialize(tagManagerArgs);
}

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

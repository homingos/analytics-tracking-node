import * as Adjust from "@adjustcom/adjust-web-sdk";
import TagManager from "react-gtm-module";
import { v4 as uuidv4 } from "uuid";

import warn from "./utils/warn";

const AnalyticsService = {
	adjust: function (enviornment, adjustToken) {
		const adjust = Adjust.initSdk({
			appToken: adjustToken,
			environment: enviornment === "production" ? enviornment : "sandbox",
			logLevel: enviornment === "production" ? "none" : "verbose",
		});
		return adjust;
	},
	adjustEvent: function (EventToken, params) {
		const timeStamp = new Date().toJSON().split(".").slice(0, -1).toString();
		const uuid = uuidv4();
		const event = Adjust.trackEvent({
			eventToken: EventToken,
			partnerParams: [
				params,
				{
					key: "date",
					value: timeStamp,
				},

				{
					key: "uuid",
					value: uuid,
				},
			],
		});
		return event;
	},
	tagManager: function (tagManagerArgs) {
		return TagManager.initialize(tagManagerArgs);
	},
	init: function ({ enviornment = "sandbox", adjustToken, tagManagerArgs }) {
		if (enviornment === "sandbox") {
			warn("Using sandbox Enviornment !!");
		}
		if (adjustToken) this.adjust(enviornment, adjustToken);
		if (tagManagerArgs) this.tagManager(tagManagerArgs);
	},
};

module.exports = AnalyticsService;

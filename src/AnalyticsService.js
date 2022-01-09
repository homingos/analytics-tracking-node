import * as Adjust from "@adjustcom/adjust-web-sdk";

const AnalyticsService = {
	adjust: function (args) {
		const adjust = Adjust.initSdk(args);
		return {
			adjust,
		};
	},
	initialize: function ({ adjustConfig }) {
		this.adjust(adjustConfig);
	},
};

module.exports = AnalyticsService;

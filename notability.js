let obj = JSON.parse($response.body);
obj = {
	"data": {
		"processAppleReceipt": {
			"__typename": "SubscriptionResult",
			"isClassic": false,
			"subscription": {
				"productId": "com.gingerlabs.Notability.premium_subscription",
				"originalTransactionId": "90002027553673",
				"tier": "premium",
				"refundedDate": null,
				"refundedReason": null,
				"isInBillingRetryPeriod": false,
				"expirationDate": "2999-12-31T24:00:00.000Z",
				"gracePeriodExpiresAt": null,
				"overDeviceLimit": false,
				"expirationIntent": "CUSTOMER_RENEWAL",
				"__typename": "AppStoreSubscription",
				"user": {
					"id": "0b9c2a38-9d7c-4659-9812-623af642d392",
					"email": "",
					"__typename": "User"
				},
				"status": "active",
				"originalPurchaseDate": "2024-06-16T18:30:45.000Z"
			},
			"error": 0
		}
	}
};
$done({
	body: JSON.stringify(obj)
});

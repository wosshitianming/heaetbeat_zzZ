/*************************************

项目名称：Notability:笔记,PDF
下载地址：https://t.cn/A6Cgjtei
更新日期：2025-02-24
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************
/*
[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/wosshitianming/heaetbeat_zzZ/refs/heads/main/notability.js

[mitm]
hostname = notability.com
*/

const response = {
  "data": {
    "processAppleReceipt": {
      "__typename": "SubscriptionResult",
      "error": 0,
      "subscription": {
        "__typename": "AppStoreSubscription",
        "status": "active",
        "originalPurchaseDate": "2024-09-19T09:27:35.000Z",
        "originalTransactionId": "570001185968888",
        "expirationDate": "99999-12-31T23:59:59.000Z",
        "productId": "com.gingerlabs.Notability.premium_subscription",
        "tier": "premium",
        "refundedDate": null,
        "refundedReason": null,
        "isInBillingRetryPeriod": false,
        "gracePeriodExpiresAt": null,
        "expirationIntent": "CUSTOMER_RENEWAL",
        "overDeviceLimit": false,
       "user": {
					"id": "0b9c2a38-9d7c-4659-9812-623af642d392",
					"email": "",
					"__typename": "User"
				},
      },
      "isClassic": true
    }
  }
};

$done({ body: JSON.stringify(response) });

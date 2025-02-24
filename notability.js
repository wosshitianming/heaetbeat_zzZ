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
        "originalPurchaseDate": "2024-06-16T18:30:45.000Z",
        "originalTransactionId": "90002027553673",
        "expirationDate": "2099-12-31T24:00:00.000Z",
        "productId": "com.gingerlabs.Notability.premium_subscription",
        "tier": "premium",
        "refundedDate": null,
        "refundedReason": null,
        "isInBillingRetryPeriod": false,
        "gracePeriodExpiresAt": null,
        "expirationIntent": "CUSTOMER_RENEWAL",
        "overDeviceLimit": false,
        "user": null
      },
      "isClassic": true
    }
  }
};

$done({ body: JSON.stringify(response) });

/*************************************

项目名称：Notability:笔记,PDF (自定义响应)
更新日期：2025-02-24
使用声明：仅供参考，请勿用于商业用途。

**************************************
[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/wosshitianming/heaetbeat_zzZ/refs/heads/main/notability.js

[mitm]
hostname = notability.com
*/

// 定义新的响应体对象
const newResponse = {
  "data": {
    "associateAppStoreTransactions": {
      "__typename": "SubscriptionOverview",
      "tier": "premium",
      "current": {
        "source": "AppStoreConsumer",
        "expirationDate": 4102444799000,
        "details": {
          "originalTransactionId": "310001764266227",
          "__typename": "AppStoreSubscription",
          "overDeviceLimit": false,
          "productId": "com.gingerlabs.Notability.premium_subscription_variant",
          "appStoreStatus": "active"
        },
        "renewalDate": 4102444799000,
        "tier": "premium",
        "gracePeriodEndDate": null,
        "__typename": "Subscription"
      },
      "quotas": {
        "__typename": "SubscriptionFeatureQuotaView",
        "learnSummaries": {
          "isUsageExceeded": false,
          "usagePercentage": 0,
          "__typename": "SubscriptionFeatureQuota"
        },
        "learnQuestions": {
          "isUsageExceeded": false,
          "usagePercentage": 0,
          "__typename": "SubscriptionFeatureQuota"
        },
        "liveTranscription": {
          "isUsageExceeded": false,
          "usagePercentage": 0,
          "__typename": "SubscriptionFeatureQuota"
        }
      },
      "prior": null
    }
  }
};

// 返回修改后的 Body
$done({ body: JSON.stringify(newResponse) });

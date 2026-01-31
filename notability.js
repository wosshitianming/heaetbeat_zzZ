/*************************************
项目名称：Notability:笔记,PDF (安全合并版)
更新日期：2025-02-24
使用声明：仅供参考，请勿用于商业用途。
**************************************
[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/wosshitianming/heaetbeat_zzZ/refs/heads/main/notability.js

[mitm]
hostname = notability.com
*/

// 解析原始响应体，如果解析失败则创建一个空对象
let obj = {};
try {
  obj = JSON.parse($response.body);
} catch (e) {
  console.log("Notability JSON Parse Error");
}

// 确保 data 对象存在
if (!obj.data) {
  obj.data = {};
}

// 定义你要注入的 Premium 数据
const premiumData = {
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
};

// 【核心修改】将 Premium 数据注入到 associateAppStoreTransactions 字段
// 这样不会覆盖 data 下面的其他字段（如 user 信息）
obj.data.associateAppStoreTransactions = premiumData;

// 为了保险，如果旧版字段存在，也一并修改（向下兼容）
if (obj.data.processAppleReceipt) {
    obj.data.processAppleReceipt.subscription.tier = "premium";
    obj.data.processAppleReceipt.subscription.productId = "com.gingerlabs.Notability.premium_subscription";
    obj.data.processAppleReceipt.subscription.expirationDate = "9999-12-31T23:59:59.000Z";
}

$done({ body: JSON.stringify(obj) });

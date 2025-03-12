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
hostname = app-api.yangjibao.com
*/

const response = {
  "code" : 200,
  "message" : "SUCCESS",
  "timestamp" : 1741764577,
  "data" : {
    "has_fund_hold" : true,
    "nickname" : "ㅤ",
    "has_fund_option" : true,
    "open_free_vip_sign" : false,
    "is_pay" : true,
    "medal" : [

    ],
    "is_app_user" : true,
    "id" : 4105940849,
    "gender" : 0,
    "token" : "9d50c23e-c6b0-477b-9755-554ac218f8cc",
    "roles" : [

    ],
    "phone" : "19914723469",
    "subscribe_status" : 0,
    "vip_expiry_date" : 9999-12-30",
    "avatar" : "http://imgcdn.yangjibao.com/avatar/316a4/fDY9nIXBFzNc4FEupaid1pf7dg.jpg",
    "vip_label" : false,
    "created_at" : "2024-04-14 07:23:00",
    "has_stock_hold" : false,
    "has_stock_option" : false,
    "show_bkxh" : false,
    "is_visitor" : false
  }
}

$done({ body: JSON.stringify(response) });

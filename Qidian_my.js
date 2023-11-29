/*
[rewrite_local]
# 我的界面
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v3\/user\/getaccountpage url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Qidian_my.js
# 我的界面内测推广
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/adv\/getadvlistbatch url reject
#书架置顶推广(保留签到移除花哨背景)
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/bookshelf\/getTopOperation url reject-dict
#发现上面的图标屏蔽
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v2\/adv\/getadvlistbatch url reject-dict
[mitm] 
hostname = magev6.if.qidian.com
*/
var Q = JSON.parse($response.body);
Q.Data.BenefitButtonList = [];//福利中心
Q.Data.FunctionButtonList = [];//我发布的
Q.Data.BottomButtonList = [];//帮助与客服
$done({body : JSON.stringify(Q)});

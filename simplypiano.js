/*

simply piano 


[rewrite_local]
#simply piano
^https:\/\/alicdn\.joytunescn\.com\/server\/asla\/accounts\/accountAuthenticate url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/simplypiano.js
[mitm]
hostname = alicdn.joytunescn.com

//小火箭本地模块 
#[Script]
# Simply Piano
#simply piano = type=http-response,pattern=^https:\/\/alicdn\.joytunescn\.com\/server\/asla\/accounts\/accountAuthenticate,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/simplypiano.js,script-update-interval=0
#[MITM]
#hostname = %APPEND% alicdn.joytunescn.com

*/
var body = $response.body;
body = body.replace(/membershipInfo":{.*?}/g, 'membershipInfo":{
    "membershipDescription" : "高级会员",
    "familyIapID" : "com.joytunes.asla.oneyearpremiummembership_trial_180_mpma_fp_5profiles_bundle_family",
    "membershipTier" : "premium_home",
    "profilesAccess" : "FAMILY",
    "planDuration" : "oneyear",
    "membershipType" : "JOYTUNESBUNDLE",
    "daysRemaining" : 366,
    "autoRenewable" : 1,
    "dateStarted" : "2023-10-14",
    "isTrialPeriod" : 0,
    "currentIapID" : "com.joytunes.asla.oneyearpremiummembership_trial_180_mpma_fp_5profiles_bundle",
    "upgradeIapID" : null,
    "daysPassed" : 70,
    "dateExpire" : "2024-12-23",
    "isAutoRenew" : false
  }');
  body = body.replace(/isPremium":w+/g, 'isPremium":true');
  body = body.replace(/isFamily":w+/g, 'isFamily":true');
$done({body});

/*
遥忘

[rewrite_local]
^https:\/\/(mars-prod\.|ins-web\.whalean\.com\/(poseidon-service\/api\/user\/homeData|member\/userMemberHomePageV2|taskcenter\/getGrowthInfo|user\/getpersonalcenterlikecount)) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/yw.js

[mitm]
hostname = mars-prod.whalean.com, ins-web.whalean.com

*/

var body = $response.body;
var url = $request.url;

if (url.includes("https://mars-prod.whalean.com/poseidon-service/api/user/homeData")) {
    body = body.replace(/"userId":\d+/, '"userId":9512');
    body = body.replace(/"likeCount":\d+/, '"likeCount":999999888');
    body = body.replace(/"peopleViewNum":\d/, '"peopleViewNum":988888888');
    body = body.replace(/"fansCount":\d/, '"fansCount":99999999');
    body = body.replace(/"hasVip":0/, '"hasVip":1');
    body = body.replace(/"level":0/, '"level":1');
    body = body.replace(/"userType":null/, '"userType":3');
    body = body.replace(/"photographerFlag":false/, '"photographerFlag":true');
} else if (url.includes("https://ins-web.whalean.com/member/userMemberHomePageV2")) {
    body = body.replace(/"memberDisInfoDescription":.*?"/, '"memberDisInfoDescription":"永久会员"');
    body = body.replace(/"memberExpirationTime":null/, '"memberExpirationTime":9997004143863');
    body = body.replace(/"permanent":false/, '"permanent":true');
    body = body.replace(/"memberLevel":null/, '"memberLevel":1');
} else if (url.includes("https://ins-web.whalean.com/taskcenter/getGrowthInfo")) {
    body = body.replace(/"growthLevelName":"\w+"/, '"growthLevelName":"baby"');
    body = body.replace(/"aggDay":\d/, '"aggDay":6');
    body = body.replace(/"growthLevel":1/, '"growthLevel":6');
} else if (url.includes("https://ins-web.whalean.com/user/getpersonalcenterlikecount")) {
    body = body.replace(/"batchcount":\d/, '"batchcount":9999999999');
    body = body.replace(/"huozancount":\d/, '"huozancount":9999999999999');
    body = body.replace(/"likecount":\d/, '"likecount":999999999999');
}

$done({ body });

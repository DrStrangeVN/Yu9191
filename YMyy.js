/*
游美英语
2023.12.28 
[rewrite_local]
#用户信息
^https:\/\/www\.usacamp\.cn\/Api1_2\/loginWithUserID url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/YMyy.js
#个人中心推广
https://www.usacamp.cn/Api1_2/getGuideBanner url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/YMyy.js

[mitm]
hostname = www.usacamp.cn
*/
const url = $request.url;

const yhxx = '/Api1_2/loginWithUserID';
const grzx = '/Api1_2/getGuideBanner';

let body = $response.body;

if (url.indexOf(yhxx) != -1) {
    let body = $response.body;
    body = body.replace(/"end_time":"[^"]*"/g, '"end_time":"2099-09-29"');
    //开始时间
    body = body.replace(/"begin_time":"[^"]*"/g, '"begin_time":"2023-12-28"');
    //是否体验
    body = body.replace(/"bExperience":"[^"]*"/g, '"bExperience":"0"');
    //体验天数
    body = body.replace(/"experiencedays":"[^"]*"/g, '"experiencedays":"999999"');
    //选择等级12
    body = body.replace(/"selected_level":"[^"]*"/g, '"selected_level":"12"');
    //可用天数
    body = body.replace(/"availdays":"[^"]*"/g, '"availdays":"999999"');
    //体验日期
    body = body.replace(/"experience_date":"[^"]*"/g, '"experience_date":"2099-09-29"');

} else if (url.indexOf(grzx) != -1) {
    body = body.replace(/"title":"[^"]*"/g, '"title":"免费脚本请勿购买"');

}
$done({ body });

//by ios151

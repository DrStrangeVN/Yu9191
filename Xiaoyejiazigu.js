/*
架子鼓 3.2.0
time：2023-12-25

[Rewrite_local]
#正则合并
^https:\/\/oneplay-api\.xiaoyezi\.com\/drum\/(score|account) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Xiaoyejiazigu.js

[MITM]
hostname = oneplay-api.xiaoyezi.com
*/
var body = $response.body;
var url = $request.url;

if (url.indexOf("/drum/score/") != -1){
    body = body.replace(/\"package_status\":0/g, "\"package_status\":1"); 
    body = body.replace(/"unlock_status":0/g, "\"unlock_status\":1");//是否解锁
    body = body.replace(/"account_status":\s*0,/g, "\"account_status\": 1,");//是否拥有
    body = body.replace(/"product_type":\s*"1"/g, "\"product_type\": \"0\"");


} else if (url.indexOf("/drum/account") != -1){
    let obj = JSON.parse(body);
    obj.data.subscribe = {
        "status": 1,
        "start_time": "19999999999",
        "end_time": "19999999999",
        "auto_renew": "1"
      };

    body = JSON.stringify(obj);
}

$done({body});
//by yu

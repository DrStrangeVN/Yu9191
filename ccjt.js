/**
虫虫吉他 2.3.0

[rewrite_local]

http://cc.lzjoy.com url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/ccjt.js

*/

if ($request.url.includes("http://cc.lzjoy.com/?urlparam=common/user/GetVip")) {
    let obj = JSON.parse($response.body);
    obj.list.is_buy = "1";
    obj.list.is_vip = "1";
    $done({ body: JSON.stringify(obj) });
} else {
    $done({ body: $response.body });
}

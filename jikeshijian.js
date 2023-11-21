/*

#小程序://极客时间/GXdRaLCdInCX2Lg
解锁全课程播放权限

[rewrite_local]


https://time.geekbang.org/serv/v1/column/articles url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/jikeshijian.js

[mitm] 

hostname = time.geekbang.org


*/

var body = $response.body;


body = body.replace(/"article_could_preview":\w+/g, '"article_could_preview":true');

body = body.replace(/article_could_preview":".*?"/g,'article_could_preview":true');


$done({ body });

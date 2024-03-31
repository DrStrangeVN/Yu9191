/*
扁鹊

[rewrite_local]

https://wxapi.zhongyuedu.com/zy/video_list.php url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Bianquezy.js

https://wxapi.zhongyuedu.com/zy/begin.php url reject 
[mitm]
hostname = wxapi.zhongyuedu.com
*/

var body = $response.body;

body = body.replace(/("price"\s*:\s*)""/g, '$10');

$done({ body: body });

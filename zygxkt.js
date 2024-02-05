
/*
状元共享课堂
[rewrite_local]
https://xzykt.longmenshuju.com/version url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/zygxkt.js

[mitm]
hostname = xzykt.longmenshuju.com
*/


var body = $response.body;

// 试看
body = body.replace(/"isTryResources":\s*(false|null)/g, '"isTryResources":true');

$done({ body });
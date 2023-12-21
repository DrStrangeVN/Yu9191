/*
memory helper 4.15.1

2023.12.21

[rewrite_local]
https:\/\/memoryhelper\.fujianjin6471\.com\/api\/v.*\/expiration_date url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/memoryhelper.js

[mitm]
hostname = memoryhelper.fujianjin6471.com

*/

let obj = JSON.parse($response.body);
obj.expiration_date = 98866543210234; 
obj.decrease_subscription_from_server = true;
$done({ body: JSON.stringify(obj) });

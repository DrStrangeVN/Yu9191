

[rewrite_local]

#解锁会员开关
^https://lp-api.xiongmaoboshi.com/lp-api/ns url script-response-body https://https://raw.githubusercontent.com/Yu9191/Rewrite/main/xiongmaoboshibaike.js
#获取完整视频
^https:\/\/lp-vid\.xiongmaoboshi\.com\/.*\.m3u8$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/m3u8/xiongmaoboshibaike.js

[mitm] 

hostname = lp-vid.xiongmaoboshi.com, lp-api.xiongmaoboshi.com
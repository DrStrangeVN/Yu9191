/*

话本小说


[rewrite_local]
https://user.ihuaben.com/api/userinfo url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/huabenxiaoshuo.js


[mitm] 
hostname = user.ihuaben.com
*/

let obj = JSON.parse($response.body);
    
  
    obj.nickName = "我是叼毛安妮";  

    obj.memberEndTime = "2099-09-09 00:29:59";  
  
    obj.testGroup = "D";
  
    obj.isMember = true;

  
    $done({
        body: JSON.stringify(obj)
    });

if ($request.url.indexOf("api/userinfo") !== -1) {
    if (!$persistentStore.read("notified")) {
        $notification.post("话本小说", "禁止贩卖", "帅哥你好,我是叼毛安妮");
        $persistentStore.write("notified", true);
    }
}

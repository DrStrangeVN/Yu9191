/*
BodyOk 4.1.9 
间歇性断食追踪

[rewrite_local]
^https:\/\/api\.apphud\.com\/v1\/(subscriptions|customers)$ url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/BodyOk.js

[mitm]
hostname = api.apphud.com

*/
var body = $response.body;
var url = $request.url;

function baby(obj) {
    return {
        "unit": "year",
        "autorenew_enabled": false,
        "expires_at": "2023-12-25T11:05:44.000Z",
        "in_retry_billing": false,
        "introductory_activated": true,
        "cancelled_at": null,
        "platform": "ios",
        "product_id": "ok.annual.sub",
        "retries_count": 0,
        "started_at": "2023-12-18T11:05:45.000Z",
        "local": false,
        "next_check_at": "2023-12-25T11:12:44.000Z",
        "kind": "autorenewable",
        "units_count": 1,
        "environment": "production",
        "status": "trial"
    };
}

var obj = JSON.parse(body);

if (url.includes('/subscriptions') || url.includes('/customers')) {
    obj.data.subscriptions = [baby(obj)];
    body = JSON.stringify(obj);
}

$done({ body, url });

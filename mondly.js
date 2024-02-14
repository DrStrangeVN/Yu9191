/*
mondly

[rewrite_local]


^https:\/\/api\.mondlylanguages\.com\/v3\/ios\/user\/sync url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/mondly.js

[mitm] 

hostname = api.mondlylanguages.com
*/
 

var objc = JSON.parse($response.body);

objc = {
  "profiles": [
    {
      "score": 39,
      "streak_record": 100,
      "target_language_id": 19,
      "streak_date": "2024-02-03",
      "level": 100,
      "streak_days": [
        {
          "date": "2024-02-03",
          "score": 13
        }
      ],
      "difficulty": 1,
      "time_spent": []
    }
  ],
  "parsed_transactions": [],
  "purchased_products": [
    {
      "is_from_current_platform": true,
      "id": "12month_all_4_trial",
      "role": "12month",
      "is_grace_period": false,
      "is_auto_renewing": true,
      "expiration_date": 4000665666,
      "is_billing_retry_period": false,
      "is_initial_purchase": false,
      "is_in_free_trial_period": true,
      "is_upgraded": true
    },
    {
      "is_from_current_platform": true,
      "id": "categ22",
      "role": "categ22",
      "is_grace_period": false,
      "is_auto_renewing": true,
      "expiration_date": 4000665666,
      "is_billing_retry_period": false,
      "is_initial_purchase": false,
      "is_in_free_trial_period": true,
      "is_upgraded": true
    }
  ],
  "storage_base_url": "s3-eu-west-1.amazonaws.com",
  "projects": [],
  "user": {
    "contact_email": "you@lol.com",
    "state": 1,
    "huawei": null,
    "native": null,
    "ilmoe": null,
    "pearson": null,
    "picture": false,
    "user_id": "84047966",
    "muid": "84047966$V3ADFtj0xe",
    "google": null,
    "apple": "000285.0991ccc961e34ed6b61d9b869d7686a1.0807",
    "auth_key": "60d7981cb0a20da19ec2dcc9fa0da7d60d8afff920b0d1ae55d8d459a14314faa:2:{i:0;s:8:\"auth_key\";i:1;s:54:\"[84047966,\"ln0at3ZIuVlFlGeGUxEVUScE61_F_jqS\",31536000]\";}",
    "facebook": null,
    "country": "US",
    "name": "You24",
    "email": null
  }
};

$done({ body: JSON.stringify(objc) });
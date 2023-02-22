<div></div>

## Get Disbursement by ID

Use this endpoint to get one specific transaction specified by transaction's ID in the request URL.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v3/get-disbursement</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v3/get-disbursement</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-disbursement-by-id-request-headers">Request Headers</h3>

```http
GET /get-disbursement HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: Basic [your encoded flip for business secret key]
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>Content-Type</b> <em>required</em></p>
        Request content type: <code>application/x-www-form-urlencoded</code>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-disbursement-by-id-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v3/get-disbursement?id=10");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/x-www-form-urlencoded"
));

curl_setopt($ch, CURLOPT_USERPWD, $secret_key.":");

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```shell
curl https://bigflip.id/api/v3/get-disbursement?id=10 \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>id</b> <em>required</em></p>
          The transaction ID to be searched.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-disbursement-by-id-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "id": 10,
  "user_id": 20,
  "amount": 10000,
  "status": "PENDING",
  "reason": "",
  "timestamp": "2017-08-28 14:32:47",
  "bank_code": "bni",
  "account_number": "1122333300",
  "recipient_name": "John Doe",
  "sender_bank": "bri",
  "remark": "some remark",
  "receipt": "",
  "time_served": "0000-00-00 00:00:00",
  "bundle_id": 0,
  "company_id": 7,
  "recipient_city": 391,
  "created_from": "API",
  "direction": "DOMESTIC_TRANSFER",
  "sender": null,
  "fee": 1500,
  "beneficiary_email": "test@mail.com,user@mail.com",
  "idempotency_key": "idem-key-1"
}
```

This endpoint will return the [Disbursement Object](#the-disbursement-objects) as a response.

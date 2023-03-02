<div></div>

## Get Agent Disbursement by ID

An endpoint for obtaining the Agent's disbursement data by it's ID.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/agent-disbursements/:transaction-id</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/agent-disbursements/:transaction-id</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-agent-disbursement-by-id-request-headers">Request Headers</h3>

```http
GET /agent-disbursements/:transaction-id HTTP/1.1
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

<h3 id="get-agent-disbursement-by-id-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/agent-disbursement/1");
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
curl https://bigflip.id/api/v2/agent-disbursement/1 \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>transaction-id</b> <em>required</em></p>
        The transaction ID to be searched.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-agent-disbursement-by-id-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "id": 1,
  "user_id": 1,
  "amount": 10000,
  "status": "DONE",
  "timestamp": "2022-01-02 13:00:00",
  "bank_code": "bni",
  "account_number": "1122333301",
  "recipient_name": "John Smith",
  "sender_bank": "bri",
  "remark": "some remark",
  "receipt": "someurl.jpg",
  "time_served": "2022-01-02 13:01:00",
  "bundle_id": 0,
  "company_id": 1,
  "recipient_city": 391,
  "created_from": "API",
  "direction": "DOMESTIC_SPECIAL_TRANSFER",
  "sender": {
    "sender_name": "John Doe",
    "place_of_birth": null,
    "date_of_birth": "31-10-1990",
    "address": "Jalan Margonda Raya",
    "sender_identity_type": "nat_id",
    "sender_identity_number": "1234567890123456",
    "sender_country": 1,
    "job": "entrepreneur"
  },
  "fee": 1000,
  "beneficiary_email": "example@mail.com",
  "idempotency_key": "idem-key-1"
}
```

This endpoint will return the [Disbursement Object](#money-transfer-objects) as a response. The sender attribute in the response will be filled with the Agent data.

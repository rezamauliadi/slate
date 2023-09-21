<div></div>

## Get Bill

An endpoint to get a specific payment link.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/pwf/:bill-id/bill</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/pwf/:bill-id/bill</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-bill-request-headers">Request Headers</h3>

```http
POST /pwf/:bill-id/bill HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: Basic <secret_key>: (notes with ":" after secret key)
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

<h3 id="get-bill-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/pwf/1/bill");
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
curl https://bigflip.id/api/v2/pwf/1/bill \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>bill-id</b> <em>required</em></p>
          The bill ID to be searched.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-bill-response-body">Response Body</h3>

> **Step 1**

```json
Status 200
Content-Type: application/json

{
  "link_id": 1,
  "link_url": "flip.id/$companyname/#coffeetable",
  "title": "Coffee Table",
  "type": "SINGLE",
  "amount": 900000,
  "redirect_url": "https://someurl.com",
  "expired_date": "2022-12-30 15:50:00",
  "created_from": "API",
  "status": "ACTIVE",
  "step": 1,
  "is_address_required": 0,
  "is_phone_number_required": 0
}
```

> **Step 2**

```json
Status 200
Content-Type: application/json

{
  "link_id": 1,
  "link_url": "flip.id/$companyname/#coffeetable",
  "title": "Coffee Table",
  "type": "SINGLE",
  "amount": 900000,
  "redirect_url": "https://someurl.com",
  "expired_date": "2022-12-30 15:50:00",
  "created_from": "API",
  "status": "ACTIVE",
  "is_address_required": 0,
  "is_phone_number_required": 0,
  "step": 2,
  "customer": {
    "name": "Customer a",
    "email": "customer@gmail.com",
    "address": "Jl. Imam Bonjol No.39, Jakarta.",
    "phone": "+62888888888",
  }
}
```

> **Step 3**

```json
Status 200
Content-Type: application/json

{
  "link_id": 1,
  "link_url": "flip.id/$companyname/#coffeetable",
  "title": "Coffee Table",
  "type": "SINGLE",
  "amount": 900000,
  "redirect_url": "https://someurl.com",
  "expired_date": "2022-12-30 15:50:00",
  "created_from": "API",
  "status": "ACTIVE",
  "is_address_required": 0,
  "is_phone_number_required": 0,
  "step": 3,
  "customer": {
    "name": "Customer a",
    "email": "customer@gmail.com",
    "address": "Jl. Imam Bonjol No.39, Jakarta.",
    "phone": "+62888888888",
  },
  "payment_method": {
    "sender_bank": "bni",
    "sender_bank_type": "virtual_account",
  }
}
```

See [Bill Object](#bill-object) for the details.

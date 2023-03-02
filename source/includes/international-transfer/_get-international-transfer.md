<div></div>

## Get International Transfer

An endpoint to get a specific international transfer transaction.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/international-disbursement/:transaction-id</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/international-disbursement/:transaction-id</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-international-transfer-request-headers">Request Headers</h3>

```http
GET /international-disbursement/:transaction-id HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: basic [your encoded flip for business secret key]
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

<h3 id="get-international-transfer-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/agent-disbursement/10");
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
curl https://bigflip.id/api/v2/agent-disbursement/10 \
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

<h3 id="get-international-transfer-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "id": 10,
  "user_id": 12345,
  "company_id": 123456,
  "exchange_rate": 19000.55,
  "fee": 88888,
  "amount": 1000000,
  "source_country": "IDN",
  "destination_country": "GBR",
  "beneficiary_amount": 52.63,
  "beneficiary_currency_code": "GBP",
  "status": "PENDING",
  "timestamp": "2021-12-02 15:27:24",
  "time_served": "(not set)",
  "created_from": "API",
  "receipt": "someurl.png",
  "transaction_type": "C2C",
  "idempotency_key": "idem-1",
  "beneficiary": {
    "id_number": "44943733088",
    "id_expiration_date": "2022-11-29",
    "full_name": "John Smith",
    "bank_account_number": "1122333300",
    "bank": "Allica Bank",
    "email": "emial@email.com",
    "msisdn": "09584008222",
    "nationality": "IDN",
    "country": "GBR",
    "province": "United Kingdom",
    "city": "Manchester",
    "address": "Mosley St Manchester",
    "postal_code": "M2",
    "relationship": "SON",
    "source_of_funds": "BUSINESS",
    "remittance_purpose": "EDUCATION",
    "iban": null,
    "swift_bic_code": null,
    "sort_code": "506967",
    "ifs_code": null,
    "bsb_number": null,
    "branch_number": null,
    "document_reference_number": null,
    "registration_number": null
  },
  "sender": {
    "name": "John Doe",
    "place_of_birth": 100230,
    "date_of_birth": "1963-12-01",
    "address": "Some Address Street 123",
    "identity_type": "nat_id",
    "identity_number": "1234789012347890",
    "country": 100252,
    "job": "entrepreneur",
    "email": "sender@mail.com",
    "city": "Sender City",
    "phone_number": "+628123456789"
  },
  "reason": ""
}
```

This endpoint will return the [International Transfer Object](#international-transfer-objects) as a response.

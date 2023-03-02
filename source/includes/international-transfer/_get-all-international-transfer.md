<div></div>

## Get All International Transfer

An endpoint to get all existing international transfer transactions.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/international-disbursement</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/international-disbursement</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-all-international-transfer-request-headers">Request Headers</h3>

```http
GET /international-disbursement HTTP/1.1
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

<h3 id="get-all-international-transfer-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/international-disbursement");
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
curl https://bigflip.id/api/v2/international-disbursement \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>pagination</b> <em>optional</em></p>
        The pagination of the result. Default value is <code>20</code>.
        <table class="validation-table">
          <thead>
            <tr>
              <th>Validation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>Numeric</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>page</b> <em>optional</em></p>
        The page number of the result to be viewed.
        <table class="validation-table">
          <thead>
            <tr>
              <th>Validation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>Numeric</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sort</b> <em>optional</em></p>
        Sort the result by the attribute.
        <ul class="">
          <li>
            Use the attribute name (e.g <code>sort=id</code>) to sort in
            <b>ascending</b> order.
          </li>
          <li>
            Use dash+attribute name (e.g <code>sort=-id</code>) to sort in
            <b>descending</b> order.
          </li>
        </ul>
        <table class="validation-table">
          <thead>
            <tr>
              <th>Validation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="validation-table__helper-text">
                  Accepted values are as follow:
                </div>
                <ul>
                  <li><code>id</code> (default)</li>
                  <li><code>amount</code></li>
                  <li><code>source_country</code></li>
                  <li><code>destination_country</code></li>
                  <li><code>status</code></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-all-international-transfer-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "total_data": 5,
  "data_per_page": 5,
  "total_page": 1,
  "page": 1,
  "data": [
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
    },
    ...
  ]
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>total_data</b> <em>integer</em></p>
        Total data returned in all pages.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>data_per_page</b> <em>integer</em></p>
        Total data returned in current page.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>total_page</b> <em>integer</em></p>
        Total/max pages available.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>page</b> <em>integer</em></p>
        Current page.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>data</b> <em>array</em></p>
        Array of <b><a href="#international-transfer-objects">International Transfer Object</a></b>.
      </td>
    </tr>
  </tbody>
</table>

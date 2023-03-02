<div></div>

## Get Agent Disbursement List

An endpoint for obtaining all Agent's disbursement data.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/agent-disbursements</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/agent-disbursements</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-agent-disbursement-list-request-headers">Request Headers</h3>

```http
GET /agent-disbursements HTTP/1.1
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

<h3 id="get-agent-disbursement-list-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/agent-disbursement?agent_id=1&pagination=10&page=1&sort=id");
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
curl https://bigflip.id/api/v2/agent-disbursement?agent_id=1&pagination=10&page=1&sort=id \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>agent_id</b> <em>optional</em></p>
        The agent ID that wants to be retrieved. If not provided, will return
        all agent disbursement for the company instead.
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
                  Accepted values are as listed below:
                </div>
                <ul>
                  <li><code>id</code></li>
                  <li><code>amount</code></li>
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

<h3 id="get-agent-disbursement-list-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "total_data": 85,
  "data_per_page": 20,
  "total_page": 5,
  "page": 1,
  "data": [
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
    },
    {
      "id": 2,
      "user_id": 1,
      "amount": 20000,
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
      "idempotency_key": "idem-key-2"
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
        Array of <b><a href="#money-transfer-objects">Disbursement Object</a></b>.
      </td>
    </tr>
  </tbody>
</table>

This endpoint will return the [Disbursement Object](#money-transfer-objects) as a response. The sender attribute in the response will be filled with the Agent data.

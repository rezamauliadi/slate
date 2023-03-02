<div></div>

<h2 id="get-all-disbursement-v3">Get All Disbursements</h2>

Use this endpoint to get the list of transaction you've made. By default, the result will be paginated by 20. You can change the pagination, filter, and sort the result by changing the url parameter.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v3/disbursement</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v3/disbursement</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-all-disbursement-v3-request-headers">Request Headers</h3>

```http
GET /disbursement HTTP/1.1
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

<h3 id="get-all-disbursement-v3-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v3/disbursement?pagination=10&page=1&sort=id&status=DONE");
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
curl https://bigflip.id/api/v3/disbursement?pagination=10&page=1&sort=id&status=DONE \
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
        <ul>
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
                <ul>
                  <li>Accepted values are as listed below</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>[attribute]</b> <em>optional</em></p>
        <p>
          Filter the result by changing the <b><code>attribute</code></b> with
          the attribute to be filtered and its value with the filter value. You
          can filter more than one attribute by appending another attribute
          filter to the URL. The attributes that can be filtered are listed
          below.
        </p>
        Example:
        <code>status=DONE</code>
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
                  <li>Accepted values are as listed below</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

**Sort and Filter by Attributes**

You can also filter the result by changing **`attribute`** with the attribute to be filtered and **`value`** with the filter value. You can filter more than one attribute by appending another attribute filter to the url. Attribute that can be filtered are:

- `id` - exact comparison
- `amount` - exact comparison
- `status` - exact comparison
- `timestamp` - "like" comparison
- `bank_code` - "like" comparison
- `account_number` - "like" comparison
- `recipient_name` - "like" comparison
- `remark` - "like" comparison
- `time_served` - "like" comparison
- `created_from` - "like" comparison
- `direction` - exact comparison

Example:

`https://bigflip.id/api/v3/disbursement?pagination=10&page=1&sort=id&status=DONE`

<h3 id="get-all-disbursement-v3-response-body">Response Body</h3>

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
    },
    {
      "id": 11,
      "user_id": 20,
      "amount": 10000,
      "status": "DONE",
      "reason": "",
      "timestamp": "2017-08-24 21:21:23",
      "bank_code": "bni",
      "account_number": "1122333301",
      "recipient_name": "John Smith",
      "sender_bank": "bri",
      "remark": "some remark",
      "receipt": "someurl.jpg",
      "time_served": "2017-08-25 09:11:35",
      "bundle_id": 0,
      "company_id": 7,
      "recipient_city": 391,
      "created_from": "API",
      "direction": "FOREIGN_INBOUND_SPECIAL_TRANSFER",
      "sender": {
        "sender_name": "John Doe",
        "place_of_birth": 391,
        "date_of_birth": "1992-01-01",
        "address": "Some Address Street 123",
        "sender_identity_type": "nat_id",
        "sender_identity_number": "asdas213123",
        "sender_country": 100252,
        "job": "entrepreneur"
      },
      "fee": 1000,
      "beneficiary_email": "test@mail.com,user@mail.com",
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

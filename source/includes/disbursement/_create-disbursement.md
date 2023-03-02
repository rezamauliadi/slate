<div></div>

<h2 id="create-disbursement-v3">Create Disbursement</h2>

Use this endpoint to create a common disbursement transaction. For company operating as a Money Transfer Company (Perusahaan Transfer Dana), or anything related to that, please use [Create Special Money Transfer V3](#create-special-disbursement-v3) endpoint instead.

<aside class="warning">
  <ul>
    <li>
      Idempotency key in a Disbursement request is a must. It will be used to prevent accidentally created the same disbursement more than once. Please see more detail on <a href="#idempotent-request">Idempotent Request</a> section.
    </li>
    <li>
      <code>X-TIMESTAMP</code> in a Disbursement request is highly recommended by Flip. It will be used to validate your request in case of network error (timeout, delay, etc.). If a transaction is marked as timeout or stale, then it won't be processed by Flip. The duration until a transaction is marked stale is 60 seconds.
    </li>
    <li>
      Flip highly recommend performing the account inquiry before every disbursement request. This is to ensure that the destination account has been validated and to prevent any transaction issues (e.g failed transaction due to account can't accept fund/inactive/closed, etc.) Please see more detail on <a href="#bank-account-inquiry">Bank Account Inquiry</a> section.
    </li>
  </ul>
</aside>

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method post">POST</span></td>
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

<h3 id="create-disbursement-v3-request-headers">Request Headers</h3>

```http
POST /disbursement HTTP/1.1
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
    <tr>
      <td>
        <p><b>idempotency-key</b> <em>required</em></p>
        Idempotency key. Please see more detail on <a href="#idempotent-request">Idempotent Request</a> section.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>X-TIMESTAMP</b> <em>optional</em></p>
        Request timestamp. The format will follow the <b>ISO8601</b> format.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="create-disbursement-v3-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v3/disbursement");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

$payloads = [
  "account_number" => "1122333300",
  "bank_code" => "bni",
  "amount" => 10000,
  "remark" => "some remark",
  "recipient_city" => 391,
  "beneficiary_email" => "test@mail.com,user@mail.com"
];

curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payloads));

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/x-www-form-urlencoded",
  "idempotency-key: idem-key-1",
  "X-TIMESTAMP: 2022-01-01T15:02:15+0700"
));

curl_setopt($ch, CURLOPT_USERPWD, $secret_key.":");

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```shell
curl https://bigflip.id/api/v3/disbursement \
  -X POST \
  -u <secret_key>:\
  -H "Content-Type=application/x-www-form-urlencoded" \
  -H "idempotency-key=idem-key-1" \
  -H "X-TIMESTAMP=2022-01-01T15:02:15+0700" \
  -d "account_number=1122333300" \
  -d "bank_code=bni" \
  -d "amount=10000" \
  -d "remark=some remark" \
  -d "recipient_city=391" \
  -d "beneficiary_email=test@mail.com,user@mail.com"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>account_number</b> <em>required</em></p>
        The account number of the recipient.
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
        <p><b>bank_code</b> <em>required</em></p>
        Bank code of the recipient bank.
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
                  <li>
                    Accepted values are listed
                    <a href="#destination-bank">here</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>amount</b> <em>required</em></p>
        The amount of money to be disbursed.
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
        <p><b>remark</b> <em>optional</em></p>
        <p>
          Remark to be included in the transfer made to the recipient. Usually
          will appear as "berita transfer" or "remark" in the transfer receipt.
          Max length for this attribute is <b>18</b> characters.
        </p>
        <p>
          Only for disbursement with the bank code being <code>bri</code>, the
          remark will be prepended with the beneficiary name. Example:
          <code>tes remark</code> will be <code>john doe test remark</code>.
        </p>
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
                  <li>1-18 character</li>
                  <li>Alphanumeric</li>
                  <li>
                    Spaces, <code>.</code>, <code>-</code>, <code>/</code>,
                    <code>(</code>, and
                    <code>)</code>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>recipient_city</b> <em>optional</em></p>
        City code of the recipient city.
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
                  <li>
                    Accepted values are listed
                    <a href="#city-list">here</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_email</b> <em>optional</em></p>
        List of the recipient emails (separated by comma).
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
                  <li>
                    Alphanumeric with email format ( <code>xxx@xxx.xxx</code>)
                  </li>
                  <li>Separate each email with a comma (if any)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="create-disbursement-v3-response-body">Response Body</h3>

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

This endpoint will return the [Disbursement Object](#money-transfer-objects) as a response.

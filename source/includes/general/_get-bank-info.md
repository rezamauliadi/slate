<div></div>

## Get Bank Info

This endpoint will return list of bank codes, along with several other information. We recommend you to hit this endpoint before creating a disbursement so that you can give information like `queue` or `status` to your user or customer.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/general/balance</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/general/balance</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-bank-info-request-headers">Request Headers</h3>

```http
GET /general/banks HTTP/1.1
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

<h3 id="get-bank-info-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/general/banks");
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
curl https://bigflip.id/api/v2/general/banks \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

You can also provide an optional bank code to filter the result to a specific bank only.

<table>
  <tbody>
    <tr>
      <td>
        <p><b>code</b> <em>optional</em></p>
        Bank code to return specific bank result.
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
                  <li>Accepted values are listed <a href="/docs/getting-started/destination-bank">here</a></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<div></div>

<h3 id="get-bank-info-response-body">Response Body</h3>

<blockquote style="margin-top: -20px;">
  <p><strong>Without bank code filter:</strong></p>
</blockquote>

```json
Status 200
Content-Type: application/json

[
  {
    "bank_code": "mandiri",
    "name": "Mandiri",
    "fee": 5000,
    "queue": 8,
    "status": "DISTURBED"
  },
  {
    "bank_code": "bri",
    "name": "BRI",
    "fee": 5000,
    "queue": 39,
    "status": "OPERATIONAL"
  },
  {
    "bank_code": "bni",
    "name": "BNI",
    "fee": 5000,
    "queue": 57,
    "status": "OPERATIONAL"
  },
  {
    "bank_code": "bsm",
    "name": "Bank Syariah Mandiri",
    "fee": 5000,
    "queue": 2,
    "status": "HEAVILY_DISTURBED"
  }
]
```

> **With bank code filter:**

```json
Status 200
Content-Type: application/json

[
  {
    "bank_code": "bca",
    "name": "BCA",
    "fee": 5000,
    "queue": 8,
    "status": "OPERATIONAL"
  }
]
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>bank_code</b> <em>string</em></p>
        Flip's bank code. <code>cimb</code> is the code for both CIMB Niaga and CIMB Niaga Syariah
      </td>
    </tr>
    <tr>
      <td>
        <p><b>name</b> <em>string</em></p>
        The name of the bank as we usually say it in Indonesian
      </td>
    </tr>
    <tr>
      <td>
        <p><b>fee</b> <em>integer</em></p>
        The fee that you'll be charged if you send money to this bank
      </td>
    </tr>
    <tr>
      <td>
        <p><b>queue</b> <em>integer</em></p>
        Current queue for related bank. The longer/higher the queue number, the longer the transaction will be finished.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>string</em></p>
        The status of the disbursement process in related bank. Possible values are: <br>
        <ul>
          <li><code>OPERATIONAL</code><br>Banks are operational, disbursement will be processed as soon as possible</li>
          <li><code>DISTURBED</code><br>Banks are slow or have another problem. Disbursement will still be processed, but in slower pace and might be delayed</li>
          <li><code>HEAVILY_DISTURBED</code><br>Banks are having an error, offline, or another problem that result in a nearly unusable system. Disbursement to this bank can not be processed in a short time, and maybe won't be processed in the same day. You can ask for a refund if this happen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

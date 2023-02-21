<div></div>

## Bank Account Inquiry

You can use this endpoint to get the bank account holder name. For now, it still take us a few seconds to do the inquiry. The result will be returned as a callback if we haven't cached it yet. If it have been cached, you will get the result instantly. Be sure to set up your callback inquiry entry in your <a href="https://business.flip.id/settings/api-setting" target="_blank" rel="noopener noreferrer">Flip for Business Dashboard</a>.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method post">POST</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/disbursement/bank-account-inquiry</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/disbursement/bank-account-inquiry</code></td>
    </tr>
  </tbody>
</table>

### Request Headers

```http
POST /disbursement/bank-account-inquiry HTTP/1.1
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

### Request Parameters

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/disbursement/bank-account-inquiry");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

$payloads = [
  "account_number" => "5465327020",
  "bank_code" => "bca",
  "inquiry_key" => "aVncCDdKW9dciRvH9qSH"
];

curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payloads));

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/x-www-form-urlencoded"
));

curl_setopt($ch, CURLOPT_USERPWD, $secret_key.":");

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```shell
curl https://bigflip.id/api/v2/disbursement/bank-account-inquiry \
    -X POST \
    -u <secret_key>: \
    -d account_number="5465327020" \
    -d bank_code="bca" \
    -d inquiry_key="aVncCDdKW9dciRvH9qSH"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>account_number</b> <em>required</em></p>
        The account number of the bank account.
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
        Bank code of the account.
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
    <tr>
      <td>
        <p><b>inquiry_key</b> <em>optional</em></p>
        Inquiry key for handling multiple request with multiple callback.
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
                  <li>Alphanumeric</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

### Response

> **Cached response**

```json
Status 200
Content-Type: application/json

{
  "bank_code": "bca",
  "account_number": "5465327020",
  "account_holder": "PT Fliptech Lentera IP",
  "status": "SUCCESS",
  "inquiry_key": "aVncCDdKW9dciRvH9qSH",
}
```

> **Uncached response**

```json
Status 200
Content-Type: application/json

{
  "bank_code": "bca",
  "account_number": "5465327020",
  "account_holder": "",
  "status": "PENDING",
  "inquiry_key": "aVncCDdKW9dciRvH9qSH",
}
```

> **Invalid account**

```json
Status 200
Content-Type: application/json

{
  "bank_code": "bca",
  "account_number": "1232123123212",
  "account_holder": "",
  "status": "INVALID_ACCOUNT_NUMBER",
  "inquiry_key": "aVncCDdKW9dciRvH9qSH",

}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>bank_code</b> <em>string</em></p>
        Bank code of the account.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>account_number</b> <em>string</em></p>
        The account number of the bank account.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>account_holder</b> <em>string</em></p>
        Account number of the bank account.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>string</em></p>
        The returned status of the inquired account. Possible values are listed below.<br>
        <ul>
          <li><code>PENDING</code><br>Inquiry still in process. The result will be returned via callback.</li>
          <li><code>SUCCESS</code><br>Inquiry process is complete and bank account number is valid.</li>
          <li><code>INVALID_ACCOUNT_NUMBER</code><br>Inquiry process is complete but the account number is invalid or maybe a virtual account number.</li>
          <li><code>SUSPECTED_ACCOUNT</code><br>Bank account have been suspected on doing fraud. You still can do a disbursement to this account.</li>
          <li><code>BLACK_LISTED</code><br>Bank account have been confirmed on doing a fraud and therefore is blacklisted. You can't do a disbursment to this account.</li>
          <li><code>FAILED</code><br>The inquiry process is failed before we get the final status of the inquiry, e.g due to timeout or any other errors from the bank. If you get this response, please retry the inquiry to trigger reverification of the account.</li>
          <li><code>CLOSED</code><br>The inquiry process is complete and the account is valid, but it is closed/inactive so that it cannot receive money. You cannot do a disbursement to this account.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>inquiry_key</b> <em>string</em></p>
        Inquiry key for handling multiple request with multiple callback.
      </td>
    </tr>
  </tbody>
</table>

<aside class="danger">
  <p>
    <code class="prettyprint">SUSPECTED_ACCOUNT</code> and <code class="prettyprint">BLACK_LISTED</code> are based on Flip's user report.  This might be inacurrate, and we flag an exact string of the account number reported by our users. For example, <code class="prettyprint">350000069</code> will be different with <code class="prettyprint">00350000069</code> although it may be the same account. We are still working on a better way to handle this leading zeroes issue.
  </p>
</aside>

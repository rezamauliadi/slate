<div></div>

## Confirm Bill Payment

An endpoint to confirm a specific payment transaction, except e-wallet payment method <i><b>(for e-wallet transaction won't be necessary for confirming it)</b></i>.

<aside class="notice">
  <p>
    <b>This API only works for Live Environment</b>
  </p>
</aside>

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method put">PUT</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/pwf/bill-payment/:transaction-id/confirm</code></td>
    </tr>
  </tbody>
</table>

<h3 id="confirm-bill-payment-request-headers">Request Headers</h3>

```http
PUT /pwf/bill-payment/:transaction-id/confirm HTTP/1.1
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

<h3 id="confirm-bill-payment-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/pwf/bill-payment/PWF12/confirm");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_PUT, TRUE);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/x-www-form-urlencoded"
));

curl_setopt($ch, CURLOPT_USERPWD, $secret_key.":");

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```shell
curl https://bigflip.id/api/v2/pwf/bill-payment/PWF12/confirm \
  -X PUT \
  -u <secret_key>:\
  -H "Content-Type=application/x-www-form-urlencoded" \
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>transaction-id</b> <em>required</em></p>
          Payment transaction ID
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-all-bill-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "confirmed_at": "2022-12-30 15:50",
  "payment_url": "https://flip.id/transaksi/bill/PWF12/proses?email=customer%40gmail.com"
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>confirmed_at</b> <em>string</em></p>
        Payment's being confirmed timestamp.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>payment_url</b> <em>string</em></p>
        Payment transaction URL.
      </td>
    </tr>
  </tbody>
</table>

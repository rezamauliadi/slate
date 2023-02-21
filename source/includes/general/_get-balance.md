<div></div>

## Get Balance

This endpoint will return your current account balance in Rupiah (IDR).

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

### Request Headers

```http
GET /general/balance HTTP/1.1
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

### Request Parameters

```php
<?php

$ch = curl_init();
$secret_key = "wwwwwwwxxxxxxxaaaaaaabbbbbbbbbcccccdddd";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/general/balance");
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
curl https://bigflip.id/api/v2/general/balance \
    -u <secret_key>:
```

This API doesn’t have any request parameter available.

### Response Body

```json
Status 200
Content-Type: application/json

{
    "balance": 49656053
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>balance</b> <em>integer</em></p>
        Current balance in Rupiah (IDR)
      </td>
    </tr>
  </tbody>
</table>

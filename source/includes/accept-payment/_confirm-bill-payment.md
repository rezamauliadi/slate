## Confirm Bill Payment

An endpoint to confirm a specific payment transaction, except e-wallet payment method (<i><b>for e-wallet transaction won't be necessary for confirming it</b></i>).
<b>This API only works for Live Environment</b>

```http
PUT /pwf/bill-payment/{transaction_id}/confirm HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: Basic <secret_key>: (notes with ":" after secret key)
```

### Request

```php
<?php

$ch = curl_init();
$secret_key = "wwwwwwwxxxxxxxaaaaaaabbbbbbbbbcccccdddd";

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
    -u <secret_key>:
```

<span class="method put">PUT</span> `https://bigflip.id/api/v2/pwf/bill-payment/[transaction_id]/confirm`

### Response

```json
Status 200
Content-Type: application/json

{
  "confirmed_at": "2022-12-30 15:50",
  "payment_url": "https://flip.id/transaksi/bill/PWF12/proses?email=customer%40gmail.com"
}

```

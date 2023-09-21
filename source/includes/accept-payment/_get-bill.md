<div></div>

## Get Bill

An endpoint to get a specific payment link.

```http
GET /pwf/{bill_id}/bill HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: Basic <secret_key>: (notes with ":" after secret key)
```

### Request

```php
<?php

$ch = curl_init();
$secret_key = "wwwwwwwxxxxxxxaaaaaaabbbbbbbbbcccccdddd";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/pwf/1/bill");
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
curl https://bigflip.id/api/v2/pwf/1/bill \
    -u <secret_key>:
```

<span class="method get">GET</span> `https://bigflip.id/api/v2/pwf/[bill_id]/bill`

### Response

```json
Status 200
Content-Type: application/json

Step 1
{
  "link_id": 1,
  "link_url": "flip.id/$companyname/#coffeetable",
  "title": "Coffee Table",
  "type": "SINGLE",
  "amount": 900000,
  "redirect_url": "https://someurl.com",
  "expired_date": "2022-12-30 15:50:00",
  "created_from": "API",
  "status": "ACTIVE",
  "step": 1,
  "is_address_required": 0,
  "is_phone_number_required": 0
}

Step 2
{
  "link_id": 1,
  "link_url": "flip.id/$companyname/#coffeetable",
  "title": "Coffee Table",
  "type": "SINGLE",
  "amount": 900000,
  "redirect_url": "https://someurl.com",
  "expired_date": "2022-12-30 15:50:00",
  "created_from": "API",
  "status": "ACTIVE",
  "is_address_required": 0,
  "is_phone_number_required": 0,
  "step": 2,
  "customer": {
    "name": "Customer a",
    "email": "customer@gmail.com",
    "address": "Jl. Imam Bonjol No.39, Jakarta.",
    "phone": "+62888888888",
  }
}

Step 3
{
  "link_id": 1,
  "link_url": "flip.id/$companyname/#coffeetable",
  "title": "Coffee Table",
  "type": "SINGLE",
  "amount": 900000,
  "redirect_url": "https://someurl.com",
  "expired_date": "2022-12-30 15:50:00",
  "created_from": "API",
  "status": "ACTIVE",
  "is_address_required": 0,
  "is_phone_number_required": 0,
  "step": 3,
  "customer": {
    "name": "Customer a",
    "email": "customer@gmail.com",
    "address": "Jl. Imam Bonjol No.39, Jakarta.",
    "phone": "+62888888888",
  },
  "payment_method": {
    "sender_bank": "bni",
    "sender_bank_type": "virtual_account",
  }
}

```

See [Bill Object](#bill-object) for the details.

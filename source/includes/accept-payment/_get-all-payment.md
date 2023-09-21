## Get All Payment

An endpoint to get all existing payment transactions.

```http
GET /pwf/payment HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: Basic <secret_key>: (notes with ":" after secret key)
```

### Request

```php
<?php

$ch = curl_init();
$secret_key = "wwwwwwwxxxxxxxaaaaaaabbbbbbbbbcccccdddd";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/pwf/payment?start_date=2020-01-01&end_date=2020-12-12&pagination=50&page=1&sort_by=created_at&sort_type=sort_desc");
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
curl https://bigflip.id/api/v2/pwf/payment?start_date=2020-01-01&end_date=2020-12-12&pagination=50&page=1&sort_by=created_at&sort_type=sort_desc \
    -u <secret_key>:
```

<span class="method get">GET</span> `https://bigflip.id/api/v2/pwf/payment?start_date=`**`start_date`**`&end_date=`**`end_date`**`&pagination=`**`pagination`**`&page=`**`page`**`&sort_by=`**`sort_by`**`&sort_type=`**`sort_type`**

| Param | Value |
| --- | --- |
| start_date | **`integer (optional)`** <br> Starting date of the data. Example: `"2020-01-01"`. |
| end_date | **`integer (optional)`** <br> Ending date of the data. Example: `"2020-12-12"`. End date must be greater than start_date. |
| pagination | **`integer (optional)`** <br> Pagination of the data. |
| page | **`integer (optional)`** <br> The desired page of the data pagination. |
| sort_by | **`string (optional)`** <br> Sort the result by the attribute. You can sort by: <ul><li>`id`</li><li>`bill_link`</li><li>`bill_title`</li><li>`sender_bank`</li><li>`amount`</li><li>`created_at`</li></ul> |
| sort_type | **`string (optional)`** <br> You can sort in <ul><li>`sort_desc` (descending)</li><li>`sort_asc` (ascending)</li></ul> |

### Response

```json
Status 200
Content-Type: application/json

{
  "total_data": 3,
  "data_per_page": 3,
  "total_page": 1,
  "page": 1,
  "data": [
    {
      "id": "FT12345678",
      "bill_link": "flip.id/$companyname/#coffeetable",
      "bill_title": "Coffee Table",
      "sender_name": "John Smith",
      "sender_bank": "mandiri",
      "amount": 900000,
      "status": "SUCCESSFUL",
      "settlement_status": "Pending",
      "created_at": "2021-02-01 14:57:44"
    },
    {
      "id": "FT12345679",
      "bill_link": "flip.id/$companyname/#coffeetable",
      "bill_title": "Coffee Table",
      "sender_name": "Jon Doe",
      "sender_bank": "bca",
      "amount": 900000,
      "status": "SUCCESSFUL",
      "settlement_status": "Pending",
      "created_at": "2021-02-02 14:57:44"
    },
    {
      "id": "PGPWF3453281233886287",
      "bill_link": "flip.id/$companyname/#coffeechair",
      "bill_title": "Coffee Chair",
      "sender_name": "Jon Doe",
      "sender_bank": "ovo",
      "amount": 100000,
      "status": "SUCCESSFUL",
      "settlement_status": "Pending",
      "created_at": "2021-02-03 14:57:44"
    }
  ]
}

```

| Attribute     | Description                                         |
| ------------- | --------------------------------------------------- |
| total_data    | Total data returned in all page                     |
| data_per_page | Total data returned in current page                 |
| total_page    | Total/max page available                            |
| page          | Current page                                        |
| data          | Array of <b>[payment objects](#payment-object)</b>. |

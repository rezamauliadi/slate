## Get Payment

An endpoint to get all payment transaction(s) from a specific bill link.

```http
GET /pwf/{bill_id}/payment HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: Basic <secret_key>: (notes with ":" after secret key)
```

### Request

```php
<?php

$ch = curl_init();
$secret_key = "wwwwwwwxxxxxxxaaaaaaabbbbbbbbbcccccdddd";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/pwf/1/payment?start_date=2020-01-01&end_date=2020-12-12&pagination=50&page=1&sort_by=created_at&sort_type=sort_desc");
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
curl https://bigflip.id/api/v2/pwf/1/payment?start_date=2020-01-01&end_date=2020-12-12&pagination=50&page=1&sort_by=created_at&sort_type=sort_desc \
    -u <secret_key>:
```

<span class="method get">GET</span> `https://bigflip.id/api/v2/pwf/[bill_id]/payment?start_date=`**`start_date`**`&end_date=`**`end_date`**`&pagination=`**`pagination`**`&page=`**`page`**`&sort_by=`**`sort_by`**`&sort_type=`**`sort_type`**

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
  "link_id": 1065,
  "total_data": 2,
  "data_per_page": 2,
  "total_page": 1,
  "page": 1,
  "data": [
    {
      "id": "PGPWF3453271107384587",
      "bill_link": "flip.id/$companyname/#coffeetable",
      "bill_title": "Coffee Table",
      "sender_name": "John Smith",
      "sender_bank": "qris",
      "amount": 900000,
      "status": "SUCCESSFUL",
      "settlement_status": "Pending",
      "created_at": "2022-07-01 14:57:44"
    },
    {
      "id": "PGPWF3453271669674219",
      "bill_link": "flip.id/$companyname/#coffeetable",
      "bill_title": "Coffee Table",
      "sender_name": "Jon Doe",
      "sender_bank": "ovo",
      "amount": 900000,
      "status": "SUCCESSFUL",
      "settlement_status": "Pending",
      "created_at": "2022-07-02 14:57:44"
    }
  ]
}
```

#### Payment Object

| Attribute | Description |
| --- | --- |
| id | Payment ID. |
| bill_link | Bill link URL of the payment. |
| bill_title | Title of the bill. |
| sender_name | Name of the user who did the payment. |
| sender_bank | Bank code of the user's bank. |
| amount | Payment amount done by the user. |
| status | Payment status. <ul><li>`FAILED`</li><li>`SUCCESSFUL`</li><li>`PENDING`</li></ul> |
| settlement_status | Merchant settlement status. <ul><li>`Cancelled`</li><li>`Settled`</li><li>`Pending`</li></ul> |
| created_at | The time when the payment is created. Time will be in GMT+7 with `yyyy-mm-dd hh:mm:ss` format |

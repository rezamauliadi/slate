<div></div>

## Get All Payment

An endpoint to get all existing payment transactions.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/pwf/payment</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/pwf/payment</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-all-payment-request-headers">Request Headers</h3>

```http
POST /pwf/payment HTTP/1.1
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

<h3 id="get-all-payment-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/pwf/payment?start_date=2020-01-01&end_date=2020-12-12&pagination=50&page=1&sort_by=created_at&sort_type=sort_desc&reference_id=REF12345");
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
curl https://bigflip.id/api/v2/pwf/payment?start_date=2020-01-01&end_date=2020-12-12&pagination=50&page=1&sort_by=created_at&sort_type=sort_desc&reference_id=REF12345 \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>start_date</b> <em>optional</em></p>
        Starting date of the data. Example: <code>"2020-01-01"</code>.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>end_date</b> <em>optional</em></p>
        Ending date of the data. Example: <code>"2020-12-12"</code>. End date
        must be greater than start_date.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>pagination</b> <em>optional</em></p>
        Pagination of the data.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>page</b> <em>optional</em></p>
        The desired page of the data pagination.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sort_by</b> <em>optional</em></p>
        Sort the result by the attribute.
        <table class="validation-table">
          <thead>
            <tr>
              <th>Validation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="validation-table__helper-text">
                  Accepted values are as follows:
                </div>
                <ul>
                  <li><code>id</code></li>
                  <li><code>bill_link</code></li>
                  <li><code>bill_title</code></li>
                  <li><code>sender_bank</code></li>
                  <li><code>amount</code></li>
                  <li><code>created_at</code></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sort_type</b> <em>optional</em></p>
        Sort direction.
        <table class="validation-table">
          <thead>
            <tr>
              <th>Validation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="validation-table__helper-text">
                  Accepted values are as follows:
                </div>
                <ul>
                  <li><code>sort_desc</code> (descending)</li>
                  <li><code>sort_asc</code> (ascending)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>reference_id</b> <em>optional</em></p>
        Reference that is provided by merchant (currently only available on static VA payment).
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-all-payment-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "total_data": 4,
  "data_per_page": 4,
  "total_page": 1,
  "page": 1,
  "data": [
    {
      "id": "PGPWF12345",
      "bill_link": "flip.id/$companyname/#coffeetable",
      "bill_title": "Coffee Table",
      "sender_name": "John Smith",
      "sender_bank": "mandiri",
      "sender_bank_type": "virtual_account",
      "virtual_account_number": "8902290277159017",
      "amount": 900000,
      "status": "SUCCESSFUL",
      "settlement_status": "Pending",
      "reference_id": null,
      "payment_url": "https://flip.id/pwf/transaction/consolidated?redirected_from=internal&id=1234",
      "created_at": "2021-02-01 14:57:44",
      "completed_at": "2021-02-02 14:59:30"
    },
    {
      "id": "FT12345679",
      "bill_link": "flip.id/$companyname/#coffeetable",
      "bill_title": "Coffee Table",
      "sender_name": "Jon Doe",
      "sender_bank": "bca",
      "sender_bank_type": "bank_account",
      "virtual_account_number": null,
      "amount": 900000,
      "status": "SUCCESSFUL",
      "settlement_status": "Pending",
      "reference_id": null,
      "payment_url": "https://flip.id/pwf/transaction/consolidated?redirected_from=internal&id=1235",
      "created_at": "2021-02-02 14:57:44",
      "completed_at": "2021-02-02 14:59:30"
    },
    {
      "id": "PGPWF12346",
      "bill_link": "flip.id/$companyname/#coffeechair",
      "bill_title": "Coffee Chair",
      "sender_name": "Jon Doe",
      "sender_bank": "ovo",
      "sender_bank_type": "wallet_account",
      "virtual_account_number": null,
      "amount": 100000,
      "status": "PENDING",
      "settlement_status": "Pending",
      "reference_id": null,
      "payment_url": "https://flip.id/pwf/transaction/consolidated?redirected_from=internal&id=1236",
      "created_at": "2021-02-03 14:57:44",
      "completed_at": null
    },
    {
      "id": "PGPWF12347",
      "bill_link": "flip.id/$companyname/#8902290270097932-1698032345577",
      "bill_title": "8902290270097932-1698032345577",
      "sender_name": "June Smith",
      "sender_bank": "mandiri",
      "sender_bank_type": "virtual_account",
      "virtual_account_number": "8902290270097932",
      "amount": 900000,
      "status": "SUCCESSFUL",
      "settlement_status": "Pending",
      "reference_id": "REF1122334455",
      "payment_url": "https://flip.id/pwf/transaction/consolidated?redirected_from=internal&id=1237",
      "created_at": "2021-02-04 14:57:44",
      "completed_at": "2021-02-02 14:59:30"
    }
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
        Array of <b><a href="#payment-object">Payment Object</a></b>.
      </td>
    </tr>
  </tbody>
</table>

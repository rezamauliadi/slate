<div></div>

## Get Exchange Rates

An endpoint to get the exchange rate and other details of the destination country corridors such as minimum and maximum transfer amount, cut-off time, estimated arrival time, and the transfer fee.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/international-disbursement/exchange-rates</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/international-disbursement/exchange-rates</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-exchange-rates-request-headers">Request Headers</h3>

```http
GET /international-disbursement/exchange-rates HTTP/1.1
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

<h3 id="get-exchange-rates-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/international-disbursement/exchange-rates?transaction_type=C2C");
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
curl https://bigflip.id/api/v2/international-disbursement/exchange-rates?transaction_type=C2C \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>country_iso_code</b> <em>optional</em></p>
        Country code using ISO 3166 (Alpha-3). You can choose multiple countries
        separate by comma.
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
                    Supported
                    <a href="#supported-destination-countries"
                      >Country ISO Codes</a
                    >
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
        <p><b>transaction_type</b> <em>required</em></p>
        Transaction type information. Possible values are:
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
                  <li>C2C</li>
                  <li>C2B</li>
                  <li>B2C</li>
                  <li>B2B</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-exchange-rates-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

[
  {
    "currency_code": "GBP",
    "country_code": "GBR",
    "country_name": "United Kingdom",
    "country_iso_code": "GBR",
    "flip_exchange_rate": 19000.55,
    "flip_transfer_fee": 80000,
    "minimum_amount": 1.50,
    "maximum_amount": 3000.50,
    "payment_speed": "Same Day",
    "arrival_message": null,
    "notes": null,
    "transaction_type": "C2C",
    "flip_cutoff_time": "2021-12-06 01:00:00+700",
    "flip_arrival_time": "2021-12-07 12:00:00+700"
  },
  {
    "currency_code": "AUD",
    "country_code": "AUS",
    "country_name": "Australia",
    "country_iso_code": "AUS",
    "flip_exchange_rate": 10588.78,
    "flip_transfer_fee": 80000,
    "minimum_amount": 1,
    "maximum_amount": 200000,
    "payment_speed": "+1 day",
    "arrival_message": {
      "id": "Jika dana sudah kami terima sebelum hari Senin pukul 08:00 WIB, dana akan sampai di penerima hari Selasa, 07 Desember 2021",
      "en": "If Flip receive your fund before Monday at 08:00 GMT+7, the fund will be arrived to the beneficiary on Tuesday, 07 December 2021"
    },
    "notes": null,
    "transaction_type": "C2C",
    "flip_cutoff_time": "2021-12-06 01:00:00+700",
    "flip_arrival_time": "2021-12-07 12:00:00+700"
  },
  ...
]
```

This API will return an array of **Exhange Rate** objects.

**Array of Exchange Rate Object**

<table>
  <tbody>
    <tr>
      <td>
        <p><b>currency_code</b> <em>string</em></p>
        Currency code of the country.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>country_code</b> <em>string</em></p>
        Country code using ISO 3166 (Alpha-2).
      </td>
    </tr>
    <tr>
      <td>
        <p><b>country_name</b> <em>string</em></p>
        Name of the country
      </td>
    </tr>
    <tr>
      <td>
        <p><b>country_iso_code</b> <em>string</em></p>
        Country code using ISO 3166 (Alpha-3).
      </td>
    </tr>
    <tr>
      <td>
        <p><b>flip_exchange_rate</b> <em>float</em></p>
        The country exchange rates to IDR.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>flip_transfer_fee</b> <em>float</em></p>
        Transfer fee to the country.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>minimum_amount</b> <em>float</em></p>
        Minimum transfer amount.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>maximum_amount</b> <em>float</em></p>
        Maximum transfer amount.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>payment_speed</b> <em>string</em></p>
        Expected payment completion speed:
        <ul class="">
          <li><code>Real Time</code></li>
          <li><code>Same Day</code></li>
          <li><code>+1 day</code> or "+N day"</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>arrival_message</b> <em>object</em></p>
        Message related to payment speed, available in Bahasa (ID) and English
        (EN).
      </td>
    </tr>
    <tr>
      <td>
        <p><b>notes</b> <em>string</em></p>
        Additional notes.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>transaction_type</b> <em>string</em></p>
        Transaction type information.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>flip_cutoff_time</b> <em>string</em></p>
        Transfer cutoff time. Time will be in GMT+7 with
        <code>yyyy-mm-dd hh:mm:ss</code> format.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>flip_arrival_time</b> <em>string</em></p>
        Estimation of arrival time. Time will be in GMT+7 with
        <code>yyyy-mm-dd hh:mm:ss</code> format.
      </td>
    </tr>
  </tbody>
</table>

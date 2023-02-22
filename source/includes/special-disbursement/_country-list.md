<div></div>

## Country List

This endpoint will return the list of available country code along with it's name. The country name will be in English.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/disbursement/country-list</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/disbursement/country-list</code></td>
    </tr>
  </tbody>
</table>

<h3 id="country-list-request-headers">Request Headers</h3>

```http
GET /disbursement/country-list HTTP/1.1
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

<h3 id="country-list-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/disbursement/country-list");
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
curl https://bigflip.id/api/v2/disbursement/country-list \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

This API doesn't have any request parameter available.

<h3 id="country-list-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "100000": "Afghanistan",
  "100002": "Albania",
  "100003": "Algeria/Aljazair",
  "100004": "America Samoa",
  "100005": "Andorra",
  "100006": "Angola",
  "100007": "Anguilla",
  "100008": "Antarctica",
  "100009": "Antigua And Barbuda",
  "100010": "Argentina",
  "100011": "Armenia",
  ...
}
```

Return an object of all countries with format `[country code]: [country name]`.

<table>
  <tbody>
    <tr>
      <td>
        <p><b>[country code]</b> <em>string</em></p>
        The country name.
      </td>
    </tr>
  </tbody>
</table>

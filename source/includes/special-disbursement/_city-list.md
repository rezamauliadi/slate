<div></div>

## City List

This endpoint will return the list of available city code along with it's name. The city name will be in Indonesian.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/disbursement/city-list</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/disbursement/city-list</code></td>
    </tr>
  </tbody>
</table>

<h3 id="city-list-request-headers">Request Headers</h3>

```http
GET /disbursement/city-list HTTP/1.1
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

<h3 id="city-list-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/disbursement/city-list");
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
curl https://bigflip.id/api/v2/disbursement/city-list \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

This API doesn't have any request parameter available.

<h3 id="city-list-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "102": "Kab. Bekasi",
  "103": "Kab. Purwakarta",
  "106": "Kab. Karawang",
  "108": "Kab. Bogor",
  "109": "Kab. Sukabumi",
  "110": "Kab. Cianjur",
  "111": "Kab. Bandung",
  "112": "Kab. Sumedang",
  "113": "Kab. Tasikmalaya",
  "114": "Kab. Garut",
  "115": "Kab. Ciamis",
  "116": "Kab. Cirebon",
  "117": "Kab. Kuningan",
  "118": "Kab. Indramayu",
  "119": "Kab. Majalengka",
  ...
}
```

Return an object of all cities with format `[city code]: [city name]`.

<table>
  <tbody>
    <tr>
      <td>
        <p><b>[city code]</b> <em>string</em></p>
        The city name.
      </td>
    </tr>
  </tbody>
</table>

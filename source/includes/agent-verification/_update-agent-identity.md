<div></div>

## Update Agent Identity

Use this endpoint to update data of the Agent.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method put">PUT</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/agents/:agent-id</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/agents/:agent-id</code></td>
    </tr>
  </tbody>
</table>

<h3 id="update-agent-identity-request-headers">Request Headers</h3>

```http
PUT /agents HTTP/1.1
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

<h3 id="update-agent-identity-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/agents/1");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_PUT, TRUE);

$payloads = [
  "name" => "John Doe",
  "identity_type" => "ktp",
  "identity_number" => "1234567890123456",
  "birth_date" => "31-10-1990",
  "birth_place" => "Kota Depok",
  "country_id" => 1,
  "province_id" => 12,
  "city_id" => 184,
  "district_id" => 1234,
  "address" => "Jalan Margonda Raya",
  "gender" => "male",
  "occupation" => "entrepreneur",
  "phone_number" => "+628123456789",
  "use_identity_address" => 1,
  "email" => "example@mail.com"
];

curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payloads));

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/x-www-form-urlencoded"
));

curl_setopt($ch, CURLOPT_USERPWD, $secret_key.":");

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```shell
curl https://bigflip.id/api/v2/agents/1 \
  -X PUT \
  -u <secret_key>:\
  -H "Content-Type=application/x-www-form-urlencoded" \
  -d "name=John Doe" \
  -d "identity_type=ktp" \
  -d "identity_number=1234567890123456" \
  -d "birth_date=31-10-1990" \
  -d "birth_place=Kota Depok" \
  -d "country_id=1" \
  -d "province_id=12" \
  -d "city_id=184" \
  -d "district_id=1234" \
  -d "address=Jalan Margonda Raya" \
  -d "gender=male" \
  -d "occupation=entrepreneur" \
  -d "phone_number=+628123456789" \
  -d "use_identity_address=1" \
  -d "email=example@mail.com"
```

<aside class="notice">
  <p>
    <b>
      All required parameters need to be sent through this API
    </b>
    whether the value of the parameter wants to be changed or not.
  </p>
</aside>

<table>
  <tbody>
    <tr>
      <td>
        <p><b>agent-id</b> <em>required</em></p>
        The transaction ID to be searched.
      </td>
    </tr>
  </tbody>
</table>

See [Create Agent Identity request parameters](#create-agent-identity-request-parameters) for detailed request body parameters.

<h3 id="update-agent-identity-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "id": 1,
  "company_id": 1,
  "name": "John Doe",
  "identity_type": "ktp",
  "identity_number": "1234567890123456",
  "birth_place": "Kota Depok",
  "birth_date": "31-10-1990",
  "gender": "male",
  "country_id": 1,
  "country_name": "Indonesia",
  "province_id": 12,
  "province_name": "Jawa Barat",
  "city_id": 184,
  "city_name": "Kota Depok",
  "district_id": 1234,
  "district_name": "Sukmajaya",
  "address": "Jalan Margonda Raya",
  "residence_country_id": 1,
  "residence_country_name": "Indonesia",
  "residence_province_id": 12,
  "residence_province_name": "Jawa Barat",
  "residence_city_id": 128,
  "residence_city_name": "Kota Depok",
  "residence_district_id": 1234,
  "residence_district_name": "Sukmajaya",
  "residence_address": "Jalan Margonda Raya",
  "occupation": "entrepreneur",
  "phone_number": "+628123456789",
  "email": "example@mail.com",
  "kyc_status": "BASIC_DATA"
}
```

See [Create Agent Identity response](#create-agent-identity-response-body) for detailed explanation of this endpoint's response.

<div></div>

## Get City List

An endpoint for obtaining the City List.

<aside class="warning">
  <p>
    This endpoint uses a different base URL than the other Flip for Business endpoints, i.e: <code>https://api.flip.id/kyc/api/v1</code>.
  </p>
</aside>

<aside class="notice">
  <p>
    You need to add a <code>Request-ID</code> header option when using this endpoint. <br>The Request-ID will be formed of <code>bigflip-{uuid}</code>, where the "uuid" (Universally unique identifier) has to be generated on your end. Example: <code>"Request-ID: bigflip-47EB7F57-5565-4BF0-B9DD-46C6268CEE71"</code>.
  </p>
</aside>

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://api.flip.id/kyc/api/v1/cities</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://api.flip.id/kyc-sandbox/api/v1/cities</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-city-list-request-headers">Request Headers</h3>

```http
GET /cities HTTP/1.1
Content-Type: multipart/form-data
Authorization: Basic [your encoded flip for business secret key]
Request-ID: bigflip-[generated uuid]
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>Content-Type</b> <em>required</em></p>
        Request content type: <code>multipart/form-data</code>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>Request-ID</b> <em>required</em></p>
        The Request-ID will be formed of <code>bigflip-[uuid]</code>, where the "uuid" (Universally unique identifier) has to be generated on your end. Example: <code>"Request-ID: bigflip-47EB7F57-5565-4BF0-B9DD-46C6268CEE71"</code>.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-city-list-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://api.flip.id/kyc/api/v1/cities?user_type=1&province_id=1");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: multipart/form-data",
  "Request-ID: bigflip-47EB7F57-5565-4BF0-B9DD-46C6268CEE71"
));

curl_setopt($ch, CURLOPT_USERPWD, $secret_key.":");

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```shell
curl https://api.flip.id/kyc/api/v1/cities?user_type=1&province_id=1 \
  -u <secret_key>: \
  -H "Content-Type=multipart/form-data" \
  -H "Request-ID=bigflip-47EB7F57-5565-4BF0-B9DD-46C6268CEE71"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>user_type</b> <em>required</em></p>
        Type of user.
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
                  <li>User type Agent: <code>1</code></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>province_id</b> <em>optional</em></p>
        Province ID for filtering the cities.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-city-list-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "cities": [
    {
      "id": 1,
      "name": "Depok"
    },
    ...
  ]
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>cities</b> <em>array</em></p>
        Array of <b>City Objects</b>
      </td>
    </tr>
  </tbody>
</table>

**City Object**

<table>
  <tbody>
    <tr>
      <td>
        <p><b>id</b> <em>integer</em></p>
        City ID
      </td>
    </tr>
    <tr>
      <td>
        <p><b>name</b> <em>string</em></p>
        City name
      </td>
    </tr>
  </tbody>
</table>
<div></div>

## Repair Data

An endpoint for resubmit the Agent's identity data.

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
      <td><span class="method put">PUT</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://api.flip.id/kyc/api/v1/users/:agent-id/repair</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://api.flip.id/kyc-sandbox/api/v1/users/:agent-id/repair</code></td>
    </tr>
  </tbody>
</table>

<h3 id="repair-data-request-headers">Request Headers</h3>

```http
PUT /users/[id]/repair HTTP/1.1
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

<h3 id="repair-data-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://api.flip.id/kyc/api/v1/users/1/repair");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_PUT, TRUE);

$payloads = [
  "user_type" => "1",
  "name" => "John Smith",
  "identity_type" => "1",
  "identity_number" => "1234567890123456",
  "birth_place" => "Kota Depok",
  "birth_date" => "31-10-1990",
  "gender" => "1",
  "occupation" => "entrepreneur",
  "country_id" => "1",
  "province_id" => "12",
  "city_id" => "184",
  "district_id" => "1234",
  "address" => "Jalan Margonda Raya",
  "residence_country_id" => "1",
  "residence_province_id" => "12",
  "residence_city_id" => "184",
  "residence_district_id" => "1234",
  "residence_address" => "Jalan Margonda Raya"
];

curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payloads));

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
curl https://api.flip.id/kyc/api/v1/users/1/repair \
  -X PUT \
  -u <secret_key>:\
  -H "Content-Type=multipart/form-data" \
  -H "Request-ID=bigflip-47EB7F57-5565-4BF0-B9DD-46C6268CEE71" \
  -d "user_type=1" \
  -d "name=John Smith" \
  -d "identity_type=1" \
  -d "identity_number=1234567890123456" \
  -d "birth_place=Kota Depok" \
  -d "birth_date=31-10-1990" \
  -d "gender=1" \
  -d "occupation=entrepreneur" \
  -d "country_id=1" \
  -d "province_id=12" \
  -d "city_id=184" \
  -d "district_id=1234" \
  -d "address=Jalan Margonda Raya" \
  -d "residence_country_id=1" \
  -d "residence_province_id=12" \
  -d "residence_city_id=184" \
  -d "residence_district_id=1234" \
  -d "residence_address=Jalan Margonda Raya"
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
        <p><b>name</b> <em>optional</em></p>
        Agent's full name.
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
                  <li>Alphanumeric</li>
                  <li>1-50 characters</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>identity_type</b> <em>optional</em></p>
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
                  <li><code>1</code> (National ID Card or KTP in Indonesia)</li>
                  <li><code>2</code> (Passport)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>identity_number</b> <em>optional</em></p>
        Identity number based on the type chosen.
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
                  Maximum characters for each identity type:
                </div>
                <ul>
                  <li>16 characters for KTP</li>
                  <li>20 characters for Passport</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>birth_date</b> <em>optional</em></p>
        Agent's birth date.
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
                  <li><code>DD-MM-YYYY</code> format</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>birth_place</b> <em>optional</em></p>
        Agent's birth place.
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
                  <li>Alphanumeric</li>
                  <li>255 characters</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>gender</b> <em>optional</em></p>
        Agent's gender.
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
                  <li><code>1</code> for male</li>
                  <li><code>2</code> for female</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>occupation</b> <em>optional</em></p>
        Agent's job.
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
                  <li><code>housewife</code></li>
                  <li><code>entrepreneur</code></li>
                  <li><code>private_employee</code></li>
                  <li><code>government_employee</code></li>
                  <li>
                    <code>foundation_board</code> (People who work at foundation
                    as an employee)
                  </li>
                  <li>
                    <code>indonesian_migrant_worker</code> (Also known as TKI)
                  </li>
                  <li>
                    <code>company</code> (If sender is a company, not
                    individual)
                  </li>
                  <li><code>others</code></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>country_id</b> <em>optional</em></p>
        Agent's country code based on the identity chosen.
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
                    Available values can be retrieved from the
                    <a href="/docs/agent-verification/get-country-list"
                      >country list API</a
                    >.
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
        <p><b>province_id</b> <em>optional</em></p>
        Agent's province code based on the identity chosen.
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
                    Available values can be retrieved from the
                    <a href="/docs/agent-verification/get-province-list"
                      >province list API</a
                    >.
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
        <p><b>city_id</b> <em>optional</em></p>
        Agent's city code based on the identity chosen.
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
                    Available values can be retrieved from the
                    <a href="/docs/agent-verification/get-city-list"
                      >city list API</a
                    >.
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
        <p><b>district_id</b> <em>optional</em></p>
        Agent's district code based on the identity chosen.
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
                    Available values can be retrieved from the
                    <a href="/docs/agent-verification/get-district-list"
                      >district list API</a
                    >.
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
        <p><b>address</b> <em>optional</em></p>
        Agent's address based on the identity chosen.
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
                  <li>10-300 character</li>
                  <li>Alphanumeric</li>
                  <li>
                    Spaces, <code>.</code>, <code>-</code>, <code>/</code>,
                    <code>(</code>, and <code>)</code>
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
        <p><b>residence_country_id</b> <em>optional</em></p>
        Agent's current residential address country code.
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
                    Available values can be retrieved from the
                    <a href="/docs/agent-verification/get-country-list"
                      >country list API</a
                    >.
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
        <p><b>residence_province_id</b> <em>optional</em></p>
        Agent's current residential address province code.
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
                    Available values can be retrieved from the
                    <a href="/docs/agent-verification/get-province-list"
                      >province list API</a
                    >.
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
        <p><b>residence_city_id</b> <em>optional</em></p>
        Agent's current residential address city code.
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
                    Available values can be retrieved from the
                    <a href="/docs/agent-verification/get-city-list"
                      >city list API</a
                    >.
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
        <p><b>residence_district_id</b> <em>optional</em></p>
        Agent's current residential address district code.
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
                    Available values can be retrieved from the
                    <a href="/docs/agent-verification/get-district-list"
                      >district list API</a
                    >.
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
        <p><b>residence_address</b> <em>optional</em></p>
        Agent's current residential address.
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
                  <li>10-300 character</li>
                  <li>Alphanumeric</li>
                  <li>
                    Spaces, <code>.</code>, <code>-</code>, <code>/</code>,
                    <code>(</code>, and <code>)</code>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="repair-data-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "user_id": 1,
  "user_type": 1,
  "name": "John Smith",
  "birth_place": "Kota Depok ",
  "birth_date": "31-10-1990T00:00:00Z",
  "gender": 1,
  "status": 20,
  "basic_data_filled": true,
  "identity_type": 1,
  "nik": "1234567890123456",
  "passport_number": null,
  "occupation": "entrepreneur",
  "country_id": 1,
  "province_id": 12,
  "city_id": 184,
  "district_id": 1234,
  "address": "Jalan Margonda Raya",
  "residence_country_id": 1,
  "residence_province_id": 12,
  "residence_city_id": 128,
  "residence_district_id": 1234,
  "residence_address": "Jalan Margonda Raya",
  "created_at": "2022-04-20T14:37:07+07:00",
  "updated_at": "2022-04-21T13:48:05+07:00"
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>user_id</b> <em>integer</em></p>
        ID of the Agent
      </td>
    </tr>
    <tr>
      <td>
        <p><b>user_type</b> <em>integer</em></p>
        User type Agent: <code>1</code>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>name</b> <em>string</em></p>
        Agent's full name
      </td>
    </tr>
    <tr>
      <td>
        <p><b>birth_date</b> <em>string</em></p>
        Agent's birth date
      </td>
    </tr>
    <tr>
      <td>
        <p><b>birth_place</b> <em>string</em></p>
        Agent's birth place
      </td>
    </tr>
    <tr>
      <td>
        <p><b>gender</b> <em>integer</em></p>
        Agent's gender. Possible values are:<br />
        <ul class="">
          <li><code>1</code> for male</li>
          <li><code>2</code> for female</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>integer</em></p>
        For this endpoint, the returned status will always be <code>20</code>.
        It means <code>PENDING</code> (See
        <a href="/docs/agent-verification/product-details/agents-kyc-status"
          >Agent's KYC Status</a
        >).
      </td>
    </tr>
    <tr>
      <td>
        <p><b>basic_data_filled</b> <em>boolean</em></p>
        Flag if the Agent's basic data has been filled
      </td>
    </tr>
    <tr>
      <td>
        <p><b>identity_type</b> <em>integer</em></p>
        Type of identity. Possible values:<br />
        <ul class="">
          <li><code>1</code>: National Id Card or KTP in Indonesia</li>
          <li><code>2</code>: Passport</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>nik</b> <em>string / null</em></p>
        Identity number value if the <code>identity_type</code> is KTP
        (<code>1</code>)
      </td>
    </tr>
    <tr>
      <td>
        <p><b>passport_number</b> <em>string / null</em></p>
        Identity number value if the <code>identity_type</code> is Passport
        (<code>2</code>)
      </td>
    </tr>
    <tr>
      <td>
        <p><b>occupation</b> <em>string</em></p>
        Agent's job. Possible values are:<br />
        <ul class="">
          <li><code>housewife</code></li>
          <li><code>entrepreneur</code></li>
          <li><code>private_employee</code></li>
          <li><code>government_employee</code></li>
          <li>
            <code>foundation_board</code> (People who work at foundation as an
            employee)
          </li>
          <li><code>indonesian_migrant_worker</code>(Also known as TKI)</li>
          <li><code>company</code>(If sender is a company, not individual)</li>
          <li><code>others</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>country_id</b> <em>integer</em></p>
        Agent's country code
      </td>
    </tr>
    <tr>
      <td>
        <p><b>province_id</b> <em>integer</em></p>
        Agent's province code
      </td>
    </tr>
    <tr>
      <td>
        <p><b>city_id</b> <em>integer</em></p>
        Agent's city ID in the identity type chosen
      </td>
    </tr>
    <tr>
      <td>
        <p><b>district_id</b> <em>integer</em></p>
        Agent's district ID in the identity type chosen
      </td>
    </tr>
    <tr>
      <td>
        <p><b>address</b> <em>string</em></p>
        Agent's address
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_country_id</b> <em>integer</em></p>
        Agent's current residential address country code
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_province_id</b> <em>integer</em></p>
        Agent's current residential address province code
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_city_id</b> <em>integer</em></p>
        Agent's current residential address city code
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_district_id</b> <em>integer</em></p>
        Agent's current residential address district code
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_address</b> <em>integer</em></p>
        Agent's current residential address
      </td>
    </tr>
    <tr>
      <td>
        <p><b>created_at</b> <em>string</em></p>
        Agent's identity data created at timestamp
      </td>
    </tr>
    <tr>
      <td>
        <p><b>updated_at</b> <em>string</em></p>
        Agent's identity data updated at timestamp
      </td>
    </tr>
  </tbody>
</table>

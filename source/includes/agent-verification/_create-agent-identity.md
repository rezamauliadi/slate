<div></div>

## Create Agent Identity

An endpoint to create company’s user (Agent) in Flip.

<aside class="warning">
  <ul>
    <li>
      Identity number and phone number must be unique for an Agent. You can’t create duplicated agents with the same identity number or the same phone number under one company account.
    </li>
    <li>
      Phone number must have been verified by the company before creating agent in Flip.
    </li>
  </ul>
</aside>

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method post">POST</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/agents</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/agents</code></td>
    </tr>
  </tbody>
</table>

<h3 id="create-agent-identity-request-headers">Request Headers</h3>

```http
POST /agents HTTP/1.1
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

<h3 id="create-agent-identity-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/agents");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

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
curl https://bigflip.id/api/v2/agents \
  -X POST \
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

<table>
  <tbody>
    <tr>
      <td>
        <p><b>name</b> <em>required</em></p>
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
        <p><b>identity_type</b> <em>required</em></p>
        Type of identity.
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
                  <li>
                    <code>ktp</code> (National Id Card or KTP in Indonesia)
                  </li>
                  <li><code>passport</code> (Passport)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>identity_number</b> <em>required</em></p>
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
        <p><b>birth_date</b> <em>required</em></p>
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
        <p><b>birth_place</b> <em>required</em></p>
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
        <p><b>country_id</b> <em>required</em></p>
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
        <p><b>province_id</b> <em>required</em></p>
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
        <p><b>city_id</b> <em>required</em></p>
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
        <p><b>district_id</b> <em>required</em></p>
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
        <p><b>address</b> <em>required</em></p>
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
        <p><b>gender</b> <em>required</em></p>
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
                  <li><code>male</code></li>
                  <li><code>female</code></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>occupation</b> <em>required</em></p>
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
        <p><b>phone_number</b> <em>required</em></p>
        Agent's phone number. It must be the one that has been verified by the
        company.
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
                  <li>If it starts with "0", length is 8-24 characters</li>
                  <li>If it starts with "+", length is 10-26 characters</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>use_identity_address</b> <em>optional</em></p>
        A flag to set if the current residential address of the Agent is the
        same as the identity address.
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
                  <li><code>0</code>: false</li>
                  <li><code>1</code>: true</li>
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
    <tr>
      <td>
        <p><b>email</b> <em>optional</em></p>
        Agent's email.
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
                    Alphanumeric with email format (<code>xxx@xxx.xxx</code>)
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

<h3 id="create-agent-identity-response-body">Response Body</h3>

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

<table>
  <tbody>
    <tr>
      <td>
        <p><b>id</b> <em>integer</em></p>
        Id of the created Agent.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>company_id</b> <em>integer</em></p>
        Id of the company which the Agent belongs to.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>name</b> <em>string</em></p>
        Agent's full name.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>identity_type</b> <em>string</em></p>
        Type of identity. Possible values are:<br />
        <ul>
          <li><code>ktp</code> (National Id Card or KTP in Indonesia)</li>
          <li><code>passport</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>identity_number</b> <em>string</em></p>
        Identity number based on the type chosen.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>birth_place</b> <em>string</em></p>
        Agent's birth place.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>birth_date</b> <em>string</em></p>
        Agent's birth date on <code>DD-MM-YYYY</code> format.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>gender</b> <em>string</em></p>
        Agent's gender. Possible values are:<br />
        <ul>
          <li><code>male</code></li>
          <li><code>female</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>country_id</b> <em>integer</em></p>
        Agent's country code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>country_name</b> <em>string</em></p>
        Agent's country name based on the country code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>province_id</b> <em>integer</em></p>
        Agent's province code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>provice_name</b> <em>string</em></p>
        Agent's province name based on the province code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>city_id</b> <em>integer</em></p>
        Agent's city ID in the identity type chosen.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>city_name</b> <em>string</em></p>
        Agent's city name based on the city code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>districict_id</b> <em>integer</em></p>
        Agent's district ID in the identity type chosen.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>districict_name</b> <em>string</em></p>
        Agent's district name based on the district code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>address</b> <em>string</em></p>
        Agent's address.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_country_id</b> <em>integer</em></p>
        Agent's current residential address country code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_country_name</b> <em>string</em></p>
        Agent's current residential address country name.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_province_id</b> <em>integer</em></p>
        Agent's current residential address province code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_provice_name</b> <em>string</em></p>
        Agent's current residential address province name.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_city_id</b> <em>integer</em></p>
        Agent's current residential address city code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_city_name</b> <em>string</em></p>
        Agent's current residential address city name.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_districict_id</b> <em>integer</em></p>
        Agent's current residential address district code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_districict_name</b> <em>string</em></p>
        Agent's current residential address district name.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>residence_address</b> <em>string</em></p>
        Agent's current residential address.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>occupation</b> <em>string</em></p>
        Agent's job. Possible values are:<br />
        <ul>
          <li><code>housewife</code></li>
          <li><code>entrepreneur</code></li>
          <li><code>private_employee</code></li>
          <li><code>government_employee</code></li>
          <li>
            <code>foundation_board</code> (People who work at foundation as an
            employee)
          </li>
          <li><code>indonesian_migrant_worker</code> (Also known as TKI)</li>
          <li><code>company</code>(If sender is a company, not individual)</li>
          <li><code>others</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>phone_number</b> <em>string</em></p>
        Agent's phone number.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>email</b> <em>string</em></p>
        Agent's email.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>kyc_status</b> <em>string</em></p>
        Agent's KYC status. Values can be seen on the KYC status enum.
      </td>
    </tr>
  </tbody>
</table>

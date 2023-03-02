<div></div>

## Upload Supporting Documents

This is an endpoint for uploading supporting documents other than the identity image. Supporting documents could be passport, student card, employee card, driving license, etc.

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
      <td><span class="method post">POST</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://api.flip.id/kyc/api/v1/documents</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://api.flip.id/kyc-sandbox/api/v1/documents</code></td>
    </tr>
  </tbody>
</table>

<h3 id="upload-supporting-document-request-headers">Request Headers</h3>

```http
POST /documents HTTP/1.1
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

<h3 id="upload-supporting-document-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://api.flip.id/kyc/api/v1/documents");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

$payloads = [
  "user_id" => "1",
  "user_type" => "1",
  "passport" => (binary)
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
curl https://api.flip.id/kyc/api/v1/documents \
  -X POST \
  -u <secret_key>:\
  -H "Content-Type=multipart/form-data" \
  -H "Request-ID=bigflip-47EB7F57-5565-4BF0-B9DD-46C6268CEE71" \
  -d "user_id=1" \
  -d "user_type=1" \
  -d "passport=(binary)"
```

<aside class="notice">
  <div>
    <p><strong>IMAGE VALIDATION</strong></p>
    <p><strong>At least 1 image</strong> should be sent via this API. Imagevalidations are as follows:</p>
    <ul>
      <li>Size less than 2MB</li>
      <li>Dimension between 256 (W) x 256 (H) and 4096 (W) x 4096 (H)</li>
      <li>File type should be <code>png</code>, <code>jpg</code>, or <code>jpeg</code></li>
      <li>Image should be uploaded right from Camera app (not Gallery or File or Document app)</li>
    </ul>
  </div>
</aside>

<table>
  <tbody>
    <tr>
      <td>
        <p><b>user_id</b> <em>required</em></p>
        Agent's ID
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
                  <li>Numeric</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
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
        <p><b>student_card</b> <em>optional</em></p>
        Student card image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>student_card_selfie</b> <em>optional</em></p>
        Selfie with student card image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>employee_card</b> <em>optional</em></p>
        Employee card image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>employee_card_selfie</b> <em>optional</em></p>
        Selfie with employee card image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>last_certificate</b> <em>optional</em></p>
        Certificate image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>last_certificate_selfie</b> <em>optional</em></p>
        Selfie with certificate image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>passport</b> <em>optional</em></p>
        Passport image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>passport_selfie</b> <em>optional</em></p>
        Selfie with passport image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>family_card</b> <em>optional</em></p>
        Family card image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>family_card_selfie</b> <em>optional</em></p>
        Selfie with family card image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>driving_license</b> <em>optional</em></p>
        Driving license image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>driving_license_selfie</b> <em>optional</em></p>
        Selfie with driving license image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>married_card</b> <em>optional</em></p>
        Married card image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>married_card_selfie</b> <em>optional</em></p>
        Selfie with married card image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>npwp</b> <em>optional</em></p>
        NPWP image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>npwp_selfie</b> <em>optional</em></p>
        Selfie with NPWP image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>bpjs_kesehatan</b> <em>optional</em></p>
        BPJS Kesehatan image file.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>bpjs_kesehatan_selfie</b> <em>optional</em></p>
        Selfie with BPJS Kesehatan image file.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="upload-supporting-document-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

[
  {
    "id": 1,
    "type": 1,
    "selfie": false,
    "path": "someurl.png",
    "created_at": "2022-01-02T15:38:49.317601182+07:00",
    "updated_at": "2022-01-02T15:38:49.317601182+07:00"
  }
]
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>id</b> <em>integer</em></p>
        ID of the uploaded image
      </td>
    </tr>
    <tr>
      <td>
        <p><b>type</b> <em>integer</em></p>
        User type: <code>1</code> (Agent)
      </td>
    </tr>
    <tr>
      <td>
        <p><b>selfie</b> <em>boolean</em></p>
        Flag if the uploaded file is the selfie image
      </td>
    </tr>
    <tr>
      <td>
        <p><b>path</b> <em>string</em></p>
        Uploaded file path URL
      </td>
    </tr>
    <tr>
      <td>
        <p><b>created_at</b> <em>string</em></p>
        Timestamp of creation of the uploaded file
      </td>
    </tr>
    <tr>
      <td>
        <p><b>updated_at</b> <em>string</em></p>
        Timestamp of update of the uploaded file
      </td>
    </tr>
  </tbody>
</table>

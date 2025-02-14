<div></div>

## Upload Agent Identity Image

This is an endpoint for uploading the created Agent's identity image. The identity image will be used by Flip for verifiying the agent data.

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
      <td><code>https://api.flip.id/kyc/api/v1/users/:agent-id/identities</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://api.flip.id/kyc-sandbox/api/v1/users/:agent-id/identities</code></td>
    </tr>
  </tbody>
</table>

<h3 id="upload-agent-identity-image-request-headers">Request Headers</h3>

```http
PUT /users/:agent-id/identities HTTP/1.1
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

<h3 id="upload-agent-identity-image-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://api.flip.id/kyc/api/v1/users/1/identities");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_PUT, TRUE);

$payloads = [
  "user_type" => "1",
  "image" => (binary),
  "identity_type" => "1",
  "selfie" => "1"
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
curl https://api.flip.id/kyc/api/v1/users/1/identities \
  -X PUT \
  -u <secret_key>:\
  -H "Content-Type=multipart/form-data" \
  -H "Request-ID=bigflip-47EB7F57-5565-4BF0-B9DD-46C6268CEE71" \
  -d "user_type=1" \
  -d "image=(binary)" \
  -d "identity_type=1" \
  -d "selfie=1"
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
        <p><b>image</b> <em>required</em></p>
        Image file that wants to be uploaded.
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
                  <li>Size less than 2MB</li>
                  <li>
                    Dimension between 256 (W) x 256 (H) and 4096 (W) x 4096 (H)
                  </li>
                  <li>
                    File type should be <code>png</code>, <code>jpg</code>, or
                    <code>jpeg</code>
                  </li>
                  <li>
                    Image should be uploaded right from Camera app (not Gallery
                    or File or Document app)
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
        <p><b>selfie</b> <em>optional</em></p>
        Flag denotes the uploaded file is the identity image or selfie with
        identity image.
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
                    <code>0</code>: False (default). Denotes that the uploaded
                    file is <strong>identity</strong> image.
                  </li>
                  <li>
                    <code>1</code>: True. Denotes that the uploaded file is
                    <strong>selfie with identity</strong> image.
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

<h3 id="upload-agent-identity-image-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "image_url": "someurl.png"
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>image_url</b> <em>string</em></p>
        URL of the uploaded image
      </td>
    </tr>
  </tbody>
</table>

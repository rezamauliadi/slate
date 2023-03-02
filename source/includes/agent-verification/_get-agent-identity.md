<div></div>

## Get Agent Identity

An endpoint for obtaining the Agent identity data.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
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

<h3 id="get-agent-identity-request-headers">Request Headers</h3>

```http
GET /agents HTTP/1.1
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

<h3 id="get-agent-identity-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/agents/1");
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
curl https://bigflip.id/api/v2/agents/1 \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

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

<h3 id="get-agent-identity-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "id": 1,
  "company_id": 1,
  "name": "John Doe",
  "identity_type": "ktp",
  "identity_number": "1234567890123456",
  "phone_number": "+628123456789",
  "email": "example@mail.com",
  "kyc_status": "APPROVED",
  "rejected_reason_code": null,
  "rejected_reason": "",
  "status": "ACTIVE",
  "created_at": "2022-01-01 13:00:00"
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>id</b> <em>integer</em></p>
        ID of the created Agent.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>company_id</b> <em>integer</em></p>
        ID of the company which the Agent belongs to.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>name</b> <em>integer</em></p>
        Agent's full name.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>identity_type</b> <em>integer</em></p>
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
    <tr>
      <td>
        <p><b>rejected_reason_code</b> <em>string</em></p>
        Rejected reason code for Agent's KYC. This value will be:
        <table class="desc-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>null</code></td>
              <td>If there's no value</td>
            </tr>
            <tr>
              <td><code>[integer]</code></td>
              <td>
                If there's a value, it will be an integer from
                <a
                  href="/docs/agent-verification/product-details/agents-kyc-rejection-reasons"
                  >Agent's KYC Rejection Reasons Code</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>rejected_reason</b> <em>string</em></p>
        Rejected reason for Agent's KYC. Full list of rejected reasons can be
        seen in the
        <a
          href="/docs/agent-verification/product-details/agents-kyc-rejection-reasons"
          >Agent's KYC Rejection Reasons Code</a
        >
        list.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>string</em></p>
        Enum of agent status:
        <table class="desc-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>0</code></td>
              <td>Deleted</td>
            </tr>
            <tr>
              <td><code>10</code></td>
              <td>Active</td>
            </tr>
            <tr>
              <td><code>20</code></td>
              <td>Blacklisted</td>
            </tr>
            <tr>
              <td><code>30</code></td>
              <td>Blocked</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>created_at</b> <em>string</em></p>
        Created timestamp
      </td>
    </tr>
  </tbody>
</table>

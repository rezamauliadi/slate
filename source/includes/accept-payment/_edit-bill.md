<div></div>

## Edit Bill

An endpoint to update the attributes of an existing payment link.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method put">PUT</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/pwf/:bill-id/bill</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/pwf/:bill-id/bill</code></td>
    </tr>
  </tbody>
</table>

<h3 id="edit-bill-request-headers">Request Headers</h3>

```http
PUT /pwf/:bill-id/bill HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: Basic <secret_key>: (notes with ":" after secret key)
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

<h3 id="edit-bill-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/pwf/1/bill");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_PUT, TRUE);

$payloads = [
  "title" => "Coffee Table",
  "amount" => 900000,
  "type" => "SINGLE",
  "expired_date" => "2022-12-30 15:50:00",
  "redirect_url" => "https://someurl.com",
  "status" => "INACTIVE",
  "is_address_required" => 0,
  "is_phone_number_required" => 0
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
curl https://bigflip.id/api/v2/pwf/1/bill \
  -X PUT \
  -u <secret_key>:\
  -H "Content-Type=application/x-www-form-urlencoded" \
  -d "title=Coffee Table" \
  -d "amount=900000" \
  -d "type=SINGLE" \
  -d "expired_date=2022-12-30 15:50:00" \
  -d "redirect_url=https://someurl.com" \
  -d "status=INACTIVE" \
  -d "is_address_required=0" \
  -d "is_phone_number_required=0"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>title</b> <em>optional</em></p>
        The title of the bill.
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
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>type</b> <em>optional</em></p>
        Bill type
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
                  <li><code>SINGLE</code>: single use</li>
                  <li><code>MULTIPLE</code>: multiple use</li>
                </ul>
                <div class="validation-table__helper-text" style="padding-top:0">
                  For bill created with step 3 only <code>SINGLE</code> is permissible.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>amount</b> <em>optional</em></p>
        Payment amount
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
                  <li>Minimum Rp10.000</li>
                  <li>Leave blank if want to set a flexible amount</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>expired_date</b> <em>optional</em></p>
        Bill expiry date. The bill can't be used any more beyond the expiry
        date.
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
                  <li>Format: <code>YYYY-MM-DD HH:mm</code></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>redirect_url</b> <em>optional</em></p>
        Redirect URL after payment is success.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>optional</em></p>
        Bill activation status.
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
                  <li><code>ACTIVE</code></li>
                  <li><code>INACTIVE</code></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>is_address_required</b> <em>optional</em></p>
        A flag if user needs to input their address when creating payment.
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
                  <li><code>0</code>: false (default)</li>
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
        <p><b>is_phone_number_required</b> <em>optional</em></p>
        A flag if user needs to input their phone number when creating payment.
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
                  <li><code>0</code>: false (default)</li>
                  <li><code>1</code>: true</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="edit-bill-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "link_id": 1,
  "link_url": "flip.id/$companyname/#coffeetable",
  "title": "Coffee Table",
  "type": "SINGLE",
  "amount": 900000,
  "redirect_url": "https://someurl.com",
  "expired_date": "2022-12-30 15:50:00",
  "created_from": "API",
  "status": "ACTIVE",
  "is_address_required": 0,
  "is_phone_number_required": 0
}

```

See [Bill Object](#bill-object) for the details.

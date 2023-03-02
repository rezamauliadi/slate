<div></div>

<h2 id="create-special-disbursement-v3">Create Special Disbursement</h2>

<aside class="warning">
  <ul>
    <li>
      Idempotency key in a Disbursement request is a must. It will be used to prevent accidentally created the same disbursement more than once. Please see more detail on <a href="#idempotent-request">Idempotent Request</a> section.
    </li>
    <li>
      <code>X-TIMESTAMP</code> in a Disbursement request is highly recommended by Flip. It will be used to validate your request in case of network error (timeout, delay, etc.). If a transaction is marked as timeout or stale, then it won't be processed by Flip. The duration until a transaction is marked stale is 60 seconds.
    </li>
    <li>
      Flip highly recommend performing the account inquiry before every disbursement request. This is to ensure that the destination account has been validated and to prevent any transaction issues (e.g failed transaction due to account can't accept fund/inactive/closed, etc.) Please see more detail on <a href="#bank-account-inquiry">Bank Account Inquiry</a> section.
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
      <td><code>https://bigflip.id/api/v3/special-disbursement</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v3/special-disbursement</code></td>
    </tr>
  </tbody>
</table>

<h3 id="create-special-disbursement-v3-request-headers">Request Headers</h3>

```http
POST /special-disbursement HTTP/1.1
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
    <tr>
      <td>
        <p><b>idempotency-key</b> <em>required</em></p>
        Idempotency key. Please see more detail on <a href="#idempotent-request">Idempotent Request</a> section.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>X-TIMESTAMP</b> <em>optional</em></p>
        Request timestamp. The format will follow the <b>ISO8601</b> format.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="create-special-disbursement-v3-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v3/special-disbursement");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

$payloads = [
  "account_number" => "1122333301",
  "bank_code" => "bni",
  "amount" => 10000,
  "remark" => "some remark",
  "recipient_city" => 391,
  "sender_country" => 100252,
  "sender_place_of_birth" => 391,
  "sender_date_of_birth" => "1992-01-01",
  "sender_identity_type" => "nat_id",
  "sender_name" => "John Doe",
  "sender_address" => "Some Address Street 123",
  "sender_identity_number" => "123456789",
  "sender_job" => "entrepreneur",
  "direction" => "DOMESTIC_SPECIAL_TRANSFER",
  "beneficiary_email" => "test@mail.com,user@mail.com"
];

curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payloads));

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/x-www-form-urlencoded",
  "idempotency-key: idem-key-1",
  "X-TIMESTAMP: 2022-01-01T15:02:15+0700"
));

curl_setopt($ch, CURLOPT_USERPWD, $secret_key.":");

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```shell
curl https://bigflip.id/api/v3/special-disbursement \
  -X POST \
  -u <secret_key>:\
  -H "Content-Type=application/x-www-form-urlencoded" \
  -H "idempotency-key=idem-key-1" \
  -H "X-TIMESTAMP=2022-01-01T15:02:15+0700" \
  -d "account_number=1122333301" \
  -d "bank_code=bni" \
  -d "amount=10000" \
  -d "remark=some remark" \
  -d "recipient_city=391" \
  -d "sender_country=100252" \
  -d "sender_place_of_birth=391" \
  -d "sender_date_of_birth=1992-01-01" \
  -d "sender_identity_type=nat_id" \
  -d "sender_name=John Doe" \
  -d "sender_address=Some Address Street 123" \
  -d "sender_identity_number=123456789" \
  -d "sender_job=entrepreneur" \
  -d "direction=DOMESTIC_SPECIAL_TRANSFER" \
  -d "beneficiary_email=test@mail.com,user@mail.com"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>account_number</b> <em>required</em></p>
        The account number of the recipient.
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
        <p><b>bank_code</b> <em>required</em></p>
        Bank code of the recipient bank.
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
                    Accepted values are listed
                    <a href="#destination-bank">here</a>
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
        <p><b>amount</b> <em>required</em></p>
        The amount of money to be disbursed.
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
        <p><b>remark</b> <em>optional</em></p>
        <p>
          Remark to be included in the transfer made to the recipient. Usually
          will appear as "berita transfer" or "remark" in the transfer receipt.
          Max length for this attribute is <b>18</b> characters.
        </p>
        <p>
          Only for disbursement with the bank code being <code>bri</code>, the
          remark will be prepended with the beneficiary name. Example:
          <code>tes remark</code> will be <code>john doe test remark</code>.
        </p>
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
                  <li>1-18 character</li>
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
        <p><b>recipient_city</b> <em>optional</em></p>
        City code of the recipient city.
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
                    Accepted values are listed
                    <a href="#city-list">here</a>
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
        <p><b>sender_country</b> <em>required</em></p>
        Country code of the sender's residence.
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
                    Accepted values are listed
                    <a href="#country-list">here</a>
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
        <p><b>sender_place_of_birth</b> <em>optional</em></p>
        <p>City/country code of the sender's place of birth.</p>
        <p>
          Use city code if the sender's place of birth is in Indonesia, and
          country code if outside Indonesia.
        </p>
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
                    Accepted values are listed
                    <a href="#city-country-list"
                      >here</a
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
        <p><b>sender_date_of_birth</b> <em>optional</em></p>
        Sender's birth date.
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
                  <li><code>YYYY-MM-DD</code> format</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_identity_type</b> <em>optional</em></p>
        Sender's ID type.
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
                    <code>nat_id</code>: National Id Card or KTP in Indonesia
                  </li>
                  <li><code>drv_lic</code>: Driving license</li>
                  <li><code>passport</code>: Passport</li>
                  <li><code>bank_acc</code>: Bank Account (DEFAULT)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_name</b> <em>required</em></p>
        The name of the user of the Money Transfer Company that act as a sender.
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
        <p><b>sender_address</b> <em>required</em></p>
        Sender's address.
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
        <p><b>sender_identity_number</b> <em>optional</em></p>
        Sender's ID number. Default value is from attribute
        <code>account_number</code>.
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
        <p><b>sender_job</b> <em>required</em></p>
        Sender's job.
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
        <p><b>direction</b> <em>required</em></p>
        The direction of the transaction.
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
                    <code>DOMESTIC_SPECIAL_TRANSFER</code><br />When the sender
                    and the recipient are both residing in Indonesia
                  </li>
                  <li>
                    <code>FOREIGN_INBOUND_SPECIAL_TRANSFER</code><br />When the
                    sender are in a foreign country, but the recipient are in
                    Indonesia
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
        <p><b>beneficiary_email</b> <em>optional</em></p>
        List of the recipient emails.
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
                  <li>Separate each email with a comma (if any)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="create-special-disbursement-v3-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "id": 11,
  "user_id": 20,
  "amount": 10000,
  "status": "DONE",
  "reason": "",
  "timestamp": "2017-08-24 21:21:23",
  "bank_code": "bni",
  "account_number": "1122333301",
  "recipient_name": "John Smith",
  "sender_bank": "bri",
  "remark": "some remark",
  "receipt": "someurl.jpg",
  "time_served": "2017-08-25 09:11:35",
  "bundle_id": 0,
  "company_id": 7,
  "recipient_city": 391,
  "created_from": "API",
  "direction": "FOREIGN_INBOUND_SPECIAL_TRANSFER",
  "sender": {
    "sender_name": "John Doe",
    "place_of_birth": 391,
    "date_of_birth": "1992-01-01",
    "address": "Some Address Street 123",
    "sender_identity_type": "nat_id",
    "sender_identity_number": "123456789",
    "sender_country": 100252,
    "job": "entrepreneur"
  },
  "fee": 1000,
  "beneficiary_email": "test@mail.com,user@mail.com",
  "idempotency_key": "idem-key-2"
}
```

This endpoint will return the [Disbursement Object](#money-transfer-objects) as a response.

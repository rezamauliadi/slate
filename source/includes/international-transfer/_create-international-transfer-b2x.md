<div></div>

## Create International Transfer B2C/B2B

An endpoint to create the international transfer B2C/B2C transaction.

<aside class="notice">
  <p>
    Please visit this <a href="https://storage.googleapis.com/flip-prod-dbs-assets/templates/International-Transfer-API-Required-Fields.xlsx" target="_blank" rel="noopener noreferrer">link</a> to see required fields for each country.
  </p>
</aside>

<aside class="warning">
  <ul>
    <li>
      Idempotency key in a Disbursement request is a must. It will be used to prevent accidentally created the same disbursement more than once. Please see more detail on <a href="#idempotent-request">Idempotent Request</a> section.
    </li>
    <li>
      <code>X-TIMESTAMP</code> in a Disbursement request is highly recommended by Flip. It will be used to validate your request in case of network error (timeout, delay, etc.). If a transaction is marked as timeout or stale, then it won't be processed by Flip. The duration until a transaction is marked stale is 60 seconds.
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
      <td><code>https://bigflip.id/api/v2/international-disbursement/create-with-attachment</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/international-disbursement/create-with-attachment</code></td>
    </tr>
  </tbody>
</table>

<h3 id="create-international-transfer-b2c-b2b-request-headers">Request Headers</h3>

```http
POST /international-disbursement/create-with-attachment HTTP/1.1
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

<h3 id="create-international-transfer-b2c-b2b-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/international-disbursement/create-with-attachment");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

$payloads = [
  "destination_country"=>"MYS",
  "source_country"=>"IDN",
  "transaction_type"=>"B2B",
  "amount"=>"300.6",
  "attachment_data"=> (binary),
  "attachment_type"=>"invoice",
  "beneficiary_account_number"=>"1187710200",
  "beneficiary_bank_id"=>"2122",
  "beneficiary_document_reference_number"=>"doc_reference_123456",
  "beneficiary_full_name"=>"Jane Doe",
  "beneficiary_remittance_purposes"=>"TRAVEL",
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
curl https://bigflip.id/api/v2/international-disbursement/create-with-attachment \
  -X POST \
  -u <secret_key>:\
  -H "Content-Type=application/x-www-form-urlencoded" \
  -H "idempotency-key=idem-key-1" \
  -H "X-TIMESTAMP=2022-01-01T15:02:15+0700" \
  -d "destination_country=MYS" \
  -d "source_country=IDN" \
  -d "transaction_type=B2B" \
  -d "amount=300.6" \
  -d "attachment_data=(binary)" \
  -d "attachment_type=invoice" \
  -d "beneficiary_account_number=1187710200" \
  -d "beneficiary_bank_id=2122" \
  -d "beneficiary_document_reference_number=doc_reference_123456" \
  -d "beneficiary_full_name=Jane Doe" \
  -d "beneficiary_remittance_purposes=TRAVEL"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>destination_country</b> <em>required</em></p>
        Destination country code using ISO 3166 (Alpha-3). See supported
        <a href="#supported-destination-countries">Destination Countries</a>.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>source_country</b> <em>required</em></p>
        Source country code using ISO 3166 (Alpha-3). Currently possible value
        is IDN.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>transaction_type</b> <em>required</em></p>
        Transaction type information. Possible values are:
        <ul>
          <li>B2C</li>
          <li>B2B</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>amount</b> <em>required</em></p>
        Amount of money that wants to be disbursed to the beneficiary (in
        beneficiary currency). Maximum 2 decimal places, for Japan there can be
        no decimal. Must be within the minimum and maximum amount based on
        transaction currency.
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>attachment_data</b>
          <em>required, if the destination country need it</em>
        </p>
        File of invoice for Malaysia B2B
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
                    Accepted extensions: txt, pdf, doc, docx, jpg, jpeg, png,
                    bmp, rtf, xls, xlsx
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
        <p>
          <b>attachment_type</b>
          <em>required, if the destination country need it</em>
        </p>
        Currently possible value is invoice for MYS
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_account_number</b> <em>required</em></p>
        Account number of the beneficiary bank
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_ach_code</b>
          <em>required, if the destination country need it</em>
        </p>
        Ach code of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_address</b>
          <em>required, if the destination country need it</em>
        </p>
        Address of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_bank_id</b>
          <em>required, if the destination country need it</em>
        </p>
        ID of beneficiary bank
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_bank_name</b>
          <em>required, if the destination country need it</em>
        </p>
        Name of beneficiary bank. Can be used for destination countries AUS and
        GBR
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_branch_number</b>
          <em>required, if the destination country need it</em>
        </p>
        Identifier of banks and branches across Japan
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_bsb_number</b>
          <em>required, if the destination country need it</em>
        </p>
        Identifier of banks and branches across Australia
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_city</b>
          <em>required, if the destination country need it</em>
        </p>
        City of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_document_reference_number</b>
          <em>required, if the destination country need it</em>
        </p>
        Reference number of document related to the transaction
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_email</b> <em>optional</em></p>
        Email of beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_full_name</b>
          <em>required, if the destination country need it</em>
        </p>
        Full name of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_iban</b>
          <em>required, if the destination country need it</em>
        </p>
        Identifier of individual account involved in the international
        transaction
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_id_expiration_date</b>
          <em>required, if the destination country need it</em>
        </p>
        ID expiration date using YYYY-MM-DD format
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_ifs_code</b>
          <em>required, if the destination country need it</em>
        </p>
        Indian financial system code
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_id_number</b>
          <em>required, if the destination country need it</em>
        </p>
        ID Number
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_msisdn</b>
          <em>required, if the destination country need it</em>
        </p>
        A number used to identify a phone number internationally
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_nationality</b>
          <em>required, if the destination country need it</em>
        </p>
        Country code using ISO 3166 (Alpha-3) of beneficiary nationality
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_postal_code</b>
          <em>required, if the destination country need it</em>
        </p>
        Postal code of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_province</b>
          <em>required, if the destination country need it</em>
        </p>
        Province or state of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_relationship</b>
          <em>required, if the destination country need it</em>
        </p>
        Relationship of beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_remittance_purposes</b>
          <em>required, if the destination country need it</em>
        </p>
        Purpose of remittance
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_sort_code</b>
          <em>required, if the destination country need it</em>
        </p>
        Digits of code which is used by British and Irish banks
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_source_of_funds</b>
          <em>required, if the destination country need it</em>
        </p>
        Source of funds
      </td>
    </tr>
  </tbody>
</table>

<h3 id="create-international-transfer-b2c-b2b-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "id": 10,
  "user_id": 12345,
  "company_id": 123456,
  "exchange_rate": 3341.96,
  "fee": 45000,
  "amount": 1004594,
  "source_country": "IDN",
  "destination_country": "MYS",
  "beneficiary_amount": 300.6,
  "beneficiary_currency_code": "MYR",
  "status": "PENDING",
  "timestamp": "(not set)",
  "time_served": "(not set)",
  "created_from": "API",
  "receipt": "",
  "transaction_type": "B2B",
  "idempotency_key": "idem-1",
  "beneficiary": {
    "full_name": "Jane Doe",
    "bank_account_number": "1187710200",
    "email": null,
    "bank": "AFFIN INVESTMENT BANK BERHAD",
    "msisdn": "",
    "nationality": "",
    "country": "MYS",
    "province": "",
    "city": "",
    "address": "",
    "postal_code": null,
    "relationship": "",
    "source_of_funds": "",
    "remittance_purpose": "TRAVEL",
    "iban": null,
    "swift_bic_code": null,
    "sort_code": null,
    "ifs_code": null,
    "bsb_number": null,
    "branch_number": null,
    "document_reference_number": "doc_reference_123456",
    "registration_number": null,
    "id_number": "",
    "id_expiration_date": "",
    "ach_code": ""
  },
  "sender": null,
  "reason": ""
}
```

This endpoint will return the [International Transfer Object](#international-transfer-objects) as a response.

<aside class="notice">
  <p>
    <b>Note</b>: For B2C/B2C transactions we will not return sender data payload as response, for you are also not required of sending sender data attributes.
  </p>
</aside>

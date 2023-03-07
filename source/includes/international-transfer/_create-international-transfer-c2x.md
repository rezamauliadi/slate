<div></div>

## Create International Transfer C2C/C2B

An endpoint to create the international transfer C2C/C2C transaction.

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
      <td><code>https://bigflip.id/api/v2/international-disbursement</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/international-disbursement</code></td>
    </tr>
  </tbody>
</table>

<h3 id="create-international-transfer-c2c-c2b-request-headers">Request Headers</h3>

```http
POST /international-disbursement HTTP/1.1
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

<h3 id="create-international-transfer-c2c-c2b-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/international-disbursement");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

$payloads = [
  "id_number" => "44943733088",
  "id_expiration_date" => "2022-11-29",
  "amount" => "52.63",
  "source_country" => "IDN",
  "destination_country" => "GBR",
  "transaction_type" => "C2C",
  "beneficiary_full_name" => "John Smith",
  "beneficiary_account_number" => "1122333300",
  "beneficiary_bank_id" => "1807",
  "beneficiary_bank_name" => "Allica Bank",
  "beneficiary_email" => "emial@email.com",
  "beneficiary_msisdn" => "09584008222",
  "beneficiary_nationality" => "IDN",
  "beneficiary_province" => "United Kingdom",
  "beneficiary_city" => "Manchester",
  "beneficiary_address" => "Mosley St Manchester",
  "beneficiary_postal_code" => "M2",
  "beneficiary_relationship" => "SON",
  "beneficiary_source_of_funds" => "BUSINESS",
  "beneficiary_remittance_purposes" => "EDUCATION",
  "beneficiary_sort_code" => "506967",
  "sender_name" => "John Doe",
  "sender_country" => 100252,
  "sender_place_of_birth" => 100230,
  "sender_date_of_birth" => "1963-12-01",
  "sender_address" => "Some Address Street 123",
  "sender_identity_type" => "nat_id",
  "sender_identity_number" => "1234789012347890",
  "sender_job" => "entrepreneur",
  "sender_email" => "sender@mail.com",
  "sender_city" => "Sender City",
  "sender_phone_number" => "+628123456789",
  "beneficiary_region" => "10274"
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
curl https://bigflip.id/api/v2/international-disbursement \
  -X POST \
  -u <secret_key>:\
  -H "Content-Type=application/x-www-form-urlencoded" \
  -H "idempotency-key=idem-key-1" \
  -H "X-TIMESTAMP=2022-01-01T15:02:15+0700" \
  -d "id_number=44943733088" \
  -d "id_expiration_date=2022-11-29" \
  -d "amount=52.63" \
  -d "source_country=IDN" \
  -d "destination_country=GBR" \
  -d "transaction_type=C2C" \
  -d "beneficiary_full_name=John Smith" \
  -d "beneficiary_account_number=1122333300" \
  -d "beneficiary_bank_id=1807" \
  -d "beneficiary_bank_name=Allica Bank" \
  -d "beneficiary_email=emial@email.com" \
  -d "beneficiary_msisdn=09584008222" \
  -d "beneficiary_nationality=IDN" \
  -d "beneficiary_province=United Kingdom" \
  -d "beneficiary_city=Manchester" \
  -d "beneficiary_address=Mosley St Manchester" \
  -d "beneficiary_postal_code=M2" \
  -d "beneficiary_relationship=SON" \
  -d "beneficiary_source_of_funds=BUSINESS" \
  -d "beneficiary_remittance_purposes=EDUCATION" \
  -d "beneficiary_sort_code=506967" \
  -d "sender_name=John Doe" \
  -d "sender_country=100252" \
  -d "sender_place_of_birth=100230" \
  -d "sender_date_of_birth=1963-12-01" \
  -d "sender_address=Some Address Street 123" \
  -d "sender_identity_type=nat_id" \
  -d "sender_identity_number=1234789012347890" \
  -d "sender_job=entrepreneur" \
  -d "sender_email=sender@mail.com" \
  -d "sender_city=Sender City" \
  -d "sender_phone_number=+628123456789" \
  -d "beneficiary_region=10274"
```

<table>
  <tbody>
    <tr>
      <td>
        <p>
          <b>id_number</b> <em>required, if the destination country need it</em>
        </p>
        Id number.
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>id_expiration_date</b>
          <em>required, if the destination country need it</em>
        </p>
        ID expiration date using YYYY-MM-DD&nbsp;format.
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
        <p><b>source_country</b> <em>required</em></p>
        Source country code using ISO 3166 (Alpha-3). Currently possible value
        is IDN.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>destination_country</b> <em>required</em></p>
        Destination country code using ISO 3166 (Alpha-3). See supported
        <a
          href="#supported-destination-countries"
          >Destination Countries list</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>transaction_type</b> <em>required</em></p>
        Transaction type information. Possible values are:
        <ul class="">
          <li>C2C</li>
          <li>C2B</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_full_name</b> <em>required</em></p>
        Full name of the beneficiary
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
        <p><b>beneficiary_bank_id</b> <em>required</em></p>
        ID of beneficiary bank
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_bank_name</b> <em>optional</em></p>
        Name of beneficiary bank. Can be used for destination countries AUS and
        GBR
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
          <b>beneficiary_msisdn</b>
          <em>required, if the destination country need it</em>
        </p>
        A number used to identify a phone number internationally
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_nationality</b> <em>required</em></p>
        Country code using ISO 3166 (Alpha-3) of beneficiary nationality
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_province</b> <em>required</em></p>
        Province or state of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_city</b> <em>required</em></p>
        City of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_address</b> <em>required</em></p>
        Address of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_postal_code</b> <em>optional</em></p>
        Postal code of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_relationship</b> <em>required</em></p>
        Relationship of beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_source_of_funds</b> <em>required</em></p>
        Source of funds
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_remittance_purposes</b> <em>required</em></p>
        Purpose of remittance
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
          <b>beneficiary_swift_bic_code</b>
          <em>required, if the destination country need it</em>
        </p>
        Identifier of specific bank during an international transaction
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
          <b>beneficiary_ifs_code</b>
          <em>required, if the destination country need it</em>
        </p>
        Indian financial system code
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
          <b>beneficiary_branch_number</b>
          <em>required, if the destination country need it</em>
        </p>
        Identifier of banks and branches across Japan
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
        <p>
          <b>beneficiary_registration_number</b>
          <em>required, if the destination country need it</em>
        </p>
        Registration number
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <b>beneficiary_region</b>
          <em>required, if the destination country need it</em>
        </p>
        Required for destination country China code.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_name</b> <em>required</em></p>
        The name of the user of the Money Transfer Company that act as a sender
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_country</b> <em>required</em></p>
        Country code of the Sender's residence. Available value can be retrieved
        from <a href="#country-list">country list</a>.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_place_of_birth</b> <em>required</em></p>
        City/country code of the Sender's place of birth. Use city code if the
        Sender's place of birth is in Indonesia, and country code if outside
        Indonesia. Available value can be retrieved from
        <a href="#city-and-country-list"
          >city/country list</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_date_of_birth</b> <em>required</em></p>
        Sender's date of birth with <code>YYYY-MM-DD</code> format
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_address</b> <em>required</em></p>
        Sender's address
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_identity_type</b> <em>required</em></p>
        Sender's ID type. Accepted value are:
        <ul class="">
          <li><code>nat_id</code> (National Id Card or KTP in Indonesia)</li>
          <li><code>passport</code> (Passport)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_identity_number</b> <em>required</em></p>
        Sender's ID number
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_job</b> <em>required</em></p>
        Sender's job. Accepted values are:
        <ul class="">
          <li><code>housewife</code></li>
          <li><code>entrepreneur</code></li>
          <li><code>private_employee</code></li>
          <li><code>government_employee</code></li>
          <li>
            <code>foundation_board</code> (People who work at foundation as an
            employee)
          </li>
          <li><code>indonesian_migrant_worker</code> (Also known as TKI)</li>
          <li><code>company</code> (If sender is a company, not individual)</li>
          <li><code>others</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_email</b> <em>required</em></p>
        Sender's email. Only accept one email.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_city</b> <em>required</em></p>
        Sender's city.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_phone_number</b> <em>required</em></p>
        Sender's phone number. Start with country phone code.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="create-international-transfer-c2c-c2b-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "id": 10,
  "user_id": 12345,
  "company_id": 123456,
  "exchange_rate": 19000.55,
  "fee": 88888,
  "amount": 1000000,
  "source_country": "IDN",
  "destination_country": "GBR",
  "beneficiary_amount": 52.63,
  "beneficiary_currency_code": "GBP",
  "status": "PENDING",
  "timestamp": "2021-12-02 15:27:24",
  "time_served": "(not set)",
  "created_from": "API",
  "receipt": "someurl.png",
  "transaction_type": "C2C",
  "idempotency_key": "idem-1",
  "beneficiary": {
    "id_number": "44943733088",
    "id_expiration_date": "2022-11-29",
    "full_name": "John Smith",
    "bank_account_number": "1122333300",
    "bank": "Allica Bank",
    "email": "emial@email.com",
    "msisdn": "09584008222",
    "nationality": "IDN",
    "country": "GBR",
    "province": "United Kingdom",
    "city": "Manchester",
    "address": "Mosley St Manchester",
    "postal_code": "M2",
    "relationship": "SON",
    "source_of_funds": "BUSINESS",
    "remittance_purpose": "EDUCATION",
    "iban": null,
    "swift_bic_code": null,
    "sort_code": "506967",
    "ifs_code": null,
    "bsb_number": null,
    "branch_number": null,
    "document_reference_number": null,
    "registration_number": null
  },
  "sender": {
    "name": "John Doe",
    "place_of_birth": 100230,
    "date_of_birth": "1963-12-01",
    "address": "Some Address Street 123",
    "identity_type": "nat_id",
    "identity_number": "1234789012347890",
    "country": 100252,
    "job": "entrepreneur",
    "email": "sender@mail.com",
    "city": "Sender City",
    "phone_number": "+628123456789"
  },
  "reason": ""
}
```

This endpoint will return the [International Transfer Object](#international-transfer-objects) as a response.

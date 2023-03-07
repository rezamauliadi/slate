<div></div>

## International Transfer Objects

This object is the one that will be returned by the Create International Transfer API, Get International Transfer API, and Get All International Transfers API.

### International Transfer Object

```json
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

<table>
  <tbody>
    <tr>
      <td>
        <p><b>id</b> <em>integer</em></p>
        ID of international transfer
      </td>
    </tr>
    <tr>
      <td>
        <p><b>user_id</b> <em>integer</em></p>
        ID creator of transaction
      </td>
    </tr>
    <tr>
      <td>
        <p><b>company_id</b> <em>integer</em></p>
        ID of company
      </td>
    </tr>
    <tr>
      <td>
        <p><b>exchange_rate</b> <em>float</em></p>
        The country exchange rates to IDR
      </td>
    </tr>
    <tr>
      <td>
        <p><b>fee</b> <em>float</em></p>
        Transfer fee to the country
      </td>
    </tr>
    <tr>
      <td>
        <p><b>amount</b> <em>float</em></p>
        Transfer amount in IDR
      </td>
    </tr>
    <tr>
      <td>
        <p><b>source_country</b> <em>string</em></p>
        Source country code using ISO 3166 (Alpha-3)
      </td>
    </tr>
    <tr>
      <td>
        <p><b>destination_country</b> <em>string</em></p>
        Destination country code using ISO 3166 (Alpha-3)
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_amount</b> <em>float</em></p>
        Amount to be received by beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_currency_code</b> <em>string</em></p>
        Currency code of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>string</em></p>
        Transaction status. Possible values are:
        <ul>
          <li>PENDING</li>
          <li>CANCELLED</li>
          <li>DONE</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>timestamp</b> <em>string</em></p>
        The time when the disbursement request was created. Time will be in
        GMT+7 with <code>yyyy-mm-dd hh:mm:ss</code> format
      </td>
    </tr>
    <tr>
      <td>
        <p><b>time_served</b> <em>string</em></p>
        The time when the disbursement is finished
      </td>
    </tr>
    <tr>
      <td>
        <p><b>created_from</b> <em>string</em></p>
        The channel of which the transaction was created. Possible values are:
        <ul>
          <li>API</li>
          <li>Dashboard</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>receipt</b> <em>string</em></p>
        URL of the transfer receipt
      </td>
    </tr>
    <tr>
      <td>
        <p><b>transaction_type</b> <em>string</em></p>
        Transaction type information. Possible values are:
        <ul>
          <li>C2C</li>
          <li>C2B</li>
          <li>B2C</li>
          <li>B2B</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>idempotency_key</b> <em>string</em></p>
        Idempotency key information
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary</b> <em>object</em></p>
        The <b>International Transfer Beneficiary Object</b>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender</b> <em>Object</em></p>
        The <b>International Transfer Sender Object</b>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>reason</b> <em>string</em></p>
        The reason value will be given if the transaction status is
        <code>CANCELLED</code>. Possible values can be seen in
        <a
          href="#cancelled-transaction-reasons"
          >Cancelled Transaction Reasons</a
        >
        table.
      </td>
    </tr>
  </tbody>
</table>

### International Transfer Benficiary Object

<table>
  <tbody>
    <tr>
      <td>
        <p><b>id_number</b> <em>string</em></p>
        Id number
      </td>
    </tr>
    <tr>
      <td>
        <p><b>id_expiration_date</b> <em>string</em></p>
        ID expiration date using YYYY-MM-DD&nbsp;format
      </td>
    </tr>
    <tr>
      <td>
        <p><b>full_name</b> <em>string</em></p>
        Full name of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>bank_account_number</b> <em>string</em></p>
        Account number of the beneficiary bank
      </td>
    </tr>
    <tr>
      <td>
        <p><b>bank</b> <em>string</em></p>
        Bank name of beneficiary bank
      </td>
    </tr>
    <tr>
      <td>
        <p><b>email</b> <em>string</em></p>
        Email of beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>msisdn</b> <em>string</em></p>
        A number used to identify a phone number internationally
      </td>
    </tr>
    <tr>
      <td>
        <p><b>nationality</b> <em>string</em></p>
        Country code using ISO 3166 (Alpha-3) of beneficiary nationality
      </td>
    </tr>
    <tr>
      <td>
        <p><b>country</b> <em>string</em></p>
        Country code using ISO 3166 (Alpha-3) of the beneficiary’s country
      </td>
    </tr>
    <tr>
      <td>
        <p><b>province</b> <em>string</em></p>
        Province or state of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>city</b> <em>string</em></p>
        City of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>address</b> <em>string</em></p>
        Address of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>postal_code</b> <em>string</em></p>
        Postal code of the beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>relationship</b> <em>string</em></p>
        Relationship of sender and beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>source_of_funds</b> <em>string</em></p>
        Source of funds
      </td>
    </tr>
    <tr>
      <td>
        <p><b>remittance_purpose</b> <em>string</em></p>
        Purpose of remittance
      </td>
    </tr>
    <tr>
      <td>
        <p><b>iban</b> <em>string</em></p>
        Identifier of individual account involved in the international
        transaction
      </td>
    </tr>
    <tr>
      <td>
        <p><b>swift_bic_code</b> <em>string</em></p>
        Identifier of specific bank during an international transaction
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sort_code</b> <em>string</em></p>
        Digits of code which is used by British and Irish banks
      </td>
    </tr>
    <tr>
      <td>
        <p><b>ifs_code</b> <em>string</em></p>
        Indian financial system code
      </td>
    </tr>
    <tr>
      <td>
        <p><b>bsb_number</b> <em>string</em></p>
        Identifier of banks and branches across Australia
      </td>
    </tr>
    <tr>
      <td>
        <p><b>branch_number</b> <em>string</em></p>
        Identifier of bank for Japan
      </td>
    </tr>
    <tr>
      <td>
        <p><b>document_reference_number</b> <em>string</em></p>
        Reference number of document related to the transaction
      </td>
    </tr>
    <tr>
      <td>
        <p><b>registration_number</b> <em>string</em></p>
        Registration number
      </td>
    </tr>
  </tbody>
</table>

### International Transfer Sender Object

<table>
  <tbody>
    <tr>
      <td>
        <p><b>name</b> <em>string</em></p>
        The name of the user of the Money Transfer Company that act as a sender
      </td>
    </tr>
    <tr>
      <td>
        <p><b>place_of_birth</b> <em>integer</em></p>
        City/country code of the Sender's place of birth
      </td>
    </tr>
    <tr>
      <td>
        <p><b>date_of_birth</b> <em>string</em></p>
        Sender's date of birth
      </td>
    </tr>
    <tr>
      <td>
        <p><b>address</b> <em>string</em></p>
        Sender's address
      </td>
    </tr>
    <tr>
      <td>
        <p><b>identity_type</b> <em>string</em></p>
        Sender's identity type. Possible values are:
        <ul>
          <li><code>nat_id</code></li>
          <li><code>passport</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>identity_number</b> <em>string</em></p>
        Sender's identity number
      </td>
    </tr>
    <tr>
      <td>
        <p><b>country</b> <em>integer</em></p>
        Country code of the Sender's country
      </td>
    </tr>
    <tr>
      <td>
        <p><b>job</b> <em>string</em></p>
        Sender's job. Possible values are:
        <ul>
          <li><code>housewife</code></li>
          <li><code>entrepreneur</code></li>
          <li><code>private_employee</code></li>
          <li><code>government_employee</code></li>
          <li><code>foundation_board</code></li>
          <li><code>indonesian_migrant_worker</code></li>
          <li><code>others</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>email</b> <em>string</em></p>
        Sender's email
      </td>
    </tr>
    <tr>
      <td>
        <p><b>city</b> <em>string</em></p>
        Sender's city
      </td>
    </tr>
    <tr>
      <td>
        <p><b>phone_number</b> <em>string</em></p>
        Sender's phone number
      </td>
    </tr>
  </tbody>
</table>

<div></div>

## Get Form Data

An endpoint to get form with all required fields to be completed to create the transactions, such as remittance purpose, source of fund, relationship with beneficiary, and the beneficiary’s bank account details.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/international-disbursement/form-data</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/international-disbursement/form-data</code></td>
    </tr>
  </tbody>
</table>

<h3 id="get-form-data-request-headers">Request Headers</h3>

```http
GET /international-disbursement/form-data HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: basic [your encoded flip for business secret key]
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

<h3 id="get-form-data-request-parameters">Request Parameters</h3>

```php
<?php

$ch = curl_init();
$secret_key = "yoursecretkeyhere";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/international-disbursement/form-data?country_iso_code=GBR&transaction_type=C2C");
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
curl https://bigflip.id/api/v2/international-disbursement/form-data?country_iso_code=GBR&transaction_type=C2C \
  -u <secret_key>: \
  -H "Content-Type=application/x-www-form-urlencoded"
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>country_iso_code</b> <em>optional</em></p>
        Country code using ISO 3166 (Alpha-3). You can choose multiple countries
        separate by comma.
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
                    Supported
                    <a href="#supported-destination-countries"
                      >Country ISO Codes</a
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
        <p><b>transaction_type</b> <em>required</em></p>
        Transaction type information.
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
                  <li>C2C</li>
                  <li>C2B</li>
                  <li>B2C</li>
                  <li>B2B</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="get-form-data-response-body">Response Body</h3>

```json
Status 200
Content-Type: application/json

{
  "country_iso_code": "GBR",
  "currency_code": "GBP",
  "beneficiary_relationships": {
    "SELF": "Diri sendiri",
    "BROTHER": "Saudara laki-laki",
    "SISTER": "Saudara perempuan",
    "SON": "Anak laki-laki",
    "DAUGHTER": "Anak perempuan",
    "NEPHEW": "Keponakan laki-laki",
    "NIECE": "Keponakan perempuan",
    "FATHER": "Ayah",
    "MOTHER": "Ibu",
    "UNCLE": "Paman",
    "AUNT": "Bibi",
    "COUSIN": "Sepupu",
    "FATHER_IN_LAW": "Bapak mertua",
    "MOTHER_IN_LAW": "Ibu mertua",
    "BROTHER_IN_LAW": "Ipar laki-laki",
    "SISTER_IN_LAW": "Ipar perempuan",
    "GRAND_FATHER": "Kakek",
    "GRAND_MOTHER": "Nenek",
    "HUSBAND": "Suami",
    "WIFE": "Istri",
    "FRIEND": "Teman"
  },
  "source_of_funds": {
    "BUSINESS": "Bisnis",
    "SALARY": "Gaji",
    "SAVINGS": "Tabungan",
    "GIFT": "Hadiah"
  },
  "remittance_purposes": {
    "FAMILY_SUPPORT": "Bantuan keluarga",
    "SALARY_PAYMENT": "Pembayaran gaji"
  },
  "banks": {
    "101": "Standard Chartered Bank",
    "102": "Bank Something",
    ...
  },
  "special_identifiers": [
    "sort_code"
  ],
  "regions": [],
  "nationality_countries": [
    {
      "iso_code": "AFG",
      "name": "Afghanistan",
      "country_code": "AF"
    },
    ...
  ]
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>country_iso_code</b> <em>string</em></p>
        Country code using ISO 3166 (Alpha-3)
      </td>
    </tr>
    <tr>
      <td>
        <p><b>currency_code</b> <em>string</em></p>
        Currency code of the country
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_relationships</b> <em>object</em></p>
        Object of relationship of beneficiary
      </td>
    </tr>
    <tr>
      <td>
        <p><b>source_of_funds</b> <em>object</em></p>
        Object of source of funds
      </td>
    </tr>
    <tr>
      <td>
        <p><b>remittance_purposes</b> <em>object</em></p>
        Object of purpose of remittance
      </td>
    </tr>
    <tr>
      <td>
        <p><b>banks</b> <em>object</em></p>
        Object of bank in specific country
      </td>
    </tr>
    <tr>
      <td>
        <p><b>special_identifiers</b> <em>array</em></p>
        Required identifier for specific country
      </td>
    </tr>
    <tr>
      <td>
        <p><b>regions</b> <em>array</em></p>
        Array of region object
      </td>
    </tr>
    <tr>
      <td>
        <p><b>nationality_countries</b> <em>array</em></p>
        Array of country object
      </td>
    </tr>
  </tbody>
</table>

<div></div>

## Money Transfer Objects

### Disbursement Object

This object is the one that will be returned by the Money Transfer API, Special Money Trasnfer API, and Agent Money Transfer API.

```json
{
  "id": 11,
  "user_id": 20,
  "amount": 10000,
  "status": "PENDING",
  "reason": "",
  "timestamp": "2017-08-24 21:21:23",
  "bank_code": "bni",
  "account_number": "1122333301",
  "recipient_name": "John Smith",
  "sender_bank": "bri",
  "remark": "some remark",
  "receipt": "",
  "time_served": "0000-00-00 00:00:00",
  "bundle_id": 0,
  "company_id": 7,
  "recipient_city": 391,
  "created_from": "API",
  "direction": "DOMESTIC_SPECIAL_TRANSFER",
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

<table>
  <tbody>
    <tr>
      <td>
        <p><b>id</b> <em>integer</em></p>
        Flip's transaction ID.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>user_id</b> <em>integer</em></p>
        Your account user ID in Flip's system.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>amount</b> <em>integer</em></p>
        The amount of money to be disbursed in IDR.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>string</em></p>
        Transaction status. Possible values are listed below.
        <table class="desc-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>PENDING</code></td>
              <td>Disbursement is still in process.</td>
            </tr>
            <tr>
              <td><code>CANCELLED</code></td>
              <td>
                The transaction is cancelled and the amount of the transaction
                plus the transaction fee will be credited to your balance. This
                will happen if the transfer process are failed for reason such
                as inactive recipient account, wrong account number, etc.
              </td>
            </tr>
            <tr>
              <td><code>DONE</code></td>
              <td>
                Disbursement process is finished and the money have been sent to
                the recipient.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>reason</b> <em>string</em></p>
        The reason value will be given if the transaction status is
        <code>CANCELLED</code>. Possible values are listed below.
        <table class="desc-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>INACTIVE_ACCOUNT</code></td>
              <td>Inactive account / Nomor rekening tidak aktif.</td>
            </tr>
            <tr>
              <td><code>NOT_REGISTERED_ACCOUNT</code></td>
              <td>Not registered account / Nomor rekening tidak terdaftar.</td>
            </tr>
            <tr>
              <td><code>CANT_RECEIVE_TRANSFER</code></td>
              <td>
                Can't receive transfer / Rekening tujuan tidak dapat menerima
                transfer.
              </td>
            </tr>
            <tr>
              <td><code>INTERMITTENT_DISTURBANCE_ON_BENEFICIARY_BANK</code></td>
              <td>
                Intermittent disturbance on destination bank / Bank tujuan
                sementara mengalami gangguan.
              </td>
            </tr>
            <tr>
              <td><code>BENEFICIARY_ACCOUNT_NOT_VERIFIED</code></td>
              <td>
                Account is not verified / Rekening tujuan belum terverifikasi.
              </td>
            </tr>
            <tr>
              <td><code>INSUFFICIENT_BALANCE</code></td>
              <td>
                Insufficient deposit balance / Deposit tidak cukup.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>timestamp</b> <em>string</em></p>
        The time when the disbursement request created. Time will be in GMT+7
        with <code>yyyy-mm-dd hh:mm:ss</code> format.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>bank_code</b> <em>string</em></p>
        Bank code of the recipient bank.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>account_number</b> <em>string</em></p>
        The account number of the recipient.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>recipient_name</b> <em>string</em></p>
        The name of the recipient account holder. If the account number haven't
        cached by Flip yet, this attribute will show <code>-</code> (dash)
        instead.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_bank</b> <em>string</em></p>
        The default sender bank in your account.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>remark</b> <em>string</em></p>
        Remark to be included in the transfer made to the recipient.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>receipt</b> <em>string</em></p>
        URL of the transfer receipt. The receipt will be a screenshot taken from
        the internet banking interface of each bank. This attribute will only
        show the url when the status is <code>DONE</code>.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>time_served</b> <em>string</em></p>
        The time when the transaction is finished. Will only show valid value
        when the status is <code>DONE</code>.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>bundle_id</b> <em>integer</em></p>
        The bundle id of the transaction made from Flip for Business Dashboard
        (csv upload or manual input). For the transaction created from API, the
        value will always be <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>company_id</b> <em>integer</em></p>
        Your Flip for Business account user ID in our system.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>recipient_city</b> <em>integer</em></p>
        City code of the recipient city.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>created_from</b> <em>string</em></p>
        The channel of which the transaction was created. Possible values are:
        <br />
        <ul>
          <li><code>API</code></li>
          <li><code>DASHBOARD</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>direction</b> <em>string</em></p>
        The direction of the transaction. Possible values are listed below.
        <table class="desc-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>DOMESTIC_TRANSFER</code></td>
              <td>
                Common Disbursement from Indonesia to Indonesian recipient.
              </td>
            </tr>
            <tr>
              <td><code>DOMESTIC_SPECIAL_TRANSFER</code></td>
              <td>
                Special disbursement from the user of a Money Transfer Company
                residing in Indonesia to Indonesian recipient.
              </td>
            </tr>
            <tr>
              <td><code>FOREIGN_INBOUND_SPECIAL_TRANSFER</code></td>
              <td>
                Special disbursement from the user of a Money Transfer Company
                residing in a foreign country to Indonesian recipient.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender</b> <em>object</em></p>
        Possible values are <code>null</code> if the transaction is a regular
        disbursement, and <b>Sender Object</b> if the transaction is a Special
        Money Transfer or Agent Money Transfer.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>fee</b> <em>integer</em></p>
        The fee of the transaction.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>beneficiary_email</b> <em>string</em></p>
        List of the recipient emails.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>idempotency_key</b> <em>string</em></p>
        The idempotency key used to create the disbursement.
      </td>
    </tr>
  </tbody>
</table>

### Sender Object

This object is the value of the `sender` attribute from the Disbursement Object.

<table>
  <tbody>
    <tr>
      <td>
        <p><b>sender_name</b> <em>string</em></p>
        The name of the user of the Money Transfer Company that act as a sender.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>place_of_birth</b> <em>integer</em></p>
        City/country code of the Sender's place of birth.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>date_of_birth</b> <em>string</em></p>
        Sender's date of birth.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>address</b> <em>string</em></p>
        Sender's address.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_identity_type</b> <em>string</em></p>
        Sender's identity type. Possible value are: <br />
        <ul>
          <li><code>nat_id</code></li>
          <li><code>drv_lic</code></li>
          <li><code>passport</code></li>
          <li><code>bank_acc</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_identity_number</b> <em>string</em></p>
        Sender's identity number.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_country</b> <em>integer</em></p>
        Country code of the Sender's country.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>job</b> <em>string</em></p>
        Sender's job. Possible values are:<br />
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
  </tbody>
</table>

<div></div>

## Accept Payment Objects

### Bill Object

```json
{
  "link_id": 3276,
  "link_url": "flip.id/$autobisonmaster/#testpgpayment303-5",
  "title": "Test PG Payment 303",
  "type": "SINGLE",
  "amount": 50000,
  "redirect_url": "",
  "expired_date": null,
  "created_from": "API",
  "status": "ACTIVE",
  "is_address_required": 0,
  "is_phone_number_required": 0,
  "step": 3,
  "customer": {
    "name": "Customer A",
    "email": "customer@gmail.com",
    "address": "Jl. Imam Bonjol No.39, Jakarta.",
    "phone": "+62888888888"
  },
  "bill_payment": {
    "id": "62d8ddde3e10b",
    "amount": 50000,
    "unique_code": 0,
    "status": "PENDING",
    "sender_bank": "mandiri",
    "sender_bank_type": "virtual_account",
    "receiver_bank_account": {
      "account_number": "3453280274531212",
      "account_type": "virtual_account",
      "bank_code": "mandiri",
      "account_holder": "Customer A"
    },
    "user_address": "Jl. Imam Bonjol No.39, Jakarta.",
    "user_phone": "+62888888888",
    "created_at": 1658379743
  },
  "payment_url": "https://someurl.com"
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>link_id</b> <em>integer</em></p>
        Bill link ID.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>link_url</b> <em>string</em></p>
        Bill link URL for the user.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>title</b> <em>string</em></p>
        Title of the bill.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>type</b> <em>string</em></p>
        Bill type:
        <ul>
          <li><code>SINGLE</code>: single use</li>
          <li><code>MULTIPLE</code>: multiple use</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>amount</b> <em>integer</em></p>
        Payment amount.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>redirect_url</b> <em>string</em></p>
        Redirect URL after payment is success.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>expired_date</b> <em>string</em></p>
        Bill expiry date. The bill can't be used any more beyond the expiry
        date.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>created_from</b> <em>string</em></p>
        Bill created from method.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>string</em></p>
        Bill activation status:
        <ul>
          <li><code>ACTIVE</code></li>
          <li><code>INACTIVE</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>is_address_required</b> <em>integer</em></p>
        A flag if user needs to input their address when creating payment.
        <ul>
          <li><code>0</code>: false</li>
          <li><code>1</code>: true</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>is_phone_number_required</b> <em>integer</em></p>
        A flag if user needs to input their phone number when creating payment.
        <ul>
          <li><code>0</code>: false</li>
          <li><code>1</code>: true</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>step</b> <em>integer</em></p>
        Which step the customers will be redirected to when opening the payment
        link.
        <ul>
          <li><code>1</code>: input-data (default)</li>
          <li><code>2</code>: payment-method</li>
          <li><code>3</code>: payment-confirmation</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>customer</b> <em>object</em></p>
        <strong
          >(Returned only if customer's merchant chooses step 2 or 3)</strong
        >
        <br />
        Customer Data that is being saved. See <b>Customer Object</b> table.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>bill_payment</b> <em>object</em></p>
        <strong>(Returned only if customer's merchant chooses step 3)</strong>
        <br />
        Bill Payment data that has been created. See
        <b>Bill Payment Object</b> table.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>payment_url</b> <em>string</em></p>
        <strong>(Returned only if customer's merchant chooses step 3)</strong
        ><br />
        URL of the confirmation link or instruction to do the payment action.<br />
        <ul>
          <li>
            URL confirmation link is for payment using bank transfer, VA payment
            method, and QRIS with internal url
          </li>
          <li>
            URL instruction link is for payment using e-wallet payment method
            with external url
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Customer Object

<table>
  <tbody>
    <tr>
      <td>
        <p><b>name</b> <em>string</em></p>
        Name of the Customer.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>email</b> <em>string</em></p>
        Email of the Customer.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>address</b> <em>string</em></p>
        Address of the Customer.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>phone</b> <em>string</em></p>
        Address of the Customer.
      </td>
    </tr>
  </tbody>
</table>

### Bill Payment Object

<table>
  <tbody>
    <tr>
      <td>
        <p><b>id</b> <em>string</em></p>
        ID of the transaction.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>amount</b> <em>integer</em></p>
        Amount of the transaction. Please note that
        <strong>in case of Bank Transfer payment option</strong>, the
        <strong>actual amount to be transferred by your customer</strong> must
        be equal to the <code>amount</code> + <code>unique_code</code> returned
        in the response.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>unique_code</b> <em>integer</em></p>
        Unique code of the transaction
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>string</em></p>
        Status of the transaction
        <table class="desc-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>NOT_CONFIRMED</code></td>
              <td>If the transaction was just created.</td>
            </tr>
            <tr>
              <td><code>PENDING</code></td>
              <td>If the transaction has been confirmed by the user.</td>
            </tr>
            <tr>
              <td><code>PROCESSED</code></td>
              <td>If the transaction is being processed by the system.</td>
            </tr>
            <tr>
              <td><code>CANCELED</code></td>
              <td>If the transaction is canceled.</td>
            </tr>
            <tr>
              <td><code>FAILED</code></td>
              <td>If the transaction is failed.</td>
            </tr>
            <tr>
              <td><code>DONE</code></td>
              <td>If the transaction is successfully done.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_bank</b> <em>string</em></p>
        Bank that is used for the payment. <br />
        See <b>Bank Code</b> constants.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>sender_bank_type</b> <em>string</em></p>
        Type of the sender bank that is used for the payment.
        <table class="desc-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>bank_account</code></td>
              <td>If the type of the sender bank uses bank transfer.</td>
            </tr>
            <tr>
              <td><code>virtual_account</code></td>
              <td>If the type of the sender bank uses a virtual account.</td>
            </tr>
            <tr>
              <td><code>wallet_account</code></td>
              <td>If the type of the sender bank uses e-wallet.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>receiver_bank_account</b> <em>object</em></p>
        Account of the receiver of the payment. <br />
        See <b>Bank Account Object</b> table.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>user_address</b> <em>string</em></p>
        Address of the User.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>user_phone</b> <em>string</em></p>
        Phone number of the User.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>created_at</b> <em>integer</em></p>
        Unix timestamps of the transaction when it is created.
      </td>
    </tr>
  </tbody>
</table>

### Bank Account Object

<table>
  <tbody>
    <tr>
      <td>
        <p><b>account_number</b> <em>string</em></p>
        Account number of the receiver bank.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>account_type</b> <em>string</em></p>
        Type of the account, the value could be:
        <ol>
          <li>virtual_account</li>
          <li>bank_account</li>
          <li>wallet_account</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>bank_code</b> <em>string</em></p>
        Bank code of the account. See <b>Bank Code Constants</b>.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>account_holder</b> <em>string</em></p>
        Name of the holder of the account.
      </td>
    </tr>
  </tbody>
</table>

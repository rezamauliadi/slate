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

| Attribute                | Description                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| link_id                  | Bill link ID.                                                                                                                                                                                                                                                                                                                                                 |
| link_url                 | Bill link URL for the user.                                                                                                                                                                                                                                                                                                                                   |
| title                    | Title of the bill.                                                                                                                                                                                                                                                                                                                                            |
| type                     | Bill type: <ul><li>`SINGLE`: single use</li><li>`MULTIPLE`: multiple use</li></ul>                                                                                                                                                                                                                                                                            |
| amount                   | Payment amount.                                                                                                                                                                                                                                                                                                                                               |
| redirect_url             | Redirect URL after payment is success.                                                                                                                                                                                                                                                                                                                        |
| expired_date             | Bill expiry date. The bill can't be used any more beyond the expiry date.                                                                                                                                                                                                                                                                                     |
| created_from             | Bill created from method.                                                                                                                                                                                                                                                                                                                                     |
| status                   | Bill activation status: <ul><li>`ACTIVE`</li><li>`INACTIVE`</li></ul>                                                                                                                                                                                                                                                                                         |
| is_address_required      | A flag if user needs to input their address when creating payment. <ul><li>`0`: false</li><li>`1`: true</li></ul>                                                                                                                                                                                                                                             |
| is_phone_number_required | A flag if user needs to input their phone number when creating payment. <ul><li>`0`: false</li><li>`1`: true</li></ul>                                                                                                                                                                                                                                        |
| step                     | Which step the customers will be redirected to when opening the payment link. <ul><li>`1`: input-data (default)</li><li>`2`: payment-method</li><li>`3`: payment-confirmation</li></ul>                                                                                                                                                                       |
| customer                 | **(Returned only if customer's merchant chooses step 2 or 3)** <br> Customer Data that is being saved. <br> See [Customer Object](#customer-object).                                                                                                                                                                                                          |
| bill_payment             | **(Returned only if customer's merchant chooses step 3)** <br> Bill Payment data that has been created. <br> See [Bill Payment Object](#bill-payment-object).                                                                                                                                                                                                 |
| payment_url              | **(Returned only if customer's merchant chooses step 3)** <br> URL of the confirmation link or instruction to do the payment action.<br><ul><li>URL confirmation link is for payment using bank transfer, VA payment method, and QRIS with internal url</li><li>URL instruction link is for payment using e-wallet payment method with external url</li></ul> |

### Customer Object

| Attribute | Description                   |
| --------- | ----------------------------- |
| name      | Name of the Customer.         |
| email     | Email of the Customer.        |
| phone     | Phone number of the Customer. |
| address   | Address of the Customer.      |

### Bill Payment Object

| Attribute             | Description                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | ID of the transaction.                                                                                                                                                                                                                                                                                                                                                                                        |
| amount                | Amount of the transaction. Please note that **in case of Bank Transfer payment option**, the **actual amount to be transferred by your customer** must be equal to the `amount` + `unique_code` returned in the response.                                                                                                                                                                                     |
| unique_code           | Unique code of the transaction                                                                                                                                                                                                                                                                                                                                                                                |
| status                | Status of the transaction <ul><li>`NOT_CONFIRMED`: If the transaction was just created.</li><li>`PENDING`: If the transaction has been confirmed by the user</li><li>`PROCESSED`: If the transaction is being processed by the system.</li><li>`CANCELED`: If the transaction is canceled.</li><li>`FAILED`: If the transaction is failed.</li><li>`DONE`: If the transaction is successfully done.</li></ul> |
| sender_bank           | Bank that is used for the payment. <br> See [Bank Code Constants](#accept-payment-bank-code).                                                                                                                                                                                                                                                                                                                 |
| sender_bank_type      | Type of the sender bank that is used for the payment. <ul><li>`bank_account`: if the type of the sender bank uses bank transfer.</li><li>`virtual_account`: if the type of the sender bank uses a virtual account.</li><li>`wallet_account`: if the type of the sender bank uses e-wallet.</li></ul>                                                                                                          |
| receiver_bank_account | Account of the receiver of the payment. <br> See [Bank Account Object](#bank-account-object).                                                                                                                                                                                                                                                                                                                 |
| user_address          | Address of the User.                                                                                                                                                                                                                                                                                                                                                                                          |
| user_phone            | Phone number of the User.                                                                                                                                                                                                                                                                                                                                                                                     |
| created_at            | Unix timestamps of the transaction when it is created.                                                                                                                                                                                                                                                                                                                                                        |

### Bank Account Object

| Attribute      | Description                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| account_number | Account number of the receiver bank.                                                                                         |
| account_type   | Type of the account, the value could be: <ol><li>`virtual_account`</li><li>`bank_account`</li><li>`wallet_account`</li></ol> |
| bank_code      | Bank code of the account. <br> See [Bank Code Constants](#accept-payment-bank-code).                                         |
| account_holder | Name of the holder of the account.                                                                                           |

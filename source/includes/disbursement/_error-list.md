<div></div>

<h2 id="money-transfer-error-list">Error List</h2>

As mentioned in the [General Response](#general-explanation) section, validation error or response with status code `422` will contain inner code. Here is the list of the code for Money Transfer:

```json
Status 422
Content-Type: application/json

{
  "code":"VALIDATION_ERROR",
  "errors": [
    {
      "attribute": "account_number",
      "code": 1025,
      "message": "The account number you're giving is invalid"
    }
  ]
}
```

| Error Code | Meaning                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 999        | Undefined error                                                                                                                                                                                          |
| 1001       | The related attribute should not be empty                                                                                                                                                                |
| 1002       | Value for the related attribute is considered not clean. Things that considered as not clean is html tag and `?`, `#`, `$`, `'` (single quote), `"` (double quote), and `;` character                    |
| 1020       | The related attribute can only contain number                                                                                                                                                            |
| 1021       | Transfer amount are less than the minimum amount (Rp10.000)                                                                                                                                              |
| 1022       | Transfer amount are more than the maximum amount                                                                                                                                                         |
| 1024       | Max char for the related attribute exceeded                                                                                                                                                              |
| 1025       | Invalid bank account number or possibly a virtual account number                                                                                                                                         |
| 1026       | The recipient bank account is suspected with fraud. You can’t send money to this account                                                                                                                 |
| 1027       | The account number is closed                                                                                                                                                                             |
| 1032       | Pagination should be a number more than 0                                                                                                                                                                |
| 1033       | Invalid bank code                                                                                                                                                                                        |
| 1034       | Country is invalid. Please see available [country code](#country-list)                                                                                                                                   |
| 1035       | Your balance is insufficient for doing this transaction                                                                                                                                                  |
| 1038       | Country/city code is not valid. The difference with `1037` code is: `1037` will occur if the attribute only allows country code while this code will occur if the attribute allows country or city code. |
| 1039       | Date format is invalid                                                                                                                                                                                   |
| 1040       | Date is invalid                                                                                                                                                                                          |
| 1041       | Attribute is invalid                                                                                                                                                                                     |
| 1042       | Minimum transfer ovo amount is Rp10.000                                                                                                                                                                  |
| 1043       | Bill title param is required when creating bill                                                                                                                                                          |
| 1070       | Max Beneficiary Email 20                                                                                                                                                                                 |
| 1071       | Invalid Beneficiary Email value                                                                                                                                                                          |
| 1072       | Disbursement ID not found                                                                                                                                                                                |
| 1073       | Disbursement Idempotency Key not found                                                                                                                                                                   |
| 1074       | Daily limit transaction exceeded                                                                                                                                                                         |
| 1080       | You have reached the maximum limit of active transactions. Please complete your previous transactions.                                                                                                   |
| 1086       | Minimum transfer dana amount is Rp20.500                                                                                                                                                                 |
| 1088       | The beneficiary bank is in severe disturbance                                                                                                                                                            |
| 1089       | The account number is Flip's. You can't send money to Flip account                                                                                                                                       |
| 1090       | Agent KYC status is not approved                                                                                                                                                                         |
| 1091       | Agent status is not active                                                                                                                                                                               |
| 1092       | Agent is not allowed to update                                                                                                                                                                           |
| 1093       | Cannot process transaction because bank is in cut off time. Try again later                                                                                                                              |
| 1094       | The sent request/transaction is marked as stale request (more than 1 minute than the server time)                                                                                                        |
| 1095       | `X-TIMESTAMP` format is invalid. It should follow the ISO8601 format                                                                                                                                     |
| 2001       | The related attribute should contain [at least or at most] [number] of characters                                                                                                                        |
| 2002       | The related attribute is duplicated                                                                                                                                                                      |
| 2003       | The related attribute is considered not clean. Only letters (a-z), numbers (0-9), spaces ( ), periods (.), commas (,), apostrophes (‘), and dashes (-) are allowed                                       |
| 2004       | The related attribute contains non-alphanumeric characters                                                                                                                                               |

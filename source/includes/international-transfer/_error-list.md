<div></div>

<h2 id="international-transfer-error-list">Error List</h2>

As mentioned in the [General Response](#general-explanation) section, validation error or response with status code `422` will contain inner code. Here is the list of the code for International Transfer:

```json
Status 422
Content-Type: application/json

{
  "code":"VALIDATION_ERROR",
  "errors": [
    {
      "attribute": "amount",
      "code": 1081,
      "message": "Maximum transfer amount for international disbursement is 500000.00"
    }
  ]
}
```

| Error code | Meaning                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 999        | Undefined error                                                                                                                                                                                        |
| 1020       | The related attribute can only contain number                                                                                                                                                          |
| 1024       | Max char for the related attribute exceeded                                                                                                                                                            |
| 1034       | Country is invalid. Please see available country code                                                                                                                                                  |
| 1038       | Country/city code is not valid. The difference with `1037` code is `1037` will occur if the attribute only allows country code while this code will occur if the attribute allows country or city code |
| 1039       | Date format is invalid                                                                                                                                                                                 |
| 1040       | Date is invalid                                                                                                                                                                                        |
| 1041       | Attribute is invalid                                                                                                                                                                                   |
| 1068       | Param `country_iso_code` is invalid                                                                                                                                                                    |
| 1069       | Param `transaction_type` is invalid                                                                                                                                                                    |
| 1081       | Maximum amount is exceeded                                                                                                                                                                             |
| 1082       | Minimum amount has not been reached                                                                                                                                                                    |
| 1083       | Cannot use decimal amount                                                                                                                                                                              |
| 1084       | The related attribute can only contain alphanumeric character                                                                                                                                          |
| 1085       | Minimum words required                                                                                                                                                                                 |
| 1087       | Attribute must consist of X character                                                                                                                                                                  |
| 1094       | The sent request/transaction is marked as stale request (more than 1 minute than the server time)                                                                                                      |
| 1095       | `X-TIMESTAMP` format is invalid. It should follow the ISO8601 format                                                                                                                                   |

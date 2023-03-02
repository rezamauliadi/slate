<div></div>

## Cancelled Transaction Reasons

These are the possible values for `reason` of International Transfer transaction if the transaction's `status` is `CANCELLED`.

| No. | Error Code                          | Description                                                                                       |
| --- | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| 1   | DECLINED                            | Transaction cannot be processed.                                                                  |
| 2   | CANCELLED                           | Transaction was cancelled by system.                                                              |
| 3   | REFUSED                             | Transaction was not complete because beneficiary declined the fund.                               |
| 4   | INVALID_BENEFICIARY                 | Transaction was failed due to invalid beneficiary account, e.g. bank account number.              |
| 5   | INVALID_BENEFICIARY_DETAILS         | Transaction was failed due to invalid beneficiary details, e.g. name, email, phone number.        |
| 6   | LIMITATIONS_ON_TRANSACTION_VALUE    | Transaction was failed due to value of transaction exceeding the limit.                           |
| 7   | SLS_SENDER                          | Transaction was rejected due to sender failing the sanction list screening.                       |
| 8   | SLS_BENEFICIARY                     | Transaction was not complete due to beneficiary failing the sanction list screening.              |
| 9   | BARRED_BENEFICIARY                  | Transaction was not complete due to beneficiary being blacklisted.                                |
| 10  | BARRED_SENDER                       | Transaction was rejected due to sender being blacklisted.                                         |
| 11  | COMPLIANCE_REASON                   | Transaction was rejected due to compliance reason.                                                |
| 12  | UNSUPPORTED_BENEFICIARY             | Transaction was not complete due to beneficiary's inability to receive the fund.                  |
| 13  | DUPLICATED_TRANSACTION              | Transaction failed due it was a duplicate.                                                        |
| 14  | LIMITATIONS_ON_SENDER_QUANTITY      | Transaction was rejected due to sender had exceeded the transaction count limit.                  |
| 15  | LIMITATIONS_ON_BENEFICIARY_QUANTITY | Transaction was not complete due to beneficiary had exceeded the transaction count limit.         |
| 16  | LIMITATIONS_ON_ACCOUNT_QUANTITY     | Transaction was not complete due to beneficiary had exceeded the account transaction count limit. |
| 17  | LIMITATIONS_ON_ACCOUNT_VALUE        | Transaction was not complete due to beneficiary had reached the account transaction value limit.  |

<div></div>

## International Transfer Callback

International transfer callback will be sent to you if you transaction status is changed. Please make sure that you have set the **International Transfer** callback URL on the [Flip for Business dashboard](https://business.flip.id/settings/api-setting).

<aside class="warning">
  <p>
    The provided
    <strong>URL must return a <code>200</code> HTTP Status Code</strong>. If the
    URL returns another HTTP Status Code or if our system doesn't receive any
    response within 30 seconds (timeout), our system will retry the request 5
    times, with a 2-minute interval for disbursement callback.
  </p>
</aside>

### Callback Payload

```
data={"id":10,"user_id":12345,"company_id":123456,"exchange_rate":19000.55,"amount":1000000,"beneficiary_amount":52.63,"fee":88888,"source_country":"IDN","destination_country":"GBR","beneficiary_currency_code":"GBP","status":"DONE","timestamp":"2021-12-02 15:27:24","time_served":"(not set)","created_from":"API","receipt":"someurl.png","transaction_type":"C2C","idempotency_key":"idem-1","beneficiary":{"full_name":"John Smith","bank_account_number":"1122333300","bank":"Allica Bank","email":"emial@email.com","msisdn":"09584008222","nationality":"IDN","country":"GBR","province":"United Kingdom","city":"Manchester","address":"Mosley St Manchester","postal_code":"M2","relationship":"SON","source_of_funds":"BUSINESS","remittance_purpose":"EDUCATION","iban":null,"swift_bic_code":null,"sort_code":"506967","ifs_code":null,"bsb_number":null,"branch_number":null,"document_reference_number":null,"registration_number":null},"sender":{"name":"John Doe","place_of_birth":100230,"date_of_birth":"1963-12-01","address":"Some Address Street 123","identity_type":"nat_id","identity_number":"1234789012347890","country":100252,"job":"entrepreneur","email":"sender@mail.com","city":"Sender City","phone_number":"+628123456789"}}&token=yourvalidationtoken
```

As described in the [Callback Product Details](#callback-details) section, we will hit your URL using **POST** request with content type `application/x-www-form-urlencoded`. The **raw** payload example is as follows.

### Data Object

```json
{
  "id": 10,
  "user_id": 12345,
  "company_id": 123456,
  "exchange_rate": 19000.55,
  "amount": 1000000,
  "beneficiary_amount": 52.63,
  "fee": 88888,
  "source_country": "IDN",
  "destination_country": "GBR",
  "beneficiary_currency_code": "GBP",
  "status": "DONE",
  "timestamp": "2021-12-02 15:27:24",
  "time_served": "(not set)",
  "created_from": "API",
  "receipt": "someurl.png",
  "transaction_type": "C2C",
  "idempotency_key": "idem-1",
  "beneficiary": {
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
  }
}
```

To extract the `data` object, you need to create a function like explained in the [Callback Product Details](#callback-details) section. This is the extracted `data` object in JSON format.

See the [International Transfer Object](#international-transfer-object) for details.

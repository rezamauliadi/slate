<div></div>

## Disbursement Callback

Disbursement callback will be sent to you if you transaction status is changed to `DONE` or `CANCELLED`. This callback is used for the V2 and V3 Disbursement. Please make sure that you have set the **Transaction** callback URL on the [Flip for Business dashboard](https://business.flip.id/settings/api-setting).

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
data={"id":10,"user_id":20,"amount":10000,"status":"DONE","reason":"","timestamp":"2017-08-28 14:32:47","bank_code":"bni","account_number":"1122333300","recipient_name":"John Doe","sender_bank":"bri","remark":"some remark","receipt":"someurl.jpg","time_served":"2023-01-25 11:11:11","bundle_id":0,"company_id":7,"recipient_city":391,"created_from":"API","direction":"DOMESTIC_TRANSFER","sender":null,"fee":1500}&token=yourvalidationtoken
```

As described in the [Callback Product Details](#callback-details) section, we will hit your URL using **POST** request with content type `application/x-www-form-urlencoded`. The **raw** payload example is as follows.

### Data Object

```json
{
  "id": 10,
  "user_id": 20,
  "amount": 10000,
  "status": "DONE",
  "reason": "",
  "timestamp": "2017-08-28 14:32:47",
  "bank_code": "bni",
  "account_number": "1122333300",
  "recipient_name": "John Doe",
  "sender_bank": "bri",
  "remark": "some remark",
  "receipt": "someurl.jpg",
  "time_served": "2023-01-25 11:11:11",
  "bundle_id": 0,
  "company_id": 7,
  "recipient_city": 391,
  "created_from": "API",
  "direction": "DOMESTIC_TRANSFER",
  "sender": null,
  "fee": 1500
}
```

To extract the `data` object, you need to create a function like explained in the [Callback Product Details](#callback-details) section. This is the extracted `data` object in JSON format.

See the [Disbursement Object](#money-transfer-objects) for details.

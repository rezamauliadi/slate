<div></div>

## Accept Payment Callback

Accept payment callback will be sent to you if there is a payment status that changed to `SUCCESSFUL`, `CANCELED`, or `FAILED`. Please make sure that you have set the **Accept Payment** callback URL on the [Flip for Business dashboard](https://business.flip.id/settings/api-setting).

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
data={"id":"FT1","bill_link":"flip.id/$<company_code>/#<product_code>","bill_link_id":4740,"bill_title":"Cimol Goreng","sender_name":"Jon Doe","sender_bank":"bni","amount":10000,"status":"SUCCESSFUL","sender_bank_type":"bank_account","created_at":"2021-11-29 10:10:10"}&token=yourvalidationtoken
```

As described in the [Callback Product Details](#callback-details) section, we will hit your URL using **POST** request with content type `application/x-www-form-urlencoded`. The **raw** payload example is as follows.

### Data Object

```json
{
  "id": "FT1",
  "bill_link": "flip.id/$<company_code>/#<product_code>",
  "bill_link_id": 4740,
  "bill_title": "Cimol Goreng",
  "sender_name": "Jon Doe",
  "sender_bank": "bni",
  "amount": 10000,
  "status": "SUCCESSFUL",
  "sender_bank_type": "bank_account",
  "created_at": "2021-11-29 10:10:10"
}
```

To extract the `data` object, you need to create a function like explained in the [Callback Product Details](#callback-details) section. This is the extracted `data` object in JSON format.

See the [Payment Object](#payment-object) for details.

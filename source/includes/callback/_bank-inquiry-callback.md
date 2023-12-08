<div></div>

## Bank Inquiry Callback

If our system has completed the bank account inquiry process, then we will hit the provided URL for the bank inquiry callback. Please make sure that you have set the **Bank Account Inquiry** callback URL on the <a href="https://business.flip.id/developer/api-setting" target="_blank">Flip for Business dashboard</a>.

<aside class="danger">
  <p>
    For this bank account inquiry callback,
    <strong>we will only send the callback once</strong>, so you have to make sure
    that your callback URL is always in good condition.
  </p>
</aside>

### Callback Payload

```
data={"bank_code":"bca","account_number":1234567890,"account_holder":"John Doe","status":"SUCCESS","inquiry_key":"aVncCDdKW9dciRvH9qSH"}&token=yourvalidationtoken
```

As described in the [Callback Product Details](#callback-details) section, we will hit your URL using **POST** request with content type `application/x-www-form-urlencoded`. The **raw** payload example is as follows.

### Data Object

```json
{
  "bank_code": "bca",
  "account_number": "1234567890",
  "account_holder": "John Doe",
  "status": "SUCCESS",
  "inquiry_key": "aVncCDdKW9dciRvH9qSH"
}
```

To extract the `data` object, you need to create a function like explained in the [Callback Product Details](#callback-details) section. This is the extracted `data` object in JSON format.

See the [Bank Account Inquiry response body](#bank-account-inquiry-response-body) for object details.

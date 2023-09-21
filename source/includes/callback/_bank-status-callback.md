<div></div>

## Bank Status Callback

A bank status info will be sent to you via the provided URL for Bank Disturbance callback. Please make sure that you have set the **Bank Status** callback URL on the [Flip for Business dashboard](https://business.flip.id/settings/api-setting).

<aside class="danger">
  <p>
    For this Bank Status info callback,
    <strong>we will only send the callback once</strong>, so you have to make sure
    that your callback URL is always in good condition.
  </p>
</aside>

### Callback Payload

```
data=[{"bank_code":"bca","status":"HEAVILY_DISTURBED","message":"Bank is under severe disturbance. Please wait until the next callback saying bank is free from the disturbance, before attempting a transaction to the bank.","updated_at":"2023-03-10 10:10:00"}]&token=yourvalidationtoken
```

As described in the [Callback Product Details](#callback-details) section, we will hit your URL using **POST** request with content type `application/x-www-form-urlencoded`. The **raw** payload example is as follows.

### Data Object

> **Example of bank is in down status**

```json
[
  {
    "bank_code": "bca",
    "status": "HEAVILY_DISTURBED",
    "message": "Bank is under severe disturbance. Please wait until the next callback saying bank is free from the disturbance, before attempting a transaction to the bank.",
    "updated_at": "2023-03-10 10:10:00"
  }
]
```

> **Example of bank is in delay status**

```json
[
  {
    "bank_code": "bca",
    "status": "DISTURBED",
    "message": "Bank is now free from severe disturbance. You can continue to transact with the beneficiary bank. However, at a slower pace and might be delayed.",
    "updated_at": "2023-03-10 10:10:00"
  }
]
```

> **Example of bank has been back to operational**

```json
[
  {
    "bank_code": "bca",
    "status": "OPERATIONAL",
    "message": "Bank is now free from severe disturbance. You can continue to transact to the beneficiary bank.",
    "updated_at": "2023-03-10 10:10:00"
  }
]
```

To extract the `data` object, you need to create a function like explained in the [Callback Product Details](#callback-details) section. This is the extracted `data` object in JSON format.

<table>
  <tbody>
    <tr>
      <td>
        <p><b>bank_code</b> <em>string</em></p>
        Flip's bank code. <code>cimb</code> is the code for both CIMB Niaga and CIMB Niaga Syariah
      </td>
    </tr>
    <tr>
      <td>
        <p><b>status</b> <em>string</em></p>
        The status of the disbursement process in related bank. Possible values are: <br>
        <table class="desc-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>OPERATIONAL</code></td>
              <td>
                Banks are operational, disbursement will be processed as soon as
                possible.
              </td>
            </tr>
            <tr>
              <td><code>DISTURBED</code></td>
              <td>
                Banks are slow or have another problem. Disbursement will still be
                processed, but in slower pace and might be delayed.
              </td>
            </tr>
            <tr>
              <td><code>HEAVILY_DISTURBED</code></td>
              <td>
                Banks are having an error, offline, or another problem that result in a
                nearly unusable system. Disbursement to this bank can not be processed
                in a short time, and maybe won't be processed in the same day. You can
                ask for a refund if this happen.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>message</b> <em>string</em></p>
        Description of the given status.
      </td>
    </tr>
    <tr>
      <td>
        <p><b>updated_at</b> <em>string</em></p>
        Timestamp of the status updation.
      </td>
    </tr>
  </tbody>
</table>

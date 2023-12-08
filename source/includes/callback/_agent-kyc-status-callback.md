<div></div>

## Agent's KYC Status Callback

A callback notification will be sent to your Agent KYC callback URL if there is a status update related to the agent's KYC process. Flip will send callback notification for KYC status which has status as below:

| Name                             | Code | Description                                     |
| :------------------------------- | :--- | :---------------------------------------------- |
| `UPLOAD_IDENTITY_SELFIE_FAILED`  | `15` | Selfie identity image is failed to be uploaded  |
| `UPLOAD_IDENTITY_SELFIE_SUCCESS` | `19` | Selfie identity image is succeed to be uploaded |
| `APPROVED`                       | `40` | KYC Approved                                    |
| `REJECTED`                       | `50` | KYC Rejected                                    |

Please make sure that you have set the **Agent KYC Verification** callback URL on the <a href="https://business.flip.id/developer/api-setting" target="_blank">Flip for Business dashboard</a>.

<aside class="danger">
  <p>
    For this Agent’s KYC status callback,
    <strong>we will only send the callback once</strong>, so you have to make sure
    that your callback URL is always in good condition.
  </p>
</aside>

### Callback Payload

```
data={"agent_id":1,"agent_name":"John Doe","kyc_status":"UPLOAD_IDENTITY_SELFIE_FAILED","rejected_reason_code":10,"rejected_reason":"The data that is filled in does not match with identity card","created_at":"2022-02-18 05:03:32","updated_at":"2022-03-17 09:48:58","submitted_at":"2022-03-17 09:48:58","verified_at":"2022-01-03 09:11:49"}&token=yourvalidationtoken
```

As described in the [Callback Product Details](#callback-details) section, we will hit your URL using **POST** request with content type `application/x-www-form-urlencoded`. The **raw** payload example is as follows.

### Data Object

```json
{
  "agent_id": 1,
  "agent_name": "John Doe",
  "kyc_status": "UPLOAD_IDENTITY_SELFIE_FAILED",
  "rejected_reason_code": 10,
  "rejected_reason": "The data that is filled in does not match with identity card",
  "created_at": "2022-02-18 05:03:32",
  "updated_at": "2022-03-17 09:48:58",
  "submitted_at": "2022-03-17 09:48:58",
  "verified_at": "2022-01-03 09:11:49"
}
```

To extract the `data` object, you need to create a function like explained in the [Callback Product Details](#callback-details) section. This is the extracted `data` object in JSON format.

See the [Get Agent Identity response](#get-agent-identity-response-body) for details.

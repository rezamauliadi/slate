<div></div>

## General Explanation

### Request Format

To know if the request is success or failed, you can see the [HTTP Status Code](http://www.restapitutorial.com/httpstatuscodes.html) on each response.

Every request should be sent as `application/x-www-form-urlencoded` unless told differently. The body of the request must be sent as post data (e.g `attribute=value&attribute2=value2&attribute3=value3`).

### General Error Response

`422` status code is used to indicate the mistake from your side. The common response for this status code is like on the right side:

```json
Status 422
Content-Type: application/json

{
  "code": [outer_code],
  "errors": [
    {
      "attribute": "[attribute]",
      "code": [inner_code],
      "message": "[message]"
    }
  ]
}
```

Possible value for `outer_code` is:

- `BALANCE_INSUFFICIENT`, happens when your Flip account balance is insufficient for the current transaction (balance < (transfer amount + transfer fee)).
- `VALIDATION_ERROR`, error related to the validation of your payload data.

Possible value for `inner_code` is all the code listed in respective products' Error List section:

- [Money Transfer error list](#money-transfer-error-list)
- [Special Money Transfer error list](#special-money-transfer-error-list)
- [Agent Money Transfer error list](#agent-money-transfer-error-list)
- [Agent Verification error list](#agent-verification-error-list)
- [Accept Payment error list](#accept-payment-error-list)
- [International Transfer error list](#international-transfer-error-list)

### Unauthorized Error Response

```json
Status 401
Content-Type: application/json

{
    "name": "Unauthorized",
    "message": "You are requesting with an invalid credential.",
    "status": 401,
}
```

This response will be sent if the value of Authorization heder or the secret key is invalid.

<div style="height: 50px;"></div>

### Not Found Error Response

```json
Status 404
Content-Type: application/json

{
    "name": "Not Found",
    "message": "Page not found.",
    "status": 404,
}
```

You will get this response if the url you're trying to access is wrong, or if the resource you're trying to access is not exist.

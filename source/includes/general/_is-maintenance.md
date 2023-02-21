<div></div>

## Is Maintenance

This endpoint will return information whether Flip currently is on maintenance or not. When Flip is on maintenance, you can't do any request except to this endpoint. Any request to other endpoint will return `401` status code.

<table>
  <tbody>
    <tr>
      <td>Method</td>
      <td><span class="method get">GET</span></td>
    </tr>
    <tr>
      <td>Production URL</td>
      <td><code>https://bigflip.id/api/v2/general/maintenance</code></td>
    </tr>
    <tr>
      <td>Sandbox URL</td>
      <td><code>https://bigflip.id/big_sandbox_api/v2/general/maintenance</code></td>
    </tr>
  </tbody>
</table>

### Request Headers

```http
GET /general/maintenance HTTP/1.1
Content-Type: application/x-www-form-urlencoded
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>Content-Type</b> <em>required</em></p>
        Request content type: <code>application/x-www-form-urlencoded</code>
      </td>
    </tr>
  </tbody>
</table>

### Request Parameters

```php
<?php

$ch = curl_init();
$secret_key = "wwwwwwwxxxxxxxaaaaaaabbbbbbbbbcccccdddd";

curl_setopt($ch, CURLOPT_URL, "https://bigflip.id/api/v2/general/maintenance");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/x-www-form-urlencoded"
));

curl_setopt($ch, CURLOPT_USERPWD, $secret_key.":");

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```shell
curl https://bigflip.id/api/v2/general/maintenance \
    -u <secret_key>:
```

This API doesn’t have any request parameter available.

### Response Body

```json
Status 200
Content-Type: application/json

{
  "maintenance": false
}
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>maintenance</b> <em>boolean</em></p>
        Flip maintenance status
      </td>
    </tr>
  </tbody>
</table>

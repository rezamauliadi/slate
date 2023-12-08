<div></div>

# Callback

## Callback Details

When your transaction status changed or when our system has completed the bank account inquiry process, we will hit the URL you've provided in your [Flip for Business dashboard](https://business.flip.id/developer/api-setting).

<aside class="notice">
  <p>
    Make sure you have set the required callback URLs in your
    <a
      href="https://business.flip.id/developer/api-setting"
      target="_blank"
      rel="noopener noreferrer"
      >Flip for Business dashboard</a
    >.
  </p>
</aside>

### The Callback Payload

We will hit your URL using **POST** request with content type `application/x-www-form-urlencoded`.

<aside class="danger">
  <p>
    The provided
    <strong>URL must return a <code>200</code> HTTP Status Code</strong>. If the
    URL returns another HTTP Status Code or if our system doesn't receive any
    response within 30 seconds (timeout), our system will retry the request 5
    times, with a 2-minute interval for the transaction callback (Money
    Transfer, Accept Payment, International Transfer).
  </p>
</aside>

The callback payload will be looked like this:

<div></div>

```
data={"bank_code":"bca","account_number":1234567890,"account_holder":"John Doe","status":"SUCCESS","inquiry_key":"aVncCDdKW9dciRvH9qSH"}&token=yourvalidationtoken
```

<table>
  <tbody>
    <tr>
      <td>
        <p><b>data</b> <em>String</em></p>
        JSON array string with content exactly the same as the response of
        disbursement or bank account inquiry (see example on the right side)
      </td>
    </tr>
    <tr>
      <td>
        <p><b>token</b> <em>String</em></p>
        Validation token to ensure that the callback is coming from our server.
        You can get your token in your
        <a
          href="https://business.flip.id/developer/api-setting"
          target="_blank"
          rel="noopener noreferrer"
          >Flip for Business dashboard</a
        >.
      </td>
    </tr>
  </tbody>
</table>

### How to Extract the Values

```
<?php

$data = isset($_POST['data']) ? $_POST['data'] : null;
$token = isset($_POST['token']) ? $_POST['token'] : null;

if($token === 'the_token_you_get_from_big_flip_dashboard'){
	$decoded_data = json_decode($data);
	print_r($decoded_data);
}
```

You need to create the function to extract the values by yourself. This is an example code of how to extract the callback values with PHP.

<div></div>

## Authentication

```php
<?php
$secret_key = "wwwwwwwxxxxxxxaaaaaaabbbbbbbbbcccccdddd";

$curl = curl_init();
curl_setopt($curl, CURLOPT_USERPWD, $secret_key.":");

// OR

<?php
$secret_key = "wwwwwwwxxxxxxxaaaaaaabbbbbbbbbcccccdddd";
$encoded_auth = base64_encode($secret_key.":");

$curl = curl_init();
curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Basic ".$encoded_auth]);
```

```shell
curl --user <wwwwwwwxxxxxxxaaaaaaabbbbbbbbbcccccdddd>: https://bigflip.id/api/v2/disbursement
```

We are using **Basic Authentication** by including `Authorization` header in each of your request. Value of the header is the provided Secret Key from your <a href="https://business.flip.id/settings/api-setting" target="_blank">Flip for Business dashboard</a>. You should include your secret key like a usual basic auth request, and use the secret key as the username:

`Authorization: Basic [base64encode(<secret_key>+":")]`

You can also see another example of how to include the secret key on the right column.

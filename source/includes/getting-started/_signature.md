<div></div>

## Signature

Signature is used to secure your request API, to avoid attackers change your payload. Signature is optional, by default it is disabled. Signature only for API that related to **Disbursement**.

```php
<?php
// Generate public key and private key pair.
$key_pair = openssl_pkey_new(array(
            'private_key_bits' => 2048,
            'private_key_type' => OPENSSL_KEYTYPE_RSA,
        ));
$details = openssl_pkey_get_details($key_pair);
$public_key = $details['key'];

$private_key = '';
openssl_pkey_export($key_pair, $private_key);

// check/print your public key and private key pair.
echo $public_key;
echo $private_key;
```

```shell
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -out public.pem -outform PEM -pubout

cat private.pem
cat public.pem
```

If you want to enable a signature, please do the following steps:

1. Generate public key and private key pair. Use algorithm OPENSSL_KEYTYPE_RSA 2048 bits.
2. Send the public key to flip.id and inform when you ready to request with signature.
3. Every request for API **Disbursement**, add header X-Signature. Generate signature with your private key, the input data is your parameter POST & GET request encoded in string, all data type should be a string. Signature use algorithm `sha256WithRSAEncryption` and encode with base64.

![Big Flip Signature](bigflip_signature.jpg)

```php
<?php
$payloads = [
    "account_number" => "0437051936",
    "bank_code" => "bni",
    "amount" => "10000",
    "remark" => "testing",
    "recipient_city" => "391"
];
$private_key = "YOUR_PRIVATE_KEY";
$payload_str = json_encode($payloads);
openssl_sign($payload_str, $signature, $private_key, "sha256WithRSAEncryption");
$signature = base64_encode($signature);

// Add header in your disbursement request
$headers = [
	"Content-Type: application/x-www-form-urlencoded",
	"X-Signature: ".$signature
]
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```shell
# Assume data is file that contain your string payload
# Example: '{"account_number":"0437051936","bank_code":"bni","amount":"10000","remark":"testing","recipient_city":"391"}'

openssl dgst -sha256 -sign private.pem -out data.signed data
openssl base64 -in data.signed -out data.signed.b64

# Generated signature in file data.signed.b64

curl https://bigflip.id/api/v2/disbursement \
	--header 'X-Signature: YOUR_GENERATED_SIGNATURE' \
    -X POST \
    -u <secret_key>: \
    -d account_number="0437051936" \
    -d bank_code="bni" \
    -d amount="10000" \
    -d remark="testing" \
    -d recipient_city="391"
```

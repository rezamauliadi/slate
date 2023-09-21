<h2 id="accept-payment-error-list">Error List</h2>

As mentioned [here](#general-explanation), validation error or response with status code `422` will contain inner code. Here is the list of the code for Accept Payment:

| Error code | Meaning |
| --- | --- |
| 999 | Undefined error |
| 1044 | Bill type param is required when creating bill |
| 1045 | Bill type param is invalid when creating bill |
| 1046 | Maximum amount for the bill is Rp10.000.000 |
| 1047 | Bill expired date param is invalid when creating bill |
| 1048 | Bill link has already expired |
| 1049 | Bill link has already used |
| 1050 | Bill link ID is not Found |
| 1051 | Param `product_code` is required |
| 1052 | Param `page` should be a number and more than 0 |
| 1053 | Param `pagination` should be a number and more than 0 |
| 1054 | Product bill link ID is not found |
| 1055 | Param `start_date` is invalid |
| 1056 | Param `end_date` is invalid |
| 1057 | Invalid date range. Param `end_date` must be greater than `start_date` |
| 1058 | Minimum transfer amount is Rp10.000 |
| 1059 | Param `redirect_url` is invalid |
| 1060 | Param `status` is invalid |
| 1061 | Param `title` is invalid |
| 1062 | Param `sort_by` is invalid |
| 1063 | Param `sort_type` is invalid |
| 1064 | Param `amount` must be a number |
| 1067 | Param `amount` is exceeding company’s PWF maximum limit amount |

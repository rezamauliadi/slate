<div></div>

<h2 id="agent-verification-error-list">Error List</h2>

This error list is related to the Agent's Verification services.

> **Error format**

```json
{
  "errors": [
    {
      "code": [error code],
      "message": [error message]
    }
  ]
}
```

<table>
  <thead>
    <tr>
      <th>Error Code</th>
      <th>Meaning</th>
      <th>Expectation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>400</td>
      <td>Invalid user ID</td>
      <td>Recheck the userID in URL params</td>
    </tr>
    <tr>
      <td>401</td>
      <td>Invalid token</td>
      <td>
        <ol>
          <li>Header Request-ID must be filled</li>
          <li>Missing <code>user_type</code></li>
          <li>IP must be whitelisted</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>403</td>
      <td>Forbidden</td>
      <td>Missing <code>user_type</code></td>
    </tr>
    <tr>
      <td>404</td>
      <td>Endpoint not found</td>
      <td>Recheck API URL</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Internal server error</td>
      <td>Reach out to FLIP KYC team</td>
    </tr>
    <tr>
      <td>503</td>
      <td>Internal server error</td>
      <td>Reach out to FLIP KYC team</td>
    </tr>
    <tr>
      <td>1001</td>
      <td>Attribute payload is empty</td>
      <td>Fill the attribute payload</td>
    </tr>
    <tr>
      <td>1002</td>
      <td>Param attribute is invalid</td>
      <td>Ensure attribute's validation</td>
    </tr>
    <tr>
      <td>2001</td>
      <td>Param attribute characters is invalid</td>
      <td>Ensure attribute's validation</td>
    </tr>
    <tr>
      <td>2002</td>
      <td>Param attribute is duplicate</td>
      <td>Use different identity number</td>
    </tr>
    <tr>
      <td>2003</td>
      <td>Param attribute contains non-sterile characters</td>
      <td>Ensure attribute's validation</td>
    </tr>
    <tr>
      <td>2004</td>
      <td>Param attribute contains non-alphanumeric characters</td>
      <td>Ensure attribute's validation</td>
    </tr>
    <tr>
      <td>1011</td>
      <td>Agent ID is not found</td>
      <td>Agent ID not registered yet</td>
    </tr>
    <tr>
      <td>4001</td>
      <td>Invalid input parameter</td>
      <td>Ensure attribute's validation</td>
    </tr>
    <tr>
      <td>4002</td>
      <td>Invalid user type</td>
      <td>Ensure attribute's validation</td>
    </tr>
    <tr>
      <td>4003</td>
      <td>Invalid user ID</td>
      <td>Recheck the userID in URL params</td>
    </tr>
    <tr>
      <td>4004</td>
      <td>Invalid identity type</td>
      <td>Ensure attribute's validation</td>
    </tr>
    <tr>
      <td>4006</td>
      <td>Rejected reason is not match</td>
      <td>
        Reheck rejected_reason_code. It should match with the API Repair type.
      </td>
    </tr>
    <tr>
      <td>4007</td>
      <td>Image file size is too large</td>
      <td>Image size should be less than 2MB</td>
    </tr>
    <tr>
      <td>4008</td>
      <td>Image is not valid</td>
      <td>Please ensure image validations</td>
    </tr>
    <tr>
      <td>4009</td>
      <td>Failed reading image data</td>
      <td>Ensure uploaded image is not corrupted</td>
    </tr>
    <tr>
      <td>4010</td>
      <td>Invalid agent status</td>
      <td>
        Depends on which API this error displayed:
        <ol>
          <li>
            <strong>KYC Submission</strong>: Ensure agent's KYC status is 19
            (<code>UPLOAD_IDENTITY_SELFIE_SUCCESS</code>)
          </li>
          <li>
            <strong>Upload Supporting Documents</strong>: Ensure agent's KYC
            status is 50 (<code>REJECTED</code>) or 15
            (<code>UPLOAD_IDENTITY_SELFIE_FAILED</code>)
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>4011</td>
      <td>Maximum retry has been achieved</td>
      <td>Upload supporting documents</td>
    </tr>
    <tr>
      <td>4012</td>
      <td>Identity number has been used/registered</td>
      <td>Use different identity number</td>
    </tr>
    <tr>
      <td>4013</td>
      <td>Invalid document type</td>
      <td>Ensure attribute's validation</td>
    </tr>
    <tr>
      <td>4014</td>
      <td>Image not similar</td>
      <td>Reach out to FLIP KYC team</td>
    </tr>
    <tr>
      <td>4015</td>
      <td>Cannot create/update agent data</td>
      <td>Reach out to FLIP KYC team</td>
    </tr>
  </tbody>
</table>

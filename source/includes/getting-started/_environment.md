<div></div>

## Environment

### Sandbox

Flip provides a sandbox environment: <a href="https://business.flip.id/sandbox/overview" target="_blank">https://business.flip.id/sandbox/overview</a> - API base URL: <code><b>https://bigflip.id/big_sandbox_api</b></code>. The secret key, validation token and base URL in sandbox will be different with the production environment, so any actions performed in sandbox will not affect your Flip for Business account. Each sandbox account will be given Rp950.000.000.000 (IDR 950 billion) balance for you to test the API.

We won’t process any transaction & account inquiries you’ve made in the sandbox environment. Any transaction created will be left at `PENDING` status. However, you can manually trigger the transaction to simulate statuses directly from the dashboard.

### Production

The production environment base URL for API v2 is <code><b>https://bigflip.id/api/v2/</b></code> and base URL for API v3 <code><b>https://bigflip.id/api/v3/</b></code>. Every transaction made through these URLs will be processed (except if something goes wrong).

<aside class="danger">
  <p>
    You are fully responsible to the safety of your secret key and validation token in your application. Negligence in storing those information can result in unauthorized use of your balance.<br><br>
    If you suspect those information have been leaked, you can change it in your <a href="https://business.flip.id/developer/api-setting" target="_blank">Flip for Business dashboard</a>.
  </p>
</aside>

<aside class="warning">
  <p>
    The changing of the secret key and/or validation token will result in unusable old key and/or token.
  </p>
</aside>

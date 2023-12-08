<h1 id="introduction" style="margin-bottom: 0; margin-top: 0; border-top: none;">Introduction</h1>

<div class="secondary-heading">Welcome to Flip for Business API Docs</div>

<blockquote>
  <br/>
  <p>
    <b>Need assistance?</b><br/>
    Don't hesitate to ask for any assistance by contacting our <a href="#">support team</a>.
  </p>
  <p>
    <b>Not a developer?</b><br/>
    Visit our Flip for Business Docs instead to see how-to-operate out products via dashboard with no integration.<br/>
    <a href="#">Go to Flip for Business Docs</a>
  </p>
</blockquote>

Flip will help you in doing and managing your business transaction, so you can focus on creating a better product.

Currently, we have API endpoints from two different versions (V2 and V3). There are endpoints that exclusively exist in V2 or V3. On the body of the endpoints we have incorporated information about which version does the API endpoint belong to. This is done to help you avoid using incompatible URL base, because each version has their own [product environment](#product-environment).

| Version | URL Example                                                   |
| :------ | :------------------------------------------------------------ |
| V2      | <code>https://bigflip.id/api/<b>v2</b>/general/balance</code> |
| V3      | <code>https://bigflip.id/api/<b>v3</b>/disbursement</code>    |

In V3, we add new features that enhance transaction security by using Idempotency Key and allow you to notify the beneficiaries of your transactions via email. We also add new endpoints to get transactions by Idempotency Key and ID so it is easier for you to navigate your transactions.

This documentation will be updated every time there is a change or if there is a new endpoint introduced. Every change will be documented in the [changelog section](#changelog).

We try to make this API and documentation to be as easy as possible and pleasing for the developer trying to implement this API. So if you have a suggestion or correction, feel free to send us an email at [business@flip.id](mailto:business@flip.id).

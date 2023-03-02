<div></div>

# International Transfer

Hi, welcome to Flip for Business International Transfer API!

This International Transfer API solution is intended for businesses, especially money transfer operators, who want to facilitate international transfer for their users in a cost-efficient, secured, and faster manner.

In this version of APIs, we provide a service to send money abroad from individuals in Indonesia to both personal accounts (C2C) and business accounts (C2B). We currently have several corridors and it will continue to grow.

**Flow Overview**

1. Select the destination country and input amount to see the exchange rate, transfer fee, and other details. You can hit **API Get Exchange Rate** to get these details.
2. Hit **API Get Form Data** to get the form with all the required fields to be filled.
3. After completing the beneficiary/recipient’s details in the form data, hit **API Create International Transfer** to create and automatically confirm the transaction. Flip will respond with “PENDING” status and then process the transaction.
4. After the transaction is completed, Flip will send the **International Transfer Transaction Callback** to notify you about the transaction status. If the transaction is successful, money is received by the beneficiary. If the transaction is failed, money will be refunded to the company’s deposit.
5. You can also hit **API Get International Transfer Transaction** to get the transaction status and details.

All international transfer transactions and/or the details can be monitored through the Flip for Business dashboard [https://business.flip.id](https://business.flip.id) and various API endpoints.

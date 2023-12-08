<div></div>

# Changelog

<table class="changelog-table">
  <tr>
    <td><h3 id="thu-november-30-2023">Thu, November 30 2023</h3></td>
    <td>
      <ul>
        <li>Add <code>btn_syr</code> in bank list</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-october-19-2023">Thu, October 19 2023</h3></td>
    <td>
      <ul>
        <li>Add International Transfer flow chart</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-october-4-2023">Wed, October 4 2023</h3></td>
    <td>
      <ul>
        <li>Update description for CHN in list country</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <h3 id="wed-september-27-2023">Wed, September 27 2023</h3>
    </td>
    <td>
      <ul>
        <li>Add description to country (CHN, LVA, PHL, VNM)</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-august-21-2023">Tue, August 21 2023</h3></td>
    <td>
      <ul>
        <li>
          Add new bank:
          <ul>
            <li><code>bukopin</code>: Wokee/Bukopin</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-july-25-2023">Tue, July 25 2023</h3></td>
    <td>
      <ul>
        <li>
          Update Accept Payment Create Bill
          <ul>
            <li>Remove maximum payment amount</li>
            <li>Add new QRIS Payment method example</li>
            <li>Add new Creating &amp; Displaying QR Image section</li>
          </ul>
        </li>
        <li>
          Update Accept Payment Edit Bill
          <ul>
            <li>Remove maximum payment amount</li>
          </ul>
        </li>
        <li>
          Update Accept Payment Get Payment
          <ul>
            <li>Add <code>sender_bank_type</code></li>
          </ul>
        </li>
        <li>Update Callback section</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-july-24-2023">Mon, July 24 2023</h3></td>
    <td>
      <ul>
        <li>
          Add new banks code
          <ul>
            <li><code>resona_perdania</code>: Bank Resona Perdania</li>
            <li><code>america_na</code>: Bank of America NA</li>
            <li><code>mizuho</code>: Bank Mizuho Indonesia</li>
            <li><code>bnp_paribas</code>: BNP Paribas Indonesia</li>
            <li><code>amar</code>: Bank Amar Indonesia</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-june-8-2023">Thu, June 8 2023</h3></td>
    <td>
      <ul>
        <li>Add new Disbursement cancelled reason</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-may-4-2023">Thu, May 4 2023</h3></td>
    <td>
      <ul>
        <li>Add new Agent’s KYC Rejection Reasons</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-may-2-2023">Tue, May 2 2023</h3></td>
    <td>
      <ul>
        <li>
          Add new country India as supported
          <a href="#supported-destination-countries">Destination Countries</a>
        </li>
        <li>Update Flow Overview International Transfer</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-march-28-2023">Tue, March 28 2023</h3></td>
    <td>
      <ul>
        <li>
          Add new callback:
          <a href="#bank-status-callback">Bank Status Callback</a>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="fri-march-17-2023">Fri, March 17 2023</h3></td>
    <td>
      <ul>
        <li>
          Add new error code:
          <a href="#money-transfer-error-list">Error List</a>
          <ul>
            <li>
              <code>2005</code>: Transfer amount are less than the minimum
              amount set by the respective Bank
            </li>
          </ul>
        </li>
        <li>
          Add deprecated error code section
          <a href="#money-transfer-deprecated-error-code"
            >Deprecated Error Code</a
          >
          <ul>
            <li>
              <code>1042</code>: Minimum transfer OVO amount is Rp10.000 -
              Replaced with <code>2005</code>
            </li>
            <li>
              <code>1086</code>: Minimum transfer dana amount is Rp20.500 -
              Replaced with <code>2005</code>
            </li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-march-7-2023">Tue, March 7 2023</h3></td>
    <td>
      <ul>
        <li>
          Add new API:
          <a href="#create-international-transfer-b2c-b2b"
            >Create International Transfer B2C/B2B</a
          >
        </li>
        <li>
          Update Create International Transfer to be
          <a href="#create-international-transfer-c2c-c2b"
            >Create International Transfer C2C/C2B</a
          >
        </li>
        <li>
          New <code>transaction_type</code> for Get Exchange Rates API, Get Form
          Data API and Get International Transfer
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <h3 id="wed-february-15-2023">Wed, February 15 2023</h3>
    </td>
    <td>
      <ul>
        <li>Add new error code for Money Transfer</li>
        <li>Add info SLA in Bank Account Inquiry</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-january-24-2023">Tue, January 24 2023</h3></td>
    <td>
      <ul>
        <li>
          Add payment steps for BSI VA in
          <a href="#create-bill">create-bill</a> section
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-january-31-2023">Tue, January 31 2023</h3></td>
    <td>
      <ul>
        <li>Change limit DANA from Rp20.000 to Rp20.500</li>
        <li>
          Add error code for COT
          <ul>
            <li>
              <code>1088</code>: The beneficiary bank is in severe disturbance
            </li>
            <li>
              <code>1093</code>: - Cannot process transaction because bank is in
              cut off time
            </li>
          </ul>
        </li>
        <li>Add validation for additional remark in create disbursement</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-january-25-2023">Wed, January 25 2023</h3></td>
    <td>
      <ul>
        <li>
          Update Destination Banks
          <ul>
            <li>Add more Syariah banks to the list</li>
            <li>Sort the table by bank name</li>
          </ul>
        </li>
        <li>
          Add validation details for APIs:
          <ul>
            <li>Create Disbursement</li>
            <li>Get All Disbursement</li>
            <li>Create Special Disbursement</li>
            <li>Create Disbursement for Agent</li>
            <li>Get Agent Disbursement List</li>
            <li>Create Agent Identity</li>
            <li>Upload Agent Identity Image</li>
            <li>Upload Supporting Document</li>
            <li>Repair Data</li>
            <li>Repair Identity Image</li>
            <li>Repair Identity-Selfie Image</li>
            <li>Get Country, Province, City, District APIs</li>
          </ul>
        </li>
        <li>
          Changes on API requests:
          <ul>
            <li>
              Remove <code>nationality</code> from Repair Data API request and
              response
            </li>
            <li>
              New attributes for Upload Supporting Document API:
              <code>married_card</code>, <code>married_card_selfie</code>,
              <code>npwp</code>, <code>npwp_selfie</code>,
              <code>bpjs_kesehatan</code>, <code>bpjs_kesehatan</code>
            </li>
          </ul>
        </li>
        <li>Update Error List for Agent Verification</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-january-24-2023-1">Tue, January 24 2023</h3></td>
    <td>
      <ul>
        <li>
          Add payment steps for BSI VA in
          <a href="#create-bill">Create Bill</a> section
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-december-22-2022">Tue, December 22 2022</h3></td>
    <td>
      <ul>
        <li>
          Add error code list <code>1089</code> for forbidden to transfer to
          flip account
        </li>
        <li>Add param <code>rejected_reason_code</code> in Agent KYC</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-december-6-2022">Tue, December 6 2022</h3></td>
    <td>
      <ul>
        <li>
          Add additional countries in International Transfers
          <ul>
            <li>Saudi Arabia</li>
            <li>United Arab Emirates</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="fri-december-2-2022">Fri, December 2 2022</h3></td>
    <td>
      <ul>
        <li>
          Update Introduction explanation, along with some product overview:
          <ul>
            <li><a href="#money-transfer">Money Transfer</a></li>
            <li>
              <a href="#special-money-transfer">Special Money Transfer</a>
            </li>
            <li><a href="#agent-money-transfer">Agent Money Transfer</a></li>
            <li><a href="#agent-verification">Agent Verification</a></li>
          </ul>
        </li>
        <li>
          Move Error List section to respective products' section:
          <ul>
            <li>
              <a href="#money-transfer-error-list">Money Transfer error list</a>
            </li>
            <li>
              <a href="#special-money-transfer-error-list"
                >Special Money Transfer error list</a
              >
            </li>
            <li>
              <a href="#agent-money-transfer-error-list"
                >Agent Money Transfer error list</a
              >
            </li>
            <li>
              <a href="#agent-verification-error-list"
                >Agent Verification error list</a
              >
            </li>
            <li>
              <a href="#accept-payment-error-list">Accept Payment error list</a>
            </li>
            <li>
              <a href="#international-transfer-error-list"
                >International Transfer error list</a
              >
            </li>
          </ul>
        </li>
        <li>Update "Bank Kaltim" name to "Bank Kaltimtara"</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-november-30-2022">Mon, November 30 2022</h3></td>
    <td>
      <ul>
        <li>Add Permata VA in Destination Bank</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-november-28-2022">Mon, November 28 2022</h3></td>
    <td>
      <ul>
        <li>Update Agent's KYC Rejection Reasons enumeration</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-november-14-2022">Mon, November 14 2022</h3></td>
    <td>
      <ul>
        <li>Revise Virtual Account description in General Explanation</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-november-8-2022">Tue, November 8 2022</h3></td>
    <td>
      <ul>
        <li>New Postman Collection for Flip for Business API</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-november-3-2022">Thu, November 3 2022</h3></td>
    <td>
      <ul>
        <li>
          Add Cancelled Transaction Reasons list for International Transaction
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-october-10-2022">Wed, October 10 2022</h3></td>
    <td>
      <ul>
        <li>Change Supported Banks to Destination Bank</li>
        <li>
          Add <code>Virtual Accounts</code> to Destination Bank
          <ul>
            <li>BNI VA</li>
            <li>BRI VA</li>
            <li>CIMB VA</li>
            <li>Mandiri VA</li>
            <li>Danamon VA</li>
            <li>Muamalat VA</li>
          </ul>
        </li>
        <li>
          Seperate Destination Bank table into 3 tables (Bank, VA, e-Wallets)
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-august-31-2022">Wed, August 31 2022</h3></td>
    <td>
      <ul>
        <li>
          Add <code>X-TIMESTAMP</code> header
          <ul>
            <li>Create Disbursement</li>
            <li>Create Special Disbursement</li>
            <li>Create Agent Disbursement</li>
            <li>Create International Transfer</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-august-23-2022">Thu, August 23 2022</h3></td>
    <td>
      <ul>
        <li>
          Accept Payment Callback
          <ul>
            <li>
              Added <code>bill_link_id</code> in attribute on accept payment
              callback
            </li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-july-21-2022">Thu, July 21 2022</h3></td>
    <td>
      <ul>
        <li>
          Accept Payment documentation update:
          <ul>
            <li>
              Added new bank code list in section "Constant &gt;&gt; Bank Code"
              for e-wallet and new VA.
            </li>
            <li>
              Added <code>wallet_account</code> in attribute
              <code>account_type</code> on section "Constant &gt;&gt; Bank
              Account Object"
            </li>
            <li>
              Added <code>wallet_account</code> in attribute
              <code>sender_bank_type</code> on section "Constant &gt;&gt; Bill
              Payment Object"
            </li>
            <li>
              Update <code>payment_url</code> description on "Constant &gt;&gt;
              Bill Object".
            </li>
            <li>Update API Response Create Bill for step 3.</li>
            <li>
              Add <code>settlement_status</code> attribute in response :
              <ul>
                <li>Get Payment</li>
                <li>Get All Payment</li>
              </ul>
            </li>
            <li>Update description in Confirm Bill Payment</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="fri-july-15-2022">Fri, July 15 2022</h3></td>
    <td>
      <ul>
        <li>
          Added new section "Supported Destination Countries" for international
          transfer
        </li>
        <li>
          Update International Transfer Sender Object (removing
          <code>drv_lic</code> and <code>bank_acc</code> for Sender's identity
          type)
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-july-6-2022">Wed, July 6 2022</h3></td>
    <td>
      <ul>
        <li>
          Added new payload param <code>inquiry_key</code> in Bank Account
          Inquiry
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-june-21-2022">Thu, June 21 2022</h3></td>
    <td>
      <ul>
        <li>Added new country list in international transfer</li>
        <li>Added aladin to list of supported bank (domestic)</li>
        <li>Added error code 1085</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-april-25-2022">Mon, April 25 2022</h3></td>
    <td>
      <ul>
        <li>
          Added Agent Money Transfer section, includes
          <ul>
            <li>Create Disbursement for Agent</li>
            <li>Get Agent Disbursement by ID</li>
            <li>Get Agent Disbursement List</li>
          </ul>
        </li>
        <li>
          Added Agent Verification section
          <ul>
            <li>Create Agent Identity</li>
            <li>Update Agent Identity</li>
            <li>Get Agent Identity</li>
            <li>Upload Agent Identity Image</li>
            <li>Upload Supporting Documents</li>
            <li>KYC Submission</li>
            <li>Repair Identity Image</li>
            <li>Repair Identity-Selfie Image</li>
            <li>Get Country List</li>
            <li>Get Province List</li>
            <li>Get City List</li>
            <li>Get District List</li>
            <li>Enumeration</li>
            <li>Error List</li>
          </ul>
        </li>
        <li>Added Agent Verification callback</li>
        <li>Updated error list</li>
        <li>Add Legacy section</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-april-13-2022">Wed, April 13 2022</h3></td>
    <td>
      <ul>
        <li>
          Added <code>reason</code> attribute in the response for:
          <ul>
            <li>Disbursement V2</li>
            <li>Disbursement V3</li>
            <li>Special Disbursement V2</li>
            <li>Special Disbursement V3</li>
            <li>Disbursement Callback</li>
            <li>Special Disbursement Callback</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="fri-april-1-2022">Fri, April 1 2022</h3></td>
    <td>
      <ul>
        <li>
          Added new Bank Inquiry Status: <code>FAILED</code> and
          <code>CLOSED</code>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-march-8-2022">Tue, March 8 2022</h3></td>
    <td>
      <ul>
        <li>
          Update Accept Payment
          <ul>
            <li>Create Payment request and response</li>
            <li>Get Bill request and response</li>
            <li>Get All Bills request and response</li>
          </ul>
        </li>
        <li>Add Confirm Bill request and response</li>
        <li>Add Constant section</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-february-17-2022">Thu, February 17 2022</h3></td>
    <td>
      <ul>
        <li>Change Big Flip logo and all copywritings to Flip for Business</li>
        <li>Change Disbursement product name to Money Transfer</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-december-23-2021">Thu, December 23 2021</h3></td>
    <td>
      <ul>
        <li>
          Update create Disbursement V3 <code>beneficiary_email</code> request
          and response
        </li>
        <li>
          Update create Special Disbursement V3
          <code>beneficiary_email</code> request and response
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-december-20-2021">Mon, December 20 2021</h3></td>
    <td>
      <ul>
        <li>Update example of Accept Payment callback response</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-december-7-2021">Tue, December 7 2021</h3></td>
    <td>
      <ul>
        <li>
          Add International Transfer API section, it includes
          <ul>
            <li>Get Exchange Rates</li>
            <li>Get Form Data</li>
            <li>Create International Transfer</li>
            <li>Get International Transfer</li>
            <li>Get All International Transfers</li>
          </ul>
        </li>
        <li>Add International Transfer callback</li>
        <li>Update error list for the international transfer errors</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-november-30-2021">Tue, November 30 2021</h3></td>
    <td>
      <ul>
        <li>
          Add Accept Payment API section, it includes
          <ul>
            <li>Create Bill</li>
            <li>Edit Bill</li>
            <li>Get One Bill</li>
            <li>Get All Bill</li>
            <li>Get Payment(s) from a Bill</li>
            <li>Get All Payments</li>
          </ul>
        </li>
        <li>Add accept payment callback</li>
        <li>Update error list for the accept payment errors</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="fri-october-01-2021">Fri, October 01 2021</h3></td>
    <td>
      <ul>
        <li>
          Change supported Bank Names:
          <ul>
            <li>from BNI/BNI Syariah to BNI</li>
            <li>from Bank NTB to Bank NTB Syariah</li>
            <li>from Bank Aceh to Bank Aceh Syariah</li>
            <li>
              from Bank Syariah Mandiri/BSI to&nbsp;BSI (Bank Syariah Indonesia)
            </li>
            <li>from BTN (Bank Tabungan Negara) to BTN/BTN Syariah</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <h3 id="wed-september-22-2021">Wed, September 22 2021</h3>
    </td>
    <td>
      <ul>
        <li>Update callback timeout info</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-august-16-2021">Tue, August 16 2021</h3></td>
    <td>
      <ul>
        <li>
          Change the production environment base URL to
          <a href="https://bigflip.id/api">https://bigflip.id/api</a>
          <ul>
            <li>
              API v2 from
              <a href="https://big.flip.id/api/v2/"
                >https://big.flip.id/api/v2/</a
              >
              to
              <a href="https://bigflip.id/api/v2">https://bigflip.id/api/v2</a>
            </li>
            <li>
              API v3 from
              <a href="https://big.flip.id/api/v3/"
                >https://big.flip.id/api/v3/</a
              >
              to
              <a href="https://bigflip.id/api/v2">https://bigflip.id/api/v2</a>
            </li>
            <li>
              The old base URL for both API v2 and v3 can still be used until it
              is deprecated (estimated at the end of November 2021).
            </li>
          </ul>
        </li>
        <li>
          Change supported Bank Names:
          <ul>
            <li>from Bank Artos Indonesia to Jago/Artos</li>
            <li>from Bank Yudha Bakti to Neo Commerce/Yudha Bhakti</li>
            <li>from Bank Kesejahteraan Ekonomi to Seabank/Bank BKE</li>
            <li>from UOB Indonesia to TMRW/UOB</li>
            <li>from Bank MNC Internasional to Motion/MNC Bank</li>
            <li>from KEB Hana Bank Indonesia to LINE Bank/KEB Hana</li>
            <li>from Bank Royal Indonesia to Blu/BCA Digital</li>
            <li>from Bukopin to Wokee/Bukopin</li>
            <li>
              from Bank Harda Internasional to Allo Bank/Bank Harda
              Internasional
            </li>
            <li>from Bank Agris to Bank IBK Indonesia</li>
            <li>from Bank Syariah Mandiri to Bank Syariah Mandiri/BSI</li>
          </ul>
        </li>
        <li>
          Remove BRI (Bank Rakyat Indonesia) Syariah (<code>bri_syr</code>) from
          Supported Banks list
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-march-23-2021">Tue, March 23 2021</h3></td>
    <td>
      <ul>
        <li>
          New Disbursement V3 menu
          <ul>
            <li>Create disbursement</li>
            <li>Get all disbursements</li>
            <li>Get disbursement by IK</li>
            <li>Get disbursement by ID</li>
          </ul>
        </li>
        <li>
          New Special Disbursement V3 menu
          <ul>
            <li>Create special disbursement</li>
          </ul>
        </li>
        <li>New Postman collections</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-march-17-2021">Wed, March 17 2021</h3></td>
    <td>
      <ul>
        <li>Remove <code>doku</code> from supported banks</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-march-04-2021">Thu, March 04 2021</h3></td>
    <td>
      <ul>
        <li>New styles</li>
        <li>More descriptions for request and response</li>
        <li>
          Fix URLs for
          <ul>
            <li>Footer links</li>
            <li>Big Flip API Dashboard</li>
          </ul>
        </li>
        <li>Remove Is Operational</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-november-10-2020">Tue, November 10 2020</h3></td>
    <td>
      <ul>
        <li>Change Sandbox 2.0 description</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-october-12-2020">Mon, October 12 2020</h3></td>
    <td>
      <ul>
        <li>Remove OVO and Dana as supported banks</li>
        <li>Add Idempotency Key implementation guide</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="fri-april-17-2020">Fri, April 17 2020</h3></td>
    <td>
      <ul>
        <li>
          Add <code>company</code> as a new option in
          <code>sender_job</code> for non-individual sender
        </li>
        <li>Add Bank Victoria Syariah and BPD Banten in supported banks</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-apr-01-2020">Wed, Apr 01 2020</h3></td>
    <td>
      <ul>
        <li>Remove max amount information</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="tue-march-31-2020">Tue, March 31 2020</h3></td>
    <td>
      <ul>
        <li>Drop the "required" from recipient city code</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-march-18-2020">Wed, March 18 2020</h3></td>
    <td>
      <ul>
        <li>
          Update attributes sender_identity_type, sender_identity_number,
          recipient_city, sender_place_of_birth, and sender_date_of_birth in
          Special Disbursement to be optionals
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="fri-february-28-2020">Fri, February 28 2020</h3></td>
    <td>
      <ul>
        <li>Update OVO availability</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-january-27-2020">Mon, January 27 2020</h3></td>
    <td>
      <ul>
        <li>Update information about sandbox environment</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-january-22-2020">Wed, January 22 2020</h3></td>
    <td>
      <ul>
        <li>Add OVO, Dana, and Doku as a bank code</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-may-5-2019">Wed, May 5 2019</h3></td>
    <td>
      <ul>
        <li>Fix special disbursement url in sample code</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <h3 id="wed-february-20-2019">Wed, February 20 2019</h3>
    </td>
    <td>
      <ul>
        <li>
          Change <code>WRONG_ACCOUNT_NUMBER</code> to <code>CANCELLED</code> in
          sandbox env description
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="fri-february-8-2019">Fri, February 8 2019</h3></td>
    <td>
      <ul>
        <li>Change sample price on <code>/general/banks</code> endpoint</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="sun-january-13-2018">Sun January 13 2018</h3></td>
    <td>
      <ul>
        <li>Update operational time</li>
        <li>Remove information about race condition</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-august-29-2018">Wed, August 29 2018</h3></td>
    <td>
      <ul>
        <li>Update bank availability info</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-may-28-2018">Mon, May 28 2018</h3></td>
    <td>
      <ul>
        <li>
          Add information about changed remark when disbursing to
          <code>bri</code>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-april-18-2018">Wed, April 18 2018</h3></td>
    <td>
      <ul>
        <li>
          Change remark from <code>required</code> to <code>optional</code>
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-january-15-2018">Mon, January 15 2018</h3></td>
    <td>
      <ul>
        <li>Update idempotency key behavior</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-december-6-2017">Wed, December 6 2017</h3></td>
    <td>
      <ul>
        <li>Update bank availability info</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-november-20-2017">Mon, November 20 2017</h3></td>
    <td>
      <ul>
        <li>Change sender attribute name for improved readability</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="thu-november-9-2017">Thu, November 9 2017</h3></td>
    <td>
      <ul>
        <li>Add idempotency-key header</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-october-25-2017">Wed, October 25 2017</h3></td>
    <td>
      <ul>
        <li>Add list of newly supported banks</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-october-18-2017">Wed, October 18 2017</h3></td>
    <td>
      <ul>
        <li>Change country list to English</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <h3 id="wed-september-13-2017">Wed, September 13 2017</h3>
    </td>
    <td>
      <ul>
        <li>Add remaining endpoint</li>
        <li>
          Remove leading zeroes removal information, as it cause another problem
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="wed-august-9-2017">Wed, August 9 2017</h3></td>
    <td>
      <ul>
        <li>Add leading zeroes removal information</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><h3 id="mon-july-17-2017">Mon, July 17 2017</h3></td>
    <td>
      <ul>
        <li>First version of API Docs</li>
      </ul>
    </td>
  </tr>
</table>
# Changelog

<!--
### Tuesday, August 21 2023
- add new bank:
  - `bukopin`: Wokee/Bukopin

### Tuesday, July 25 2023

- Update Accept Payment Create Bill
  - Remove maximum payment amount
  - Add new QRIS Payment method example
  - Add new Creating & Displaying QR Image section
- Update Accept Payment Edit Bill
  - Remove maximum payment amount
- Update Accept Payment Get Payment
  - Add `sender_bank_type`
- Update Callback section

### Monday, July 24 2023

- Add new banks code
  - `resona_perdania`: Bank Resona Perdania
  - `america_na`: Bank of America NA
  - `mizuho`: Bank Mizuho Indonesia
  - `bnp_paribas`: BNP Paribas Indonesia
  - `amar`: Bank Amar Indonesia

### Thursday, June 8 2023

- Add new Disbursement cancelled reason

### Thursday, May 4 2023

- Add new Agent’s KYC Rejection Reasons

### Tuesday, May 2 2023

- Add new country India as supported [Destination Countries](#supported-destination-countries)
- Update Flow Overview International Transfer

### Tuesday, March 28 2023

- Add new callback: [Bank Status Callback](#bank-status-callback) -->

### Friday, March 17 2023

- Add new error code: [Error List](#money-transfer-error-list)
  - `2005`: Transfer amount are less than the minimum amount set by the respective Bank
- Add deprecated error code section [Deprecated Error Code](#money-transfer-deprecated-error-code)
  - `1042`: Minimum transfer OVO amount is Rp10.000 - Replaced with `2005`
  - `1086`: Minimum transfer dana amount is Rp20.500 - Replaced with `2005`

### Tuesday, March 7 2023

- Add new API: [Create International Transfer B2C/B2B](#create-international-transfer-b2c-b2b)
- Update Create International Transfer to be [Create International Transfer C2C/C2B](#create-international-transfer-c2c-c2b)
- New `transaction_type` for Get Exchange Rates API, Get Form Data API and Get International Transfer

### Wednesday, February 15 2023

- Add new error code for Money Transfer
- Add info SLA in Bank Account Inquiry

### Tuesday, January 24 2023

- Add payment steps for BSI VA in [create-bill](#create-bill) section

### Tuesday, January 31 2023

- change limit DANA from Rp20.000 to Rp20.500
- add error code for COT
  - `1088`: The beneficiary bank is in severe disturbance
  - `1093`: - Cannot process transaction because bank is in cut off time
- add validation for additional remark in create disbursement

### Wednesday, January 25 2023

- Update Destination Banks
  - Add more Syariah banks to the list
  - Sort the table by bank name
- Add validation details for APIs:
  - Create Disbursement
  - Get All Disbursement
  - Create Special Disbursement
  - Create Disbursement for Agent
  - Get Agent Disbursement List
  - Create Agent Identity
  - Upload Agent Identity Image
  - Upload Supporting Document
  - Repair Data
  - Repair Identity Image
  - Repair Identity-Selfie Image
  - Get Country, Province, City, District APIs
- Changes on API requests:
  - Remove `nationality` from Repair Data API request and response
  - New attributes for Upload Supporting Document API: `married_card`, `married_card_selfie`, `npwp`, `npwp_selfie`, `bpjs_kesehatan`, `bpjs_kesehatan`
- Update Error List for Agent Verification

### Tuesday, January 24 2023

- Add payment steps for BSI VA in [Create Bill](#create-bill) section

### Tuesday, December 22 2022

- Add error code list `1089` for forbidden to transfer to flip account
- Add param `rejected_reason_code` in Agent KYC

### Tuesday, December 6 2022

- Add additional countries in International Transfers
  - Saudi Arabia
  - United Arab Emirates

### Friday, December 2 2022

- Update Introduction explanation, along with some product overview:
  - [Money Transfer](#money-transfer)
  - [Special Money Transfer](#special-money-transfer)
  - [Agent Money Transfer](#agent-money-transfer)
  - [Agent Verification](#agent-verification)
- Move Error List section to respective products' section:
  - [Money Transfer error list](#money-transfer-error-list)
  - [Special Money Transfer error list](#special-money-transfer-error-list)
  - [Agent Money Transfer error list](#agent-money-transfer-error-list)
  - [Agent Verification error list](#agent-verification-error-list)
  - [Accept Payment error list](#accept-payment-error-list)
  - [International Transfer error list](#international-transfer-error-list)
- Update "Bank Kaltim" name to "Bank Kaltimtara"

### Monday, November 30 2022

- Add Permata VA in Destination Bank

### Monday, November 28 2022

- Update Agent's KYC Rejection Reasons enumeration

### Monday, November 14 2022

- Revise Virtual Account description in General Explanation

### Tuesday, November 8 2022

- New Postman Collection for Flip for Business API

### Thursday, November 3 2022

- Add Cancelled Transaction Reasons list for International Transaction

### Wednesday, October 10 2022

- Change Supported Banks to Destination Bank
- Add `Virtual Accounts` to Destination Bank
  - BNI VA
  - BRI VA
  - CIMB VA
  - Mandiri VA
  - Danamon VA
  - Muamalat VA
- Seperate Destination Bank table into 3 tables (Bank, VA, e-Wallets)

### Wednesday, August 31 2022

- Add `X-TIMESTAMP` header
  - Create Disbursement
  - Create Special Disbursement
  - Create Agent Disbursement
  - Create International Transfer

### Thursday, August 23 2022

- Accept Payment Callback
  - Added `bill_link_id` in attribute on accept payment callback

### Thursday, July 21 2022

- Accept Payment documentation update:
  - Added new bank code list in section "Constant >> Bank Code" for e-wallet and new VA.
  - Added `wallet_account` in attribute `account_type` on section "Constant >> Bank Account Object"
  - Added `wallet_account` in attribute `sender_bank_type` on section "Constant >> Bill Payment Object"
  - Update `payment_url` description on "Constant >> Bill Object".
  - Update API Response Create Bill for step 3.
  - Add `settlement_status` attribute in response :
    - Get Payment
    - Get All Payment
  - Update description in Confirm Bill Payment

### Friday, July 15 2022

- Added new section "Supported Destination Countries" for international transfer
- Update International Transfer Sender Object (removing `drv_lic` and `bank_acc` for Sender's identity type)

### Wednesday, July 6 2022

- Added new payload param `inquiry_key` in Bank Account Inquiry

### Thursday, June 21 2022

- Added new country list in international transfer
- Added aladin to list of supported bank (domestic)
- Added error code 1085

### Monday, April 25 2022

- Added Agent Money Transfer section, includes
  - Create Disbursement for Agent
  - Get Agent Disbursement by ID
  - Get Agent Disbursement List
- Added Agent Verification section
  - Create Agent Identity
  - Update Agent Identity
  - Get Agent Identity
  - Upload Agent Identity Image
  - Upload Supporting Documents
  - KYC Submission
  - Repair Identity Image
  - Repair Identity-Selfie Image
  - Get Country List
  - Get Province List
  - Get City List
  - Get District List
  - Enumeration
  - Error List
- Added Agent Verification callback
- Updated error list
- Add Legacy section

### Wednesday, April 13 2022

- Added `reason` attribute in the response for:
  - Disbursement V2
  - Disbursement V3
  - Special Disbursement V2
  - Special Disbursement V3
  - Disbursement Callback
  - Special Disbursement Callback

### Friday, April 1 2022

- Added new Bank Inquiry Status: `FAILED` and `CLOSED`

### Tuesday, March 8 2022

- Update Accept Payment
  - Create Payment request and response
  - Get Bill request and response
  - Get All Bills request and response
- Add Confirm Bill request and response
- Add Constant section

### Thursday, February 17 2022

- Change Big Flip logo and all copywritings to Flip for Business
- Change Disbursement product name to Money Transfer

### Thursday, December 23 2021

- Update create Disbursement V3 `beneficiary_email` request and response
- Update create Special Disbursement V3 `beneficiary_email` request and response

### Monday, December 20 2021

- Update example of Accept Payment callback response

### Tuesday, December 7 2021

- Add International Transfer API section, it includes
  - Get Exchange Rates
  - Get Form Data
  - Create International Transfer
  - Get International Transfer
  - Get All International Transfers
- Add International Transfer callback
- Update error list for the international transfer errors

### Tuesday, November 30 2021

- Add Accept Payment API section, it includes
  - Create Bill
  - Edit Bill
  - Get One Bill
  - Get All Bill
  - Get Payment(s) from a Bill
  - Get All Payments
- Add accept payment callback
- Update error list for the accept payment errors

### Friday, October 01 2021

- Change supported Bank Names:
  - from BNI/BNI Syariah to BNI
  - from Bank NTB to Bank NTB Syariah
  - from Bank Aceh to Bank Aceh Syariah
  - from Bank Syariah Mandiri/BSI to BSI (Bank Syariah Indonesia)
  - from BTN (Bank Tabungan Negara) to BTN/BTN Syariah

### Wednesday, September 22 2021

- Update callback timeout info

### Tuesday, August 16 2021

- Change the production environment base URL to https://bigflip.id/api
  - API v2 from https://big.flip.id/api/v2/ to https://bigflip.id/api/v2
  - API v3 from https://big.flip.id/api/v3/ to https://bigflip.id/api/v2
  - The old base URL for both API v2 and v3 can still be used until it is deprecated (estimated at the end of November 2021).
- Change supported Bank Names:
  - from Bank Artos Indonesia to Jago/Artos
  - from Bank Yudha Bakti to Neo Commerce/Yudha Bhakti
  - from Bank Kesejahteraan Ekonomi to Seabank/Bank BKE
  - from UOB Indonesia to TMRW/UOB
  - from Bank MNC Internasional to Motion/MNC Bank
  - from KEB Hana Bank Indonesia to LINE Bank/KEB Hana
  - from Bank Royal Indonesia to Blu/BCA Digital
  - from Bukopin to Wokee/Bukopin
  - from Bank Harda Internasional to Allo Bank/Bank Harda Internasional
  - from Bank Agris to Bank IBK Indonesia
  - from Bank Syariah Mandiri to Bank Syariah Mandiri/BSI
- Remove BRI (Bank Rakyat Indonesia) Syariah (`bri_syr`) from Supported Banks list

### Tuesday, March 23 2021

- New Disbursement V3 menu
  - Create disbursement
  - Get all disbursements
  - Get disbursement by IK
  - Get disbursement by ID
- New Special Disbursement V3 menu
  - Create special disbursement
- New Postman collections

### Wednesday, March 17 2021

- Remove `doku` from supported banks

### Thursday, March 04 2021

- New styles
- More descriptions for request and response
- Fix URLs for
  - Footer links
  - Big Flip API Dashboard
- Remove Is Operational

### Tuesday, November 10 2020

- Change Sandbox 2.0 description

### Monday, October 12 2020

- Remove OVO and Dana as supported banks
- Add Idempotency Key implementation guide

### Friday, April 17 2020

- Add `company` as a new option in `sender_job` for non-individual sender
- Add Bank Victoria Syariah and BPD Banten in supported banks

### Wednesday, Apr 01 2020

- Remove max amount information

### Tuesday, March 31 2020

- Drop the "required" from recipient city code

### Wednesday, March 18 2020

- Update attributes sender_identity_type, sender_identity_number, recipient_city, sender_place_of_birth, and sender_date_of_birth in Special Disbursement to be optionals

### Friday, February 28 2020

- Update OVO availability

### Monday, January 27 2020

- Update information about sandbox environment

### Wednesday, January 22 2020

- Add OVO, Dana, and Doku as a bank code

### Wednesday, May 5 2019

- Fix special disbursement url in sample code

### Wednesday, February 20 2019

- Change `WRONG_ACCOUNT_NUMBER` to `CANCELLED` in sandbox env description

### Friday, February 8 2019

- Change sample price on `/general/banks` endpoint

### Sunday, January 13 2018

- Update operational time
- Remove information about race condition

### Wednesday, August 29 2018

- Update bank availability info

### Monday, May 28 2018

- Add information about changed remark when disbursing to `bri`

### Wednesday, April 18 2018

- Change remark from `required` to `optional`

### Monday, January 15 2018

- Update idempotency key behavior

### Wednesday, December 6 2017

- Update bank availability info

### Monday, November 20 2017

- Change sender attribute name for improved readability

### Thursday, November 9 2017

- Add idempotency-key header

### Wednesday, October 25 2017

- Add list of newly supported banks

### Wednesday, October 18 2017

- Change country list to English

### Wednesday, September 13 2017

- Add remaining endpoint
- Remove leading zeroes removal information, as it cause another problem

### Wednesday, August 9 2017

- Add leading zeroes removal information

### Monday, July 17 2017

- Initial commit

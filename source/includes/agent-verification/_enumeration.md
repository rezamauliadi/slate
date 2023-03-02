<div></div>

## Enumeration

<h3 id="agents-kyc-status">Agent's KYC Status</h3>

| Name                              | Description                                                          |
| --------------------------------- | -------------------------------------------------------------------- |
| `BASIC_DATA`                      | Agent has been created successfully                                  |
| `UPLOAD_IDENTITY_FAILED`          | Identity image is failed to be uploaded                              |
| `UPLOAD_IDENTITY_SUCCESS`         | Identity image is succeed to be uploaded                             |
| `UPLOAD_IDENTITY_SELFIE_PROGRESS` | Selfie identity image has been uploaded                              |
| `UPLOAD_IDENTITY_SELFIE_FAILED`   | Selfie identity image is failed to be uploaded                       |
| `UPLOAD_IDENTITY_SELFIE_SUCCESS`  | Selfie identity image is succeed to be uploaded                      |
| `PENDING`                         | Agent is waiting to be checked by Flip ops                           |
| `SUSPICIOUS`                      | Agent is flagged by Flip’s admin, and needs to be checked.           |
| `NEED_TO_CHECK`                   | Agent is flagged by Flip’s admin, and needs to be checked.           |
| `HELP`                            | Need to upload supporting documents, usually after Agent is rejected |
| `APPROVED`                        | KYC Approved                                                         |
| `REJECTED`                        | KYC Rejected                                                         |

<h3 id="agents-kyc-rejection-reasons">Agent's KYC Rejection Reasons</h3>

| Code | Meaning                                                                                     | Expectation                                                                         |
| ---- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `10` | The data that is filled in does not match with identity card                                | Repair ID data                                                                      |
| `11` | NIK does not match the format                                                               | Upload supporting document (Kartu Keluarga/NPWP/BPJS Kesehatan)                     |
| `12` | NIK already registered in another account                                                   | Chat with CX team                                                                   |
| `13` | NIK data is bolded manually                                                                 | Upload supporting document (Kartu Keluarga/NPWP/BPJS Kesehatan)                     |
| `14` | Identity card blurry or got spotlight or cannot be read                                     | Upload ID again                                                                     |
| `15` | The Identity card uploaded is not (KTP/Passport/KITAS)                                      | Upload ID again                                                                     |
| `16` | Identity card is not fully captured                                                         | Upload ID again                                                                     |
| `17` | Part of the data on the photo ID card is missing so it can't be read in its entirety        | Upload ID again OR Upload supporting documents (Kartu Keluarga/NPWP/BPJS Kesehatan) |
| `18` | If the identity card is broken up to the data section on the identity card                  | Upload ID again                                                                     |
| `19` | ID card has expired                                                                         | Upload ID again                                                                     |
| `20` | Photo ID card is not original                                                               | Upload ID again                                                                     |
| `21` | The background of the user's pass photo on the ID card is not blue/red                      | Upload ID again OR Upload supporting documents (Kartu Keluarga/NPWP/BPJS Kesehatan) |
| `22` | Pass photo in identity card is not original but only patch photo                            | Chat with CX team                                                                   |
| `23` | Combination photos are not clearly visible or partially covered                             | Upload selfie with ID again                                                         |
| `24` | Combination photos only contain face images                                                 | Upload selfie with ID again                                                         |
| `25` | Combination photo of the user holding another identity card other than (KTP/Passport/KITAS) | Upload selfie with ID again                                                         |
| `26` | Combination photos do not directly hold an identity card                                    | Upload selfie with ID again                                                         |
| `27` | Photos taken indirectly                                                                     | Upload selfie with ID again                                                         |
| `28` | User wearing veil                                                                           | Chat with CX team                                                                   |
| `29` | Indicated in violation of the Terms and Conditions of the application                       | Fraud user - Can't do anything                                                      |
| `30` | We need confirm your KYC with some data                                                     | Chat with CX team                                                                   |

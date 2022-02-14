/* const {zenroom_exec} = require("zenroom");
const script = `print("Hello World!")`
zenroom_exec(script).then(({result}) => console.log(result)) //=> "Hello World!" */

const { zencode_exec } = require('zenroom')

const smartContract = `Scenario 'w3c': sign JSON
Scenario 'ecdh': (required)
Given that I am 'Authority'
Given I have my 'keypair'
Given I have a 'verifiable credential' named 'my-vc'
Given I have a 'string' named 'pubkey url'
When I sign the verifiable credential named 'my-vc'
When I set the verification method in 'my-vc' to 'pubkey url'
Then print 'my-vc' as 'string'`

const data = JSON.stringify(
    {
        "my-vc": {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://www.w3.org/2018/credentials/examples/v1"
            ],
            "id": "http://example.edu/credentials/1872",
            "type": [
                "VerifiableCredential",
                "AlumniCredential"
            ],
            "issuer": "https://example.edu/issuers/565049",
            "issuanceDate": "2010-01-01T19:73:24Z",
            "credentialSubject": {
                "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
                "alumniOf": {
                    "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",
                    "name": [
                        {
                            "value": "Example University",
                            "lang": "en"
                        },
                        {
                            "value": "Exemple d'Université",
                            "lang": "fr"
                        }
                    ]
                }
            }
        },
        "pubkey_url": "https://dyne.org/verification/keys/1"
    }
)
  const keys = JSON.stringify(
    {
        "Authority": {
            "keypair": {
                "private_key": "cAJT5lppxGQI/bAz2p6H+jyRsUnY5kSmHY4IoiK3xRI=",
                "public_key": "BHcH0STBlXMQ/2zURcb0WurK0L1ywRXwDoOH6DISQxa7KOlhmFncb/nW62rV3aLuqbRS8kVTAPnCOi2MRmXpraY="
            }
        }
    }
  )

/*   const smartContract = `Scenario 'w3c': verify signature
  Scenario 'ecdh': (required)
  Given I have a 'public key' inside 'Authority'
  Given I have a 'verifiable credential' named 'my-vc'
  When I verify the verifiable credential named 'my-vc'
  Then print the string 'W3C CREDENTIAL IS VALID'`

  const data = JSON.stringify(
    {
        "my-vc": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1"
          ],
          "credentialSubject": {
            "alumniOf": {
              "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",
              "name": [
                {
                  "lang": "en",
                  "value": "Example University"
                },
                {
                  "lang": "fr",
                  "value": "Exemple d'Université"
                }
              ]
            },
            "id": "did:example:ebfeb1f712ebc6f1c276e12ec21"
          },
          "id": "http://example.edu/credentials/1872",
          "issuanceDate": "2010-01-01T19:73:24Z",
          "issuer": "https://example.edu/issuers/565049",
          "proof": {
            "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOnRydWUsImNyaXQiOiJiNjQifQ..aOqCvNCbB6xhjoMt1BNVAE0Ss2xH6cjnb5IXKf4aQVkYmwdr_OELQa0FsnPWMSvqdxDNpGdFOVidWIjXscqtvg",
            "proofPurpose": "authenticate",
            "type": "Zenroom",
            "verificationMethod": "https://dyne.org/verification/keys/1"
          },
          "type": [
            "VerifiableCredential",
            "AlumniCredential"
          ]
        }
      }
  )

  const keys = JSON.stringify(
    {
        "Authority": {
          "public_key": "BHcH0STBlXMQ/2zURcb0WurK0L1ywRXwDoOH6DISQxa7KOlhmFncb/nW62rV3aLuqbRS8kVTAPnCOi2MRmXpraY="
        }
      }
  ) */

zencode_exec(smartContract, { data, keys }).then(({ result }) => {
    console.log(result)
  })
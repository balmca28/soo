const getAuthnResponse = ({
  responseId,
  assertionId,
  issueInstant,
  issueExpire,
  destination,
  inResponseTo,
  audienceRestriction,
  issuer,
  statusValue
}) => {
  const defaultSamlAuthnResponse = `<?xml version="1.0" encoding="UTF-8"?>
  <samlp:Response xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
			  xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol"
			  ID="${responseId}"
			  Version="2.0"
			  IssueInstant="${issueInstant}"
			  Destination="${destination}"
			  InResponseTo="${inResponseTo}"
			  >
	<saml:Issuer>${issuer}</saml:Issuer>
	 <samlp:Status>
		<samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success" />
	 </samlp:Status>
	 <saml:Assertion xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Version="2.0" ID="pfx758baa0c-801f-8a92-5f8e-f1f025e1d3a8" IssueInstant="2018-10-12T06:43:14Z">
		<saml:Issuer>${issuer}</saml:Issuer>
		<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
		   <ds:SignedInfo>
			  <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
			  <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
			  <ds:Reference URI="#pfx758baa0c-801f-8a92-5f8e-f1f025e1d3a8">
				 <ds:Transforms>
					<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" />
					<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
				 </ds:Transforms>
				 <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />
				 <ds:DigestValue>XVVI7MRSNdf+NdZBzTIwSIAoOQ0=</ds:DigestValue>
			  </ds:Reference>
		   </ds:SignedInfo>
		   <ds:SignatureValue>uN86ZMhCJOTZWhbMKeuStZgpOa2gd8KeMUsg/NzdCBgrbGauYQRyezhjWwIKWILe0GgqY+arufpw9F9W9gqs6iQbBZjDpWfqB63MgQxztme86k9CN0JvhcAPh5YVPYsPyLAfVoLLb3q05rILix/P9umt6ucQ0Nn3QKLgmD+O4fg=</ds:SignatureValue>
		   <ds:KeyInfo>
			  <ds:X509Data>
				 <ds:X509Certificate>MIICkDCCAfmgAwIBAgIBADANBgkqhkiG9w0BAQ0FADBlMQswCQYDVQQGEwJpbjESMBAGA1UECAwJS2FybmF0YWthMSkwJwYDVQQKDCBTcGxpdHggU29sdXRpb25zIFByaXZhdGUgTGltaXRlZDEXMBUGA1UEAwwOc2VsbGVyZ2VuaS5jb20wHhcNMjIwODA5MDUyMTA1WhcNMjMwODA5MDUyMTA1WjBlMQswCQYDVQQGEwJpbjESMBAGA1UECAwJS2FybmF0YWthMSkwJwYDVQQKDCBTcGxpdHggU29sdXRpb25zIFByaXZhdGUgTGltaXRlZDEXMBUGA1UEAwwOc2VsbGVyZ2VuaS5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAN403fVuepyrab8B3/sjbitA3CMiJtSTnhxDnuqaQaB2T0jjewb1rTcqNkl9e+RyHazVXZQemGDyo4nLDOV68pQmPu6F5lXjB96KFr9HjP1xa9oF1RowHwJ2BIUFvPjb8Xrl3kq8kutBU+/6bIAQ1PnosWHuGrrC7L6Rsf1nDdhHAgMBAAGjUDBOMB0GA1UdDgQWBBTIrXlXhCjGFLI040y5JCdMUcDe4jAfBgNVHSMEGDAWgBTIrXlXhCjGFLI040y5JCdMUcDe4jAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBDQUAA4GBAG7vvonkbTTGwvoU8HRnU49osG9oaUznIDNxLNvyaqr8nLl9IGxTvDd/fDOCwSVO2eSkyY25EtTpDsBUYgo9SM9vQ12GX7yNNbllxUx7eNsnmc9UDgVPH0SEY94ObBlIqrXWRDeBKtPpyIZGqZ3Zs4Q83GuHg6Y8Q/nzr4w9EINR</ds:X509Certificate>
				  </ds:X509Data>
		   </ds:KeyInfo>
		</ds:Signature>
		<saml:Subject>
		   <saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">patricia@zylker.com</saml:NameID>
		   <saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
			 <saml:SubjectConfirmationData NotOnOrAfter="${issueExpire}"
												  Recipient="${destination}"
												  InResponseTo="${inResponseTo}"
												  />
		  </saml:SubjectConfirmation>
		</saml:Subject>
		<saml:Conditions NotBefore="${issueInstant}"
						  NotOnOrAfter="${issueExpire}"
						  >
							<saml:AudienceRestriction>
			  <saml:Audience>${audienceRestriction}</saml:Audience>
		   </saml:AudienceRestriction>
		</saml:Conditions>
		<saml:AuthnStatement AuthnInstant="${issueInstant}"
							  SessionNotOnOrAfter="${issueExpire}"
							  SessionIndex="_411cadb8-49e6-4bd3-9f2c-bf372d4c1c7c"
							  >
			<saml:AuthnContext>
			  <saml:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport</saml:AuthnContextClassRef>
		   </saml:AuthnContext>
		</saml:AuthnStatement>
		<saml:AttributeStatement>
		   <saml:Attribute Name="memberOf" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
			  <saml:AttributeValue xsi:type="xs:string" />
		   </saml:Attribute>
		   <saml:Attribute Name="User.Username" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
			  <saml:AttributeValue xsi:type="xs:string" />
		   </saml:Attribute>
		   <saml:Attribute Name="User.FirstName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
			  <saml:AttributeValue xsi:type="xs:string">patricia.boyale</saml:AttributeValue>
		   </saml:Attribute>
		   <saml:Attribute Name="office" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
			  <saml:AttributeValue xsi:type="xs:string" />
		   </saml:Attribute>
		   <saml:Attribute Name="PersonImmutableID" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
			  <saml:AttributeValue xsi:type="xs:string" />
		   </saml:Attribute>
		   <saml:Attribute Name="User.email" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
			  <saml:AttributeValue xsi:type="xs:string">patricia@zylker.com</saml:AttributeValue>
		   </saml:Attribute>
		   <saml:Attribute Name="User.LastName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
			  <saml:AttributeValue xsi:type="xs:string" />
		   </saml:Attribute>
		   <saml:Attribute Name="role" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
			  <saml:AttributeValue xsi:type="xs:string" />
		   </saml:Attribute>
		</saml:AttributeStatement>
	 </saml:Assertion>
  </samlp:Response>`;

  return defaultSamlAuthnResponse;
};

module.exports = { getAuthnResponse };

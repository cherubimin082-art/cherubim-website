import type { CSSProperties, ReactNode } from 'react';

const COLORS = {
  ink: '#1c2024',
  inkSoft: '#4a5158',
  line: '#e2e5e8',
  bg: '#ffffff',
  panel: '#f7f8f9',
  accent: '#2f5d50',
  accentSoft: '#eaf1ee',
};

const serif = '"Iowan Old Style","Georgia","Times New Roman",serif';
const sans = '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';

const S = {
  h2: {
    fontFamily: sans,
    fontSize: '20px',
    fontWeight: 600,
    margin: '44px 0 14px',
    paddingBottom: '8px',
    borderBottom: `1px solid ${COLORS.line}`,
    scrollMarginTop: '24px',
    color: COLORS.ink,
  } as CSSProperties,
  h3: {
    fontFamily: sans,
    fontSize: '16px',
    fontWeight: 600,
    margin: '24px 0 8px',
    color: COLORS.ink,
  } as CSSProperties,
  p: { margin: '0 0 14px' } as CSSProperties,
  ul: { margin: '0 0 14px', paddingLeft: '22px' } as CSSProperties,
  li: { marginBottom: '6px' } as CSSProperties,
  a: { color: COLORS.accent },
};

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <>
      <h2 id={id} style={S.h2}>{title}</h2>
      {children}
    </>
  );
}

const toc = [
  ['s1', '1. Scope'],
  ['s2', '2. Information You Provide'],
  ['s3', '3. Information Collected Automatically'],
  ['s4', '4. Information From Third-Party Services'],
  ['s5', '5. How We Use Personal Information'],
  ['s6', '6. AI and Automated Processing'],
  ['s7', '7. Payments'],
  ['s8', '8. Cookies and Similar Technologies'],
  ['s9', '9. How We Share Information'],
  ['s10', '10. Data Processors'],
  ['s11', '11. International Data Transfers'],
  ['s12', '12. Data Security'],
  ['s13', '13. Data Retention'],
  ['s14', '14. Your Privacy Rights'],
  ['s15', '15. How to Exercise Your Rights'],
  ['s16', "16. Children's Privacy"],
  ['s17', '17. Third-Party Websites'],
  ['s18', '18. Marketing Communications'],
  ['s19', '19. Business and Enterprise Customers'],
  ['s20', '20. User-Generated Content'],
  ['s21', '21. Social Media and Advertising Platforms'],
  ['s22', '22. Changes to This Privacy Policy'],
  ['s23', '23. Grievance and Privacy Contact'],
  ['s24', '24. Applicable Law'],
];

export default function PrivacyPolicy() {
  return (
    <div style={{ background: COLORS.bg, color: COLORS.ink, fontFamily: serif, lineHeight: 1.65, fontSize: '17px' }}>
      <style>{`
        .pp-wrap { max-width: 760px; margin: 0 auto; padding: 64px 24px 120px; }
        .pp-toc { column-count: 2; column-gap: 24px; }
        .pp-toc a { display: block; color: ${COLORS.inkSoft}; text-decoration: none; padding: 3px 0; break-inside: avoid; }
        .pp-toc a:hover { color: ${COLORS.accent}; }
        @media (max-width: 600px) {
          .pp-wrap { padding: 40px 18px 80px; }
          .pp-h1 { font-size: 27px !important; }
          .pp-toc { column-count: 1; }
        }
      `}</style>

      <div className="pp-wrap">
        <header style={{ borderBottom: `1px solid ${COLORS.line}`, paddingBottom: '28px', marginBottom: '40px' }}>
          <div style={{ fontFamily: sans, fontSize: '13px', letterSpacing: '.02em', color: COLORS.accent, fontWeight: 600, marginBottom: '10px' }}>
            CHERUBIM AI INFOSOFT
          </div>
          <h1 className="pp-h1" style={{ fontFamily: sans, fontSize: '34px', lineHeight: 1.15, margin: '0 0 10px', fontWeight: 600, letterSpacing: '-0.01em' }}>
            Privacy Policy
          </h1>
          <div style={{ fontFamily: sans, fontSize: '14px', color: COLORS.inkSoft }}>
            Effective date: 18 September 2026 · Last updated: 18 September 2026
          </div>
        </header>

        <p style={S.p}>Cherubim AI Infosoft Pvt Ltd (&quot;Cherubim&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting personal information processed through our websites, applications, software products, platforms and services.</p>
        <p style={S.p}>This Privacy Policy explains what information we may collect, why we collect it, how we use it, how it may be shared, how we protect it and the choices available to you.</p>
        <p style={S.p}>By using a Cherubim service, you acknowledge the practices described in this Privacy Policy.</p>

        <nav className="pp-toc" style={{ fontFamily: sans, fontSize: '14px', background: COLORS.panel, border: `1px solid ${COLORS.line}`, borderRadius: '8px', padding: '18px 22px', margin: '0 0 40px' }}>
          {toc.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>

        <Section id="s1" title="1. Scope">
          <p style={S.p}>This Privacy Policy applies to personal information processed through:</p>
          <ul style={S.ul}>
            <li style={S.li}>Cherubim websites;</li>
            <li style={S.li}>Cherubim mobile applications;</li>
            <li style={S.li}>Cherubim software and SaaS products;</li>
            <li style={S.li}>online forms;</li>
            <li style={S.li}>customer-support channels;</li>
            <li style={S.li}>marketing and communication channels;</li>
            <li style={S.li}>business and enterprise services;</li>
            <li style={S.li}>applications and platforms operated by Cherubim; and</li>
            <li style={S.li}>other services that link to this Privacy Policy.</li>
          </ul>
          <p style={S.p}>Certain Cherubim products may have additional privacy notices describing product-specific data processing.</p>
          <p style={S.p}>Where a product-specific privacy policy conflicts with this policy, the product-specific policy will apply to that product.</p>
        </Section>

        <Section id="s2" title="2. Information We Collect">
          <p style={S.p}>Depending on the service you use, we may collect different categories of information.</p>
          <h3 style={S.h3}>2.1 Information You Provide</h3>
          <p style={S.p}>This may include:</p>
          <ul style={S.ul}>
            <li style={S.li}>name;</li>
            <li style={S.li}>email address;</li>
            <li style={S.li}>telephone/mobile number;</li>
            <li style={S.li}>postal address;</li>
            <li style={S.li}>business information;</li>
            <li style={S.li}>company name;</li>
            <li style={S.li}>job title;</li>
            <li style={S.li}>account credentials;</li>
            <li style={S.li}>profile information;</li>
            <li style={S.li}>payment and billing information;</li>
            <li style={S.li}>information submitted through forms;</li>
            <li style={S.li}>customer-support communications;</li>
            <li style={S.li}>documents and files;</li>
            <li style={S.li}>photographs, videos and audio;</li>
            <li style={S.li}>content you upload;</li>
            <li style={S.li}>information provided when requesting a demonstration;</li>
            <li style={S.li}>information provided when purchasing services; and</li>
            <li style={S.li}>other information you voluntarily provide.</li>
          </ul>
        </Section>

        <Section id="s3" title="3. Information Collected Automatically">
          <p style={S.p}>When you access our websites or applications, we may automatically collect information such as:</p>
          <ul style={S.ul}>
            <li style={S.li}>IP address;</li>
            <li style={S.li}>device type;</li>
            <li style={S.li}>browser type;</li>
            <li style={S.li}>operating system;</li>
            <li style={S.li}>application version;</li>
            <li style={S.li}>language and regional settings;</li>
            <li style={S.li}>approximate location derived from technical information;</li>
            <li style={S.li}>pages or screens visited;</li>
            <li style={S.li}>referring website;</li>
            <li style={S.li}>timestamps;</li>
            <li style={S.li}>usage patterns;</li>
            <li style={S.li}>diagnostic information;</li>
            <li style={S.li}>crash reports; and</li>
            <li style={S.li}>other technical information.</li>
          </ul>
          <p style={S.p}>We may use cookies, SDKs, logs and similar technologies to provide, secure and improve our services.</p>
        </Section>

        <Section id="s4" title="4. Information From Third-Party Services">
          <p style={S.p}>Where you connect a third-party account or service, we may receive information from that provider according to the permissions you grant and the provider&apos;s applicable policies.</p>
          <p style={S.p}>Examples may include:</p>
          <ul style={S.ul}>
            <li style={S.li}>social-media platforms;</li>
            <li style={S.li}>advertising platforms;</li>
            <li style={S.li}>payment providers;</li>
            <li style={S.li}>authentication providers;</li>
            <li style={S.li}>communication platforms;</li>
            <li style={S.li}>calendar services;</li>
            <li style={S.li}>cloud-storage providers;</li>
            <li style={S.li}>analytics providers; and</li>
            <li style={S.li}>other integrations supported by a Cherubim product.</li>
          </ul>
          <p style={S.p}>We only request information reasonably necessary for the relevant functionality.</p>
        </Section>

        <Section id="s5" title="5. How We Use Personal Information">
          <p style={S.p}>We may process personal information for purposes including:</p>

          <h3 style={S.h3}>Providing Services</h3>
          <p style={S.p}>To:</p>
          <ul style={S.ul}>
            <li style={S.li}>create and manage accounts;</li>
            <li style={S.li}>provide requested products and services;</li>
            <li style={S.li}>process transactions;</li>
            <li style={S.li}>provide customer support;</li>
            <li style={S.li}>operate applications;</li>
            <li style={S.li}>facilitate appointments or marketplace interactions;</li>
            <li style={S.li}>provide communications;</li>
            <li style={S.li}>deliver requested content; and</li>
            <li style={S.li}>perform contractual obligations.</li>
          </ul>

          <h3 style={S.h3}>Security</h3>
          <p style={S.p}>To:</p>
          <ul style={S.ul}>
            <li style={S.li}>authenticate users;</li>
            <li style={S.li}>detect fraud;</li>
            <li style={S.li}>prevent abuse;</li>
            <li style={S.li}>protect systems;</li>
            <li style={S.li}>investigate security incidents;</li>
            <li style={S.li}>enforce our Terms; and</li>
            <li style={S.li}>maintain platform integrity.</li>
          </ul>

          <h3 style={S.h3}>Product Improvement</h3>
          <p style={S.p}>To:</p>
          <ul style={S.ul}>
            <li style={S.li}>understand service usage;</li>
            <li style={S.li}>troubleshoot problems;</li>
            <li style={S.li}>improve features;</li>
            <li style={S.li}>conduct analytics;</li>
            <li style={S.li}>develop new products;</li>
            <li style={S.li}>monitor performance; and</li>
            <li style={S.li}>improve user experience.</li>
          </ul>

          <h3 style={S.h3}>Communications</h3>
          <p style={S.p}>We may use contact information to send:</p>
          <ul style={S.ul}>
            <li style={S.li}>transactional communications;</li>
            <li style={S.li}>security notifications;</li>
            <li style={S.li}>account notifications;</li>
            <li style={S.li}>service announcements;</li>
            <li style={S.li}>support communications;</li>
            <li style={S.li}>product updates; and</li>
            <li style={S.li}>marketing communications where permitted by applicable law.</li>
          </ul>
          <p style={S.p}>You may opt out of promotional communications where applicable.</p>

          <h3 style={S.h3}>Legal Compliance</h3>
          <p style={S.p}>We may process information when reasonably necessary to:</p>
          <ul style={S.ul}>
            <li style={S.li}>comply with applicable law;</li>
            <li style={S.li}>respond to lawful requests;</li>
            <li style={S.li}>enforce agreements;</li>
            <li style={S.li}>protect rights and property;</li>
            <li style={S.li}>investigate suspected unlawful activity; or</li>
            <li style={S.li}>prevent harm.</li>
          </ul>
        </Section>

        <Section id="s6" title="6. AI and Automated Processing">
          <p style={S.p}>Some Cherubim products use artificial intelligence, machine learning and automated processing.</p>
          <p style={S.p}>Depending on the product, information may be processed to:</p>
          <ul style={S.ul}>
            <li style={S.li}>generate responses;</li>
            <li style={S.li}>automate workflows;</li>
            <li style={S.li}>classify information;</li>
            <li style={S.li}>summarise content;</li>
            <li style={S.li}>analyse business data;</li>
            <li style={S.li}>generate documents or communications;</li>
            <li style={S.li}>provide recommendations;</li>
            <li style={S.li}>operate AI agents;</li>
            <li style={S.li}>perform customer-support functions; or</li>
            <li style={S.li}>automate business processes.</li>
          </ul>
          <p style={S.p}>Where third-party AI infrastructure is used, relevant data may be processed by those providers according to contractual arrangements and their applicable policies.</p>
          <p style={S.p}>Cherubim does not represent that AI output is always accurate or complete.</p>
          <p style={S.p}>Users should not submit highly sensitive personal information to an AI service unless the relevant service expressly supports such information and the user has appropriate authority to provide it.</p>
        </Section>

        <Section id="s7" title="7. Payments">
          <p style={S.p}>Payments may be processed through third-party payment providers.</p>
          <p style={S.p}>Cherubim may receive transaction-related information such as:</p>
          <ul style={S.ul}>
            <li style={S.li}>transaction ID;</li>
            <li style={S.li}>payment status;</li>
            <li style={S.li}>amount;</li>
            <li style={S.li}>currency;</li>
            <li style={S.li}>payment method;</li>
            <li style={S.li}>billing information; and</li>
            <li style={S.li}>limited payment metadata.</li>
          </ul>
          <p style={S.p}>We generally do not store complete payment-card information where payment processing is handled by a third-party payment provider.</p>
          <p style={S.p}>Payment providers may process information under their own privacy policies and security standards.</p>
        </Section>

        <Section id="s8" title="8. Cookies and Similar Technologies">
          <p style={S.p}>Cherubim may use cookies and similar technologies for:</p>
          <ul style={S.ul}>
            <li style={S.li}>authentication;</li>
            <li style={S.li}>security;</li>
            <li style={S.li}>session management;</li>
            <li style={S.li}>preferences;</li>
            <li style={S.li}>analytics;</li>
            <li style={S.li}>performance monitoring;</li>
            <li style={S.li}>marketing measurement; and</li>
            <li style={S.li}>improving website functionality.</li>
          </ul>
          <p style={S.p}>You may control cookies through your browser settings. Disabling certain cookies may affect functionality.</p>
        </Section>

        <Section id="s9" title="9. How We Share Information">
          <p style={S.p}>We may share personal information with the following categories of recipients where reasonably necessary:</p>

          <h3 style={S.h3}>Service Providers</h3>
          <p style={S.p}>Technology and infrastructure providers that help us operate our services.</p>
          <p style={S.p}>These may include providers for:</p>
          <ul style={S.ul}>
            <li style={S.li}>cloud hosting;</li>
            <li style={S.li}>databases;</li>
            <li style={S.li}>analytics;</li>
            <li style={S.li}>communications;</li>
            <li style={S.li}>email;</li>
            <li style={S.li}>SMS;</li>
            <li style={S.li}>WhatsApp or similar messaging;</li>
            <li style={S.li}>AI processing;</li>
            <li style={S.li}>payment processing;</li>
            <li style={S.li}>security;</li>
            <li style={S.li}>customer support; and</li>
            <li style={S.li}>software infrastructure.</li>
          </ul>

          <h3 style={S.h3}>Business Customers</h3>
          <p style={S.p}>Where you use a Cherubim service operated on behalf of a business customer, information may be shared with that business customer according to the relevant service arrangement.</p>

          <h3 style={S.h3}>Other Users</h3>
          <p style={S.p}>Certain marketplace or platform products may display limited profile or professional information to other users where necessary to provide the service.</p>

          <h3 style={S.h3}>Legal and Regulatory Authorities</h3>
          <p style={S.p}>We may disclose information where required or permitted by applicable law or lawful governmental or regulatory requests.</p>

          <h3 style={S.h3}>Business Transactions</h3>
          <p style={S.p}>Personal information may be transferred as part of a merger, acquisition, financing, restructuring, sale of assets or similar corporate transaction, subject to applicable law.</p>
          <p style={S.p}>We do not sell personal information merely for the purpose of selling personal information to third parties.</p>
        </Section>

        <Section id="s10" title="10. Data Processors">
          <p style={S.p}>Cherubim may use third-party processors to provide infrastructure and specialised services.</p>
          <p style={S.p}>Where appropriate, Cherubim seeks to require service providers to:</p>
          <ul style={S.ul}>
            <li style={S.li}>process information only for authorised purposes;</li>
            <li style={S.li}>maintain appropriate security measures;</li>
            <li style={S.li}>protect confidentiality; and</li>
            <li style={S.li}>comply with applicable contractual requirements.</li>
          </ul>
        </Section>

        <Section id="s11" title="11. International Data Transfers">
          <p style={S.p}>Some Cherubim service providers or infrastructure providers may operate outside India.</p>
          <p style={S.p}>As a result, personal information may be processed or stored in countries other than the country in which you reside.</p>
          <p style={S.p}>Where required, Cherubim will take appropriate measures for such processing in accordance with applicable law.</p>
        </Section>

        <Section id="s12" title="12. Data Security">
          <p style={S.p}>We use reasonable technical and organisational safeguards designed to protect information from:</p>
          <ul style={S.ul}>
            <li style={S.li}>unauthorised access;</li>
            <li style={S.li}>unauthorised disclosure;</li>
            <li style={S.li}>alteration;</li>
            <li style={S.li}>misuse;</li>
            <li style={S.li}>loss; and</li>
            <li style={S.li}>destruction.</li>
          </ul>
          <p style={S.p}>Security measures may include access controls, authentication mechanisms, encryption where appropriate, logging, monitoring, backups and infrastructure security.</p>
          <p style={S.p}>However, no online system can guarantee absolute security.</p>
        </Section>

        <Section id="s13" title="13. Data Retention">
          <p style={S.p}>We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including:</p>
          <ul style={S.ul}>
            <li style={S.li}>providing services;</li>
            <li style={S.li}>maintaining business records;</li>
            <li style={S.li}>complying with legal obligations;</li>
            <li style={S.li}>resolving disputes;</li>
            <li style={S.li}>enforcing agreements;</li>
            <li style={S.li}>preventing fraud; and</li>
            <li style={S.li}>protecting our legitimate business interests.</li>
          </ul>
          <p style={S.p}>Retention periods may vary depending on the type of information and the service involved.</p>
          <p style={S.p}>When information is no longer required, we may delete, anonymise or securely dispose of it, subject to legal and operational requirements.</p>
        </Section>

        <Section id="s14" title="14. Your Privacy Rights">
          <p style={S.p}>Subject to applicable law, you may have rights relating to your personal information, including rights to:</p>
          <ul style={S.ul}>
            <li style={S.li}>obtain information about processing;</li>
            <li style={S.li}>request access to certain personal information;</li>
            <li style={S.li}>request correction of inaccurate information;</li>
            <li style={S.li}>request deletion where applicable;</li>
            <li style={S.li}>withdraw consent where consent is the basis for processing;</li>
            <li style={S.li}>raise a grievance;</li>
            <li style={S.li}>request information regarding processing activities; and</li>
            <li style={S.li}>exercise other rights available under applicable data-protection law.</li>
          </ul>
          <p style={S.p}>Where consent is the legal basis for processing, withdrawal of consent will not affect processing that was lawfully carried out before withdrawal.</p>
          <p style={S.p}>Some requests may be subject to legal exceptions or verification requirements.</p>
        </Section>

        <Section id="s15" title="15. How to Exercise Your Rights">
          <p style={S.p}>To submit a privacy request, contact us using the details below.</p>
          <p style={S.p}>Your request should, where possible, include:</p>
          <ul style={S.ul}>
            <li style={S.li}>your name;</li>
            <li style={S.li}>registered email address or phone number;</li>
            <li style={S.li}>relevant Cherubim product or service;</li>
            <li style={S.li}>description of your request; and</li>
            <li style={S.li}>any information necessary for us to verify your identity.</li>
          </ul>
          <p style={S.p}>We may request additional information where reasonably necessary to verify the request and protect against unauthorised access.</p>
        </Section>

        <Section id="s16" title="16. Children's Privacy">
          <p style={S.p}>Our services are generally intended for adults and businesses.</p>
          <p style={S.p}>We do not knowingly seek to collect personal information from children in violation of applicable law.</p>
          <p style={S.p}>Where a service is specifically designed for children or minors, additional safeguards and product-specific privacy terms may apply.</p>
        </Section>

        <Section id="s17" title="17. Third-Party Websites">
          <p style={S.p}>Our websites and applications may contain links to third-party websites or services.</p>
          <p style={S.p}>We are not responsible for the privacy practices, security or content of third-party websites.</p>
          <p style={S.p}>We encourage users to review the privacy policies of third-party services before providing personal information.</p>
        </Section>

        <Section id="s18" title="18. Marketing Communications">
          <p style={S.p}>We may send service-related communications necessary to operate your account.</p>
          <p style={S.p}>Where permitted by law, we may also send promotional communications.</p>
          <p style={S.p}>You may unsubscribe from promotional communications by:</p>
          <ul style={S.ul}>
            <li style={S.li}>using the unsubscribe mechanism included in the communication;</li>
            <li style={S.li}>changing applicable account preferences; or</li>
            <li style={S.li}>contacting us.</li>
          </ul>
          <p style={S.p}>You may continue to receive essential transactional or security communications even after opting out of marketing communications.</p>
        </Section>

        <Section id="s19" title="19. Business and Enterprise Customers">
          <p style={S.p}>Where Cherubim processes personal information on behalf of a business customer, the business customer may determine the purposes and means of processing.</p>
          <p style={S.p}>In such circumstances:</p>
          <ul style={S.ul}>
            <li style={S.li}>the business customer may be responsible for providing appropriate notices to individuals;</li>
            <li style={S.li}>Cherubim may process information according to the customer&apos;s instructions and applicable agreement; and</li>
            <li style={S.li}>additional data-processing terms may apply.</li>
          </ul>
          <p style={S.p}>Enterprise customers may enter into a separate Data Processing Agreement with Cherubim where appropriate.</p>
        </Section>

        <Section id="s20" title="20. User-Generated Content">
          <p style={S.p}>Certain Cherubim platforms may allow users to create or upload:</p>
          <ul style={S.ul}>
            <li style={S.li}>text;</li>
            <li style={S.li}>photographs;</li>
            <li style={S.li}>videos;</li>
            <li style={S.li}>audio;</li>
            <li style={S.li}>profiles;</li>
            <li style={S.li}>advertisements;</li>
            <li style={S.li}>documents;</li>
            <li style={S.li}>reviews; or</li>
            <li style={S.li}>other content.</li>
          </ul>
          <p style={S.p}>Users are responsible for ensuring that they have the necessary rights and permissions to submit such content.</p>
          <p style={S.p}>Where content is publicly displayed as part of a platform, other users may be able to view or interact with it.</p>
        </Section>

        <Section id="s21" title="21. Social Media and Advertising Platforms">
          <p style={S.p}>Certain Cherubim products may integrate with platforms such as Instagram, YouTube, Facebook, WhatsApp or other advertising and communication services.</p>
          <p style={S.p}>Where you authorise such integration, information may be exchanged with the relevant platform to provide the requested functionality.</p>
          <p style={S.p}>Such platforms operate independently and are governed by their own terms and privacy policies.</p>
        </Section>

        <Section id="s22" title="22. Changes to This Privacy Policy">
          <p style={S.p}>We may update this Privacy Policy from time to time.</p>
          <p style={S.p}>When we make changes, we will update the &quot;Last Updated&quot; date.</p>
          <p style={S.p}>For material changes, we may provide additional notice where required by applicable law.</p>
        </Section>

        <Section id="s23" title="23. Grievance and Privacy Contact">
          <p style={S.p}>For privacy questions, requests or complaints, please contact:</p>
          <div style={{ background: COLORS.panel, border: `1px solid ${COLORS.line}`, borderRadius: '8px', padding: '20px 22px', margin: '18px 0', fontFamily: sans, fontSize: '15px' }}>
            <p style={{ margin: '0 0 6px' }}><strong>Cherubim AI Infosoft Pvt Ltd</strong></p>
            <p style={{ margin: '0 0 6px' }}>702, A1, Emerald Palace, 6th Main Rd, Ram Nagar South, Madipakkam, Chennai, Tamil Nadu 600091</p>
            <p style={{ margin: '0 0 6px' }}><strong>Privacy / Grievance Email:</strong> <a href="mailto:support@cherubim.in" style={S.a}>support@cherubim.in</a></p>
            <p style={{ margin: '0 0 6px' }}><strong>General Contact:</strong> <a href="mailto:support@cherubim.in" style={S.a}>support@cherubim.in</a></p>
            <p style={{ margin: '0 0 6px' }}><strong>Phone:</strong> <a href="tel:+917869729829" style={S.a}>+91 78697 29829</a></p>
            <p style={{ margin: 0 }}><strong>Website:</strong> <a href="https://www.cherubim.in" style={S.a}>www.cherubim.in</a></p>
          </div>
          <p style={S.p}>If applicable, Cherubim will designate and publish the details of an authorised person or Data Protection Officer in accordance with applicable law.</p>
        </Section>

        <Section id="s24" title="24. Applicable Law">
          <p style={S.p}>This Privacy Policy is governed by the laws applicable in India, subject to any mandatory rights or protections available to individuals under applicable law.</p>
        </Section>

        <footer style={{ marginTop: '56px', paddingTop: '20px', borderTop: `1px solid ${COLORS.line}`, fontFamily: sans, fontSize: '13px', color: COLORS.inkSoft }}>
          © 2026 Cherubim AI Infosoft Pvt Ltd. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

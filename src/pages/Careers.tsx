import { motion } from 'motion/react';
import type { ReactNode } from 'react';

const workAreas = [
  {
    title: 'Lead Generation',
    items: [
      'Identify potential customers',
      'Research businesses and decision-makers',
      'Build targeted prospect lists',
      'Find businesses that can benefit from AI and automation',
      'Identify potential customers for Cherubim’s products and services',
      'Maintain and update lead databases',
    ],
  },
  {
    title: 'Sales Outreach',
    intro: 'You may communicate with prospects through telephone, WhatsApp, email, LinkedIn, social media, online meetings and other appropriate channels. You will learn how to:',
    items: [
      'Introduce Cherubim’s solutions',
      'Understand customer requirements',
      'Qualify prospects',
      'Identify business pain points',
      'Explain product benefits',
      'Schedule demonstrations',
      'Follow up with prospects',
      'Move qualified opportunities through the sales pipeline',
    ],
  },
  {
    title: 'Product Sales',
    intro: 'You may work on selling and promoting Cherubim’s:',
    items: [
      'AI automation solutions',
      'AI agents',
      'Business automation systems',
      'Software development services',
      'SaaS products',
      'Digital marketing solutions',
      'PaidPromo',
      'Guruji.Support',
      'Custom AI solutions',
    ],
    outro: 'You will learn how to understand a customer’s business problem and map it to an appropriate technology solution.',
  },
  {
    title: 'Marketing',
    intro: 'You may also work on:',
    items: [
      'Digital marketing campaigns',
      'Social media marketing',
      'Content marketing',
      'Email marketing',
      'WhatsApp marketing',
      'Lead-generation campaigns',
      'Meta advertising',
      'Google advertising',
      'SEO',
      'Product marketing',
      'Competitor research',
      'Market research',
      'Landing-page optimisation',
      'Marketing analytics',
    ],
  },
  {
    title: 'AI-Powered Sales & Marketing',
    intro: 'One of the important parts of this role will be learning how AI can transform sales and marketing. You may work with:',
    items: [
      'AI lead research',
      'AI-powered lead qualification',
      'AI-generated outreach',
      'AI sales assistants',
      'AI calling/voice agents',
      'Automated follow-ups',
      'CRM automation',
      'n8n workflows',
      'AI-generated marketing content',
      'Lead scoring',
      'Sales analytics',
      'Automated reporting',
    ],
    outro: 'You will have the opportunity to experiment with AI tools and help build internal systems that make Cherubim’s sales team more productive.',
  },
];

const tools = [
  'CRM systems', 'Odoo', 'SuiteCRM', 'n8n', 'WhatsApp', 'Email marketing platforms',
  'Meta Ads', 'Google Ads', 'Google Workspace', 'AI tools', 'LLM-based assistants',
  'Lead-generation tools', 'Analytics platforms',
];

const mustHave = [
  'Excellent communication skills',
  'Good spoken and written English',
  'Confidence speaking with customers',
  'Willingness to make calls and conduct outreach',
  'Strong interpersonal skills',
  'Basic understanding of sales and marketing',
  'Good research skills',
  'Ability to learn quickly',
  'Ability to follow up consistently',
  'Goal-oriented attitude',
  'Willingness to work in a startup environment',
];

const goodToHave = [
  'Knowledge of digital marketing',
  'Social-media marketing experience',
  'Sales experience',
  'Telecalling experience',
  'CRM knowledge',
  'Meta Ads / Google Ads knowledge',
  'Content creation',
  'Canva',
  'SEO',
  'Email marketing',
  'WhatsApp marketing',
  'AI tools',
  'n8n or workflow automation',
  'Basic understanding of SaaS products',
];

const weValue = [
  'Are comfortable talking to strangers',
  'Can confidently explain a product',
  'Ask good questions and listen to customers',
  'Are persistent with follow-ups',
  'Can handle rejection professionally',
  'Take ownership of targets',
  'Learn from every customer interaction',
  'Are curious about technology',
  'Can understand a business problem and communicate a solution',
  'Want to grow into a sales, marketing or business-development professional',
];

const evaluationFactors = [
  'Lead generation', 'Outreach activity', 'Quality of prospect research', 'Customer communication',
  'Follow-up discipline', 'Product understanding', 'Demonstration skills', 'Conversion contribution',
  'Marketing execution', 'Learning ability', 'Ownership', 'Teamwork', 'Professionalism',
];

const education = [
  'BBA', 'B.Com', 'BBM', 'MBA', 'B.E / B.Tech', 'BCA / MCA', 'Any graduate with strong communication and sales ability',
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ff007a', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
      {children}
    </span>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map(item => (
        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#374151', lineHeight: 1.55 }}>
          <span style={{ color: '#E8187A', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
        </div>
        <div className="page-hero-inner" style={{ position: 'relative', zIndex: 10, maxWidth: '760px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, color: 'white', margin: 0 }}>
            Careers at Cherubim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.8, color: '#d1d5db', marginTop: '1.25rem' }}>
            We're a Chennai-based team building AI-powered software, Agentic AI systems, business automation and digital platforms. If you want to learn fast and build real things, we want to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Open positions */}
      <section style={{ background: '#F7F8FF' }}>
        <div className="page-section-inner" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <SectionLabel>We're hiring</SectionLabel>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 2rem' }}>
            Open Positions
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '16px', padding: '1.75rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.75rem' }}>
              Sales & Marketing Trainee
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Chennai (On-site)', 'Trainee → Full-Time', '3-Month Trainee Period', 'Freshers / 0–1 Year', '₹7,000/month stipend'].map(tag => (
                <span key={tag} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#E8187A', background: '#FBEAF0', borderRadius: '4px', padding: '3px 9px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* About the role */}
          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: '#374151' }}>
            As a Sales & Marketing Trainee, you will work closely with the founders and business team to generate leads, engage prospects, understand customer requirements, conduct product demonstrations and convert opportunities into customers.
          </p>
          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: '#374151' }}>
            This is a hands-on startup role — you won't be limited to social-media posting or preparing marketing materials. You'll get exposure to the complete sales and marketing cycle: <strong>Lead Generation → Prospecting → Outreach → Qualification → Demo → Proposal → Negotiation → Conversion → Customer Relationship</strong>, while also working with AI tools and automation to improve the sales process.
          </p>

          {/* What you will work on */}
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: '2.5rem 0 1.25rem' }}>
            What You Will Work On
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {workAreas.map(area => (
              <div key={area.title}>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.5rem' }}>
                  {area.title}
                </h4>
                {area.intro && (
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 0.6rem', lineHeight: 1.6 }}>{area.intro}</p>
                )}
                <CheckList items={area.items} />
                {area.outro && (
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0.6rem 0 0', lineHeight: 1.6 }}>{area.outro}</p>
                )}
              </div>
            ))}
          </div>

          {/* Tools */}
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: '2.5rem 0 0.75rem' }}>
            Technology & Tools
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 0.75rem', lineHeight: 1.6 }}>
            Depending on the project, you may work with:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            {tools.map(t => (
              <span key={t} style={{ fontSize: '0.78rem', fontWeight: 600, color: '#534AB7', background: '#EEEDFE', borderRadius: '4px', padding: '4px 10px' }}>
                {t}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Technical knowledge is not mandatory, but an interest in technology and AI is strongly preferred.
          </p>

          {/* Requirements */}
          <div className="about-values-grid" style={{ marginTop: '2.5rem' }}>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '1.5rem', background: 'white' }}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.9rem' }}>Must Have</h4>
              <CheckList items={mustHave} />
            </div>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '1.5rem', background: 'white' }}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.9rem' }}>Good to Have</h4>
              <CheckList items={goodToHave} />
            </div>
          </div>

          {/* What we value */}
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: '2.5rem 0 1rem' }}>
            What We Value
          </h3>
          <CheckList items={weValue} />
          <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '1rem 0 0', lineHeight: 1.6, fontStyle: 'italic' }}>
            We value attitude, communication and execution more than certificates.
          </p>

          {/* Trainee program */}
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: '2.5rem 0 0.75rem' }}>
            3-Month Trainee Program
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 0.75rem', lineHeight: 1.6 }}>
            The first 3 months will be a trainee period. Performance will be evaluated based on factors such as:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            {evaluationFactors.map(f => (
              <span key={f} style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', borderRadius: '4px', padding: '4px 10px' }}>
                {f}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Based on performance and business requirements, successful trainees may be offered a Full-Time Sales & Marketing / Business Development position at Cherubim. Full-time conversion is performance-based and not automatic.
          </p>

          {/* Career growth */}
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: '2.5rem 0 0.75rem' }}>
            Career Growth
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 0.75rem', lineHeight: 1.6 }}>
            Depending on performance, the role can grow into:
          </p>
          <p style={{ fontSize: '0.92rem', color: '#374151', lineHeight: 1.8, fontWeight: 600 }}>
            Sales & Marketing Trainee → Business Development Executive → Sales / Marketing Specialist → Business Development Manager → Sales & Marketing Manager
          </p>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            High-performing candidates may also get opportunities to work directly with the founders on new product launches, market expansion and AI-powered sales systems.
          </p>

          {/* Education */}
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: '2.5rem 0 0.75rem' }}>
            Education
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 0.75rem', lineHeight: 1.6 }}>
            Candidates from the following backgrounds are encouraged to apply:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            {education.map(e => (
              <span key={e} style={{ fontSize: '0.78rem', fontWeight: 600, color: '#185FA5', background: '#E6F1FB', borderRadius: '4px', padding: '4px 10px' }}>
                {e}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Freshers are welcome. Candidates from non-business backgrounds who have strong communication and sales skills are also encouraged to apply.
          </p>

          {/* Compensation */}
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: '2.5rem 0 0.75rem' }}>
            Compensation
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Trainee period: <strong>₹7,000 per month</strong>. After 3 months: full-time employment and compensation based on performance, role and experience. Performance incentives are also offered.
          </p>
        </div>
      </section>

      {/* How to apply / CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '640px', width: '100%' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, color: 'white' }}>
            How to Apply
          </h2>
          <p style={{ fontSize: '1rem', maxWidth: '520px', margin: '1rem auto', color: '#d1d5db', lineHeight: 1.7 }}>
            Send your resume, LinkedIn profile, and details of any sales, marketing or entrepreneurial experience (portfolio/social-media work if available) to us. If you're excited about AI, technology and building businesses, we want to hear from you.
          </p>
          <a href="mailto:support@cherubim.in?subject=Application%20%E2%80%94%20Sales%20%26%20Marketing%20Trainee"
            className="cta-btn cursor-pointer transition-opacity duration-200 hover:opacity-90"
            style={{ background: '#E8187A', color: 'white', boxShadow: '0 4px 20px rgba(232,24,122,0.4)', textDecoration: 'none' }}>
            Apply via Email →
          </a>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
            support@cherubim.in · Subject: "Application — Sales & Marketing Trainee"
          </p>
        </motion.div>
      </section>
    </>
  );
}

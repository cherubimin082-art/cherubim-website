import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import type { ReactNode } from 'react';

// ---- Sales & Marketing Trainee ----

const salesWorkAreas = [
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

const salesTools = [
  'CRM systems', 'Odoo', 'SuiteCRM', 'n8n', 'WhatsApp', 'Email marketing platforms',
  'Meta Ads', 'Google Ads', 'Google Workspace', 'AI tools', 'LLM-based assistants',
  'Lead-generation tools', 'Analytics platforms',
];

const salesMustHave = [
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

const salesGoodToHave = [
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

const salesWeValue = [
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

const salesEvaluationFactors = [
  'Lead generation', 'Outreach activity', 'Quality of prospect research', 'Customer communication',
  'Follow-up discipline', 'Product understanding', 'Demonstration skills', 'Conversion contribution',
  'Marketing execution', 'Learning ability', 'Ownership', 'Teamwork', 'Professionalism',
];

const salesEducation = [
  'BBA', 'B.Com', 'BBM', 'MBA', 'B.E / B.Tech', 'BCA / MCA', 'Any graduate with strong communication and sales ability',
];

// ---- AI Software Trainee ----

const aiWorkAreas = [
  {
    title: 'AI & Agentic Systems',
    items: [
      'Build and test AI agents',
      'Integrate LLM APIs into applications',
      'Develop agent workflows and tool-calling systems',
      'Create AI-powered automation workflows',
      'Experiment with different AI models and frameworks',
      'Build systems where AI agents can execute real business tasks',
      'Evaluate AI responses and improve prompts/workflows',
      'Work with structured and unstructured data',
    ],
  },
  {
    title: 'Software Development',
    items: [
      'Develop backend APIs',
      'Build frontend interfaces',
      'Develop database-driven features',
      'Integrate third-party APIs',
      'Debug and improve existing applications',
      'Write reusable and maintainable code',
      'Participate in code reviews and testing',
    ],
  },
  {
    title: 'Automation',
    items: [
      'Build business automation workflows',
      'Work with APIs, webhooks and event-driven systems',
      'Integrate AI with existing business applications',
      'Automate repetitive operational processes',
      'Build internal tools for Cherubim and its products',
    ],
  },
];

const aiProducts = ['PaidPromo', 'Guruji.Support', 'Agentic AI platform', 'AI-enabled business automation systems', 'Internal AI tools and platforms'];

const techStack = [
  { category: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'] },
  { category: 'Frontend', items: ['React.js', 'JavaScript', 'HTML/CSS'] },
  { category: 'Mobile', items: ['Flutter'] },
  { category: 'AI', items: ['Large Language Models', 'AI APIs', 'Agentic AI', 'AI agents', 'Prompt engineering', 'AI automation'] },
  { category: 'Automation & Infrastructure', items: ['n8n', 'AWS', 'EC2', 'Lambda', 'S3', 'SES', 'SNS', 'Docker', 'Nginx', 'Git/GitHub'] },
];

const aiMustHave = [
  'Strong programming fundamentals',
  'Basic understanding of data structures and algorithms',
  'Knowledge of at least one programming language',
  'Understanding of APIs and HTTP',
  'Basic database knowledge',
  'Familiarity with Git',
  'Strong problem-solving ability',
  'Willingness to learn AI technologies',
  'Ability to work independently on assigned tasks',
];

const aiGoodToHave = [
  'Java / Spring Boot', 'React.js', 'JavaScript / TypeScript', 'Python', 'MySQL', 'Flutter',
  'REST APIs', 'AWS', 'Docker', 'n8n', 'LLM APIs', 'Prompt engineering', 'AI/ML projects', 'GitHub projects',
];

const whoWillSucceed = [
  'Is genuinely interested in AI',
  'Builds projects outside college assignments',
  'Enjoys experimenting with new technologies',
  'Can learn from documentation and technical resources independently',
  'Likes solving problems rather than waiting for instructions',
  'Is comfortable working in a fast-moving startup environment',
  'Wants to understand how AI can solve real business problems',
  'Is willing to take ownership of features from development to deployment',
];

const aiEvaluationFactors = [
  'Technical learning ability', 'Quality of work', 'Problem-solving', 'Coding ability', 'Speed of execution',
  'Ownership', 'Communication', 'Ability to work with the team', 'Ability to learn new AI technologies',
  'Contribution to real products',
];

const whatYouWillGain = [
  'Experience working on production software',
  'Hands-on experience with Agentic AI',
  'Exposure to real AI implementations',
  'Experience building SaaS platforms',
  'Cloud and deployment experience',
  'API and system-integration experience',
  'Startup product-development experience',
  'Opportunity to work across multiple technology domains',
  'Mentorship from experienced developers and founders',
];

const aiEducation = [
  'B.E / B.Tech', 'B.Sc / BCA', 'MCA / M.Tech', 'Computer Science', 'Information Technology',
  'Artificial Intelligence / Machine Learning', 'Software Engineering',
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

function TagRow({ items, color, bg }: { items: string[]; color: string; bg: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
      {items.map(t => (
        <span key={t} style={{ fontSize: '0.78rem', fontWeight: 600, color, background: bg, borderRadius: '4px', padding: '4px 10px' }}>
          {t}
        </span>
      ))}
    </div>
  );
}

function RoleHeading({ children }: { children: ReactNode }) {
  return (
    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: '2.5rem 0 0.75rem' }}>
      {children}
    </h3>
  );
}

function RoleParagraph({ children }: { children: ReactNode }) {
  return <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 0.75rem', lineHeight: 1.6 }}>{children}</p>;
}

function RoleCard({
  title, blurb, tags, tagColor, tagBg, open, onClick,
}: {
  title: string; blurb: string; tags: string[]; tagColor: string; tagBg: string; open: boolean; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: 'left',
        width: '100%',
        background: 'white',
        border: open ? `2px solid ${tagColor}` : '1px solid #e0e0e0',
        borderRadius: '16px',
        padding: '1.5rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        font: 'inherit',
      }}>
      <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: 0 }}>
        {title}
      </h3>
      <TagRow color={tagColor} bg={tagBg} items={tags} />
      <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, margin: 0, flex: 1 }}>{blurb}</p>
      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: tagColor }}>
        {open ? 'Hide details −' : 'View full details →'}
      </span>
    </button>
  );
}

export default function Careers() {
  const [openRole, setOpenRole] = useState<'sales' | 'ai' | null>(null);
  const toggle = (role: 'sales' | 'ai') => setOpenRole(prev => (prev === role ? null : role));

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

          {/* Role summary cards */}
          {openRole === null && (
          <div className="about-values-grid" style={{ marginBottom: '1.5rem' }}>
            <RoleCard
              title="Sales & Marketing Trainee"
              blurb="Generate leads, run outreach and learn the full sales & marketing cycle — with AI tools built in."
              tags={['Kelambakkam, Chennai', '3-Month Trainee', '₹7,000/month']}
              tagColor="#E8187A"
              tagBg="#FBEAF0"
              open={false}
              onClick={() => toggle('sales')}
            />
            <RoleCard
              title="AI Software Trainee"
              blurb="Work on real AI, Agentic systems and product engineering — not just training exercises."
              tags={['Kelambakkam, Chennai', '3-Month Trainee', '₹7,000/month']}
              tagColor="#185FA5"
              tagBg="#E6F1FB"
              open={false}
              onClick={() => toggle('ai')}
            />
          </div>
          )}

          <AnimatePresence mode="wait" initial={false}>
          {openRole === 'sales' && (
          <motion.div
            key="sales"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}>
          <button type="button" onClick={() => setOpenRole(null)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 700, fontSize: '0.9rem', color: '#E8187A', padding: 0, marginBottom: '1.5rem' }}>
            ← Back to all roles
          </button>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#0A0A0A', margin: '0 0 0.9rem' }}>
            Sales & Marketing Trainee
          </h3>
          <TagRow color="#E8187A" bg="#FBEAF0" items={['Kelambakkam, Chennai', '3-Month Trainee', '₹7,000/month']} />
          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: '#374151' }}>
            As a Sales & Marketing Trainee, you will work closely with the founders and business team to generate leads, engage prospects, understand customer requirements, conduct product demonstrations and convert opportunities into customers.
          </p>
          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: '#374151' }}>
            This is a hands-on startup role — you won't be limited to social-media posting or preparing marketing materials. You'll get exposure to the complete sales and marketing cycle: <strong>Lead Generation → Prospecting → Outreach → Qualification → Demo → Proposal → Negotiation → Conversion → Customer Relationship</strong>, while also working with AI tools and automation to improve the sales process.
          </p>

          <RoleHeading>What You Will Work On</RoleHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {salesWorkAreas.map(area => (
              <div key={area.title}>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.5rem' }}>
                  {area.title}
                </h4>
                {area.intro && <RoleParagraph>{area.intro}</RoleParagraph>}
                <CheckList items={area.items} />
                {area.outro && <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0.6rem 0 0', lineHeight: 1.6 }}>{area.outro}</p>}
              </div>
            ))}
          </div>

          <RoleHeading>Technology & Tools</RoleHeading>
          <RoleParagraph>Depending on the project, you may work with:</RoleParagraph>
          <TagRow color="#534AB7" bg="#EEEDFE" items={salesTools} />
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Technical knowledge is not mandatory, but an interest in technology and AI is strongly preferred.
          </p>

          <div className="about-values-grid" style={{ marginTop: '2.5rem' }}>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '1.5rem', background: 'white' }}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.9rem' }}>Must Have</h4>
              <CheckList items={salesMustHave} />
            </div>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '1.5rem', background: 'white' }}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.9rem' }}>Good to Have</h4>
              <CheckList items={salesGoodToHave} />
            </div>
          </div>

          <RoleHeading>What We Value</RoleHeading>
          <CheckList items={salesWeValue} />
          <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '1rem 0 0', lineHeight: 1.6, fontStyle: 'italic' }}>
            We value attitude, communication and execution more than certificates.
          </p>

          <RoleHeading>3-Month Trainee Program</RoleHeading>
          <RoleParagraph>The first 3 months will be a trainee period. Performance will be evaluated based on factors such as:</RoleParagraph>
          <TagRow color="#0F6E56" bg="#E1F5EE" items={salesEvaluationFactors} />
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Based on performance and business requirements, successful trainees may be offered a Full-Time Sales & Marketing / Business Development position at Cherubim. Full-time conversion is performance-based and not automatic.
          </p>

          <RoleHeading>Career Growth</RoleHeading>
          <RoleParagraph>Depending on performance, the role can grow into:</RoleParagraph>
          <p style={{ fontSize: '0.92rem', color: '#374151', lineHeight: 1.8, fontWeight: 600 }}>
            Sales & Marketing Trainee → Business Development Executive → Sales / Marketing Specialist → Business Development Manager → Sales & Marketing Manager
          </p>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            High-performing candidates may also get opportunities to work directly with the founders on new product launches, market expansion and AI-powered sales systems.
          </p>

          <RoleHeading>Education</RoleHeading>
          <RoleParagraph>Candidates from the following backgrounds are encouraged to apply:</RoleParagraph>
          <TagRow color="#185FA5" bg="#E6F1FB" items={salesEducation} />
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Freshers are welcome. Candidates from non-business backgrounds who have strong communication and sales skills are also encouraged to apply.
          </p>

          <RoleHeading>Compensation</RoleHeading>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Trainee period: <strong>₹7,000 per month</strong>. After 3 months: full-time employment and compensation based on performance, role and experience. Performance incentives are also offered.
          </p>

          <div style={{ background: '#111', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', margin: '0 0 0.9rem', lineHeight: 1.6 }}>
              Send your resume, LinkedIn profile, and details of any sales/marketing experience.
            </p>
            <a href="mailto:support@cherubim.in?subject=Application%20%E2%80%94%20Sales%20%26%20Marketing%20Trainee"
              style={{ display: 'inline-block', background: '#E8187A', color: 'white', borderRadius: '999px', padding: '0.7rem 1.75rem', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
              Apply — Sales & Marketing Trainee →
            </a>
          </div>
          <button type="button" onClick={() => setOpenRole(null)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 700, fontSize: '0.9rem', color: '#E8187A', padding: 0, marginTop: '1.5rem' }}>
            ← Back to all roles
          </button>
          </motion.div>
          )}
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
          {openRole === 'ai' && (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}>
          <button type="button" onClick={() => setOpenRole(null)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 700, fontSize: '0.9rem', color: '#185FA5', padding: 0, marginBottom: '1.5rem' }}>
            ← Back to all roles
          </button>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#0A0A0A', margin: '0 0 0.9rem' }}>
            AI Software Trainee
          </h3>
          <TagRow color="#185FA5" bg="#E6F1FB" items={['Kelambakkam, Chennai', '3-Month Trainee', '₹7,000/month']} />
          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: '#374151' }}>
            As an AI Software Trainee, you will work directly with our development team on real-world software, AI and automation projects — not just training exercises. You'll get exposure to Agentic AI, multi-agent systems, LLMs and AI APIs, AI-powered business automation, backend and frontend development, workflow automation, database-driven applications, cloud infrastructure, AI-enabled SaaS platforms and mobile/web applications.
          </p>
          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: '#374151' }}>
            You will be expected to learn quickly, build quickly, and take ownership of assigned tasks.
          </p>

          <RoleHeading>What You Will Work On</RoleHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {aiWorkAreas.map(area => (
              <div key={area.title}>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.5rem' }}>
                  {area.title}
                </h4>
                <CheckList items={area.items} />
              </div>
            ))}
          </div>

          <RoleHeading>Product Development</RoleHeading>
          <RoleParagraph>You may contribute to Cherubim's live and upcoming products, including:</RoleParagraph>
          <TagRow color="#534AB7" bg="#EEEDFE" items={aiProducts} />

          <RoleHeading>Technology Exposure</RoleHeading>
          <RoleParagraph>Our current technology ecosystem includes:</RoleParagraph>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {techStack.map(group => (
              <div key={group.category}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.4rem' }}>{group.category}</div>
                <TagRow color="#0F6E56" bg="#E1F5EE" items={group.items} />
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            You do not need to know every technology listed above. What matters most is your ability to learn and apply new technologies quickly.
          </p>

          <div className="about-values-grid" style={{ marginTop: '2.5rem' }}>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '1.5rem', background: 'white' }}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.9rem' }}>Must Have</h4>
              <CheckList items={aiMustHave} />
            </div>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '1.5rem', background: 'white' }}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.9rem' }}>Good to Have</h4>
              <CheckList items={aiGoodToHave} />
            </div>
          </div>

          <RoleHeading>Who Will Succeed Here?</RoleHeading>
          <CheckList items={whoWillSucceed} />
          <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '1rem 0 0', lineHeight: 1.6 }}>
            We value ability and execution more than certificates. A strong GitHub profile, personal project, hackathon project, AI experiment or working prototype can be a significant advantage.
          </p>

          <RoleHeading>3-Month Trainee Program</RoleHeading>
          <RoleParagraph>During this period, you will be evaluated based on:</RoleParagraph>
          <TagRow color="#0F6E56" bg="#E1F5EE" items={aiEvaluationFactors} />
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Based on performance and business requirements, successful trainees may be offered a Full-Time Software Engineer / AI Engineer position at Cherubim. Full-time conversion is performance-based and not automatic.
          </p>

          <RoleHeading>What You Will Gain</RoleHeading>
          <CheckList items={whatYouWillGain} />

          <RoleHeading>Education</RoleHeading>
          <RoleParagraph>Candidates pursuing or recently completing the following (or related disciplines) are encouraged to apply:</RoleParagraph>
          <TagRow color="#185FA5" bg="#E6F1FB" items={aiEducation} />
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Equivalent practical skills and project experience may also be considered.
          </p>

          <RoleHeading>Compensation</RoleHeading>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
            Trainee period: <strong>₹7,000 per month</strong>. After 3 months: full-time employment and compensation based on performance, role and experience.
          </p>

          <div style={{ background: '#111', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', margin: '0 0 0.9rem', lineHeight: 1.6 }}>
              Send your resume, GitHub profile, LinkedIn profile, and details of 1–2 projects you've built.
            </p>
            <a href="mailto:support@cherubim.in?subject=Application%20%E2%80%94%20AI%20Software%20Trainee"
              style={{ display: 'inline-block', background: '#185FA5', color: 'white', borderRadius: '999px', padding: '0.7rem 1.75rem', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
              Apply — AI Software Trainee →
            </a>
          </div>
          <button type="button" onClick={() => setOpenRole(null)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 700, fontSize: '0.9rem', color: '#185FA5', padding: 0, marginTop: '1.5rem' }}>
            ← Back to all roles
          </button>
          </motion.div>
          )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '640px', width: '100%' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, color: 'white' }}>
            Don't see the right role?
          </h2>
          <p style={{ fontSize: '1rem', maxWidth: '520px', margin: '1rem auto', color: '#d1d5db', lineHeight: 1.7 }}>
            We're always open to talented, curious people. Send your resume and tell us how you'd like to contribute.
          </p>
          <a href="mailto:support@cherubim.in"
            className="cta-btn cursor-pointer transition-opacity duration-200 hover:opacity-90"
            style={{ background: '#E8187A', color: 'white', boxShadow: '0 4px 20px rgba(232,24,122,0.4)', textDecoration: 'none' }}>
            Email Us →
          </a>
        </motion.div>
      </section>
    </>
  );
}

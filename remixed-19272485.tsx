import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const nav = ["About", "Case Studies", "Skills", "Experience", "Contact"];

const experiences = [
  {
    role: "Senior Associate – Digital Media",
    company: "Google Operations Center",
    period: "Sept 2024 – Present",
    color: "#6c47ff",
    points: [
      "Authored ad copy for 100+ global advertisers with 100% brand voice consistency",
      "Contributed to 15% average lift in ad relevance and Quality Score",
      "Led Root Cause Analysis reducing recurring process errors by 12%",
      "Piloted content extraction workflow improving team efficiency by 15%",
    ],
  },
  {
    role: "Senior Social Media Executive",
    company: "mCaffeine & Hyphen",
    period: "Dec 2023 – Jun 2024",
    color: "#ff6b6b",
    points: [
      "Grew follower base by 25,000 in 6 months through new tools and trends",
      "Improved audience retention by 35% and CTR by 20%",
      "Executed up to 3 launch campaigns monthly, achieving 40% brand awareness lift",
      "2x increase in social media engagement through innovative strategies",
    ],
  },
  {
    role: "Social Media Marketing Lead",
    company: "Truth & Hair (formerly NYNM Organics)",
    period: "Jan 2022 – Dec 2023",
    color: "#00c49f",
    points: [
      "Built cross-channel strategy across 6 platforms generating 25% of total revenue",
      "Drove 40% increase in website traffic via social initiatives",
      "Established Google Ad campaigns delivering a 22x ROAS",
    ],
  },
  {
    role: "Marketing & Sales Executive",
    company: "Uolo Edtech Pvt. Ltd.",
    period: "Feb 2021 – Sept 2021",
    color: "#ffbb28",
    points: [
      "Led website content for 'Uolo Speak' product launch",
      "Contributed to 360° marketing strategies for new and existing products",
      "Piloted sales experiment project under Director of Sales guidance",
    ],
  },
];

const skills = [
  { category: "Brand Development", emoji: "🏗️", color: "#6c47ff", items: ["Market Research", "Brand Strategy", "GTM Strategy", "Product Launches", "Brand Equity", "Consumer Behavior"] },
  { category: "Digital & Social", emoji: "📱", color: "#ff6b6b", items: ["Social Media Strategy", "Paid Media", "SEO Copywriting", "Community Growth", "Performance Marketing"] },
  { category: "Meme & Moment Marketing", emoji: "🔥", color: "#ff9f43", items: ["Trend Hijacking", "Real-Time Content", "Cultural Commentary", "Meme Formats", "Newsjacking", "Viral Content Strategy", "Platform-Native Humour"] },
  { category: "Tools & Platforms", emoji: "🛠️", color: "#00c49f", items: ["Google Ads", "Google Analytics", "Meta Business Suite", "Sprout Social", "Hootsuite", "Canva"] },
  { category: "Core Craft", emoji: "✍️", color: "#a29bfe", items: ["Agency Management", "Cross-Functional Collaboration", "Project Management", "Data-Driven Decision Making"] },
];

const caseStudies = [
  {
    id: 1,
    emoji: "🟤",
    color: "#ff6b6b",
    brand: "mCaffeine & Hyphen",
    title: "Scaling Brand Voice, Launch Systems & Creator Strategy",
    objective: "Strengthen brand personality and recall, build repeatable launch frameworks, and use creators to increase trust and reach.",
    insight: "Engagement and conversion improved when content felt conversational, culturally relevant, and creator-validated rather than overly polished.",
    strategy: ["Built always-on relatable content to humanize the brand", "Structured launches into teaser → education → creator amplification → conversion", "Integrated creators into storytelling rather than only promotions"],
    execution: ["Managed social media end-to-end for mCaffeine", "Planned and executed a launch event for Body Scrubs", "Contributed to branding for upcoming sub-brands (makeup & fragrance)"],
    learning: "Social works best as the connective layer between brand story, culture, creators, and commerce.",
    chartType: "bar",
    chartData: [
      { metric: "Followers", value: 25 },
      { metric: "Retention", value: 35 },
      { metric: "CTR", value: 20 },
      { metric: "Awareness", value: 40 },
      { metric: "Engagement", value: 100 },
    ],
    chartLabel: "Key Performance Improvements (%)",
  },
  {
    id: 2,
    emoji: "🧴",
    color: "#00c49f",
    brand: "Truth & Hair / NYNM Organics",
    title: "Building & Launching a New Haircare Brand",
    objective: "Launch a new brand with a clear identity, align messaging across all touchpoints, and ensure launch translated into measurable growth.",
    insight: "A new brand required stronger credibility signals and consistent storytelling to build trust quickly.",
    strategy: ["Built messaging frameworks focused on problem–solution storytelling", "Used NYNM's existing audience trust to introduce the new brand", "Structured launch content across awareness, education, and conversion"],
    execution: ["Contributed to website copy and product storytelling", "Worked on packaging messaging and tone alignment", "Managed both organic and performance campaigns"],
    learning: "Launching a brand requires aligning product, story, design, and funnel strategy from the start.",
    chartType: "custom",
    chartData: [],
    chartLabel: "Brand Launch Impact",
  },
  {
    id: 3,
    emoji: "🌍",
    color: "#6c47ff",
    brand: "Google Operations Center",
    title: "Improving Campaign Effectiveness Through Messaging Precision",
    objective: "Improve ad relevance and Quality Score, reduce recurring performance issues, align brand messaging with user intent across 100+ global advertisers.",
    insight: "Performance gaps often stemmed from message–intent mismatch rather than targeting or budget issues.",
    strategy: ["Refined messaging to match search intent stages", "Ensured clarity while preserving brand tone", "Used root-cause analysis to address systemic problems"],
    execution: ["Reviewed ad copy across large advertiser portfolios", "Conducted RCA on recurring campaign issues", "Piloted workflow improvements to reduce repetition"],
    learning: "Creative clarity at scale directly influences performance efficiency.",
    chartType: "bar",
    chartData: [
      { metric: "Quality Score", value: 15 },
      { metric: "Error Reduction", value: 12 },
      { metric: "Efficiency", value: 15 },
    ],
    chartLabel: "Operational Impact (%)",
  },
  {
    id: 4,
    emoji: "🎓",
    color: "#ffbb28",
    brand: "Uolo Edtech Pvt. Ltd.",
    title: "Supporting a Product Launch Through Messaging & GTM Alignment",
    objective: "Clearly communicate product value to schools, align marketing and sales messaging, and support adoption through structured communication.",
    insight: "Decision-makers needed clearer articulation of outcomes rather than features.",
    strategy: ["Shifted messaging toward student impact", "Ensured website, presentations, and campaigns aligned", "Structured communication across awareness and proof stages"],
    execution: ["Led website content coordination", "Supported messaging frameworks for presentations", "Worked cross-functionally with product and sales teams"],
    learning: "Clear value communication shortens decision cycles and improves adoption.",
    chartType: "radar",
    chartData: [
      { metric: "Messaging", value: 90 },
      { metric: "GTM Alignment", value: 85 },
      { metric: "Collaboration", value: 80 },
      { metric: "Content Quality", value: 88 },
      { metric: "Sales Enablement", value: 75 },
    ],
    chartLabel: "Capability Impact Areas",
  },
];

function NavBar() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,20,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <span style={{ fontWeight: 900, fontSize: 18, background: "linear-gradient(90deg,#ff6b6b,#6c47ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Kriti Chopra</span>
        <div style={{ display: "flex", gap: 32 }}>
          {nav.map(n => (
            <a key={n} href={`#${n.toLowerCase().replace(" ", "-")}`}
              style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
            >{n}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Section({ id, children, bg = "#0a0a14" }) {
  return (
    <section id={id} style={{ background: bg, padding: "90px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function SectionTitle({ children, sub }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <h2 style={{ fontSize: 38, fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-1px" }}>{children}</h2>
      {sub && <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.4)", fontSize: 15 }}>{sub}</p>}
      <div style={{ width: 40, height: 3, background: "linear-gradient(90deg,#ff6b6b,#6c47ff)", marginTop: 14, borderRadius: 2 }} />
    </div>
  );
}

function CaseStudyChart({ cs }) {
  const barColor = cs.color;
  if (cs.chartType === "radar") {
    return (
      <div>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{cs.chartLabel}</p>
        <ResponsiveContainer width="100%" height={220}>
          <RadarChart data={cs.chartData}>
            <PolarGrid stroke="rgba(255,255,255,0.08)" />
            <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.5)" }} />
            <Radar dataKey="value" stroke={barColor} fill={barColor} fillOpacity={0.25} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  if (cs.chartType === "custom") {
    return (
      <div>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>{cs.chartLabel}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {[{ label: "Website Traffic", val: "+40%", desc: "via social" }, { label: "Revenue from Social", val: "25%", desc: "of total revenue" }, { label: "Google Ads ROAS", val: "22x", desc: "return on spend" }].map(m => (
            <div key={m.label} style={{ flex: 1, minWidth: 100, background: "rgba(255,255,255,0.04)", border: `1px solid ${cs.color}44`, borderRadius: 12, padding: "20px 12px", textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: cs.color }}>{m.val}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{m.label}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{cs.chartLabel}</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={cs.chartData} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis dataKey="metric" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.3)" }} axisLine={false} tickLine={false} unit="%" />
          <Tooltip formatter={v => [`${v}%`]} contentStyle={{ background: "#1a1a2e", border: "none", borderRadius: 8, color: "#fff" }} />
          <Bar dataKey="value" fill={barColor} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CaseStudyCard({ cs }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${open ? cs.color + "66" : "rgba(255,255,255,0.07)"}`, borderRadius: 16, overflow: "hidden", marginBottom: 20, transition: "border-color 0.3s" }}>
      <div style={{ padding: "26px 30px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }} onClick={() => setOpen(!open)}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 28, width: 52, height: 52, background: cs.color + "22", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{cs.emoji}</span>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, color: cs.color, textTransform: "uppercase", letterSpacing: 1.5 }}>{cs.brand}</span>
            <h3 style={{ margin: "4px 0 0", fontSize: 18, fontWeight: 800, color: "#fff" }}>{cs.title}</h3>
          </div>
        </div>
        <div style={{ fontSize: 18, color: "rgba(255,255,255,0.3)", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s", flexShrink: 0 }}>▾</div>
      </div>
      {open && (
        <div style={{ padding: "0 30px 30px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 24 }}>
            <div>
              {[["Objective", cs.objective], ["Insight", cs.insight]].map(([label, text]) => (
                <div key={label} style={{ marginBottom: 18 }}>
                  <h4 style={{ fontSize: 11, fontWeight: 700, color: cs.color, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6, margin: "0 0 6px" }}>{label}</h4>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>{text}</p>
                </div>
              ))}
              {[["Strategy", cs.strategy], ["Execution", cs.execution]].map(([label, arr]) => (
                <div key={label} style={{ marginBottom: 18 }}>
                  <h4 style={{ fontSize: 11, fontWeight: 700, color: cs.color, textTransform: "uppercase", letterSpacing: 1.5, margin: "0 0 8px" }}>{label}</h4>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    {arr.map((s, i) => <li key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 4 }}>{s}</li>)}
                  </ul>
                </div>
              ))}
              <div style={{ background: cs.color + "18", border: `1px solid ${cs.color}44`, borderRadius: 10, padding: "14px 16px" }}>
                <h4 style={{ fontSize: 11, fontWeight: 700, color: cs.color, textTransform: "uppercase", letterSpacing: 1.5, margin: "0 0 4px" }}>Key Learning</h4>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>"{cs.learning}"</p>
              </div>
            </div>
            <div><CaseStudyChart cs={cs} /></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", background: "#0a0a14", color: "#fff" }}>
      <NavBar />

      {/* Hero */}
      <div style={{ paddingTop: 60, minHeight: "100vh", display: "flex", alignItems: "center", background: "radial-gradient(ellipse at 20% 50%, #6c47ff22 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #ff6b6b22 0%, transparent 50%), #0a0a14", position: "relative", overflow: "hidden" }}>
        {/* Decorative floating tags */}
        {[
          { text: "🔥 It's giving main character", top: "18%", left: "62%", rot: -4 },
          { text: "👀 ratio'd and it was deserved", top: "35%", left: "68%", rot: 3 },
          { text: "📈 brand equity unlocked", top: "55%", left: "58%", rot: -2 },
          { text: "🧠 understood the assignment", top: "72%", left: "65%", rot: 5 },
        ].map((t, i) => (
          <div key={i} style={{ position: "absolute", top: t.top, left: t.left, transform: `rotate(${t.rot}deg)`, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "8px 16px", fontSize: 12, color: "rgba(255,255,255,0.5)", backdropFilter: "blur(4px)", whiteSpace: "nowrap", pointerEvents: "none" }}>{t.text}</div>
        ))}
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(108,71,255,0.15)", border: "1px solid rgba(108,71,255,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, background: "#6c47ff", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 6px #6c47ff" }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>Marketing Professional · Meme Whisperer · Moment Maven</span>
          </div>
          <h1 style={{ fontSize: "clamp(52px, 9vw, 88px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-3px", margin: "0 0 24px" }}>
            <span style={{ color: "#fff" }}>Kriti</span><br />
            <span style={{ background: "linear-gradient(90deg,#ff6b6b,#6c47ff,#00c49f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Chopra.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", maxWidth: 500, lineHeight: 1.7, margin: "0 0 16px" }}>
            5+ years turning brand stories into growth engines — from beauty launches to global campaigns.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", maxWidth: 480, lineHeight: 1.7, margin: "0 0 40px" }}>
            Also the person who knows exactly which meme format fits the moment — and why it converts.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#case-studies" style={{ background: "linear-gradient(135deg,#ff6b6b,#6c47ff)", color: "#fff", padding: "14px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>View Case Studies</a>
            <a href="#contact" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.8)", padding: "14px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 600, border: "1px solid rgba(255,255,255,0.1)" }}>Get in Touch</a>
          </div>
        </div>
      </div>

      {/* About */}
      <Section id="about" bg="#0d0d1a">
        <SectionTitle sub="The story behind the strategy">About Me</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, margin: "0 0 16px" }}>
              I'm a marketing strategist with experience building brands across beauty, edtech, and global digital campaigns. My work sits at the intersection of storytelling, performance, and culture.
            </p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, margin: "0 0 16px" }}>
              I have a sharp eye for internet culture — knowing when to ride a trend, when to let it pass, and when to <em style={{ color: "#ff6b6b" }}>create</em> the moment instead of chasing it. Meme marketing isn't just a tactic for me — it's how I stay close to what audiences actually care about.
            </p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, margin: 0 }}>
              I'm drawn to roles where I can shape brand direction, lead creative strategy, and design marketing systems that scale both perception and revenue.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[["5+", "Years Experience", "#6c47ff"], ["100+", "Global Advertisers", "#ff6b6b"], ["22x", "ROAS Achieved", "#00c49f"], ["3+", "Industries", "#ffbb28"]].map(([val, label, color]) => (
              <div key={label} style={{ background: color + "14", border: `1px solid ${color}33`, borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 34, fontWeight: 900, color }}>{val}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Meme & Moment Marketing Callout */}
      <div style={{ background: "linear-gradient(135deg, #ff6b6b18, #6c47ff18)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 40, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#ff9f43", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>🔥 Signature Skill</div>
              <h3 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 16px", lineHeight: 1.2 }}>Meme & Moment<br />Marketing</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0 }}>
                Brands that stay culturally relevant don't wait — they <em style={{ color: "#ff9f43" }}>react in real time</em>. I specialise in identifying breakout moments (trends, news, memes) and translating them into on-brand content that earns reach, sparks conversations, and builds genuine community.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, minWidth: 260 }}>
              {[
                { icon: "⚡", label: "Real-Time Execution", desc: "Zero lag from moment to publish" },
                { icon: "🎭", label: "Brand-Safe Humour", desc: "Funny AND on-message, always" },
                { icon: "📡", label: "Trend Radar", desc: "Spots what's rising before it peaks" },
                { icon: "🎯", label: "Platform-Native Formats", desc: "Reels, meme carousels, reactive threads" },
              ].map(m => (
                <div key={m.label} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,159,67,0.2)", borderRadius: 12, padding: "14px 18px" }}>
                  <span style={{ fontSize: 20 }}>{m.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{m.label}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <Section id="case-studies" bg="#0a0a14">
        <SectionTitle sub="Click any card to explore strategy, execution & results">Case Studies</SectionTitle>
        {caseStudies.map(cs => <CaseStudyCard key={cs.id} cs={cs} />)}
      </Section>

      {/* Skills */}
      <Section id="skills" bg="#0d0d1a">
        <SectionTitle sub="Tools, territories & superpowers">Skills</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {skills.map(s => (
            <div key={s.category} style={{ background: s.color + "0d", border: `1px solid ${s.color}33`, borderRadius: 14, padding: "24px 26px" }}>
              <h4 style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 800, color: s.color, textTransform: "uppercase", letterSpacing: 1.5 }}>{s.emoji} {s.category}</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {s.items.map(item => (
                  <span key={item} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "5px 14px", fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 26px", display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 1.5, marginRight: 8 }}>✓ Certified & Volunteered:</span>
          {["Digital Marketing Certification", "Microsoft Excel Specialist", "Social Media – Pet Fed India", "Event Marketing – The Jai Singh Show"].map(c => (
            <span key={c} style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.04)", padding: "5px 12px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)" }}>{c}</span>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" bg="#0a0a14">
        <SectionTitle sub="The journey so far">Experience</SectionTitle>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg,#6c47ff,#ff6b6b,#00c49f,#ffbb28)" }} />
          {experiences.map((exp, i) => (
            <div key={i} style={{ display: "flex", gap: 28, marginBottom: 44 }}>
              <div style={{ flexShrink: 0, width: 16, height: 16, borderRadius: "50%", background: exp.color, marginTop: 5, position: "relative", zIndex: 1, boxShadow: `0 0 10px ${exp.color}88` }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#fff" }}>{exp.role}</h3>
                    <div style={{ fontSize: 14, color: exp.color, fontWeight: 600, marginTop: 2 }}>{exp.company}</div>
                  </div>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "4px 12px", borderRadius: 20 }}>{exp.period}</span>
                </div>
                <ul style={{ margin: "12px 0 0", paddingLeft: 18 }}>
                  {exp.points.map((p, j) => <li key={j} style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 5 }}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" bg="#0d0d1a">
        <SectionTitle sub="Let's build something great together">Get in Touch</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "0 0 32px" }}>
              Open to opportunities in brand strategy, digital marketing, and creative leadership — especially where culture, content, and commerce collide.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "✉️", label: "work.kritichopra@gmail.com", href: "mailto:work.kritichopra@gmail.com" },
                { icon: "💼", label: "LinkedIn Profile", href: "https://bit.ly/3JorFqd" },
                { icon: "📍", label: "Gurugram, Haryana", href: null },
                { icon: "📱", label: "+91 7982203334", href: null },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ width: 42, height: 42, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{c.icon}</span>
                  {c.href ? <a href={c.href} target="_blank" style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", textDecoration: "none", fontWeight: 500 }}>{c.label}</a>
                    : <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>{c.label}</span>}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "linear-gradient(135deg,#6c47ff22,#ff6b6b22)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 36, textAlign: "center" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>🤝</div>
            <h3 style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 900 }}>Let's Collab</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "0 0 24px" }}>Brand strategy, campaigns, or a full-time role — especially if it involves memes.</p>
            <a href="mailto:work.kritichopra@gmail.com" style={{ display: "inline-block", background: "linear-gradient(135deg,#ff6b6b,#6c47ff)", color: "#fff", padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>Send a Message</a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <div style={{ background: "#060610", padding: "24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.2)", fontSize: 13 }}>© 2025 Kriti Chopra · Marketing Professional · Built with ♥ and probably a trending audio</p>
      </div>
    </div>
  );
}

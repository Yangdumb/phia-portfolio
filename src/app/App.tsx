import { useState } from "react";
import { Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";

/* ── Aurora orb blobs rendered as fixed absolutely-positioned divs ── */
function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* deep bg */}
      <div className="absolute inset-0" style={{ background: "#0f0a1e" }} />
      {/* violet blob top-left */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle at 40% 40%, #7c3aed, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* rose blob top-right */}
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle at 60% 30%, #ec4899, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      {/* cyan blob bottom-left */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[500px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 70%, #06b6d4, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      {/* indigo blob center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #6366f1, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}

const data = {
  name: "Phia Marie Maliao Larrazabal",
  title: "GoHighLevel Specialist · IT Graduate",
  email: "nianlarrazabal@gmail.com",
  summary:
    "Information Technology graduate and certified GoHighLevel Specialist with a passion for streamlining workflows, automating processes, and improving client management systems. I help businesses optimize their CRM systems and deliver seamless customer experiences.",
  skills: [
    "GoHighLevel CRM Setup & Optimization",
    "Sales Funnel & Landing Page Creation",
    "Workflow Automation (Email/SMS Drip Campaigns)",
    "Pipeline & Lead Management",
    "Calendar & Appointment Setup",
    "Integration & Troubleshooting",
    "Technical Support & System Maintenance",
  ],
  tools: [
    "GoHighLevel (GHL)",
    "ClickFunnels",
    "Email Automation Systems",
    "CRM Tools",
    "HTML / CSS",
    "Google Workspace",
  ],
  experience: [
    {
      role: "Logistics Sales Specialist",
      company: "Client Services",
      period: "Previous Role",
      points: [
        "Assisted clients with logistics and transportation-related concerns via calls, emails, and follow-ups.",
        "Built and maintained strong customer relationships; coordinated shipment inquiries and service requests.",
        "Handled CRM updates, data entry, and client records management in a high-volume environment.",
        "Supported lead generation and sales follow-up processes; developed negotiation and communication skills.",
      ],
    },
  ],
  projects: [
    {
      title: "High-Converting Dental Landing Page",
      tag: "Landing Page",
      points: [
        "Responsive landing page for a dental clinic designed to capture leads and increase bookings.",
        "Integrated form submissions directly into the CRM pipeline for instant lead routing.",
      ],
    },
    {
      title: "Automated Email & SMS Workflow",
      tag: "Automation",
      points: [
        "Built a complete follow-up sequence — welcome message, reminders, and re-engagement triggers.",
        "Reduced missed opportunities and improved response rates for inbound leads.",
      ],
    },
    {
      title: "Sales Pipeline Setup",
      tag: "CRM",
      points: [
        "Organized leads into structured pipeline stages with automated movement based on actions.",
        "Enabled the client team to track and close deals more efficiently.",
      ],
    },
    {
      title: "Funnel & Thank You Page",
      tag: "Funnel",
      points: [
        "Designed a full funnel flow from landing page through to thank you page.",
        "Ensured a smooth user journey with proper tracking and conversion setup.",
      ],
    },
  ],
  approach: [
    "Detail-oriented and organized",
    "Fast learner, adaptable to new tools",
    "Strong communicator — fluent in English",
    "Focused on delivering results and improving systems",
  ],
};

const tagColors: Record<string, string> = {
  "Landing Page": "border-stone-300 text-stone-500",
  Automation: "border-stone-300 text-stone-500",
  CRM: "border-stone-300 text-stone-500",
  Funnel: "border-stone-300 text-stone-500",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
      {children}
    </p>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-block border border-white/20 bg-white/10 backdrop-blur-sm font-mono text-[10px] tracking-wide px-2.5 py-0.5 text-white/70 rounded-sm"
    >
      {label}
    </span>
  );
}

function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`backdrop-blur-md border border-white/10 rounded-2xl ${className}`}
      style={{ background: "rgba(255,255,255,0.05)" }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <AuroraBackground />

      {/* Sticky header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl" style={{ background: "rgba(15,10,30,0.6)" }}>
        <div className="max-w-3xl mx-auto px-6 h-11 flex items-center justify-between">
          <span
            className="text-sm font-normal tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Phia Marie
          </span>
          <nav className="flex items-center gap-5">
            {["experience", "projects", "skills"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors hidden md:block"
              >
                {s}
              </a>
            ))}
            <a
              href={`mailto:${data.email}`}
              className="font-mono text-[10px] tracking-[0.15em] uppercase border border-violet-400/60 text-violet-300 px-3 py-1 hover:bg-violet-500/30 transition-colors rounded-sm"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-28">

        {/* ── Hero ── */}
        <section className="pt-12 pb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-pink-400/30 bg-pink-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pink-300">
              Portfolio · GoHighLevel Specialist
            </span>
          </div>

          <h1
            className="text-5xl md:text-[68px] font-normal leading-[1.0] tracking-tight mb-8"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <span className="bg-gradient-to-r from-violet-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Phia Marie
            </span>
            <br />
            <span className="italic text-white/50">Larrazabal</span>
          </h1>

          <p className="text-base font-light leading-relaxed max-w-xl text-white/65 mb-8">
            {data.summary}
          </p>

          <a
            href={`mailto:${data.email}`}
            className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "#fff" }}
          >
            <Mail size={13} />
            {data.email}
          </a>

          {/* stat pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { label: "GoHighLevel Certified", color: "violet" },
              { label: "IT Graduate", color: "pink" },
              { label: "CRM Specialist", color: "cyan" },
            ].map(({ label, color }) => (
              <span
                key={label}
                className="px-3 py-1 rounded-full border font-mono text-[11px]"
                style={
                  color === "violet"
                    ? { borderColor: "rgba(139,92,246,0.4)", background: "rgba(139,92,246,0.1)", color: "#c4b5fd" }
                    : color === "pink"
                    ? { borderColor: "rgba(236,72,153,0.4)", background: "rgba(236,72,153,0.1)", color: "#f9a8d4" }
                    : { borderColor: "rgba(6,182,212,0.4)", background: "rgba(6,182,212,0.1)", color: "#67e8f9" }
                }
              >
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="pt-14 pb-14">
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-8">
            {data.experience.map((job, i) => (
              <Glass key={i} className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-5">
                  <div>
                    <h2
                      className="text-xl font-normal text-white"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {job.role}
                    </h2>
                    <p className="text-sm text-muted-foreground font-light mt-0.5">{job.company}</p>
                  </div>
                  <span className="font-mono text-[11px] text-violet-300/70 border border-violet-400/20 px-2 py-0.5 rounded-sm bg-violet-500/10">
                    {job.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {job.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm font-light leading-relaxed text-white/60"
                    >
                      <span className="mt-[9px] w-3 h-px bg-violet-400/40 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Glass>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="pt-14 pb-14">
          <SectionLabel>Sample Projects</SectionLabel>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.map((proj, i) => {
              const gradients = [
                "from-violet-500/20 to-pink-500/10",
                "from-pink-500/20 to-rose-500/10",
                "from-cyan-500/20 to-violet-500/10",
                "from-indigo-500/20 to-cyan-500/10",
              ];
              return (
                <div
                  key={i}
                  className={`group cursor-default backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:border-white/20 hover:scale-[1.02] bg-gradient-to-br ${gradients[i % gradients.length]}`}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Tag label={proj.tag} />
                    <ArrowUpRight
                      size={13}
                      className="text-white/30 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5"
                    />
                  </div>
                  <h3
                    className="text-base font-normal mb-3 leading-snug text-white/90"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {proj.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {proj.points.map((pt, j) => (
                      <li
                        key={j}
                        className="text-[13px] font-light leading-relaxed text-white/50 flex items-start gap-2"
                      >
                        <span className="mt-[7px] w-2 h-px bg-white/20 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Skills & Tools ── */}
        <section id="skills" className="pt-14 pb-14">
          <SectionLabel>Skills & Tools</SectionLabel>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Glass className="p-6">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-violet-300/70 mb-4">
                Expertise
              </p>
              <ul className="flex flex-col gap-2.5">
                {data.skills.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm font-light text-white/70">
                    <CheckCircle2 size={12} className="text-violet-400 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </Glass>

            <div className="flex flex-col gap-4">
              <Glass className="p-6">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-pink-300/70 mb-4">
                  Tools & Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {data.tools.map((t) => (
                    <span
                      key={t}
                      className="inline-block border border-pink-400/20 bg-pink-500/10 font-mono text-[11px] tracking-wide px-2.5 py-1 text-pink-200/70 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Glass>

              <Glass className="p-6">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-cyan-300/70 mb-4">
                  Work Approach
                </p>
                <ul className="flex flex-col gap-2">
                  {data.approach.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-sm font-light text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Glass>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pt-14">
          <div
            className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.2), rgba(6,182,212,0.2))",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* glow behind */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, #7c3aed, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-green-400/30 bg-green-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-green-300">
                  Open to opportunities
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-normal leading-snug mb-6 max-w-lg mx-auto text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Committed to helping businesses grow through efficient systems and automation.
              </h2>
              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "#fff" }}
              >
                <Mail size={14} />
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16" style={{ background: "rgba(15,10,30,0.6)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-3xl mx-auto px-6 h-12 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-wide text-white/30 uppercase">
            Phia Marie Larrazabal · {new Date().getFullYear()}
          </span>
          <a
            href={`mailto:${data.email}`}
            className="font-mono text-[10px] tracking-wide text-white/40 hover:text-white/70 transition-colors"
          >
            {data.email}
          </a>
        </div>
      </footer>
    </div>
  );
}

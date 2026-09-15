// "use client";

// import AnimateIn from "./AnimateIn";

// const experiences = [
//   {
//     company: "Brand Machine Group Ltd",
//     role: "Data Analyst",
//     period: "2023–2025",
//     bullets: [
//       "Increased email marketing conversion rate from 0.3% to 1.9% via Power BI dashboards",
//       "Improved sales conversion by 25.7% across multiple brands via ROAS analytics",
//       "Drove 8% seasonal revenue increase via Apriori-based Market Basket Analysis",
//       "Conducted daily demand analysis during warehouse migration",
//       "Delivered monthly insights dashboards for leadership decision-making",
//     ],
//   },
//   {
//     company: "Koch Business Solutions",
//     role: "Data Analytics Engineer",
//     period: "2023",
//     bullets: [
//       "Reduced data preparation time by 40% via ETL re-engineering in Tableau Prep",
//       "Deployed Tableau dashboard across 10 global facilities, 30% conversion increase",
//       "Cleaned 2M+ HR records ahead of global data transformation",
//     ],
//   },
// ];

// export default function Experience() {
//   return (
//     <section id="experience" className="pt-6 pb-14 bg-white/40">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         <AnimateIn>
//           <p className="section-number">/02</p>
//           <h2 className="section-heading">Experience</h2>
//           <div className="w-16 h-0.5 bg-gold mt-3" />
//         </AnimateIn>

//         <div className="mt-12 space-y-8">
//           {experiences.map((exp, i) => (
//             <AnimateIn key={exp.company} delay={i * 0.15}>
//               <div className="paper-card py-8 px-8">
//                 <h3 className="text-2xl font-extrabold text-navy-dark">{exp.company}</h3>
//                 <p className="text-lg font-semibold text-gold-dark mt-1">
//                   {exp.role} <span className="text-text-muted font-normal">· {exp.period}</span>
//                 </p>

//                 <ul className="mt-6 space-y-4">
//                   {exp.bullets.map((bullet, j) => (
//                     <li key={j} className="flex gap-4 text-text-secondary text-lg leading-relaxed">
//                       <span className="text-gold text-2xl leading-none mt-0.5 shrink-0 font-bold">→</span>
//                       <span>{bullet}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </AnimateIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

const categories = [
  {
    label: "Work Experience",
    entries: [
      {
        company: "Brand Machine Group Ltd",
        role: "Data Analyst",
        period: "Oct 2023 – Jan 2025",
        bullets: [
          "Designed Power BI conversion-funnel dashboards with forward-looking performance indicators, increasing email marketing ROI from 0.3% to 1.9%",
          "Built scalable ROAS and customer behavior analytics dashboards, improving sales conversion by 25.7% across multiple brands and driving a 1.5% lift in overall revenue",
          "Identified high-value product associations using Apriori-based Market Basket Analysis, driving an 8% seasonal revenue increase through targeted campaigns",
          "Performed daily demand and fulfillment analysis during a warehouse migration, ensuring consistent revenue flow across e-commerce and B2B channels",
          "Delivered monthly financial insights dashboards to leadership, providing actionable performance metrics for strategic decision-making",
        ],
      },
      {
        company: "Koch Business Solutions",
        role: "Data Analytics Engineer",
        period: "Mar – Sep 2023",
        bullets: [
          "Worked as an Intern at Koch India in the HR Analytics division",
          "Re-engineered ETL pipelines in Tableau Prep Builder for a global reporting team, cutting data preparation time by 40% and improving downstream data accuracy",
          "Built and deployed an experiment-tracking dashboard across 10 global facilities, quantifying a 30% conversion improvement and 8% reduction in operational risk while standardizing 2M+ records for a global data transformation",
          "Managed development documentation and cross-functional knowledge transfer using Agile methodologies, ensuring analytical workflow reproducibility"
        ],
      },
    ],
  },
  {
    label: "Leadership",
    entries: [
      {
        company: "Northeastern University Engineering Society",
        role: "VP of Finance",
        period: "May 2026 – Present",
        bullets: [
          "I Manage end-to-end budgeting, invoice processing, and financial reporting for NUESS, including the 12th Annual Energy Conference",
          "Developed an Excel-based financial tracker to monitor expenses, sponsorship inflows, and budget variances",
          " I also Perform recurring budget-to-actual reconciliations, documenting discrepancies and maintaining standardized expense reporting procedures",
          "Lead the annual budget proposal and allocation process, advising club leads on funding requests and available balances",
        ],
      },
      {
        company: "TEDx CMRIT",
        role: "Curator Lead",
        period: "2022 – 2023",
        bullets: [
          "Managed event budgets and sponsorship funds end-to-end, overseeing vendor negotiations, cost allocation for events for TEDx CMRIT",
          "Coordinated cross-functional logistics including speaker selection, sponsor relations, and vendor contracts, delivering the event within budget",
          "Curated a portfolio of 8 events, managing end-to-end planning, budgeting, and delivery for each"

        ],
      },
      {
        company: "CMR Institute of Technology - College Placement Cell",
        role: "Placement Co-ordinator",
        period: "2022 – 2023",
        bullets: [
          "Led campus recruitment drives as the primary liaison between corporate recruiters, faculty, and students across multiple hiring cycles",
          "Maintained a placement analytics tracker, improving hiring-outcome visibility and reporting accuracy for university administration",

        ],
      },
    ],
  },
  {
    label: "Entrepreneurial Experience",
    entries: [
      {
        company: "Ethica Labs",
        role: "Co-Founder",
        period: "Oct 2024 – Oct 2025",
        bullets: [
          "Co-founded Ethica Labs with a collaborator, developing an 'Ethics as a Service' concept, with an MVP designed to monitor AI model parameters and flag ethical risks",
          "Scoped product direction, defined core features, and built an early-stage prototype, gaining hands-on experience in product ideation and technical problem-solving",
        ],
      },
      {
        company: "House of Mangoes",
        role: "Co-Founder",
        period: "2022 – 2023",
        bullets: [
          "Co-founded a farm-to-consumer mango delivery startup, sourcing directly from farmers in Kolar and managing last-mile delivery within a 5km radius",
          "Owned end-to-end financial planning like budgeting procurement costs, logistics expenses, and EV/fuel delivery costs with a break-even target",
          "Managed cost structure analysis across sourcing, cold storage, and delivery to optimize unit economics and pricing strategy"
        ],
      },
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % categories.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);

  const active = categories[activeIndex];

  return (
    <section id="experience" className="pt-6 pb-14 bg-white/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimateIn>
          <p className="section-number">/02</p>
          <h2 className="section-heading">Experience</h2>
          <div className="w-16 h-0.5 bg-gold mt-3" />
        </AnimateIn>

        {/* Rectangular tabs */}
        <div className="mt-10 flex gap-1.5 overflow-x-auto pb-2">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveIndex(i)}
              className={`relative px-6 py-3 text-base font-bold font-serif transition-all duration-200 ${
                activeIndex === i
                  ? "bg-navy-dark text-white"
                  : "bg-[#FDFCFA] border border-border text-text-muted hover:text-navy hover:border-navy/30"
              }`}
            >
              {cat.label}
              {activeIndex === i && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold" />
              )}
            </button>
          ))}
        </div>

        {/* Cards with arrows */}
        <div className="mt-8 relative">
          {/* Arrow buttons */}
          <button
            onClick={goPrev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-border flex items-center justify-center hover:border-navy/30 transition-colors hidden md:flex"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="text-navy" />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-border flex items-center justify-center hover:border-navy/30 transition-colors hidden md:flex"
            aria-label="Next"
          >
            <ChevronRight size={20} className="text-navy" />
          </button>

          {/* Experience cards */}
          <div className="space-y-6">
            {active.entries.map((entry, i) => (
              <div
                key={entry.company}
                className="paper-card py-8 px-8"
              >
                <h3 className="text-2xl font-extrabold text-navy-dark">
                  {entry.company}
                </h3>
                <p className="text-lg font-semibold text-gold-dark mt-1">
                  {entry.role}{" "}
                  <span className="text-text-muted font-normal">
                    · {entry.period}
                  </span>
                </p>

                <ul className="mt-6 space-y-4">
                  {entry.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-4 text-text-secondary text-lg leading-relaxed"
                    >
                      <span className="text-gold text-2xl leading-none mt-0.5 shrink-0 font-bold">
                        →
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators + counter */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="flex gap-3 items-center">
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-200 ${
                  activeIndex === i
                    ? "w-6 h-1.5 bg-gold"
                    : "w-3 h-3 rounded-full bg-text-muted/40 hover:bg-text-muted/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <p className="text-sm text-text-muted">
            {activeIndex + 1} / {categories.length}
          </p>
        </div>

        {/* Mobile swipe hint */}
        <div className="mt-2 text-center md:hidden">
          <p className="text-xs text-text-muted">
            Tap tabs or arrows to navigate
          </p>
        </div>
      </div>
    </section>
  );
}
// "use client";

// import AnimateIn from "./AnimateIn";

// const facts = [
//   { label: "EDUCATION", value: "MS Eng. Management, NEU '27" },
//   { label: "CERTIFICATION", value: "CFA Level I — Feb 2027" },
//   { label: "EXPERIENCE", value: "2+ years in Analytics" },
//   { label: "FOCUS", value: "Finance + Analytics + Tech" },
// ];

// export default function About() {
//   return (
//     <section id="about" className="pt-6 pb-14">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         <AnimateIn>
//           <p className="section-number">/01</p>
//           <h2 className="section-heading">About Me</h2>
//           <div className="w-16 h-0.5 bg-gold mt-3" />
//         </AnimateIn>

//         <div className="mt-12 max-w-3xl space-y-5">
//           <AnimateIn delay={0.2}>
//             <p className="text-text-secondary leading-relaxed text-lg">
//               I&apos;m a data analyst and aspiring finance professional bridging the gap between complex datasets and strategic business decisions. My work and interest sits at the intersection of finance, analytics, data, and technology.
//             </p>
//           </AnimateIn>
//           <AnimateIn delay={0.3}>
//             <p className="text-text-secondary leading-relaxed text-lg">
//               I come from an analytics background, my days mostly were dashboards, ETL pipelines, data-driven decision-making and I'm channeling that into finance. I've taken up the role VP of Finance at Finance role at the Northeastern University Energy Systems Society, a first step, and a deliberate one, toward the finance career I'm working toward..
//             </p>
//           </AnimateIn>
//           <AnimateIn delay={0.4}>
//             <p className="text-text-secondary leading-relaxed text-lg">
//               Currently pursuing my MS in Engineering Management at Northeastern and preparing for CFA Level I, seeking Winter 2027 co-op opportunities in portfolio analytics, investment research, and risk.
//             </p>
//           </AnimateIn>
//         </div>

//         <AnimateIn delay={0.5}>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
//             {facts.map((fact) => (
//               <div key={fact.label} className="paper-card py-8 px-6">
//                 <p className="text-sm font-extrabold text-gold-dark tracking-wider">{fact.label}</p>
//                 <p className="text-lg text-navy-dark mt-3 font-bold">{fact.value}</p>
//               </div>
//             ))}
//           </div>
//         </AnimateIn>
//       </div>
//     </section>
//   );
// }

"use client";

import AnimateIn from "./AnimateIn";

const facts = [
  { label: "EDUCATION", value: "MS Eng. Management, NEU '27" },
  { label: "CERTIFICATION", value: "CFA Level I — Feb 2027" },
  { label: "EXPERIENCE", value: "2+ years in Analytics" },
  { label: "FOCUS", value: "Finance + Analytics + Tech" },
];

export default function About() {
  return (
    <section id="about" className="pt-6 pb-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimateIn>
          <p className="section-number">/01</p>
          <h2 className="section-heading">About Me</h2>
          <div className="w-16 h-0.5 bg-gold mt-3" />
        </AnimateIn>

        <div className="mt-8 max-w-3xl space-y-5">
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed text-lg">
              I&apos;m a data analyst and aspiring finance professional bridging the gap between complex datasets and strategic business decisions. My work and interest sits at the intersection of finance, analytics, data, and technology.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-text-secondary leading-relaxed text-lg">
              I come from an analytics background, my days mostly were dashboards, ETL pipelines, data-driven decision-making and I'm channeling that into finance. I've taken up the role VP of Finance at Finance role at the Northeastern University Energy Systems Society, a first step, and a deliberate one, toward the finance career I'm working toward..
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <p className="text-text-secondary leading-relaxed text-lg">
              Currently pursuing my MS in Engineering Management at Northeastern and preparing for CFA Level I, seeking Winter 2027 co-op opportunities in portfolio analytics, investment research, and risk.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8">
            {facts.map((fact) => (
              <div key={fact.label} className="paper-card py-5 px-4 md:py-8 md:px-6">
                <p className="text-[10px] md:text-sm font-extrabold text-gold-dark tracking-wide">{fact.label}</p>
                <p className="text-sm md:text-lg text-navy-dark mt-2 md:mt-3 font-bold">{fact.value}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
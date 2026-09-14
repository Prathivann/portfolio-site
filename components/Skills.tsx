"use client";

import AnimateIn from "./AnimateIn";

const skillGroups = [
  { category: "Data Analytics & Viz", skills: ["SQL", "Power BI", "DAX", "Tableau", "Alteryx", "Matillion"] },
  { category: "Programming", skills: ["Python", "C", "C++", "VBA"] },
  { category: "Machine Learning", skills: ["Regression", "Classification", "XGBoost", "Random Forest", "scikit-learn", "statsmodels"] },
  { category: "Finance & Analysis", skills: ["Financial Modeling", "Risk Analysis", "Budget Tracking", "Reconciliation", "ROAS"] },
  { category: "Advanced Excel", skills: ["Pivot Tables", "VLOOKUP", "Macros / VBA", "Financial Modeling"] },
  { category: "Tools & Workflow", skills: ["Agile / Scrum", "Jira", "Power Automate", "SharePoint", "Git"] },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-6 pb-14 bg-white/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimateIn>
          <p className="section-number">/04</p>
          <h2 className="section-heading">Skills & Tools</h2>
          <div className="w-16 h-0.5 bg-gold mt-3" />
        </AnimateIn>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <AnimateIn key={group.category} delay={i * 0.08}>
              <div className="paper-card h-full py-7 px-6">
                <h3 className="text-lg font-extrabold text-navy-dark mb-5">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (<span key={skill} className="pill">{skill}</span>))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

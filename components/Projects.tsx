"use client";

import { Github } from "lucide-react";
import AnimateIn from "./AnimateIn";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    description: "Built a Random Forest-based fraud detection model in Python with feature engineering, statistical evaluation, and visualization on imbalanced financial transaction data.",
    github: "https://github.com/Prithivann",
    
  },
  {
    title: "Credit Risk Segmentation",
    description: "Developed customer credit risk segments using XGBoost classification and statistical tests (Chi-squared, ANOVA) to identify risk tiers with full cross-validation pipeline.",
    github: "https://github.com/Prithivann",
    
  },
  {
    title: "Revenue & Conversion Dashboards",
    description: "Designed scalable Power BI dashboards analyzing ROAS and customer behavior trends across multiple brands, driving a 25.7% improvement in sales conversion.",
    github: "https://github.com/Prithivann",
    
  },
  {
    title: "Global HR Analytics Pipeline",
    description: "Re-engineered ETL workflows in Tableau Prep Builder for a global HR analytics team, deployed dashboards across 10 facilities, and cleaned 2M+ records.",
    github: "https://github.com/Prithivann",
    
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-6 pb-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimateIn>
          <p className="section-number">/03</p>
          <h2 className="section-heading">Projects</h2>
          <div className="w-16 h-0.5 bg-gold mt-3" />
        </AnimateIn>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimateIn key={project.title} delay={i * 0.1}>
              <div className="paper-card h-full flex flex-col py-8 px-7">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-extrabold text-navy-dark pr-4">{project.title}</h3>
                  <span className="text-sm text-text-muted font-mono shrink-0">{project.date}</span>
                </div>

                <p className="mt-4 text-base text-text-secondary leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base text-navy font-bold hover:text-navy-dark transition-colors"
                  >
                    <Github size={18} /> View on GitHub →
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

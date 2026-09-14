"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

const upcomingPosts = [
  { title: "Building Dashboards That Actually Change Decisions", description: "Why most BI dashboards fail to drive action, and the design patterns that fix it." },
  { title: "From 0.3% to 1.9%: Anatomy of a Conversion Funnel Redesign", description: "How Power BI funnel analysis and forward-looking KPIs transformed email marketing." },
];

interface BlogPreviewProps { posts: BlogPost[]; }

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section id="blog" className="pt-6 pb-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimateIn>
          <div className="flex items-end justify-between">
            <div>
              <p className="section-number">/05</p>
              <h2 className="section-heading">Writing</h2>
              <div className="w-16 h-0.5 bg-gold mt-3" />
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-base text-gold-dark hover:text-gold transition-colors font-bold">
              All posts <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateIn>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {posts.slice(0, 1).map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <article className="paper-card corner-card corner-card h-full flex flex-col py-7 px-6">
                  <h3 className="text-lg font-extrabold text-navy-dark leading-snug">{post.title}</h3>
                  <p className="mt-3 text-base text-text-secondary flex-grow">{post.description}</p>
                  <div className="mt-4 text-sm text-text-muted">{post.date} · {post.readingTime}</div>
                  <div className="mt-3"><span className="text-base text-navy font-bold">Read article →</span></div>
                </article>
              </Link>
            </AnimateIn>
          ))}
          {upcomingPosts.map((post, i) => (
            <AnimateIn key={post.title} delay={(i + 1) * 0.1}>
              <div className="paper-card corner-card corner-card h-full flex flex-col py-7 px-6">
                <h3 className="text-lg font-extrabold text-navy-dark leading-snug">{post.title}</h3>
                <p className="mt-3 text-base text-text-secondary flex-grow">{post.description}</p>
                <div className="mt-4 text-sm text-text-muted">Coming soon</div>
                <div className="mt-3"><span className="text-base text-text-muted">In progress</span></div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

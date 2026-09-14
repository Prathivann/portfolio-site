import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Writing — Prithivan Raja",
  description:
    "Essays on credit risk modeling, machine learning for finance, and building dashboards that change decisions.",
};

const upcomingPosts = [
  {
    title: "Building Dashboards That Actually Change Decisions",
    description: "Why most BI dashboards fail to drive action, and the design patterns that fix it.",
    tags: ["Data Viz"],
    topColor: "border-l-accent-lavender",
  },
  {
    title: "From 0.3% to 1.9%: Anatomy of a Conversion Funnel Redesign",
    description: "How Power BI funnel analysis and forward-looking KPIs transformed email marketing.",
    tags: ["Finance", "Analytics"],
    topColor: "border-l-accent-orange",
  },
];

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-accent-blue hover:text-accent-blue/80 transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Writing</h1>
          <p className="mt-4 text-text-secondary max-w-2xl leading-relaxed">
            Essays on credit risk modeling, machine learning for finance, and
            building dashboards that change decisions.
          </p>

          <div className="mt-12 space-y-5">
            {/* Published posts */}
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="card border-l-[3px] border-l-accent-blue group">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary">
                    {post.description}
                  </p>
                  <div className="mt-3 text-xs text-text-muted">
                    {post.date} · {post.readingTime}
                  </div>
                  <div className="mt-3">
                    <span className="text-sm text-accent-blue font-semibold">
                      Read article →
                    </span>
                  </div>
                </article>
              </Link>
            ))}

            {/* Upcoming posts */}
            {upcomingPosts.map((post) => (
              <div
                key={post.title}
                className={`card border-l-[3px] ${post.topColor}`}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary">
                  {post.description}
                </p>
                <div className="mt-3 text-xs text-text-muted">Coming soon</div>
                <div className="mt-3">
                  <span className="text-sm text-text-muted">In progress</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

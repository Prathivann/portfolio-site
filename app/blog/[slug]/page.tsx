import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Prithivan Raja`,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 min-h-screen">
          <div className="max-w-3xl mx-auto px-6 md:px-10 text-center pt-6 pb-14">
            <h1 className="text-2xl font-bold text-text-primary">Post not found</h1>
            <Link href="/blog" className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent-blue">
              <ArrowLeft size={14} /> Back to writing
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <article className="max-w-3xl mx-auto px-6 md:px-10">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-blue transition-colors mb-8">
            <ArrowLeft size={14} /> All posts
          </Link>

          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
              {post.title}
            </h1>

            <p className="mt-3 text-text-secondary">{post.description}</p>

            <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
              <span className="inline-flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={14} />{post.readingTime}</span>
            </div>

            <hr className="mt-8 border-border" />
          </div>

          <div className="prose-blog">
            <MDXRemote source={post.content} />
          </div>

          <hr className="mt-12 border-border" />
          <div className="mt-6 flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-accent-blue hover:text-accent-blue/80 transition-colors">
              <ArrowLeft size={14} /> All posts
            </Link>
            <a href="https://linkedin.com/in/prithivan-r-817948219/" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-accent-blue transition-colors">
              Discuss on LinkedIn →
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

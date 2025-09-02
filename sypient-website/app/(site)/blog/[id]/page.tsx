import Link from "next/link";

type Params = { params: { id: string } };

export default function BlogPostPage({ params }: Params) {
  const { id } = params;
  return (
    <article className="section">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold" style={{ color: "var(--black)", fontFamily: "var(--font-headings)" }}>Post #{id}</h1>
        <p className="mt-4" style={{ color: "var(--dark-gray)" }}>This is a placeholder blog post. Replace with CMS content.</p>
        <div className="mt-6">
          <a href="/contact" className="btn-cta">Contact Us for Custom Solutions</a>
        </div>
        <p className="mt-4 text-sm"><Link href="/blog" className="underline">Back to Blog</Link></p>
      </div>
    </article>
  );
}


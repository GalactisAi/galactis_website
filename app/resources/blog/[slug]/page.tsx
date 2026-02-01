import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import BlogRefreshTrigger from "@/components/BlogRefreshTrigger";
import BlogImage from "@/components/BlogImage";
import { marked } from "marked";
import {
  getPostBySlug,
  getAllPostSlugs,
  formatPostDate,
  calculateReadTime,
} from "@/lib/blog-api";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Galactis.ai Blog",
    };
  }

  const title = post.metaTitle ?? `${post.title} | Galactis.ai Blog`;
  const description = post.metaDescription ?? post.excerpt;

  return {
    title,
    description,
    ...(post.canonicalUrl && {
      alternates: { canonical: post.canonicalUrl },
    }),
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      ...(post.coverImage?.url && {
        images: [
          {
            url: post.coverImage.url,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      }),
    },
    ...(post.coverImage?.url && {
      twitter: {
        card: "summary_large_image",
        images: [post.coverImage.url],
      },
    }),
  };
}

// Always fetch fresh data - no static caching
export const revalidate = 0;
export const dynamic = "force-dynamic";
// Allow dynamic generation of routes not in generateStaticParams (fixes 404 for new posts)
export const dynamicParams = true;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readTime = post.content
    ? calculateReadTime(post.content)
    : 5;

  // Get blog API URL for image transformation
  const blogApiUrl = process.env.BLOG_API_URL || "https://blog-nest-galactis.replit.app";

  // Structured data for SEO (Article schema)
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    dateModified: post.updatedAt || post.publishedDate,
    ...(post.authors?.length
      ? {
          author: post.authors.map((a) => ({
            "@type": "Person" as const,
            name: a.name,
            ...(a.description && { description: a.description }),
            ...(a.image && { image: a.image }),
          })),
        }
      : {
          author: {
            "@type": "Organization" as const,
            name: "Galactis.ai",
          },
        }),
    publisher: {
      "@type": "Organization",
      name: "Galactis.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://galactis.ai/galactis-logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://galactis.ai/resources/blog/${post.slug}`,
    },
    wordCount: post.content?.split(/\s+/).length || 0,
    articleSection: "Technology",
    ...(post.coverImage?.url && { image: post.coverImage.url }),
  };

  // Convert markdown (including bold/heading syntax) to HTML
  const renderer = new marked.Renderer();
  renderer.heading = (text, level) => {
    const sizes: Record<number, string> = {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
      6: "text-base",
    };
    return `<h${level} class="${sizes[level] || "text-xl"} font-semibold mt-8 mb-3 leading-tight">${text}</h${level}>`;
  };
  renderer.list = (body, ordered) =>
    `<${ordered ? "ol" : "ul"} class="${ordered ? "list-decimal" : "list-disc"} ml-6 my-4 space-y-2">${body}</${ordered ? "ol" : "ul"}>`;
  renderer.listitem = (text) => `<li class="leading-relaxed">${text}</li>`;
  renderer.paragraph = (text) => `<p class="my-4 leading-relaxed">${text}</p>`;
  renderer.image = (href, _title, text) => {
    // Convert relative backend paths to absolute URLs
    let imageUrl = href;
    if (href && href.startsWith('/objects/uploads/')) {
      imageUrl = `${blogApiUrl}${href}`;
    }
    return `<img src="${imageUrl}" alt="${text || ""}" class="w-full h-auto rounded-xl shadow-lg my-6" loading="lazy" />`;
  };
  // Wrap tables in scroll container for mobile + add base styling
  renderer.table = (header, body) =>
    `<div class="my-6 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-700"><table class="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700"><thead>${header}</thead><tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">${body}</tbody></table></div>`;
  renderer.tablerow = (content) => `<tr>${content}</tr>`;
  renderer.tablecell = (content, flags) => {
    const tag = flags.header ? "th" : "td";
    const align =
      flags.align === "center"
        ? " text-center"
        : flags.align === "right"
          ? " text-right"
          : " text-left";
    const cellClass = flags.header
      ? `px-4 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800/50${align}`
      : `px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300${align}`;
    return `<${tag} class="${cellClass}">${content}</${tag}>`;
  };

  // Transform content: convert relative image paths to absolute URLs
  let processedContent = post.content || '';
  if (processedContent) {
    // Replace markdown image syntax with relative paths
    processedContent = processedContent.replace(
      /!\[([^\]]*)\]\((\/objects\/uploads\/[^)]+)\)/g,
      (_match, alt, path) => {
        return `![${alt}](${blogApiUrl}${path})`;
      }
    );
  }

  const htmlContent =
    processedContent && processedContent.trim().length > 0
      ? (marked.parse(
          processedContent
            .replace(/\r\n/g, "\n") // normalize line breaks
            .replace(/\u00A0/g, " ") // convert non-breaking spaces
            .trim(),
          {
            gfm: true,
            breaks: true,
            renderer,
          }
        ) as string)
      : "";

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <BlogRefreshTrigger />
      <JsonLd data={articleJsonLd} />
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/resources/blog"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="truncate text-zinc-900 dark:text-zinc-100">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            {post.excerpt}
          </p>

          {/* Meta info */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-zinc-200 py-4 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <time>{formatPostDate(post.publishedDate)}</time>
            <span>·</span>
            <span>{readTime} min read</span>
            {post.authors?.length ? (
              <>
                <span>·</span>
                <span className="flex items-center gap-2">
                  {post.authors[0].image ? (
                    <BlogImage
                      src={post.authors[0].image}
                      alt={post.authors[0].name}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                  ) : null}
                  <span>By {post.authors[0].name}</span>
                </span>
              </>
            ) : null}
          </div>
        </header>

        {/* Cover Image - Shows between header and article content */}
        {post.coverImage?.url && post.coverImage.url.trim() !== "" ? (
          <div className="mb-12 -mx-4 sm:mx-0">
            <BlogImage
              src={post.coverImage.url}
              alt={post.title}
              className="w-full h-auto rounded-2xl object-cover shadow-lg"
            />
          </div>
        ) : null}

        {/* Article Content */}
        <article className="prose prose-lg prose-zinc mx-auto dark:prose-invert prose-headings:font-bold prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-purple-400 prose-img:rounded-xl prose-img:shadow-lg">
          {htmlContent ? (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          ) : (
            <div className="whitespace-pre-wrap">{post.content}</div>
          )}
        </article>

        {/* About the Author(s) */}
        {post.authors?.length ? (
          <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <h2 className="mb-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {post.authors.length === 1 ? "About the Author" : "About the Authors"}
            </h2>
            <div className="flex flex-col gap-8">
              {post.authors.map((author) => (
                <div
                  key={author.name}
                  className="flex flex-col gap-4 sm:flex-row sm:items-start"
                >
                  {author.image ? (
                    <BlogImage
                      src={author.image}
                      alt={author.name}
                      className="h-20 w-20 shrink-0 rounded-full object-cover"
                    />
                  ) : null}
                  <div className="min-w-0">
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {author.name}
                    </p>
                    {author.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {author.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Back to Blog */}
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to all articles
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}


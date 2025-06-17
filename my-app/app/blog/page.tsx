import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

const posts: BlogPost[] = [
  {
    id: "getting-started-with-nextjs",
    title: "Next.js 15 入门指南",
    excerpt: "本文将介绍如何使用 Next.js 15 创建一个现代化的web应用，包括路由配置、组件开发及部署策略。",
    date: "2023-11-15",
  },
  {
    id: "react-server-components",
    title: "理解 React Server Components",
    excerpt: "深入探讨 React Server Components 的工作原理，以及如何在 Next.js 项目中有效利用它们提升性能。",
    date: "2023-11-10",
  },
  {
    id: "tailwind-css-tips",
    title: "Tailwind CSS 高级技巧",
    excerpt: "分享使用 Tailwind CSS 的高级技巧和最佳实践，帮助你更高效地构建美观的用户界面。",
    date: "2023-11-05",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">博客文章</h1>
        <p className="text-lg mb-8">
          阅读我们关于 Next.js、React 和现代 web 开发的最新文章。
        </p>
        
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-8">
              <Link 
                href={`/blog/${post.id}`}
                className="group"
              >
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
                发布于 {post.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  阅读更多 &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 
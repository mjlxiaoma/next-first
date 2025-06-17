import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

// 模拟博客数据库
const blogPosts: Record<string, BlogPost> = {
  "getting-started-with-nextjs": {
    id: "getting-started-with-nextjs",
    title: "Next.js 15 入门指南",
    date: "2023-11-15",
    content: `
# Next.js 15 入门指南

Next.js 是一个用于构建现代Web应用的React框架，提供了许多开箱即用的功能，如路由、服务器组件、静态生成等。

## 创建一个新项目

使用 create-next-app 来创建一个新项目:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

按照提示选择你想要的功能，然后启动开发服务器:

\`\`\`bash
cd my-app
npm run dev
\`\`\`

## 路由系统

Next.js 15 使用基于文件系统的路由。在 \`app\` 目录中创建的文件会自动映射到相应的路由。例如:

- \`app/page.tsx\` -> 主页 (\`/\`)
- \`app/about/page.tsx\` -> 关于页面 (\`/about\`)
- \`app/blog/[slug]/page.tsx\` -> 动态博客文章页面 (\`/blog/:slug\`)

## 数据获取

Next.js 允许你使用多种方式获取数据:

\`\`\`typescript
// 服务器组件中获取数据
async function getData() {
  const res = await fetch('https://api.example.com/data')
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export default async function Page() {
  const data = await getData()
  
  return <main>{/* 使用数据 */}</main>
}
\`\`\`

## 总结

Next.js 15 是一个功能强大的React框架，它简化了现代Web应用的开发过程。通过使用其路由系统、服务器组件和数据获取等功能，你可以构建高性能、SEO友好的应用。
    `,
  },
  "react-server-components": {
    id: "react-server-components",
    title: "理解 React Server Components",
    date: "2023-11-10",
    content: `
# 理解 React Server Components

React Server Components (RSC) 是 React 的一个创新功能，它允许组件在服务器上渲染，并将结果发送到客户端。

## 服务器组件的优势

1. **减少客户端 JavaScript 大小**: 服务器组件的代码不会被发送到浏览器。
2. **访问后端资源**: 服务器组件可以直接访问数据库、文件系统等。
3. **自动代码分割**: 不需要使用 \`React.lazy\` 或其他工具。
4. **无需加载状态**: 服务器组件在服务器上执行，因此用户无需等待数据加载。

## 使用示例

在 Next.js 15 中，所有组件默认都是服务器组件。例如:

\`\`\`typescript
// 这是一个服务器组件
export default async function UserProfile({ userId }: { userId: string }) {
  // 直接访问数据库
  const user = await db.user.findFirst({ where: { id: userId } })
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  )
}
\`\`\`

如果需要客户端交互，可以使用 "use client" 指令:

\`\`\`typescript
"use client"

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      计数: {count}
    </button>
  )
}
\`\`\`

## 总结

React Server Components 让我们能够构建更高效的应用，减少客户端 JavaScript 的大小，并提供更好的用户体验。在 Next.js 15 中，RSC 已经成为默认的组件模型。
    `,
  },
  "tailwind-css-tips": {
    id: "tailwind-css-tips",
    title: "Tailwind CSS 高级技巧",
    date: "2023-11-05",
    content: `
# Tailwind CSS 高级技巧

Tailwind CSS 是一个实用性优先的 CSS 框架，它通过提供大量的原子类来帮助你快速构建用户界面。

## 1. 使用 @apply 提取重复样式

如果你发现自己在多个地方重复使用相同的类组合，可以使用 @apply 指令来提取它们:

\`\`\`css
@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
  }
}
\`\`\`

## 2. 使用 JIT 模式

Tailwind 的 JIT (Just-In-Time) 模式可以大幅减少开发环境的构建时间，并允许你使用任意值:

\`\`\`html
<div class="top-[117px] lg:top-[344px]">
  <!-- 内容 -->
</div>
\`\`\`

## 3. 使用 group 修饰符

\`group\` 类和 \`group-hover\` 等修饰符可以让你基于父元素状态来设置子元素样式:

\`\`\`html
<div class="group">
  <h3 class="group-hover:text-blue-500">标题</h3>
  <p class="group-hover:text-gray-700">内容</p>
</div>
\`\`\`

## 4. 使用 variants 扩展修饰符

你可以扩展 Tailwind 的修饰符系统来添加自定义的修饰符:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['visited'],
    },
  },
}
\`\`\`

## 总结

掌握这些高级技巧可以让你更高效地使用 Tailwind CSS，构建更优雅、更一致的用户界面。
    `,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    notFound();
  }
  
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            返回所有文章
          </Link>
        </div>
        
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">发布于 {post.date}</p>
          
          <div className="mt-8 space-y-4">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              } else if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('```')) {
                const codeContent = paragraph
                  .split('\n')
                  .slice(1, -1)
                  .join('\n');
                return (
                  <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code>{codeContent}</code>
                  </pre>
                );
              } else {
                return <p key={index}>{paragraph}</p>;
              }
            })}
          </div>
        </article>
      </div>
    </main>
  );
} 
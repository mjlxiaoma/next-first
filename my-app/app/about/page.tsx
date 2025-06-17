export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">关于我们</h1>
        <p className="text-lg mb-8">
          这是一个使用 Next.js 15 构建的示例项目，展示了 Next.js 的主要功能和最佳实践。
        </p>
        
        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold mt-8 mb-4">我们的使命</h2>
          <p>
            我们致力于提供高质量的web应用开发解决方案，利用最新的技术和最佳实践为客户创造价值。
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">技术栈</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Next.js 15 - React 框架</li>
            <li>React 19 - UI 库</li>
            <li>Tailwind CSS - 样式解决方案</li>
            <li>TypeScript - 类型安全</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 
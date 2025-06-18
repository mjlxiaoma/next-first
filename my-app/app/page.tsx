import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="heading-1 text-gray-900 dark:text-white tracking-tight">
              <span className="block">Next.js 15</span>
              <span className="block text-blue-600 dark:text-blue-500">现代Web应用开发</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300">
              使用 Next.js 15 和 React 19 构建高性能、用户友好的应用程序，拥有最佳的开发体验。
            </p>
            <div className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row sm:justify-center gap-3">
              <Link
                href="/blog"
                className="btn btn-primary px-8 py-3 rounded-md"
              >
                查看博客
              </Link>
              <Link
                href="/about"
                className="btn btn-outline mt-3 sm:mt-0 px-8 py-3 rounded-md text-blue-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
              >
                关于我们
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 right-0 top-full -translate-y-1/2 pointer-events-none">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full opacity-10"></div>
          </div>
        </div>
        <div className="absolute right-1/4 top-1/3 pointer-events-none">
          <div className="w-12 h-12 bg-blue-600 rounded-full opacity-10"></div>
        </div>
        <div className="absolute left-1/4 bottom-1/3 pointer-events-none">
          <div className="w-16 h-16 bg-blue-600 rounded-full opacity-10"></div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="heading-2 text-gray-900 dark:text-white tracking-tight">
              功能特性
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              使用最新技术构建更快、更可靠的应用
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="card p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                  <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="heading-3 text-gray-900 dark:text-white mb-2">App Router</h3>
              <p className="text-gray-600 dark:text-gray-300">
                基于文件系统的路由，支持嵌套路由、动态路由和共享布局。
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="card p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h3 className="heading-3 text-gray-900 dark:text-white mb-2">React 19</h3>
              <p className="text-gray-600 dark:text-gray-300">
                利用最新的 React 版本，体验更快的渲染和更好的开发体验。
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="card p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h3 className="heading-3 text-gray-900 dark:text-white mb-2">Server Components</h3>
              <p className="text-gray-600 dark:text-gray-300">
                减少向客户端发送的 JavaScript 代码量，提高应用性能和 SEO。
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="card p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                  <path d="M12 2H2v10h10V2z" />
                  <path d="M22 12H12v10h10V12z" />
                  <path d="M12 12L2 22" />
                  <path d="M22 2L12 12" />
                </svg>
              </div>
              <h3 className="heading-3 text-gray-900 dark:text-white mb-2">Tailwind CSS</h3>
              <p className="text-gray-600 dark:text-gray-300">
                使用实用优先的 CSS 框架，快速构建现代、响应式的用户界面。
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="card p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                  <path d="M16 18l2-2-4-4-4 4 2 2" />
                  <path d="M10 6l-2 2 4 4 4-4-2-2" />
                </svg>
              </div>
              <h3 className="heading-3 text-gray-900 dark:text-white mb-2">TypeScript</h3>
              <p className="text-gray-600 dark:text-gray-300">
                通过静态类型检查提高代码质量和开发效率，减少运行时错误。
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="card p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                  <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
              </div>
              <h3 className="heading-3 text-gray-900 dark:text-white mb-2">快速部署</h3>
              <p className="text-gray-600 dark:text-gray-300">
                轻松部署到多种平台，包括 Vercel、Netlify 和其他支持 Next.js 的服务。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="heading-2 text-white">
              准备好开始了吗？
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              立即联系我们，开始构建您的下一代Web应用。
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

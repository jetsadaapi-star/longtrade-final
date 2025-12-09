import Background from '@/components/Background';
import SectionHeader from '@/components/SectionHeader';
import ArticleCard from '@/components/ArticleCard';
import { getArticles, getFeaturedArticles } from '@/lib/api';

export default async function ArticlesPage() {
  // Fetch articles and featured articles in parallel
  const [articlesResponse, featuredArticles] = await Promise.all([
    getArticles({ per_page: 9 }),
    getFeaturedArticles(),
  ]);

  const articles = articlesResponse?.data || [];
  const featured = featuredArticles || [];

  return (
    <main className="relative min-h-screen">
      <Background />

      <div className="container-narrow pt-28 md:pt-32 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">บทความทั้งหมด</h1>
        </div>

        {/* Featured Articles */}
        {featured.length > 0 && (
          <section className="mb-16">
            <SectionHeader title="บทความแนะนำ" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="mb-16">
          <SectionHeader title="บทความล่าสุด" />

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-white/50">
              ไม่พบข้อมูลบทความ
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

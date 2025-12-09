import Navbar from "@/components/CatalogNavbar";
import Background from "@/components/Background";
import Hero from "@/components/CatalogHero";
import SubHero from "@/components/SubHero";
import CatalogSection from "@/components/CatalogSection";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import Upskill from "@/components/Upskill";
import CosmicBackground from "@/components/CosmicBackground";
import Reveal from "@/components/Reveal";
import {
  getFeaturedIndicators,
  getFeaturedEbooks,
  getFeaturedExpertAdvisors,
  getFeaturedCourses,
  getFeaturedArticles,
} from "@/lib/api";

export default async function CatalogPage() {
  // Fetch all featured items in parallel
  const [indicators, ebooks, expertAdvisors, courses, articles] = await Promise.all([
    getFeaturedIndicators(),
    getFeaturedEbooks(),
    getFeaturedExpertAdvisors(),
    getFeaturedCourses(),
    getFeaturedArticles(),
  ]);

  return (
    <main>
      <Background />
      <CosmicBackground className="p-8 md:p-12 my-8">
        <Navbar />
        <Reveal>
          <Hero />
          <SubHero />
          <div id="catalog" className="container-narrow py-12">
            {indicators && indicators.length > 0 && (
              <CatalogSection
                title="อินดิเคเตอร์"
                items={indicators.slice(0, 3).map(item => ({
                  id: item.id.toString(),
                  title: item.title,
                  description: item.description,
                  image: item.image,
                  price: item.price,
                  originalPrice: item.original_price,
                  slug: item.slug,
                }))}
                href="/indicators"
              />
            )}

            {ebooks && ebooks.length > 0 && (
              <CatalogSection
                title="Ebook"
                items={ebooks.slice(0, 3).map(item => ({
                  id: item.id.toString(),
                  title: item.title,
                  description: item.description,
                  image: item.cover_image,
                  price: item.price,
                  originalPrice: item.original_price,
                  slug: item.slug,
                }))}
                href="/ebooks"
              />
            )}

            {expertAdvisors && expertAdvisors.length > 0 && (
              <CatalogSection
                title="EA (Expert Advisor)"
                items={expertAdvisors.slice(0, 3).map(item => ({
                  id: item.id.toString(),
                  title: item.title,
                  description: item.description,
                  image: item.image,
                  price: item.price,
                  originalPrice: item.original_price,
                  slug: item.slug,
                }))}
                href="/expert-advisors"
              />
            )}

            {courses && courses.length > 0 && (
              <CatalogSection
                title="คอร์สเรียน"
                items={courses.slice(0, 3).map(item => ({
                  id: item.id.toString(),
                  title: item.title,
                  description: item.description,
                  image: item.cover,
                  price: item.price,
                  originalPrice: item.original_price,
                  slug: item.slug,
                }))}
                href="/courses"
              />
            )}

            {articles && articles.length > 0 && (
              <CatalogSection
                title="บทความ"
                items={articles.slice(0, 3).map(item => ({
                  id: item.id.toString(),
                  title: item.title,
                  description: item.excerpt || item.content.substring(0, 150),
                  image: item.featured_image || '/placeholder.jpg',
                  slug: item.slug,
                }))}
                href="/articles"
              />
            )}
          </div>
          <WhyUs />
          <Upskill />
        </Reveal>
      </CosmicBackground>
      <Footer />
    </main>
  );
}


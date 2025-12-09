<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Course;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Generate main sitemap index
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
        $sitemap .= ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">';

        // Homepage
        $sitemap .= $this->addUrl(config('app.url'), now(), 'daily', '1.0');

        // Static pages
        $sitemap .= $this->addUrl(config('app.url') . '/about', now(), 'monthly', '0.8');
        $sitemap .= $this->addUrl(config('app.url') . '/contact', now(), 'monthly', '0.8');

        // Articles
        $articles = Article::published()
            ->orderBy('updated_at', 'desc')
            ->get();

        foreach ($articles as $article) {
            $url = config('app.url') . '/articles/' . $article->slug;
            $lastmod = $article->updated_at;
            $sitemap .= $this->addUrl($url, $lastmod, 'weekly', '0.9', $article->featured_image);
        }

        // Courses
        $courses = Course::where('is_published', true)
            ->orderBy('updated_at', 'desc')
            ->get();

        foreach ($courses as $course) {
            $url = config('app.url') . '/courses/' . $course->slug;
            $lastmod = $course->updated_at;
            $sitemap .= $this->addUrl($url, $lastmod, 'weekly', '0.9', $course->thumbnail);
        }

        $sitemap .= '</urlset>';

        return response($sitemap, 200)
            ->header('Content-Type', 'application/xml');
    }

    /**
     * Generate articles-specific sitemap
     * 
     * @return \Illuminate\Http\Response
     */
    public function articles()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
        $sitemap .= ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">';

        $articles = Article::published()
            ->orderBy('updated_at', 'desc')
            ->get();

        foreach ($articles as $article) {
            $url = config('app.url') . '/articles/' . $article->slug;
            $lastmod = $article->updated_at;
            $sitemap .= $this->addUrl($url, $lastmod, 'weekly', '0.9', $article->featured_image);
        }

        $sitemap .= '</urlset>';

        return response($sitemap, 200)
            ->header('Content-Type', 'application/xml');
    }

    /**
     * Helper method to add URL to sitemap
     * 
     * @param string $loc
     * @param \Carbon\Carbon $lastmod
     * @param string $changefreq
     * @param string $priority
     * @param string|null $image
     * @return string
     */
    private function addUrl($loc, $lastmod, $changefreq, $priority, $image = null)
    {
        $url = '<url>';
        $url .= '<loc>' . htmlspecialchars($loc) . '</loc>';
        $url .= '<lastmod>' . $lastmod->toAtomString() . '</lastmod>';
        $url .= '<changefreq>' . $changefreq . '</changefreq>';
        $url .= '<priority>' . $priority . '</priority>';

        if ($image) {
            $imageUrl = str_starts_with($image, 'http') ? $image : config('app.url') . $image;
            $url .= '<image:image>';
            $url .= '<image:loc>' . htmlspecialchars($imageUrl) . '</image:loc>';
            $url .= '</image:image>';
        }

        $url .= '</url>';

        return $url;
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Response;

class RssFeedController extends Controller
{
    /**
     * Generate RSS 2.0 feed for articles
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::with('category')
            ->published()
            ->orderBy('published_at', 'desc')
            ->limit(20)
            ->get();

        $rss = '<?xml version="1.0" encoding="UTF-8"?>';
        $rss .= '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">';
        $rss .= '<channel>';

        // Channel information
        $rss .= '<title>LongTrade - บทความเทคนิคการเทรด</title>';
        $rss .= '<link>' . config('app.url') . '</link>';
        $rss .= '<description>บทความเทคนิควิเคราะห์กราฟและการบริหารความเสี่ยงจาก LongTrade</description>';
        $rss .= '<language>th</language>';
        $rss .= '<lastBuildDate>' . now()->toRssString() . '</lastBuildDate>';
        $rss .= '<atom:link href="' . config('app.url') . '/feed" rel="self" type="application/rss+xml" />';

        // Items
        foreach ($articles as $article) {
            $rss .= '<item>';
            $rss .= '<title>' . htmlspecialchars($article->title) . '</title>';
            $rss .= '<link>' . config('app.url') . '/articles/' . $article->slug . '</link>';
            $rss .= '<guid isPermaLink="true">' . config('app.url') . '/articles/' . $article->slug . '</guid>';
            $rss .= '<pubDate>' . $article->published_at->toRssString() . '</pubDate>';

            if ($article->category) {
                $rss .= '<category>' . htmlspecialchars($article->category->name) . '</category>';
            }

            if ($article->author) {
                $rss .= '<author>' . htmlspecialchars($article->author) . '</author>';
            }

            // Description (excerpt or truncated content)
            $description = $article->excerpt ?: strip_tags(substr($article->content, 0, 300)) . '...';
            $rss .= '<description><![CDATA[' . $description . ']]></description>';

            // Full content
            if ($article->content) {
                $rss .= '<content:encoded><![CDATA[' . $article->content . ']]></content:encoded>';
            }

            // Featured image as enclosure
            if ($article->featured_image) {
                $imageUrl = str_starts_with($article->featured_image, 'http')
                    ? $article->featured_image
                    : config('app.url') . $article->featured_image;

                $rss .= '<enclosure url="' . htmlspecialchars($imageUrl) . '" type="image/jpeg" />';
            }

            $rss .= '</item>';
        }

        $rss .= '</channel>';
        $rss .= '</rss>';

        return response($rss, 200)
            ->header('Content-Type', 'application/rss+xml');
    }
}

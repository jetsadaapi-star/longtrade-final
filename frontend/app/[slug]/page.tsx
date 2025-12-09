import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageData = {
    title: string;
    content: string;
    custom_css?: string;
    seo_title?: string;
    seo_description?: string;
    seo_keywords?: string;
};

async function getPage(slug: string): Promise<PageData | null> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages/${slug}`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        return null;
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const page = await getPage(params.slug);
    if (!page) return {};

    return {
        title: page.seo_title || page.title,
        description: page.seo_description,
        keywords: page.seo_keywords,
    };
}

export default async function DynamicPage({ params }: { params: { slug: string } }) {
    const page = await getPage(params.slug);

    if (!page) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 pb-12">
            {page.custom_css && (
                <style dangerouslySetInnerHTML={{ __html: page.custom_css }} />
            )}
            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: page.content }}
            />
        </main>
    );
}

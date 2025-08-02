import { ServicePrimaryCard } from "@/ui/cards"
import { Category, Form, Hero } from "@/views/service"
import content from "@/static/seo-page.json"

export default function SeoPage() {
    return (
        <>
            <Hero />
            <Form />
            <main>
                <article
                    className="prose w-[100rem] max-w-[90%] mx-auto my-10 "
                    dangerouslySetInnerHTML={{ __html: content.content }}
                />
                <div className="w-full bg-abbey-950 text-abbey-50
                 min-h-64 px-12 py-8 mb-12">
                    <h1>Kim jestem?</h1>
                </div>
                <Category />
                <Category />
                <Category />
                <Category />

            </main>

        </>
    )
} 
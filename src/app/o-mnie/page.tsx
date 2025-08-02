import { Experience, Gallery, Hero, Recommendations } from "@/views/about";
import content from "@/static/seo-page.json"

export default function AboutMePage() {
    return (
        <>
            <Hero />
            <main>
                {/* <article
                    className="prose w-[80rem] max-w-[90%] mx-auto my-10 "
                    dangerouslySetInnerHTML={{ __html: content.content }}
                /> */}
                <Experience />
                <Gallery />
                <Recommendations />
            </main>
            about page
        </>
    )
}
import "@/css/post.css";
import { TableOfContents } from "@/components/utils/ui";
import GET_POST from "@/data/queries/GET_POST";
import gutenbergBlocks from "@/lib/functions/gutenbergBlocks";
import { Hero } from "@/views/post";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next'


export async function generateMetadata({ params }:{params:{slug:string}}): Promise<Metadata> {
  const {slug} =  params
  // fetch post information
   const { seo:{ metaTitle, metaDescription, ogTitle,ogDescription,canonical} } = await GET_POST(slug);
 
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph:{
        title:ogTitle,
        description:ogDescription,
        url: canonical,
    }
  }
}
 
export default async function PostPage({ params }: { params: { slug: string } }) {

    const { slug } = params;

    const { page: { blocks, category, date,  tags, introduction, readingTime, image, title, author } } = await GET_POST(slug);

    const toc: TableOfContentsBlock | null = blocks ? blocks.filter(item => item.name === 'rank-math/toc-block').map((item): TableOfContentsBlock => {
        return item
    })[0] : null

    console.log(`blocks`, blocks)

    return (
        <div>
            <Hero
                category={category}
                date={date}
                image={image}
                introduction={introduction}
                readingTime={readingTime}
                title={title}
            />
            <main
                className="lg:grid grid-cols-[20rem_35rem] gap-4 w-[120rem] max-w-[95%] md:max-w-[90%] mx-auto my-3 xl:my-12 space-y-6 xl:grid-cols-[2fr_4fr_2fr] xl:gap-0"
            >
                <aside className="bg-rose-300/0 col-start-1 xl:p-2 xl:border-r border-abbey-300/15 mx-auto row-start-1">
                    {toc && <TableOfContents headings={toc.headings} name={toc.name} order={toc.order} title={toc.title} />}
                </aside>
                <article
                    className="space-y-2 bg-slate-200/0 px-3 w-full mx-auto col-start-2 row-start-1 xl:px-6"
                >
                    {blocks && gutenbergBlocks(blocks)}
                </article>
                <aside className="p-2 xl:border-l xl:border-abbey-300/15 space-y-6  flex flex-col mx-auto col-start-1 col-end-3 xl:col-start-3 xl:row-start-1 xl:px-4" >
                    {
                        author &&
                        <Link href='/o-mnie' className="text-center" >
                            <Image
                                {...author.image}
                                loading="lazy"
                                width={250}
                                height={250}
                                quality={85}
                                className="object-cover mx-auto aspect-square w-45 mb-2 object-center rounded-full"
                            />
                            <h3 className="font-semibold text-2xl" >{author.name}</h3>
                            <h4 className="text-lg text-balance" >{author.occupation}</h4>
                        </Link>
                    }
                    {
                        (tags && tags.length != 0) &&
                        <div>
                            <h4 className="text-3xl font-extrabold" >Tagi:</h4>
                            <ul
                                className="flex flex-wrap space-x-2 space-y-1 mt-2"
                            >
                                {tags.map(({ label, uri }) => {
                                    return (
                                        <Link className="px-3 py-1 rounded-lg bg-abbey-900 text-abbey-100 hover:bg-abbey-700 duration-200 linear" href={uri} hrefLang="pl_PL" key={uri}>
                                            {label}
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    }

                </aside>
            </main>
            Article Page
        </div>
    )
}
import { BlogPrimaryCard } from "@/components/utils/cards";
import { Hero } from "@/components/views/blog";
import GET_BLOG_PAGE from "@/data/queries/GET_BLOG_PAGE"
import gutenbergBlocks from "@/lib/functions/gutenbergBlocks";
import Link from "next/link";


export default async function BlogPage() {

    const {page:{blocks,introduction,title,posts, tags,categories}} = await GET_BLOG_PAGE();
console.log(`blocks`, blocks)
    return (
        <>
            <Hero title={title} content={introduction} />
            <div className="grid grid-cols-[2fr_5fr] w-[110rem] max-w-[95%] mr-auto ml-0 mb-3">
                <aside className="col-start-1 space-y-8 bg-flamingo-200/10 rounded-tr-2xl p-12" >
                    <form action=""><input type="search" name="" id="" className="px-4 py-2 rounded-lg border-2 w-7/10 border-neutral-300" placeholder="Szukaj" /></form>
                    <div>
                        <h3 className="text-lg text-neutral-700 font-bold">
                            Kategorie
                        </h3>
                        {
                            categories &&
                            <menu className="flex flex-col space-y-2">
                                {
                                    categories.filter(item => item.uri !== '/blog/category/uncategorized').map(({label,uri}) => {
                                        return (
                                            <Link href={uri} key={label} >
                                                {label}
                                            </Link>
                                        )
                                    })
                                }
                            </menu>
                        }
                    </div>
                    <div>
                        <h3 className="text-lg text-neutral-700 font-bold ">
                            Popularne tematy
                        </h3>
                        {
                            tags &&
                            <menu className="flex flex-wrap mt-2 space-x-2 space-y-2">
                                {
                                    tags.map(({label,count,uri}) => {
                                        console.log(`count:${count} label:${label} uri:${uri}`)
                                        return (
                                            <Link className="bg-abbey-900 px-4 py-2 rounded-full flex items-center justify-center text-abbey-50 space-x-2 duration-300 linear hover:bg-abbey-500 " href={uri} key={label} >
                                                {
                                                    count !== null &&
                                                    <i className="h-5 aspect-square rounded-full bg-abbey-600 items-center flex justify-center text-xs  not-italic" >
                                                        {count}
                                                    </i>
                                                }
                                                <span className="text-sm">
                                                {label}
                                                </span>
                                            </Link>
                                        )
                                    })
                                }
                            </menu>
                        }
                    </div>
                </aside>
                <main className="grid grid-cols-3 gap-3 p-5">
                    {
                        posts && posts.map((item,index) => {
                            if(index === 0){
                                return (
                                    <BlogPrimaryCard {...item} isBig  key={index} />
                                )

                            }else{
                                     return (
                                    <BlogPrimaryCard {...item}  key={index} />
                                )
                            }
                        })
                    }
                </main>
            </div>
            <section className="w-[90rem] max-w-[90%] mx-auto mb-12 mt-4" >
                {blocks && gutenbergBlocks(blocks)}
            </section>
        </>
    )
}
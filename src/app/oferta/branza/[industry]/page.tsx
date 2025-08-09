import GET_INDUSTRIES_LINKS from "@/data/queries/GET_INDUSTRIES_LINKS";
import GET_INDUSTRY_PAGE from "@/data/queries/GET_INDUSTRY_PAGE";
import gutenbergBlocks from "@/lib/functions/gutenbergBlocks";
import type { Metadata } from 'next'

export async function generateStaticParams(){
 const slugs = await GET_INDUSTRIES_LINKS();
    return slugs.industries.map(({slug}) => ({
    industry: slug
    }));
}

export async function generateMetadata({ params }:{params:{slug:string}}): Promise<Metadata> {
  const {slug} =  params
  // fetch post information
   const { seo:{ metaTitle, metaDescription, ogTitle,ogDescription} } = await GET_INDUSTRY_PAGE(slug);
 
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph:{
        title:ogTitle,
        description:ogDescription,
    }
  }
}

export default async function IndustryPage({params}: {params: {industry: string}}) {

    const {industry} = params;
    const {page:{blocks,title}} = await GET_INDUSTRY_PAGE(industry);



    return (
        <>
        <h1 className="text-8xl w-8/10 mx-auto mt-12" >{title}</h1>
            <article className="w-8/10 mx-auto my-24" >
                {blocks && gutenbergBlocks(blocks)}
            </article>
        </>
    )
}
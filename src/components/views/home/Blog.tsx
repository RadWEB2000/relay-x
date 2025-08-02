import { BlogRegularCard } from "@/utils/cards";

type blog = {
    posts: Array<{
        category: T_Link;
        date: string;
        excerpt: string;
        image: T_Image;
        title: string;
        uri: string;
        readingTime: string;
    }>

}

export default function Blog({ posts }: blog) {
    return (
        <div className=" w-[100rem]  mx-auto gap-2 max-w-[97%] space-y-18">
            <section className="flex flex-col xl:grid grid-cols-5 gap-3 ">
                <div className="col-start-1 col-end-3">
                    <h2 className="text-xl bg-flamingo-600 font-semibold w-fit px-6 py-2 text-white rounded-4xl rounded-br-sm lg:text-2xl">Blog</h2>
                    <h2 className="text-4xl text-balance font-[500] lg:text-6xl">Co w trawie piszczy?</h2>
                </div>
                <div className="col-start-1 col-end-3 mt-10 order-last xl:order-0">Kliknij</div>
                <p className="col-start-3 col-end-6 xl:m-auto  text-lg leading-[2] mt-4 text-balance max-w-[70ch] xl:text-xl xl:-translate-y-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, placeat tempora. Necessitatibus veniam neque vel ipsa, commodi error nemo
                    Loernatur minima quisquam. Necessitatibus. <br /><br />
                    Molestias nam impedit incidunt, optio ab maiores possimus temporibus vero quia a laudantium. Voluptatum, labore aperia lorem*8 m in maxime obcaecati nam aut tempore? Sunt eveniet suscipit debitis. Atque alias facere eveniet.
                    ea voluptate? Nobis quasi nihil quae velit nemo consectetur alias dolorem.</p>
            </section>
            <ul className="grid bg-green-200/0 md:gap-2 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid-rows-1" >
                {
                    posts.map((item) => {
                        return (
                            <BlogRegularCard
                                {...item}
                                key={item.title}
                            />
                        )
                    })
                }

            </ul>
        </div >
    )
}
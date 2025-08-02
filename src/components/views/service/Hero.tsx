import { Breadcrumbs } from "@/ui/index"
import img from "@/img/work-break.webp"
import Image from "next/image"

export default function Hero() {
    return (
        <header
            className="xl:grid xl:grid-cols-2 bg-neutral-200/50 mt-0 -translate-y-12 xl:translate-y-0 xl:min-h-[85vh] "
        >
            <section
                className="col-start-1 px-8 pb-12 pt-8 xl:pt-0 xl:px-10"
            >
                <Breadcrumbs />

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-7xl  font-bold text-balance mb-2" >SEO -<br /> Pozycjonowanie stron internetowych</h1>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl mb-4 md:mb-8" >Skuteczny sposób na biznes online</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[2] text-balance max-w-[65ch]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, omnis hic? Quia, necessitatibus. Recusandae ad animi provident laborum a quod accusantium modi minima! Iusto, quasi velit dolorum sit excepturi earum!
                    Autem quaerat vel accusantium officiis eligendi fugiat fuga quas sit nemo voluptas quia beatae ad optio quasi cum, reprehenderit ea libero in, aliquam ipsam molestias tenetur est atque incidunt! Aperiam!</p>


            </section>
            <figure
                className="relative flex items-center justify-center"
            >
                <span className="text-lg font-bold py-3 px-3 rounded-md bg-flamingo-500 text-white absolute -top-3 xl:top-8 left-3 xl:-left-12 xl:text-2xl xl:px-8">Wiem jak robić dobre SEO</span>
                <Image
                    alt=""
                    loading="eager"
                    className=" h-72 sm:h-8/12 md:h-[40rem] w-full xl:size-full object-cover object-center xl:rounded-2xl"
                    priority
                    src={img.src}
                    height={750}
                    width={1020}
                />
            </figure>
        </header>
    )
}
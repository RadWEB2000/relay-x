import { Breadcrumbs } from "@/ui/index"
import img from "@/img/r-adamczyk-gray.webp"
import Image from "next/image"

export default function Hero() {
    return (
        <>
            <header className="grid md:grid-cols-[2fr_2fr]" >
                <section
                    className="col-start-1 flex-col flex items-start justify-center row-start-1 h-full px-4 z-[1] sm:px-[8vw] md:pl-[3vw] md:pr-0 md:pb-20 md:pt-6"
                >
                    <Breadcrumbs />
                    <h1 className="font-bold leading-[1] mt-4 text-5xl sm:text-7xl md:text-6xl lg:text-8xl" >Radosław Adamczyk</h1>
                    <h2 className="font-semibold text-balance mt-3 text-xl sm:text-2xl md:text-xl lg:text-3xl" >Specjalista SEO/SEM/SXO.<br /> Front-end developer. Webmaster.</h2>
                    <p className="leading-[2] mt-6 text-sm sm:text-base lg:text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel rem Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br /> Dicta iusto necessitatibus, sunt accusamus reprehenderit corporis sapiente modi, error iure accusantium unde eius ducimus minus, optio ad neque laudantium ex quos! perferendis at sint iure quidem recusandae totam? Reiciendis magni earum alias! Necessitatibus illo totam culpa amet ipsa quidem nemo?</p>
                </section>
                <figure
                    className="col-start-1 flex row-start-1 overflow-hidden h-full items-end z-[0] md:col-start-2 md:bg-flamingo-600 lg:pt-12"
                >
                    <Image
                        alt=""

                        className="object-contain object-bottom origin-bottom  translate-x-32 drop-shadow-abbey-900 drop-shadow-xl bg-pink-500/0 opacity-15 md:opacity-100 md:translate-x-15 md:scale-105 "
                        src={img.src}
                        title=""
                        height={520}
                        width={750}

                        style={{
                            transform: 'rotateY(180deg)'
                        }}
                    />
                </figure>
            </header>
            <div className="w-full bg-abbey-950 text-abbey-50 px-4 py-12 grid grid-cols-2 gap-3 text-center  mb-15 dark:bg-abbey-50 md:grid-cols-4 lg:py-24 lg:px-[5vw]">
                <h3 className="flex flex-col items-center justify-center col-start-1 ">
                    <span className="text-4xl font-black dark:text-abbey-950 sm:text-6xl" >8</span>
                    <span className=" text-xs mt-5 uppercase font-bold text-abbey-200 dark:text-abbey-600 sm:text-base" >lat doświadczenia</span>
                </h3>
                <h3 className="flex flex-col items-center justify-center ">
                    <span className="text-4xl font-black dark:text-abbey-950 sm:text-6xl" >8</span>
                    <span className=" text-xs mt-5 uppercase font-bold text-abbey-200 dark:text-abbey-600 sm:text-base" >lat doświadczenia</span>
                </h3>
                <h3 className="flex flex-col items-center justify-center ">
                    <span className="text-4xl font-black dark:text-abbey-950 sm:text-6xl" >8</span>
                    <span className=" text-xs mt-5 uppercase font-bold text-abbey-200 dark:text-abbey-600 sm:text-base" >lat doświadczenia</span>
                </h3>
                <h3 className="flex flex-col items-center justify-center ">
                    <span className="text-4xl font-black dark:text-abbey-950 sm:text-6xl" >8</span>
                    <span className=" text-xs mt-5 uppercase font-bold text-abbey-200 dark:text-abbey-600 sm:text-base" >lat doświadczenia</span>
                </h3>
            </div>
        </>
    )
}
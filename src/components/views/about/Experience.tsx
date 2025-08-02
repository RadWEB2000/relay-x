import img from "@/img/relayx-logo-dark.png"
import Image from "next/image"

export default function Experience() {
    return (
        <section
            className="w-[100rem] max-w-[90%] mx-auto"
        >
            <h2 className="text-4xl font-extrabold md:text-5xl xl:text-6xl 2xl:text-8xl" >Doświadczenie zawodowe</h2>
            <p className="text-sm max-w-[110ch] leading-[2.1] mt-7 text-balance md:text-base xl:text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vitae quasi impedit, possimus ad eum, officia quis at mollitia aut perspiciatis adipisci! Blanditiis necessitatibus ipsam quae voluptatum tempora debitis aliquam!</p>

            <ul
                className="grid grid-cols-1 space-x-6 space-y-6 my-4 mt-8 md:grid-cols-2 lg:grid-cols-3"
            >
                <li
                    className="odd:bg-neutral-200/45 even:bg-neutral-100/45 px-8 py-8 space-y-2 rounded-2xl grid grid-cols-3 first:col-start-1 relative overflow-hidden"
                >
                    <Image
                        alt=""
                        src={img.src}
                        width={450}
                        height={450}
                        className="object-cover absolute -bottom-20 -right-20 z-[-1] opacity-5 grayscale-100"
                    />
                    <h3 className="text-xl font-extrabold col-start-1 col-end-3 row-start-1 sm:text-3xl md:text-2xl xl:text-3xl" >Traffic Trends</h3>
                    <h4 className="font-bold text-lg col-start-1 col-end-3 sm:text-xl" >Specjalista SEO</h4>
                    <p className="text-xs font-semibold col-start-3 row-start-1 text-end sm:text-lg md:text-xs xl:text-sm" >19-25.05.2025</p>
                    <p className="col-start-1 col-end-4 mt-3 text-sm sm:text-base md:text-sm xl:text-base" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem doloribus minima, sed distinctio laboriosam architecto voluptate aliquid molestiae! Debitis eligendi autem sunt ad deserunt quisquam exercitationem quaerat, neque possimus.</p>
                </li>
                <li
                    className="odd:bg-neutral-200/45 even:bg-neutral-100/45 px-8 py-8 space-y-2 rounded-2xl grid grid-cols-3 first:col-start-1 relative overflow-hidden"
                >
                    <Image
                        alt=""
                        src={img.src}
                        width={450}
                        height={450}
                        className="object-cover absolute -bottom-20 -right-20 z-[-1] opacity-5 grayscale-100"
                    />
                    <h3 className="text-xl font-extrabold col-start-1 col-end-3 row-start-1 sm:text-3xl md:text-2xl xl:text-3xl" >Traffic Trends</h3>
                    <h4 className="font-bold text-lg col-start-1 col-end-3 sm:text-xl" >Specjalista SEO</h4>
                    <p className="text-xs font-semibold col-start-3 row-start-1 text-end sm:text-lg md:text-xs xl:text-sm" >19-25.05.2025</p>
                    <p className="col-start-1 col-end-4 mt-3 text-sm sm:text-base md:text-sm xl:text-base" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem doloribus minima, sed distinctio laboriosam architecto voluptate aliquid molestiae! Debitis eligendi autem sunt ad deserunt quisquam exercitationem quaerat, neque possimus.</p>
                </li>
                <li
                    className="odd:bg-neutral-200/45 even:bg-neutral-100/45 px-8 py-8 space-y-2 rounded-2xl grid grid-cols-3 first:col-start-1 relative overflow-hidden"
                >
                    <Image
                        alt=""
                        src={img.src}
                        width={450}
                        height={450}
                        className="object-cover absolute -bottom-20 -right-20 z-[-1] opacity-5 grayscale-100"
                    />
                    <h3 className="text-xl font-extrabold col-start-1 col-end-3 row-start-1 sm:text-3xl md:text-2xl xl:text-3xl" >Traffic Trends</h3>
                    <h4 className="font-bold text-lg col-start-1 col-end-3 sm:text-xl" >Specjalista SEO</h4>
                    <p className="text-xs font-semibold col-start-3 row-start-1 text-end sm:text-lg md:text-xs xl:text-sm" >19-25.05.2025</p>
                    <p className="col-start-1 col-end-4 mt-3 text-sm sm:text-base md:text-sm xl:text-base" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem doloribus minima, sed distinctio laboriosam architecto voluptate aliquid molestiae! Debitis eligendi autem sunt ad deserunt quisquam exercitationem quaerat, neque possimus.</p>
                </li>
                <li
                    className="odd:bg-neutral-200/45 even:bg-neutral-100/45 px-8 py-8 space-y-2 rounded-2xl grid grid-cols-3 first:col-start-1 relative overflow-hidden"
                >
                    <Image
                        alt=""
                        src={img.src}
                        width={450}
                        height={450}
                        className="object-cover absolute -bottom-20 -right-20 z-[-1] opacity-5 grayscale-100"
                    />
                    <h3 className="text-xl font-extrabold col-start-1 col-end-3 row-start-1 sm:text-3xl md:text-2xl xl:text-3xl" >Traffic Trends</h3>
                    <h4 className="font-bold text-lg col-start-1 col-end-3 sm:text-xl" >Specjalista SEO</h4>
                    <p className="text-xs font-semibold col-start-3 row-start-1 text-end sm:text-lg md:text-xs xl:text-sm" >19-25.05.2025</p>
                    <p className="col-start-1 col-end-4 mt-3 text-sm sm:text-base md:text-sm xl:text-base" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem doloribus minima, sed distinctio laboriosam architecto voluptate aliquid molestiae! Debitis eligendi autem sunt ad deserunt quisquam exercitationem quaerat, neque possimus.</p>
                </li>
                <li
                    className="odd:bg-neutral-200/45 even:bg-neutral-100/45 px-8 py-8 space-y-2 rounded-2xl grid grid-cols-3 first:col-start-1 relative overflow-hidden"
                >
                    <Image
                        alt=""
                        src={img.src}
                        width={450}
                        height={450}
                        className="object-cover absolute -bottom-20 -right-20 z-[-1] opacity-5 grayscale-100"
                    />
                    <h3 className="text-xl font-extrabold col-start-1 col-end-3 row-start-1 sm:text-3xl md:text-2xl xl:text-3xl" >Traffic Trends</h3>
                    <h4 className="font-bold text-lg col-start-1 col-end-3 sm:text-xl" >Specjalista SEO</h4>
                    <p className="text-xs font-semibold col-start-3 row-start-1 text-end sm:text-lg md:text-xs xl:text-sm" >19-25.05.2025</p>
                    <p className="col-start-1 col-end-4 mt-3 text-sm sm:text-base md:text-sm xl:text-base" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem doloribus minima, sed distinctio laboriosam architecto voluptate aliquid molestiae! Debitis eligendi autem sunt ad deserunt quisquam exercitationem quaerat, neque possimus.</p>
                </li>
            </ul>

        </section>

    )
}
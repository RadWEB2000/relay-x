import downgradeToHttp from "@/lib/functions/downgradeToHttp";
import Image from "next/image"
import Link from "next/link"
import { FaRegCalendarAlt as Calendar } from "react-icons/fa";

type card = {
    category: T_Link;
    date: string;
    excerpt: string;
    image: T_Image;
    title: string;
    uri: string;
    readingTime: string;
}

export default function BlogRegularCard({ category,  excerpt, image,  title, uri }: card) {
    return (
        <Link className="not-first:hidden md:nth-of-type-[2]:flex lg:nth-of-type-[3]:flex flex first:col-start-1 flex-col h-full bg-abbey-100/30 dark:bg-abbey-800/30 p-4 rounded-2xl hover:shadow-lg hover:shadow-abbey-200 dark:hover:shadow-abbey-800 linear duration-300 odd:hover:bg-flamingo-200 even:hover:bg-flamingo-100 dark:odd:hover:bg-flamingo-500 dark:even:hover:bg-flamingo-400 group" href={uri}>
            <figure
                className="mb-10 relative"
            >
                <span className="absolute top-4 right-4 z-[5] py-3 px-5 rounded-3xl text-3xl shadow-md font-bold bg-blue-300 dark:bg-sky-400 " >{category.label}</span>
                <div
                    className="w-full h-[30rem] overflow-hidden  rounded-2xl z-[0] linear duration-400 group-hover:grayscale-100"
                >
                    <Image
                        alt={image.alt}
                        className=" object-cover group-hover:scale-110 linear duration-500 size-full"
                        height={450}
                        src={downgradeToHttp(image.src)}
                        quality={65}
                        width={300}
                    />
                </div>
            </figure>
            <h4 className="text-4xl mb-2 font-bold" >{title}
            </h4>
            <p className="line-clamp-2 " dangerouslySetInnerHTML={{ __html: excerpt }} />
            <p className="mt-2 font-[600]" >
                <i className="inline-block mr-2" > <Calendar /></i>
                <span>12 sie 2025</span>
            </p>
        </Link>
    )
}
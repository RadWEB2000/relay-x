import Image from "next/image";
import { IoCalendarClear as Calendar } from "react-icons/io5";
import { Breadcrumbs } from "@/ui/index";
import moment from "moment";

type T_Hero = {
    category: T_Link;
    date: string;
    introduction: string;
    title: string;
    readingTime: string;
    image?: T_Image;
}

export default function Hero({ category, date, introduction, readingTime, title, image }: T_Hero) {

    const release = moment(date).locale('pl').format('DD MMM YYYY');

    return (
        <>
            <header className="px-6 space-y-4 mt-12 w-[60rem] max-w-[95%] mx-auto lg:space-y-6">
                <Breadcrumbs />
                <h1 className="text-4xl text-abbey-950 font-bold text-balance  md:text-6xl lg:text-7xl" >{title}</h1>
                <p className="text-md text-balance leading-[2] text-abbey-700 font-[500] lg:text-lg" dangerouslySetInnerHTML={{ __html: introduction }} />
                <div className="flex flex-row flex-wrap space-x-3 space-y-1 my-4 w-fit bg-neutral-300/30 px-4 py-3 rounded-lg">
                    <p className="flex items center justify-center flex-row space-x-1">
                        <i className="size-5 flex items-center justify-center text-lg">
                            <Calendar />
                        </i>
                        <span className="text-md font-bold text-abbey-600 dark:text-abbey-300">
                            {release}
                        </span>
                    </p>
                </div>
            </header>
            <Image
                alt={image ? image.alt : ''}
                title={image ? image.title : ''}
                className="aspect-video xl:h-[40rem] mx-auto object-cover rounded-2xl mt-9 w-[120rem] max-w-[95%]"
                height={650}
                quality={85}
                src={image ? image.src : 'https://images.pexels.com/photos/2693208/pexels-photo-2693208.png'}
                width={850}
            />
        </>
    )
}
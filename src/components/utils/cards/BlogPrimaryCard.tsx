import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { IoCalendarClear as Calendar } from "react-icons/io5";

type T_BlogPrimaryCard = {
    isBig?:boolean;
    categories:Array<T_Link>;
    image:T_Image;
    excerpt:string;
    title:string;
    uri:string;
    date:string;
}

export default function BlogPrimaryCard({isBig,categories,image,excerpt,title,uri,date }: T_BlogPrimaryCard) {
        const release = moment(date).locale('pl').format('DD MMM YYYY');
    
    return (
        <Link className={`p-2 rounded-xl duration-200 linear hover:bg-abbey-200/10 ${isBig && 'col-span-full grid grid-cols-2 p-4'}`} href={uri} hrefLang="pl_PL" >
            <Image
                {...image}
                loading="lazy"
                width={isBig ? 800 : 400}
                height={isBig ? 450 : 250}
                quality={85}
                className="object-cover mx-auto aspect-square w-full object-center rounded-2xl col-start-1"
            />
            <article className={`flex flex-col ${isBig ? 'p-5' : 'mt-2 p-0.5 '}`} >
                <ul className="flex flex-wrap space-x-1 space-y-1">
                    {
                        categories.map(({label}) => {
                            return (
                                <span className="px-4 text-sm flex items-center justify-center py-1.5 bg-flamingo-500 text-white rounded-full" key={label}>
                                    {label}
                                </span>
                            )
                        })
                    }
                </ul>
                <h3 className={`font-semibold text-balance my-2 ${isBig ? 'text-4xl' : 'text-xl'} `} >{title}</h3>
                <p className={`text-sm mb-6 mt-2 ${!isBig && 'line-clamp-2'}`} dangerouslySetInnerHTML={{__html: excerpt}} />
                 <p className={`flex items-center justify-center flex-row space-x-1 bg-flamingo-100/30 rounded-lg w-fit ${isBig ? 'px-4 py-3 ' : 'mt-auto mb-0 px-2.5 py-1.5'}`}>
                    <i className="size-5 flex items-center justify-center text-lg">
                        <Calendar />
                    </i>
                    <span className="text-sm font-bold text-abbey-600 dark:text-abbey-300">
                        {release}
                    </span>
                </p>
            </article>
        </Link>
    )
}
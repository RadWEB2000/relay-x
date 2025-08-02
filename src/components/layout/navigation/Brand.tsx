import Image from "next/image";
import Link from "next/link";
import logo from "@/img/logo.webp"

export default function Brand() {
    return (
        <Link className="flex items-center col-span-2 col-start-1 justify-start group mr-auto ml-[10vw] lg:ml-1" href='/' hrefLang='pl_PL' >
            <Image
                alt=""
                className="size-[65px] object-contain lg:size-[80px]"
                loading="eager"
                height={550}
                width={550}
                priority
                title=""
                quality={85}
                src={logo.src}
            />
            <span className="text-2xl linear duration-200 font-bold ml-4 group-hover:text-flamingo-500 lg:text-xl lg:ml-1 xl:text-2xl">
                RadWEB
            </span>
        </Link>
    )
}
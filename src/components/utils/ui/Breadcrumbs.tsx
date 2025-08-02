import Link from "next/link";
import { IoIosArrowForward as Separator } from "react-icons/io";

export default function Breadcrumbs() {
    return (
        <ul
            className="flex flex-row flex-wrap items-center justify-start my-3 mx-0 space-x-1 text-md"
        >
            <Link className="relative rounded-2xl text-abbey-800 after:absolute after:-bottom-1 after:linear after:duration-200 after:left-0   dark:text-abbey-200 after:w-0 after:h-[2px] after:bg-abbey-800 dark:after:bg-abbey-200 hover:after:w-full focus:after:w-full" href='/' >
                Start
            </Link>
            <i
                className="size-[20px] items-center justify-center flex text-sm"
            >
                <Separator />
            </i>
            <Link className="relative rounded-2xl text-abbey-800 after:absolute after:-bottom-1 after:linear after:duration-200 after:left-0   dark:text-abbey-200 after:w-0 after:h-[2px] after:bg-abbey-800 dark:after:bg-abbey-200 hover:after:w-full focus:after:w-full" href='/' >
                Blog
            </Link>
            <i
                className="size-[20px] items-center justify-center flex text-sm"
            >
                <Separator />
            </i>
            <Link className="relative rounded-2xl text-abbey-800 after:absolute after:-bottom-1 after:linear after:duration-200 after:left-0   dark:text-abbey-200 after:w-0 after:h-[2px] after:bg-abbey-800 dark:after:bg-abbey-200 hover:after:w-full focus:after:w-full" href='/' >
                Wpis blogowy
            </Link>
        </ul>
    )
}
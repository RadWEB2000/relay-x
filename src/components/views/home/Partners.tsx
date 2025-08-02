import Link from "next/link";
import canva from "@/img/canva.svg";
import mangools from "@/img/mangools.svg";
import ubersuggest from "@/img/ubersuggest.svg";
import udemy from "@/img/udemy.svg";
import senuto from "@/img/senuto.svg";
import cyberfolks from "@/img/cyberfolks.png";
import Image from "next/image";


export default function Partners() {
    return (
        <div
            className="mx-auto w-full min-h-[50vh]  bg-linear-to-tr from-stone-800 via-stone-950 to-stone-950 py-25 px-[10vw] md:px-[15vw]"
        >
            <h2 className="text-center text-abbey-50 text-5xl uppercase font-semibold mb-12 md:mb-32" >Partnerzy</h2>
            <ul
                className="grid grid-cols-2 items-center gap-5 md:grid-cols-3"
            >
                <Link className="col-start-1 rounded-2xl h-full hover:ring-2 linear duration-200 hover:ring-neutral-200 flex items-center justify-center py-2 lg:px-12" href='' rel='sponsored' >
                    <Image
                        alt=''
                        height={200}
                        width={375}
                        className="grayscale-100 invert-100 object-contain"
                        src={canva.src}
                    />
                </Link>
                <Link className="rounded-2xl h-full hover:ring-2 linear duration-200 hover:ring-neutral-200 flex items-center justify-center py-2 lg:px-12" href='' rel='sponsored' >
                    <Image
                        alt=''
                        height={200}
                        width={375}
                        className="grayscale-100 invert-100 object-contain"
                        src={mangools.src}
                    />
                </Link>
                <Link className="rounded-2xl h-full hover:ring-2 linear duration-200 hover:ring-neutral-200 flex items-center justify-center py-2 lg:px-12" href='' rel='sponsored' >
                    <Image
                        alt=''
                        height={200}
                        width={375}
                        className="grayscale-100 invert-100 object-contain"
                        src={ubersuggest.src}
                    />
                </Link>
                <Link className="rounded-2xl h-full hover:ring-2 linear duration-200 hover:ring-neutral-200 flex items-center justify-center py-2 lg:px-12" href='' rel='sponsored' >
                    <Image
                        alt=''
                        height={200}
                        width={375}
                        className="grayscale-100 invert-100 object-contain"
                        src={udemy.src}
                    />
                </Link>
                <Link className="rounded-2xl h-full hover:ring-2 linear duration-200 hover:ring-neutral-200 flex items-center justify-center py-2 lg:px-12" href='' rel='sponsored' >
                    <Image
                        alt=''
                        height={200}
                        width={375}
                        className="grayscale-100 object-contain"
                        src={senuto.src}
                    />
                </Link>
                <Link className="rounded-2xl h-full hover:ring-2 linear duration-200 hover:ring-neutral-200 flex items-center justify-center py-2 lg:px-12" href='' rel='sponsored' >
                    <Image
                        alt=''
                        height={200}
                        width={375}
                        className="grayscale-100 invert-100 object-contain"
                        src={cyberfolks.src}
                    />
                </Link>
            </ul>

        </div>
    )
}
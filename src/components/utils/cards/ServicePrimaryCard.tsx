import Link from "next/link";

export default function ServicePrimaryCard() {
    return (
        <li className="relative w-[30rem] max-w-[80%] mx-auto  list-none group first:col-start-1 md:max-w-[95%]">
            {/* Tło za folderem */}
            <span className="absolute block -top-12 right-0 w-full h-[10rem] bg-neutral-200  rounded-xl z-[-1] folder-mask  " />
            <span className="absolute -top-6  right-0 w-4/5 bg-flamingo-500 rounded-xl h-[5rem] z-[-2] translate-y-6 linear duration-400 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0" />

            {/* Główna karta */}
            <Link
                href="#"
                className=" flex flex-col p-8 w-full bg-neutral-200 space-y-5 z-[1] justify-center
                h-full
                rounded-xl "
            >
                <h3 className="text-2xl sm:text-3xl text-neutral-900 font-bold">Linkowanie zewnętrzne</h3>
                <hr className="border-1 border-neutral-600/20" />
                <p className="text-neutral-900 text-sm sm:text-base leading-[1.9]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vero cumque ad, repudiandae
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis distinctio, nobis, cumque reprehenderit minima beatae eum officia labore dolor ex laborum impedit, consectetur quisquam sequi nemo voluptatem fugiat voluptates?
                </p>
            </Link>
        </li>
    )
}
"use client"
import Image from "next/image";


type T_ProjectHomePageCard = {
    categories: Array<{
        label: string;
        variant: T_ServiceVariant;
    }>;
    title: string;
    index: number;

    content: string;
    mockup: T_Image;
    logo?: T_Image;
}

export default function ProjectHomePageCard({ categories, index, content, mockup, title, logo }: T_ProjectHomePageCard) {




    return (
        <li className={` md:grid ring-1 ring-abbey-200 dark:ring-abbey-800 grid-cols-2 md:sticky bg-abbey-50 dark:bg-abbey-950 rounded-4xl px-4 py-10 `}
            style={{
                top: index === 0 ? 50 : 70 + index * 50,
                zIndex: index + 1
            }}
        >
            <section className="col-start-1">
                <ul className="flex flex-row flex-wrap justify-start gap-3 " >
                    {
                        categories.map(({ label, variant }) => {
                            return (
                                <li className={`ring-2 ring-purple-700 dark:ring-fuchsia-500 font-semibold rounded-2xl px-4 text-md xl:text-xl uppercase text-purple-700 dark:text-fuchsia-500 shrink-0 ${`project-category-${variant}`}`} key={label} ><span className="h-[15px] w-[15px] inline-block bg-purple-700 dark:bg-fuchsia-500 mr-3 rounded-full" />{label}</li>
                            )
                        })
                    }
                </ul>
                <h3 className={`text-4xl mt-14 font-semibold xl:text-7xl`}>{title}</h3>
                <p className="text-base mt-10 leading-[1.9]" >{content}</p>
            </section>
            <figure className="relative">
                {
                    logo &&
                    <Image
                        {...logo}
                        className="size-[90px] object-contain bg-white absolute top-15 right-18 z-[5] rounded-2xl shadow-lg shadow-abbey-800 p-2"
                        height={120}
                        width={120}
                    />
                }
                <Image
                    {...mockup}
                    className="object-contain"
                    height={520}
                    width={720}
                />
            </figure>
        </li>
    )
}
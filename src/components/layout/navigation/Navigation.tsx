'use client'
import Link from "next/link";
import { Brand, ThemeSwitcher } from "@/layout/navigation"
import { useState } from "react";
import { FaArrowDown as Arrow } from "react-icons/fa6";

const menu = [
    {
        label: 'Start',
        uri: '/'
    },
    {
        label: 'O mnie',
        uri: '/'
    },
    {
        label: 'Oferta',
        uri: '/oferta',
        submenu: [
            {
                label: 'SEO',
                uri: '/'
            },
            {
                label: 'Strony',
                uri: '/'
            },
            {
                label: 'Ads',
                uri: '/'
            },
            {
                label: 'Automatyzacje',
                uri: '/'
            },
        ]
    },

    {
        label: 'Blog',
        uri: '/'
    },
    {
        label: 'Kontakt',
        uri: '/'
    },
]



export default function Navigation() {

    const [isOpenNavigation, changeIsOpenNavigation] = useState<boolean>(false);

    const menuButtonLineStyles = `w-full h-1 bg-abbey-900 linear duration-100 dark:bg-abbey-100 rounded-lg block`


    return (
        <nav className={`sticky top-0 z-[999] bg-abbey-50 dark:bg-abbey-950  overflow-hidden linear duration-200 ${isOpenNavigation ? 'h-screen lg:h-20 lg:overflow-visible' : 'h-[80px] lg:h-20 lg:overflow-visible'} lg:flex lg:space-between lg:flex-row lg:px-[2vw] xl:px-[4vw] lg:border-b-1 lg:border-abbey-200/80 lg:dark:border-abbey-800/80`}>
            <div className="grid grid-cols-3 items-center h-[80px] justify-items-center border-b-3 border-abbey-100/50 dark:border-abbey-900/50 lg:h-full lg:border-0">
                <Brand />
                <button className="h-[40px] w-[40px] bg-yellow-200/0 ml-auto mr-[10vw] lg:hidden rounded-2xl flex flex-col items-center justify-around p-0.5 relative group cursor-pointer" onClick={() => changeIsOpenNavigation(!isOpenNavigation)}>
                    <span className={`${menuButtonLineStyles} ${isOpenNavigation && 'absolute rotate-45 top-1/2 left-1/2 -translate-1/2'}`} />
                    <span className={`${menuButtonLineStyles} origin-center ${isOpenNavigation && 'scale-x-0'}`} />
                    <span className={`${menuButtonLineStyles} ${isOpenNavigation && 'absolute -rotate-45 top-1/2 left-1/2 -translate-1/2'}`} />
                </button>
            </div>
            <div className="overflow-y-scroll flex flex-col justify-around pb-2 no-scrollbar lg:!h-full lg:overflow-visible lg:flex-row lg:mr-0 lg:ml-auto w-full lg:items-center lg:pb-0"
                style={{
                    height: `calc(100vh - 80px)`
                }}
            >
                <menu className="space-y-0 w-full flex flex-col items-start justify-start row-start-1  overflow-y-scrol no-scrollbar lg:flex-row lg:space-x-2 lg:items-center lg:justify-end lg:mr-2"

                >
                    {
                        menu.map(({ label, uri, submenu }) => {
                            if (!submenu) {
                                return (
                                    <Link className={`rounded-md  uppercase text-xl py-9 relative items-center  ease-in-out duration-200 w-full text-start border-b-3 border-abbey-100/50 dark:border-abbey-900/50 px-[10vw] hover:bg-abbey-200/10 dark:hover:bg-abbey-800/20 focus:bg-abbey-200/10 dark:focus:bg-abbey-800/20 lg:w-fit  lg:border-0 xl:text-md 2xl:text-lg lg:px-3 lg:py-1 lg:text-sm lg:hover:bg-abbey-200/40 lg:dark:hover:bg-abbey-800/40 lg:focus:bg-abbey-200/40 lg:dark:focus:bg-abbey-800/40 lg:font-[500]`} href={uri} hrefLang="pl_PL" onClick={() => changeIsOpenNavigation(false)}>
                                        {label}

                                    </Link>
                                )
                            } else {
                                return (
                                    <li
                                        className="hidden  w-full pt-7"
                                    >
                                        <div className=" w-full" >
                                            <Link className={`rounded-md uppercase bg-blue-300 text-xl py-9 relative items-center  ease-in-out duration-200 w-full text-start border-b-3 border-abbey-100/50 dark:border-abbey-900/50 px-[10vw] hover:bg-abbey-200/10 dark:hover:bg-abbey-800/20 focus:bg-abbey-200/10 dark:focus:bg-abbey-800/20 lg:w-fit  lg:border-0 xl:text-md 2xl:text-lg lg:px-3 lg:py-1 lg:text-sm lg:hover:bg-abbey-200/40 lg:dark:hover:bg-abbey-800/40 lg:focus:bg-abbey-200/40  lg:dark:focus:bg-abbey-800/40 lg:font-[500]`} href={uri} hrefLang="pl_PL" onClick={() => changeIsOpenNavigation(false)}>
                                                {label}

                                            </Link>
                                            <button
                                                className="hidden text-md w-0 bg-red-200"
                                            >
                                                <Arrow />
                                            </button>
                                        </div>
                                        {
                                            submenu &&
                                            <ul
                                                className="flex flex-col"
                                            >
                                                {
                                                    submenu?.map(({ label, uri }) => {
                                                        return (
                                                            <Link className={``} href={uri} hrefLang="pl_PL" onClick={() => changeIsOpenNavigation(false)}>
                                                                {label}
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }

                                    </li>
                                )
                            }
                        })
                    }
                </menu>
                <div className=" mb-6 mt-3 items-center justify-center flex w-full row-start-2 lg:w-fit lg:px-3  lg:h-full lg:mb-0 lg:mt-0">
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    )
}
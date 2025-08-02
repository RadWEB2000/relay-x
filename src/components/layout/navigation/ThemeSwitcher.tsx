'use client'
import { FaDesktop as Desktop } from "react-icons/fa";
import { LuSunMedium as Sun } from "react-icons/lu";
import { HiMoon as Moon } from "react-icons/hi";
import { useThemeStore } from "@/store";

export default function ThemeSwitcher() {
    const { theme, cycleTheme } = useThemeStore()

    const icon = 'absolute inset-0 transform transition-transform duration-700 motion-reduce:duration-[0s] flex items-center justify-center'


    return (
        <button className="relative inline-flex justify-center items-center  bg-slate-400/0 rounded-full cursor-pointer ring-black/12 dark:ring-white/12  ring-2 overflow-hidden px-6 py-2 hover:bg-black/12 dark:hover:bg-white/12  lg:px-0 lg:py-0 " onClick={cycleTheme}>
            <div className="h-[45px] w-[45px] relative text-2xl linear duration-200 hover:bg-flamingo-500 hover:text-white dark:text-white dark:hover:bg-flamingo-600" >
                <i className={`${icon} ${theme === 'light' ? 'rotate-0' : 'rotate-90'}`} style={{ transformOrigin: '50% 100px' }}  >
                    <Sun />
                </i>
                <i className={`${icon} ${theme === 'dark' ? 'rotate-0' : '-rotate-90'}`} style={{ transformOrigin: '50% 100px' }}  >
                    <Moon />
                </i>
                <i className={`${icon} ${theme === 'system' ? 'translate-y-0' : 'translate-y-15'}`} style={{ transformOrigin: '50% 120px' }}  >

                    <Desktop />
                </i>
            </div>
            <span className="ml-4 px-4 lg:hidden lg:ml-0 lg:px-0">Zmień motyw</span>
        </button>
    )
}
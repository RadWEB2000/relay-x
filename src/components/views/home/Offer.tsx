import Link from "next/link";
import { FaSnowflake as Flake } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function Offer() {
    return (
        <div className="bg-abbey-100 dark:bg-abbey-900 max-w-[97%] relative w-[105rem] rounded-2xl py-10 mx-auto md:py-24 lg:py-20 ">
            <div className="mx-[5vw]">
                <section
                    className=" items-center md:grid md:grid-cols-[2fr_3fr] lg:gap-2"
                >
                    <h2 className="text-5xl col-start-1 font-semibold text-neutral-700 dark:text-neutral-50 bg-sky-300/0 w-fit lg:text-7xl">Oferta</h2>
                    <p className="text-lg leading-[2] mt-4 text-balance bg-red-500/0  max-w-[85%] mx-auto w-[65ch]"><b>Skuteczne SEO, nowoczesne strony internetowe i przemyślana automatyzacja procesów</b> – to fundamenty oferty, która realnie wspiera rozwój biznesu online. Zamiast ogólników, liczy się konkret: lepsza widoczność w Google, funkcjonalna strona i rozwiązania, które oszczędzają czas i zwiększają efektywność. Dla tych, którzy chcą działać mądrze i z efektem.</p>
                </section>
                <hr className="border-abbey-700 dark:border-abbey-300 my-16" />
                <section className="space-y-1.5 md:space-y-0 md:grid grid-cols-2 grid-rows-2 gap-0.5">
                    <Link className="col-start-1 col-end-2 row-start-1 row-end-3 bg-abbey-200 dark:bg-abbey-800 dark:text-neutral-50 p-5 rounded-xl flex flex-col items-start justify-start text-neutral-700  hover:text-neutral-50 focus:bg-flamingo-500 focus:text-neutral-50 focus-within:bg-flamingo-500 focus-within:text-neutral-50   hover:bg-flamingo-500 duration-400 linear xl:p-13" href="#">
                        <h2 className="text-5xl font-bold lg:text-6xl xl:text-8xl">SEO</h2>
                        <p className="text-md leading-[1.82] mt-4 mb-15 lg:text-lg xl:text-2xl">
                            Działania SEO skupione na zwiększeniu widoczności strony w wynikach wyszukiwania, przyciąganiu wartościowego ruchu i budowaniu silnej pozycji online. Optymalizacja oparta na danych, doświadczeniu i sprawdzonych technikach.
                        </p>
                        <ul className="w-full items-center flex flex-wrap justify-end gap-1 mt-auto mb-0">
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Audyt techniczny</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">SEO lokalne</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">SEO e-commerce</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Link building</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Content marketing</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Optymalizacja techniczna</li>
                        </ul>
                    </Link>
                    <Link className="col-start-2 col-end-3 row-start-1 row-end-2 md:min-h-[30rem] bg-abbey-200 p-5 rounded-xl flex flex-col items-start justify-start  dark:bg-abbey-800 dark:text-neutral-50  text-neutral-700  focus:bg-flamingo-500 focus:text-neutral-50 focus-within:bg-flamingo-500 focus-within:text-neutral-50   hover:text-neutral-50 hover:bg-flamingo-500  duration-400 linear  xl:p-13" href="#">
                        <h2 className="text-4xl font-bold xl:text-6xl">Strony internetowe</h2>
                        <p className="text-md leading-[1.82] mt-4 mb-15 lg:text-lg  xl:text-xl">
                            Tworzenie nowoczesnych, responsywnych i szybkich stron internetowych, które nie tylko dobrze wyglądają, ale przede wszystkim działają i konwertują. Skupienie na UX, SEO i wydajności.
                        </p>
                        <ul className="w-full items-center flex flex-wrap justify-end gap-1 mt-auto mb-0">
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Landing Page</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Migracja stron</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Integracje</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Optymalizacja CVW</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Bezpieczeństwo stron</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Sklepy internetowe</li>
                        </ul>
                    </Link>
                    <Link className="col-start-2 col-end-3 row-start-2 row-end-3 md:min-h-[30rem] bg-abbey-200 p-5 rounded-xl flex flex-col items-start justify-start  text-neutral-700  hover:text-neutral-50 hover:bg-flamingo-500 focus:bg-flamingo-500 focus:text-neutral-50 focus-within:bg-flamingo-500 focus-within:text-neutral-50  dark:bg-abbey-800 dark:text-neutral-50 duration-400 linear  xl:p-13" href="#">
                        <h2 className="text-4xl font-bold xl:text-6xl">Automatyzacje</h2>
                        <p className="text-md leading-[1.82] mt-4 mb-15 lg:text-lg  xl:text-xl">
                            Projektowanie i wdrażanie automatyzacji, które oszczędzają czas, eliminują powtarzalne zadania i zwiększają efektywność operacyjną. Połączenie danych, API i logiki biznesowej w praktyczne systemy.
                        </p>
                        <ul className="w-full items-center flex flex-wrap justify-end gap-1 mt-auto mb-0">
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Raportowanie</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Formularze</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Obsługa klienta</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Zarządzanie czasem</li>
                            <li className="px-3.5 py-1 rounded-md text-sm flex-wrap bg-neutral-800 text-neutral-50 shrink-0 duration-200 linear hover:bg-neutral-700 focus-within:bg-neutral-700 focus:bg-neutral-700 xl:text-lg xl:px-4 2xl:text-2xl 2xl:px-6 2xl:py-1.5">Przetwarzanie danych</li>
                        </ul>
                    </Link>
                </section>
                <hr className="border-abbey-700 dark:border-abbey-300 my-16" />
                <section
                    className="items-center lg:grid lg:grid-cols-[2fr_3fr] lg:gap-2"
                >
                    <h2 className="col-start-1 text-5xl font-semibold text-neutral-700 dark:text-neutral-50 bg-sky-300/0 w-fit lg:text-6xl">Wspierane branże</h2>
                    <p className="text-lg leading-[2] mt-4 text-balance bg-red-500/0 max-w-[85%] lg:mx-auto w-[65ch]">Realizowane projekty obejmują e-commerce, usługi lokalne, branże doradcze, edukację, zdrowie oraz nowe technologie. Każda współpraca opiera się na analizie celów biznesowych i zachowań użytkowników, co pozwala precyzyjnie dopasować działania SEO, strony internetowe i automatyzacje do konkretnego kontekstu rynkowego. Skuteczność wynika z połączenia doświadczenia, danych i elastycznego podejścia.</p>
                    <div className="w-full col-start-1 col-end-3 overflow-hidden">
                        <Marquee className="h-[20rem]" direction="right" pauseOnHover speed={100} gradient gradientColor="var(--slider-offer-gradient)" >
                            <Link className="text-3xl text-neutral-400 dark:text-neutral-300 uppercase relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-neutral-400 after:linear after:duration-200 hover:after:w-full focus:after:w-full dark:after:bg-neutral-300 rounded-3xl hover:text-neutral-700 focus:text-neutral-700 linear duration-200 hover:dark:text-neutral-100 focus:dark:text-neutral-100 mx-5 " href="#">Budowlanka</Link>
                            <i className="text-4xl text-flamingo-400 mx-5 "><Flake /></i>
                            <Link className="text-3xl text-neutral-400 dark:text-neutral-300 uppercase relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-neutral-400 after:linear after:duration-200 hover:after:w-full focus:after:w-full dark:after:bg-neutral-300 rounded-3xl  linear duration-200 hover:text-neutral-700 focus:text-neutral-700 hover:dark:text-neutral-100 focus:dark:text-neutral-100 mx-5 " href="# ">Budowlanka</Link>
                            <i className="text-4xl text-flamingo-400 mx-5 "><Flake /></i>
                            <Link className="text-3xl text-neutral-400 dark:text-neutral-300 uppercase relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-neutral-400 after:linear after:duration-200 hover:after:w-full focus:after:w-full dark:after:bg-neutral-300 rounded-3xl  linear duration-200 hover:text-neutral-700 focus:text-neutral-700 hover:dark:text-neutral-100 focus:dark:text-neutral-100 mx-5 " href="# ">Budowlanka</Link>
                            <i className="text-4xl text-flamingo-400 mx-5 "><Flake /></i>
                        </Marquee>
                    </div>
                </section>
            </div>
        </div>
    )
}
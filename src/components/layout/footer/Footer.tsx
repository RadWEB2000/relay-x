import Link from "next/link";
import { BsPhoneFill as Phone } from "react-icons/bs";
import { LuMail as Mail} from "react-icons/lu";

export default function Footer(){
    return (
        <footer className="w-full px-12 py-8 grid grid-cols-6 gap-2 bg-abbey-600 bg-gradient-to-r from-abbey-800 to-abbey-700 text-abbey-100 ">
            <section className="col-span-2 col-start-1 border-r-2 border-r-abbey-300/20 space-y-6">
                <h4 className="text-5xl font-extrabold text-abbey-50 mb-3" >RelayX</h4>
                <p >RelayX is a platform for building and deploying decentralized applications.</p>
                <address className="not-italic leading-[1.5] font-semibold text-lg" >Donatowo 53<br/>64-020 Czempiń</address>
                <div>
                <Link className="flex flex-row items-center space-x-2" href=""><i><Phone/></i> <span>+48 794-100-413</span></Link>
                <Link className="flex flex-row items-center space-x-2" href=""><i><Mail/></i> <span>radoslaw.adamczyk@gmail.com</span></Link>
                </div>
            </section>
            <menu className="col-span-4 bg-purple-300/0 grid grid-cols-3 p-6" >
                <div className="col-start-1" >
               <h4 className="text-xl text-abbey-100 font-semibold" >Poznaj mnie</h4>
                <ul className="space-y-2 mt-2 text-abbey-300">
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50" href="/">Start</Link></li>
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/about">O mnie</Link></li>
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/blog">Blog</Link></li>
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/">Case studies</Link></li>
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/about">Projekty</Link></li>
                </ul>
                </div>
                <div>
              <h4 className="text-xl text-abbey-100 font-semibold" >Oferta</h4>
                <ul className="space-y-2 mt-2 text-abbey-300">
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/">SEO</Link></li>
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/about">Strony internetowe</Link></li>
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/kontakt">Reklamy PPC</Link></li>
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/blog">Automatyzacje</Link></li>
                </ul>
                </div>
                <div>
                <h4 className="text-xl text-abbey-100 font-semibold" >Informacje</h4>
                <ul className="space-y-2 mt-2 text-abbey-300">
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/">Kontakt</Link></li>
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/about">Polityka prywatności</Link></li>
                    <li><Link className="relative after:duration-200 duration-200 ease-in-out after:ease-in-out after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full focus:after:w-full hover:text-abbey-50 focus:text-abbey-50 after:h-[3px] after:bg-abbey-50"  href="/kontakt">Polityka cookies</Link></li>
                   
                </ul>
                </div>
            </menu>
            <p className="col-span-full text-center font-bold text-abbey-200 border-t border-t-abbey-200/40 py-4 mt-12" >RelayX - Radoslaw Adamczyk &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}
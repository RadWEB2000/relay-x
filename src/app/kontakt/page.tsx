import { Contact } from "@/utils/forms";
import Link from "next/link";
import { BsPhoneFill as Phone } from "react-icons/bs";
import { LuMail as Mail} from "react-icons/lu";

export default function ContactPage(){
    return (
        <>
            <h1>Kontakt</h1>
            <main
                className="grid grid-cols-2 my-12 w-[120rem] max-w-[85%] mx-auto"
            >
                <div className="col-start-1 space-y-5" >
                    <section className="space-y-2 grid grid-cols-2" >
                        <h4 className="col-span-full text-5xl font-bold mb-6">RelayX</h4>
                        <address className="not-italic leading-[2] font-semibold text-lg col-start-1" >Donatowo 53,<br/>64-020 Czempiń</address>
                        <div className="space-y-3">
                        <Link className="flex flex-row items-center space-x-2" href=""><i><Phone/></i> <span>+48 794-100-413</span></Link>
                        <Link className="flex flex-row items-center space-x-2" href=""><i><Mail/></i> <span>radoslaw.adamczyk@gmail.com</span></Link>
                        </div>
                    </section>
                    <aside>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.0686719451087!2d16.879316977140256!3d52.09668177195325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705abdcefa353e9%3A0x66fe79f0d0f3272e!2sDonatowo%2053%2C%2064-020!5e0!3m2!1spl!2spl!4v1754680211358!5m2!1spl!2spl" width="600" height="450" className="w-full rounded-xl"  loading="lazy" />
                    </aside>
                </div>
                <div>
                    <Contact/>
                </div>
            </main>
        </>
    )
}
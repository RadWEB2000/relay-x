import { FaStarOfLife as Star } from "react-icons/fa";

export default function SeoForm(){
    return (
            <form action="" className="flex flex-col items-start bg-red-500/0 p-6" >
                    <label className="text-lg font-semibold" htmlFor="fullname">Imię i nazwisko <sup className="inline-block text-sm text-red-600" ><Star/></sup></label><input id="fullname" type="text" required className="mb-4 mt-1 border border-neutral-700 rounded-md px-4 py-1.5 linear duration-100 box-border focus:border-2 hover:outline-2 w-full"  />
                    <label className="text-lg font-semibold"  htmlFor="email">Adres e-mail <sup className="inline-block text-sm text-red-600" ><Star/></sup></label><input id="email" type="email" className="mb-7 mt-2 border border-neutral-700 rounded-md px-4 py-1.5 linear duration-100 box-border focus:border-2 hover:outline-2 w-full" required  />
                    <label className="text-lg font-semibold"  htmlFor="phone">Numer telefonu <sup className="inline-block text-sm text-red-600" ><Star/></sup></label><input type="tel"  className="mb-7 mt-2 border border-neutral-700 rounded-md px-4 py-1.5 linear duration-100 box-border focus:border-2 hover:outline-2 w-full" required  />
                    <label className="text-lg font-semibold"  htmlFor="website">Strona internetowa <sup className="inline-block text-sm text-red-600" ><Star/></sup></label><input type="url"  className="mb-7 mt-2 border border-neutral-700 rounded-md px-4 py-1.5 linear duration-100 box-border focus:border-2 hover:outline-2 w-full" required  />
                    <label className="text-lg font-semibold"  htmlFor="message">Wiadomośc <sup className="inline-block text-sm text-red-600" ><Star/></sup></label><textarea rows={5} id="message"  className="mb-7 mt-2 border border-neutral-700 rounded-md px-4 py-1.5 linear duration-100 box-border focus:border-2 hover:outline-2 w-full" placeholder="Wiadomość" required />
                    <button type="submit">Wyślij</button>
                </form>
    )
}
import Image from "next/image";
import forest_img from "@/img/r-adamczyk-forest.webp"

export default function About() {
    return (
        <div className=" w-[100rem] space-y-2 max-w-[95%] mx-auto md:grid md:grid-cols-3" >
            <section className="flex flex-col  col-start-1 col-span-2 space-y-4 mx-auto w-[55rem] max-w-[90%]"  >
                <h2 className="text-xl font-semibold bg-flamingo-600 w-fit px-6 py-2 text-white rounded-4xl rounded-br-sm lg:text-2xl" >Kim jestem?</h2>
                <h3 className="text-4xl text-balance font-[500] lg:text-6xl" >Specjalista SEO. Twórca stron. Automatyzator procesów.</h3>
                <p className="text-lg leading-[2] mt-4 text-balance xl:text-xl" >Specjalizacja w obszarach SEO, tworzenia stron internetowych oraz automatyzacji procesów cyfrowych to efekt wieloletniego doświadczenia w pracy z biznesami, które stawiają na rozwój online. Główne podejście opiera się na łączeniu technologii z analityką – tak, by działania były nie tylko estetyczne i funkcjonalne, ale przede wszystkim skuteczne.<br /><br />

                    W centrum uwagi zawsze znajduje się cel klienta: większa widoczność, lepsza konwersja, sprawniejsze procesy. Niezależnie od tego, czy chodzi o optymalizację techniczną strony, wdrożenie nowego layoutu, integrację z zewnętrznymi systemami czy tworzenie automatycznych raportów – priorytetem są rozwiązania, które faktycznie działają.<br /><br />

                    Zamiast skupiać się na teorii, stawiane są konkretne wyniki i długofalowe efekty. To połączenie doświadczenia, prostoty i technologii, które buduje realną wartość.</p>
            </section>
            <figure
                className="bg-red mx-auto relative h-fit w-fit max-w-[85%]"
            >
                <span className="absolute text-lg z-[2] shadow-xl py-2.5 px-4 -left-7 top-2 rounded-2xl text-abbey-950 bg-turquoise-200 md:text-sm lg:text-lg xl:px-9 xl:py-6" >Szukasz kogoś od SEO i stron? 🤔</span>
                <Image
                    alt="Radosław Adamczyk"
                    loading="lazy"
                    className="rounded-3xl shadow-xl h-full object-cover"
                    height={680}
                    src={forest_img.src}
                    width={450}
                />
                <span className="absolute text-lg z-[2] shadow-xl bg-turquoise-100 py-2.5 px-4 -right-7 bottom-2 rounded-2xl md:text-sm lg:text-lg text-abbey-950 xl:px-9 xl:py-6">Wskakuj – ogarniemy to razem 🚀</span>

            </figure>
        </div>
    )
}
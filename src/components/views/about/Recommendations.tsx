import sniezek from "@/img/aleksandra-sniezek.jpg"
import galan from "@/img/damian-galan.jpg";
import barton from "@/img/pawel-barton.jpg"
import politowska from "@/img/irena-politowska.jpg"
import Image from "next/image";

const tiles = [
    {
        fullname: 'Irena Politowska',
        date: '17 listopada 2024',
        content: `Radek był członkiem zespołu w agencji marketingowej, gdzie wspólnie realizowaliśmy projekty związane z SEO, SEM oraz technologiami wspierającymi development. Wnosił do zespołu dużą dawkę entuzjazmu i ciekawości, co przekładało się na jego zaangażowanie w poszukiwanie innowacyjnych rozwiązań i usprawnianie procesów. Doceniam jego gotowość do nauki i rozwijania swoich umiejętności. 
Radek odgrywa ważną rolę w realizacji zadań zespołu, a jego zaangażowanie oraz systematyczne rozwijanie kompetencji przekładają się na zauważalne efekty w pracy.`,
        image: {
            alt: '',
            src: politowska.src,
            title: ''
        }
    },
    {
        fullname: 'Paweł Bartoń',
        date: '23 września 2024',
        content: `Radek jest osobą, która szuka ciekawych rozwiązań, jest dociekliwy i otwarty na wiedzę. Chce się stale doskonalić i pogłębiać swoje umiejętności. Posiada doświadczenie w tworzeniu stron internetowych, które w połączeniu z wiedzą SEO daje świetne rezultaty.`,
        image: {
            alt: '',
            src: barton.src,
            title: ''
        }
    },
    {
        fullname: 'Aleksandra Śnieżek',
        date: '13 września 2024',
        content: `Bardzo dobrze wspominam współpracę z Radkiem. Jest osobą z szeroką wiedzą, z dużym zapałem do działania, który podchodzi do pracy z entuzjazmem i ciekawością.
W projektach SEO i UX, które wspólnie realizowaliśmy Radek wykazywał się dużym zaangażowaniem, sumiennością, pomysłowością i indywidualnym podejściem do każdego z nich.
Polecam współpracę z Radkiem :)`,
        image: {
            alt: '',
            src: sniezek.src,
            title: ''
        }
    },
    {
        fullname: 'Damian Gałan',
        date: '3 września 2024',
        content: `Z Radkiem pracowałem przez ponad rok. W tym czasie dał się poznać jako osoba, która nie boi się wyzwań. Gdy dostaje zadanie to natychmiast działa, bez zbędnych pytań. Radek jest również osobą dobrze rozeznaną w kwestia technologicznych co czyni go solidnym w zakresie SEO oraz front-end/web developmentu.`,
        image: {
            alt: '',
            src: galan.src,
            title: ''
        }
    },
]

export default function Recommendations() {
    return (
        <section className="w-[100rem] max-w-[90%] mx-auto my-12" >
            <h2 className="text-3xl font-extrabold md:text-5xl xl:text-6xl 2xl:text-8xl" >Rekomendacje współpracowników</h2>
            <p className="text-sm max-w-[110ch] leading-[2.1] mt-7 text-balance md:text-base xl:text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vitae quasi impedit, possimus ad eum, officia quis at mollitia aut perspiciatis adipisci! Blanditiis necessitatibus ipsam quae voluptatum tempora debitis aliquam!</p>

            <ul
                className="mt-15 my-4 space-y-16"
            >
                {
                    tiles.map(({ content, date, fullname, image }) => {
                        return (
                            <li
                                className=" flex flex-col md:grid md:grid-cols-4 w-[65rem] max-w-[95%] mx-auto  items-center"
                            >
                                <section className="col-start-1 col-end-2 space-y-2 text-center " >
                                    <Image
                                        {...image}
                                        loading="lazy"
                                        height={250}
                                        width={250}
                                        className="object-cover rounded-full size-24 mx-auto bg-red-200"
                                    />
                                    <h2 className="text-2xl font-bold" >{fullname}</h2>
                                    <h3 className="text-lg font-semibold" >Lumo</h3>
                                </section>
                                <section
                                    className="col-start-2 col-end-5 pl-6 border-l  border-neutral-400"
                                >

                                    <p className="col-start-2 col-end-5 mt-8 leading-[2.4] row-start-3 row-end-4 text-balance  text-sm lg:text-base" >{content}</p>
                                    <p className="col-span-full mt-5 text-sm italic text-neutral-500 text-end" >{date}</p>
                                </section>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
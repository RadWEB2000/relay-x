import agromar from "@/img/agromar.webp"
import agromarLogo from "@/img/agromar-logo.webp"
import countriesDle from "@/img/countries-dle.webp"
import countriesDleLogo from "@/img/countries-dle-logo.png"
import lifeestylee from "@/img/lifeestylee.webp"
import lifeestyleeLogo from "@/img/lifeestylee-light.webp"
import { ProjectHomePageCard } from "@/components/utils/cards";

export default function Projects() {
    return (
        <div className=" w-[90rem] space-y-2 max-w-[95%] mx-auto" >
            <section>
                <h2 className="text-xl font-semibold bg-flamingo-600 w-fit px-6 py-2 text-white rounded-4xl rounded-br-sm lg:text-2xl" >Projekty</h2>
                <h3 className="text-4xl text-balance font-[500] lg:text-6xl" >Zrealizowane z myślą o efekcie</h3>
                <p className="text-lg leading-[2] max-w-[90ch] mt-8 text-balance xl:text-xl" >Poniżej znajduje się przegląd wybranych realizacji, które łączą skuteczne SEO, nowoczesne strony internetowe i praktyczną automatyzację procesów. Każdy projekt to indywidualne podejście, dopasowane do celów biznesowych i specyfiki branży. To nie tylko estetyka i funkcjonalność, ale przede wszystkim konkretne wyniki.</p>
            </section>
            <ul
                className=" mt-20 space-y-6 relative scroll-smooth snap-mandatory "
            >
                <ProjectHomePageCard
                    categories={[
                        {
                            label: 'Automatyzacja',
                            variant: 'automate'
                        },
                        {
                            label: 'SEO',
                            variant: 'seo'
                        },
                        {
                            label: 'Strony',
                            variant: 'website'
                        }
                    ]}
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quaerat aperiam fugit fuga ut aliquid doloremque. Alias, cum fugiat. Dolores nihil, magni et vero laudantium mollitia! Asperiores, quis nam!"
                    index={0}
                    mockup={{
                        alt: '',
                        src: lifeestylee.src,
                        title: ''
                    }}
                    title="LifeeStylee"
                    logo={{
                        alt: '',
                        src: lifeestyleeLogo.src,
                        title: ''
                    }}
                />
                <ProjectHomePageCard
                    categories={[
                        {
                            label: 'Automatyzacja',
                            variant: 'automate'
                        },
                        {
                            label: 'SEO',
                            variant: 'seo'
                        },
                        {
                            label: 'Strony',
                            variant: 'website'
                        }
                    ]}
                    index={1}

                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quaerat aperiam fugit fuga ut aliquid doloremque. Alias, cum fugiat. Dolores nihil, magni et vero laudantium mollitia! Asperiores, quis nam!"
                    logo={{
                        alt: '',
                        src: countriesDleLogo.src,
                        title: ''
                    }}
                    mockup={{
                        alt: '',
                        src: countriesDle.src,
                        title: ''
                    }}
                    title="Countries DLE"
                />
                <ProjectHomePageCard
                    categories={[
                        {
                            label: 'Automatyzacja',
                            variant: 'automate'
                        },
                        {
                            label: 'SEO',
                            variant: 'seo'
                        },
                        {
                            label: 'Strony',
                            variant: 'website'
                        }
                    ]}
                    index={2}

                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quaerat aperiam fugit fuga ut aliquid doloremque. Alias, cum fugiat. Dolores nihil, magni et vero laudantium mollitia! Asperiores, quis nam!"
                    logo={{
                        alt: '',
                        src: agromarLogo.src,
                        title: ''
                    }}
                    mockup={{
                        alt: '',
                        src: agromar.src,
                        title: ''
                    }}
                    title="Agromar"
                />
            </ul>
        </div >
    )
}
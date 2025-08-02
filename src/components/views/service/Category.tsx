import { ServicePrimaryCard } from "@/ui/cards";

export default function Category() {
    return (
        <div
            className="max-w-[93%] w-[100rem] mx-auto first:mt-12"
        >
            <section>
                <h2
                    className="text-5xl font-semibold md:text-6xl xl:text-8xl"
                >Link building</h2>
                <p
                    className="leading-[1.8] text-md text-balance mt-7 lg:text-xl xl:pr-12"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis dolorem esse excepturi obcaecati mollitia quae sit, corrupti at asperiores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora minima saepe officia. Tenetur dicta, obcaecati, autem eos fugit temporibus ipsam eligendi beatae minima similique quo voluptatem quibusdam quam aspernatur. Totam?
                    Soluta aliquid, in vitae dolor quibusdam delectus unde odio, eaque quod amet, saepe corporis minus iusto inventore? Quidem delectus voluptas beatae deserunt fuga! Mollitia minus laborum omnis et nostrum dolore?
                    Eligendi molestiae quos sed porro, voluptas odio modi? Libero amet ullam voluptatum illum et nostrum sed, d sint.</p>
            </section>
            <hr className="mb-12 mt-6 border-neutral-600/45" />
            <ul
                className="grid md:grid-cols-2  my-12 items-center justify-center space-y-12 lg:space-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:space-y-0"
            >
                <ServicePrimaryCard />
                <ServicePrimaryCard />
                <ServicePrimaryCard />
                <ServicePrimaryCard />
            </ul>
        </div>
    )
}
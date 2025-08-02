export default function Hero() {
    return (
        <header className="grid grid-cols-1 mx-auto my-5 overflow-hidden relative rounded-3xl w-[95%]" >
            <video autoPlay className="absolute col-span-1 h-full w-full object-cover row-start-1" loop muted>
                <source src="/movies/splash.mov" />
            </video>
            <section className="bg-green-200/0 col-span-1 row-start-1 min-h-[78vh] p-8 flex flex-col justify-end space-y-5 z-[2] text-neutral-300 " >
                <h1 className="text-5xl text-neutral-50 font-extrabold md:text-7xl lg:text-8xl" >Od kliknięcia do klienta</h1>
                <h2 className="text-3xl font-semibold text-neutral-100 md:text-4xl lg:text-6xl" >SEO. Strony. Automatyzacje.</h2>
                <p className="text-md font-bold mt-6 max-w-[125ch] md:text-lg md:leading-[1.8]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem illo suscipit non qui mollitia ducimus? Quasi maiores eius quis recusandae voluptatibus atque cumque esse dicta nisi dolorum ratione unde obcaecati debitis amet perferendis ducimus excepturi, ex deleniti dolor sapiente ipsa saepe vero repellendus consequatur! Fugiat, quisquam itaque.</p>
            </section>
        </header>
    )
}
export default function Form() {
    return (
        <div className="bg-flamingo-600 px-[8vw] space-x-12 py-18 grid grid-cols-1 space-y-4 min-h-[60vh] md:py-24 lg:grid-cols-2">
            <section className="col-start-1" >
                <h2 className="text-5xl font-bold md:text-6xl text-neutral-900">Wypełnij formularz</h2>
                <h3 className="text-2xl mb-9 mt-2 text-neutral-800">Przygotuję dla Ciebie bezpłatną wycenę działań</h3>
                <p className="text-lg text-neutral-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ab, inventore enim fuga illum reiciendis ea, officiis saepe explicabo illo recusandae magni impedit velit dolore optio! Perferendis aperiam temporibus laboriosam.</p>
            </section>
            <form
                className="text-black flex flex-col"
            >
                <label htmlFor="fullname">Imię i nazwisko</label>
                <input type="text" name="fullname" id="fullname" />
                <label htmlFor="company">Firma</label>
                <input type="text" name="company" id="company" />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="phone">Numer telefonu</label>
                <input type="tel" name="phone" id="phone" />
                <label htmlFor="website">Adres strony internetowej</label>
                <input type="url" name="website" id="website" />
            </form>
        </div>
    )
}
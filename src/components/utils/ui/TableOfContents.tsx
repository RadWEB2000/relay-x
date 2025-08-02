import Link from "next/link"

export default function TableOfContents({ headings, title }: TableOfContentsBlock) {
    console.log(headings)
    return (
        <section
            className="bg-flamingo-200/10 xl:bg-transparent xl:p-0 p-6 rounded-lg "
        >
            <h4 className="text-3xl font-extrabold" >{title !== '' ? title : 'Spis treści'}</h4>
            <menu
                className="bg-yellow-100/0 flex flex-col space-y-2 mt-8 group"
            >
                {
                    headings.map(({ anchor, content, id, level }) => {
                        return (
                            <Link href={anchor} className="scroll-smooth text-lg text-abbey-800 duration-200 linear group-hover:text-abbey-200 hover:text-abbey-950 hover:font-semibold" key={id} style={{
                                marginLeft: `calc(10px * ${level - 1})`
                            }} >{content}</Link>
                        )
                    })
                }
            </menu>
        </section>
    )
}
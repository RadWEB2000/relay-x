import Link from "next/link"

export default function CallToAction({ content, links }: CallToActionBlock) {
    return (
        <section
            className="px-12 py-12 rounded-sm bg-flamingo-700/6 border-r-4 border-l-4 border-flamingo-400 text-abbey-900 font-semibold text-lg mx-auto my-12"
        >
            <p className="max-w-full text-balance" dangerouslySetInnerHTML={{ __html: content }} />
            {
                links &&
                <ul className="list-disc mt-6 space-y-3" >
                    {
                        links.map(({ label, uri }) => {
                            return (
                                <li className="list-disc list-inside duration-200 linear hover:text-flamingo-600" key={`${label}-${uri}`} >
                                    <Link className="" href={'#'}>
                                        {label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </section>
    )
}
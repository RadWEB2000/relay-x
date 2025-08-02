export default function Faq({ questions }: FaqBlock) {
    return (
        <div>
            <h2>Pytania i odpowiedzi</h2>
            <div itemScope itemType="https:///scheam.org/FAQPage" >
                {
                    questions.map(({ content, id, title }) => {
                        return (
                            <article itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b" key={id} >
                                <details>
                                    <summary className="py-4 cursor-pointer">
                                        <h3 className="text-lg font-medium" itemProp='name' dangerouslySetInnerHTML={{ __html: title }} />
                                    </summary>
                                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="pb-4">
                                        <p className="text-sm" itemProp="text" dangerouslySetInnerHTML={{ __html: content }} />
                                    </div>
                                </details>
                            </article>
                        )
                    })
                }

            </div>
        </div>
    )
}
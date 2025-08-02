export default function List({ items, ordered }: ListBlock) {
    if (ordered) {
        return (
            <ol
                className="list-decimal list-inside my-4"
            >
                {
                    items.map(({ content, order }) => {
                        return <li className="xl:text-lg leading-[2.1] text-balance" dangerouslySetInnerHTML={{ __html: content }} key={order} />
                    })
                }
            </ol>
        )
    } else {
        return (
            <ul
                className="list-disc list-inside my-4"
            >
                {
                    items.map(({ content, order }) => {
                        return <li className="xl:text-lg leading-[2.1] text-balance" dangerouslySetInnerHTML={{ __html: content }} key={order} />
                    })
                }
            </ul>
        )
    }
}
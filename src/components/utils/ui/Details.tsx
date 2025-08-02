export default function Details({ content, summary }: DetailsBlock) {

    return (
        <details>
            <summary>{summary}</summary>
            <p dangerouslySetInnerHTML={{ __html: content }} />
        </details>
    )
}
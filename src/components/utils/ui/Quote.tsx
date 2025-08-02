export default function Quote({ content }: QuoteBlock) {
    return (
        <q
            className="text-2xl leading-[2.6] font-semibold text-center font-italic w-full block"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}
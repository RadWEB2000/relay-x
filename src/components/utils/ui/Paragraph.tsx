export default function Paragraph({ content }: ParagraphBlock) {
    return <p className="xl:text-lg leading-[2.1] text-pretty" dangerouslySetInnerHTML={{ __html: content }} />
}
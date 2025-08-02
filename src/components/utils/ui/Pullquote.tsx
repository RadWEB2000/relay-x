export default function Pullquote({ citation, content }: PullquoteBlock) {
    return (
        <div
            className="text-center font-italic border-l-8 border-abbey-800 border-r-8 border-r-transparent"
        >
            <blockquote
                className="text-4xl leading-[2.6] font-semibold "
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <cite className="text-md leading-[2.6] font-light " >{citation}</cite>
        </div>
    )
}
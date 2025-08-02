export default function Heading({ anchor, content, level }: HeadingBlock) {

    const headingLevel = level - 1;

    switch (level) {
        case 1:
            return <h2 className="text-4xl text-balance mt-2 leading-[1.4]" id={anchor} dangerouslySetInnerHTML={{ __html: content }} />
        case 2:
            return <h3 className="text-3xl text-balance mt-2 leading-[1.4]" id={anchor} dangerouslySetInnerHTML={{ __html: content }} />
        case 3:
            return <h4 className="text-2xl text-balance mt-2 leading-[1.4]" id={anchor} dangerouslySetInnerHTML={{ __html: content }} />
        case 4:
            return <h5 className="text-xl text-balance mt-2 leading-[1.4]" id={anchor} dangerouslySetInnerHTML={{ __html: content }} />
        case 5:
            return <h6 className="text-lg text-balance mt-2 leading-[1.4]" id={anchor} dangerouslySetInnerHTML={{ __html: content }} />
    }

}
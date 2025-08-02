import { CallToAction, Code, Details, Faq, Heading, List, Movie, Paragraph, Picture, Pullquote, Quote, Table } from "@/ui/index"

export default function gutenbergBlocks(blocks: Array<GutenbergBlocks>) {
    return blocks.map((block) => {
        switch (block.name) {
            case 'core/paragraph':
                return <Paragraph {...block} key={block.order} />;
            case 'core/heading':
                return <Heading anchor={block.anchor} content={block.content} level={block.level} name={block.name} order={block.order} key={block.order} />;
            case 'core/details':
                return <Details content={block.content} name={block.name} order={block.order} summary={block.summary} key={block.order} />;
            case 'core/list':
                return <List items={block.items} name={block.name} order={block.order} ordered={block.ordered} key={block.order} />;
            case 'core/table':
                return <Table {...block} key={block.order} />;
            case 'core/quote':
                return <Quote {...block} key={block.order} />;
            case 'acf/code-block':
                return <Code {...block} key={block.order} />;
            case 'core/pullquote':
                return <Pullquote {...block} key={block.order} />;
            case 'core/image':
                return <Picture {...block} key={block.order} />;
            case 'rank-math/faq-block':
                return <Faq {...block} key={block.order} />;
            case 'core/video':
                return <Movie {...block} key={block.order} />
            case 'rank-math/toc-block':
                return null;
            case 'core/code':
                return null;
            case 'core/list-item':
                return null;
            case 'core/preformatted':
                return null;
            case 'rank-math/howto-block':
                return null;
            case 'acf/cta-box':
                return <CallToAction content={block.content} links={block.links} name={block.name} order={block.order} key={block.order} />

        }
    })
}
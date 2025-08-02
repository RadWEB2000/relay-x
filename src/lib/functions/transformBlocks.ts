import { downgradeToHttp } from '@/funcs/index';

export default function transformBlocks(blocks: Array<WP_GutenbergBlocks>): Array<GutenbergBlocks> {
    function paragraph(block: WP_ParagraphBlock): ParagraphBlock {
        return {
            content: block.attributes.content,
            name: block.name,
            order: block.order
        }
    }
    function heading(block: WP_HeadingBlock): HeadingBlock {
        return {
            content: block.attributes.content,
            anchor: block.attributes.anchor,
            level: block.attributes.level,
            name: block.name,
            order: block.order
        }
    }
    function coreCode(block: WP_CodeCoreBlock): CodeCoreBlock {
        return {
            content: block.attributes.content,
            name: block.name,
            order: block.order
        }
    }
    function preformatted(block: WP_PreformattedBlock): PreformattedBlock {
        return {
            content: block.attributes.content,
            name: block.name,
            order: block.order
        }
    }
    function details(block: WP_DetailsBlock): DetailsBlock {
        return {
            content: block.innerBlocks[0].attributes.content,
            name: block.name,
            order: block.order,
            summary: block.attributes.summary
        }
    }
    function code(block: WP_CodeBlock): CodeBlock {
        const { data: { language, editor } } = JSON.parse(block.attributesJSON)
        return {
            name: block.name,
            order: block.order,
            language,
            code: editor
        }
    }
    function table(block: WP_TableBlock): TableBlock {
        const { attributes: { body, foot, caption, head } } = block;
        return {
            body: body[0].cells.map(item => item.content),
            caption: caption,
            name: block.name,
            order: block.order,
            foot: foot ? foot[0].cells.map(item => item.content) : [],
            head: head ? head[0].cells.map(item => item.content) : [],
        }
    }
    function cta(block: WP_CallToActionBlock): CallToActionBlock {
        const parsed = JSON.parse(block.attributes.data);
        const links = Object.keys(parsed)
            .filter(key => key.match(/^links_\d+_link$/))
            .map(key => parsed[key]);

        return {
            name: block.name,
            order: block.order,
            links: links.map((item): T_Link & { target: string } => {
                return {
                    label: item.title,
                    uri: item.url,
                    target: item.target
                }
            }),
            content: parsed.content,
        }
    }
    function image(block: WP_ImageBlock): ImageBlock {
        return {
            alt: block.mediaItem.node.altText,
            name: block.name,
            order: block.order,
            src: downgradeToHttp(block.mediaItem.node.sourceUrl),
            title: block.mediaItem.node.title
        }
    }
    function quote(block: WP_QuoteBlock): QuoteBlock {
        return {
            name: block.name,
            content: block.innerBlocks[0].attributes.content ?? '',
            order: block.order
        }
    }
    function pullquote(block: WP_PullquoteBlock): PullquoteBlock {
        return {
            name: block.name,
            order: block.order,
            citation: block.attributes.citation,
            content: block.attributes.value
        }
    }
    function listItem(block: WP_ListItemBlock): ListItemBlock {
        return {
            content: block.attributes.content,
            name: block.name,
            order: block.order
        }
    }
    function list(block: WP_ListBlock): ListBlock {
        return {
            items: block.innerBlocks.map((item: WP_ListItemBlock): ListItemBlock => {
                return listItem(item)
            }),
            name: block.name,
            order: block.order,
            ordered: block.attributes.ordered
        }
    }
    function video(block: WP_VideoBlock): VideoBlock {
        return {
            name: block.name,
            order: block.order,
            poster: block.attributes.poster,
            preload: block.attributes.preload,
            src: downgradeToHttp(block.attributes.src)
        }
    }
    function faq(block: WP_FaqBlock): FaqBlock {
        return {
            name: block.name,
            order: block.order,
            questions: block.attributes.questions.map((item) => {
                const { id, title, content, visible } = JSON.parse(item);
                return {
                    content,
                    id,
                    title,
                    visible
                }
            })
        }
    }
    function toc(block: WP_TableOfContentsBlock): TableOfContentsBlock {
        return {
            name: block.name,
            order: block.order,
            title: block.attributes.title,
            headings: block.attributes.headings.map(item => {
                const { key, content, level, link } = JSON.parse(item)
                return {
                    content,
                    level: level,
                    anchor: link,
                    id: key
                }
            })
        }
    }
    function howTo(block: WP_HowToBlock): HowToBlock {
        return {
            days: block.attributes.days,
            description: block.attributes.description,
            hours: block.attributes.hours,
            minutes: block.attributes.minutes,
            name: block.name,
            order: block.order,
            title: block.attributes.title,
            steps: block.attributes.steps.map(item => {
                const { id, title, content, visible } = JSON.parse(item);
                return {
                    id,
                    title,
                    content,
                    visible
                }
            })
        }
    }
    return blocks.map((block) => {
        switch (block.name) {
            case 'core/paragraph':
                return paragraph(block as WP_ParagraphBlock);
            case 'core/heading':
                return heading(block as WP_HeadingBlock);
            case 'core/code':
                return coreCode(block as WP_CodeCoreBlock);
            case 'acf/code-block':
                return code(block as WP_CodeBlock);
            case 'acf/cta-box':
                return cta(block as WP_CallToActionBlock);
            case 'core/image':
                return image(block as WP_ImageBlock);
            case 'core/list':
                return list(block as WP_ListBlock);
            case 'core/quote':
                return quote(block as WP_QuoteBlock);
            case 'core/preformatted':
                return preformatted(block as WP_PreformattedBlock);
            case 'core/details':
                return details(block as WP_DetailsBlock);
            case 'core/pullquote':
                return pullquote(block as WP_PullquoteBlock);
            case 'core/table':
                return table(block as WP_TableBlock);
            case 'core/video':
                return video(block as WP_VideoBlock);
            case 'rank-math/faq-block':
                return faq(block as WP_FaqBlock);
            case 'rank-math/howto-block':
                return howTo(block as WP_HowToBlock);
            case 'rank-math/toc-block':
                return toc(block as WP_TableOfContentsBlock);
            default:
                return null;
        }
    }).filter(Boolean) as Array<GutenbergBlocks>;
}
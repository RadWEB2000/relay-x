export { }
declare global {


    type WP_ParagraphBlock = {
        name: 'core/paragraph',
        attributes: {
            content: string;
        }
        order: number;
    }

    type ParagraphBlock = {
        name: 'core/paragraph',
        order: number;
        content: string;
    }

    type WP_HeadingBlock = {
        name: 'core/heading';
        attributes: {
            anchor: string;
            content: string;
            level: T_Heading_Levels;
        };
        order: number;
    }

    type HeadingBlock = {
        name: 'core/heading';
        order: number;
        anchor: string;
        content: string;
        level: T_Heading_Levels;
    }

    type WP_CodeCoreBlock = {
        name: 'core/code';
        attributes: {
            content: string;
        }
        order: number;
    }

    type CodeCoreBlock = {
        name: 'core/code';
        content: string;
        order: number;
    }


    type WP_PreformattedBlock = {
        name: 'core/preformatted',
        attributes: {
            content: string;
        };
        order: number;
    };

    type PreformattedBlock = {
        name: 'core/preformatted',
        content: string;
        order: number;
    };

    type WP_DetailsBlock = {
        name: 'core/details';
        attributes: {
            summary: string;
            name: string;
        };
        innerBlocks: Array<WP_ParagraphBlock>;
        order: number;
    }

    type DetailsBlock = {
        name: 'core/details';
        summary: string;
        name: string;
        content: string;
        order: number;
    }

    type WP_CodeBlock = {
        name: 'acf/code-block';
        attributesJSON: string;
        order: number;
    }

    type CodeBlock = {
        name: 'acf/code-block';
        language: T_ProgrammingLanguage;
        code: string;
        order: number;
    }

    type WP_TableBlock = {
        name: 'core/table',
        attributes: {
            caption: string;
            head?: Array<{ cells: Array<{ content: string }> }>;
            foot?: Array<{ cells: Array<{ content: string }> }>;
            body: Array<{ cells: Array<{ content: string }> }>;
        };
        order: number;
    }

    type TableBlock = {
        name: 'core/table';
        caption: string;
        head?: string[];
        foot?: string[];
        cols: number;
        body: string[];
        order: number;
    }

    type WP_CallToActionBlock = {
        name: 'acf/cta-box',
        attributes: {
            data: string;
        };
        order: number;
    }
    type CallToActionBlock = {
        name: 'acf/cta-box',
        content: string;
        links: Array<T_Link>;
        order: number;
    }

    type WP_ImageBlock = {
        name: 'core/image',
        mediaItem: {
            node: {
                altText: string;
                sourceUrl: string;
                title: string;
            }
        };
        order: number;
    }

    type ImageBlock = T_Image & {
        name: 'core/image',
        order: number;
    }

    type WP_QuoteBlock = {
        name: 'core/quote';
        innerBlocks: Array<WP_ParagraphBlock>;
        order: number;
    };

    type QuoteBlock = {
        name: 'core/quote';
        content: string;
        order: number;
    };

    type WP_PullquoteBlock = {
        name: 'core/pullquote',
        attributes: {
            citation: string;
            value: string;
        }
        order: number;
    }

    type PullquoteBlock = {
        name: 'core/pullquote',
        citation: string;
        content: string;
        order: number;
    }

    type WP_ListItemBlock = {
        name: 'core/list-item',
        order: number;
        attributes: {
            content: string;
        }
    }
    type ListItemBlock = {
        name: 'core/list-item',
        order: number;
        content: string;
    }

    type WP_ListBlock = {
        name: 'core/list',
        attributes: {
            ordered: boolean;
        }
        innerBlocks: Array<WP_ListItemBlock>;
        order: number;
    }

    type ListBlock = {
        name: 'core/list',
        ordered: boolean;
        items: Array<ListItemBlock>;
        order: number;
    }

    type WP_VideoBlock = {
        name: 'core/video',
        attributes: {
            poster: string;
            preload: string;
            src: string;
        };
        order: number;
    }

    type VideoBlock = {
        name: 'core/video',
        poster: string;
        preload: string;
        src: string;
        order: number;
    }

    type WP_FaqBlock = {
        name: 'rank-math/faq-block',
        attributes: {
            questions: Array<string>;
        };
        order: number;
    }

    type FaqBlock = {
        name: 'rank-math/faq-block',
        questions: Array<{
            title: string;
            content: string;
            id: string;
            visible: boolean;
        }>
        order: number;
    }

    type WP_TableOfContentsBlock = {
        name: 'rank-math/toc-block',
        order: number;
        attributes: {
            title: string;
            headings: Array<string>;
        }
    }

    type TableOfContentsBlock = {
        name: 'rank-math/toc-block',
        order: number;
        title: string;
        headings: Array<{
            id: string;
            content: string;
            level: number;
            anchor: string;
        }>;
    }

    type WP_HowToBlock = {
        name: 'rank-math/howto-block',
        attributes: {
            steps: Array<string>;
            title: string;
            hours: string;
            minutes: string;
            days: string;
            description: string;
        };
        order: number;
    }

    type HowToBlock = {
        name: 'rank-math/howto-block',
        steps: Array<{
            id: string;
            title: string;
            content: string;
            visible: boolean;
        }>;
        title: string;
        hours: string;
        minutes: string;
        days: string;
        description: string;
        order: number;
    }


    type WP_GutenbergBlocks = WP_ParagraphBlock | WP_HeadingBlock | WP_CodeCoreBlock | WP_PreformattedBlock | WP_DetailsBlock | WP_CodeBlock | WP_TableBlock | WP_CallToActionBlock | WP_ImageBlock | WP_QuoteBlock | WP_PullquoteBlock | WP_ListBlock | WP_ListItemBlock | WP_VideoBlock | WP_FaqBlock | WP_TableOfContentsBlock | WP_HowToBlock;

    type GutenbergBlocks = ParagraphBlock | HeadingBlock | CodeCoreBlock | PreformattedBlock | DetailsBlock | CodeBlock | TableBlock | CallToActionBlock | ImageBlock | QuoteBlock | PullquoteBlock | ListBlock | ListItemBlock | VideoBlock | FaqBlock | TableOfContentsBlock | HowToBlock;

    interface PostPageRequest {
        post: {
            blocks: Array<WP_GutenbergBlocks>;
            categories: {
                nodes: Array<{
                    name: string;
                    uri: string;
                }>
            };
            date: string;
            excerpt: string;
            featuredImage: {
                node: {
                    altText: string;
                    sourceUrl: string;
                    title: string;
                }
            };
            title: string;
            tags: {
                nodes: Array<{
                    name: string;
                    uri: string;
                }>
            };
            postpage: {
                introduction: string;
            };
            author: {
                node: {
                    name: string;
                    userfields: {
                        image: {
                            node: {
                                altText: string;
                                sourceUrl: string;
                                title: string;
                            }
                        };
                        occupation: string;
                    }
                }
            }
            seo: {
                title: string;
                description: string;
                canonicalUrl: string;
                openGraph: {
                    articleMeta: {
                        modifiedTime: string;
                        publishedTime: string;
                    };
                    description: string;
                    title: string;
                    slackEnhancedData: Array<{
                        data: string;
                        label: string;
                    }>
                }
            }
        }
    }

    interface PostPageResponse {
        page: {
            blocks?: Array<GutenbergBlocks>;
            category: T_Link;
            tags: Array<T_Link>;
            date: string;
            excerpt: string;
            image: T_Image;
            introduction: string;
            title: string;
            readingTime: string;
            author: {
                name: string;
                occupation: string;
                image: T_Image;
            }
        },
        seo: {
            metaTitle: string;
            metaDescription: string;
            ogTitle: string;
            ogDescription: string;
            canonical: string;
        }
    }

    interface BlogPageRequest {
        page: {
            title: string;
            blocks?: Array<WP_GutenbergBlocks>;
            content: string;
            blogpage: {
                introduction: string;
            };
            seo: {
                title: string;
                description: string;
                openGraph: {
                    description: string;
                    title: string;
                }
            };
        }
        tags:{
            nodes:Array<{
                count:number;
                name:string;
                uri:string;
            }>
        }
        categories:{
            nodes:Array<{name:string;uri:string;}>
        }
        posts:{
            pageInfo: {
                startCursor: string;
                hasPreviousPage: boolean;
                hasNextPage: boolean;
                endCursor: string;    
            }       
            nodes: Array<{
                categories: {
                    nodes: Array<{
                        name: string;
                        uri: string;
                    }>
                };
                date: string;
                excerpt: string;
                featuredImage: {
                    node: {
                        altText: string;
                        sourceUrl: string;
                        title: string;
                    }
                };
                title: string;
                uri: string;
                slug: string;
            }>
        }
    }

    interface BlogPageResponse {
        page:{
            title:string;
            blocks?: Array<GutenbergBlocks>;
            content:string;
            introduction:string;
            tags:Array<T_Link & {count:number}>;
            categories:Array<T_Link>;
            posts: Array<{
                categories: Array<T_Link>;
                date: string;   
                excerpt: string;
                image: T_Image;
                title: string;
                uri: string;
                slug?: string;
            }>
        };
        pagination:{
            startCursor: string;
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            endCursor: string;
        }
        seo: {
            metaTitle: string;
            metaDescription: string;
            ogTitle: string;
            ogDescription: string;
        }
    }

    interface IndustriesLinksRequest {
        industries:{
            nodes:Array<{
                slug:string;
                uri:string;
            }>
        }
    }
    interface IndustriesLinksResponse {
        industries:Array<{
                slug:string;
                uri:string;
            }>
    }

    interface IndustryPageRequest {
        industry: {
            title: string;
            blocks?: Array<WP_GutenbergBlocks>;
            seo: {
                title: string;
                description: string;
                openGraph: {
                    description: string;
                    title: string;
                }
            };
        }
    }

     interface IndustryPageResponse {
        page:{
            title:string;
            blocks?: Array<GutenbergBlocks>;
        };
        seo: {
            metaTitle: string;
            metaDescription: string;
            ogTitle: string;
            ogDescription: string;
        }
    }
}
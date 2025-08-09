import WordpressGQL from "@/lib/configs/WordpressGQL";
import { gql } from "graphql-request";
import transformBlocks from '../../lib/functions/transformBlocks';
import { downgradeToHttp } from "@/lib/functions";

const query = gql`
query BlogPage {
  page(id: "blog", idType: URI) {
    title(format: RENDERED)
    content(format: RENDERED)
    blogpage {
      introduction
    }
    blocks {
      ... on AcfCtaBoxBlock {
        attributes {
          data
        }
        name
      }
      ... on RankMathFaqBlock {
        name
        attributes {
          questions
        }
      }
      ... on RankMathHowtoBlock {
        name
        attributes {
          steps
          timeLabel
          hours
          minutes
          days
          description
        }
      }
      ... on RankMathTocBlock {
        attributes {
          ... on RankMathTocBlockAttributes {
            title
            headings
          }
        }
        name
      }
      ... on AcfCodeBlock {
        name
        attributesJSON
      }
      ... on CoreParagraphBlock {
        name
        attributes {
          ... on CoreParagraphBlockAttributes {
            content
          }
        }
      }
      ... on CoreImageBlock {
        name
        mediaItem {
          node {
            altText
            sourceUrl(size: LARGE)
            title(format: RENDERED)
          }
        }
      }
      ... on CoreHeadingBlock {
        name
        attributes {
          ... on CoreHeadingBlockAttributes {
            level
            content
            anchor
          }
        }
      }
      ... on CoreListBlock {
        name
        attributes {
          ... on CoreListBlockAttributes {
            ordered
          }
        }
        innerBlocks {
          ... on CoreListItemBlock {
            name
            order
            attributes {
              content
            }
          }
        }
      }
      ... on CoreQuoteBlock {
        name
        innerBlocks {
          ... on CoreParagraphBlock {
            name
            attributes {
              ... on CoreParagraphBlockAttributes {
                content
              }
            }
          }
        }
      }
      ... on CorePullquoteBlock {
        name
        attributes {
          ... on CorePullquoteBlockAttributes {
            citation
            value
          }
        }
      }
      ... on CorePreformattedBlock {
        name
        attributes {
          content
        }
      }
      ... on CoreHtmlBlock {
        name
        attributes {
          content
        }
      }
      ... on CoreTableBlock {
        name
        attributes {
          ... on CoreTableBlockAttributes {
            caption
            head {
              cells {
                content
              }
            }
            foot {
              cells {
                content
              }
            }
            body {
              cells {
                content
              }
            }
          }
        }
      }
      ... on CoreVideoBlock {
        name
        attributes {
          ... on CoreVideoBlockAttributes {
            poster
            preload
            src
          }
        }
      }
      ... on CoreDetailsBlock {
        attributes {
          summary
          name
        }
        name
        innerBlocks {
          ... on CoreParagraphBlock {
            name
            attributes {
              ... on CoreParagraphBlockAttributes {
                content
              }
            }
          }
        }
      }
      name
      order
      ... on CoreCodeBlock {
        name
        attributes {
          content
        }
      }
    }
    seo {
      title
      description
      openGraph {
        description
        title
      }
    }
  }
  tags {
    nodes {
      count
      name
      uri
    }
  }
  categories {
    nodes {
      name
      uri
    }
  }
  posts(first: 12) {
    pageInfo {
      startCursor
      hasPreviousPage
      hasNextPage
      endCursor
    }
    nodes {
      categories(first: 4) {
        nodes {
          name
          uri
        }
      }
      date
      excerpt(format: RENDERED)
      featuredImage {
        node {
          altText
          sourceUrl(size: LARGE)
          title(format: RENDERED)
        }
      }
      title(format: RENDERED)
      uri
      slug
    }
  }
}
`

export default async function GET_BLOG_PAGE() {
    try {
        const request:BlogPageRequest = await WordpressGQL.request(query);
        const response: BlogPageResponse = {
            page: {
                title: request.page.title,
                content: request.page.content,
                introduction: request.page.blogpage.introduction,
                blocks:transformBlocks(request.page.blocks ?? []),
                tags: request.tags.nodes.map(tag => ({
                    label: tag.name,
                    uri: tag.uri,
                    count: tag.count
                })),
                categories:request.categories.nodes.map(({name, uri}) => {
                    return {
                        label: name,
                        uri: uri
                    }
                }),
                posts:request.posts.nodes.map(({categories,date,excerpt,featuredImage,title,uri}) => {
                    return {
                        categories:categories.nodes.map(({name,uri}) => {
                            return {
                            label: name,
                            uri:uri
                        }
                        }),
                        date,
                        excerpt,
                        image: {
                            alt: featuredImage.node.altText,
                            src: downgradeToHttp(featuredImage.node.sourceUrl),
                            title: featuredImage.node.title
                        },
                        title,
                        uri
                    }
                })
            },
            pagination:{
                startCursor: request.posts.pageInfo.startCursor,
                hasPreviousPage: request.posts.pageInfo.hasPreviousPage,
                hasNextPage: request.posts.pageInfo.hasNextPage,
                endCursor: request.posts.pageInfo.endCursor
            },
            seo: {
                metaTitle: request.page.seo.title,
                metaDescription: request.page.seo.description,
                ogTitle: request.page.seo.openGraph.title,
                ogDescription: request.page.seo.openGraph.description
            }
        };
        return response;
    }
    catch (err) {
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);
  }
}
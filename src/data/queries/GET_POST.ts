import WordpressGQL from "@/lib/configs/WordpressGQL";
import { downgradeToHttp } from "@/lib/functions";
import transformBlocks from "@/lib/functions/transformBlocks";
import { gql } from "graphql-request";

const query = gql`
query PostPage {
  post(id: "specjalista-seo-kim-jest", idType: SLUG) {
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
    categories(first: 1) {
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
        sourceUrl(size: _1536X1536)
        title(format: RENDERED)
      }
    }
    title(format: RENDERED)
     tags(first: 40) {
      nodes {
        name
        uri
      }
    }
    postpage {
      introduction
    }
    author {
      node {
        name
        userfields {
          image {
            node {
              altText
              sourceUrl(size: MEDIUM)
              title(format: RENDERED)
            }
          }
          occupation
        }
      }
    }
    seo {
      title
      description
      canonicalUrl
      openGraph {
        articleMeta {
          modifiedTime
          publishedTime
          section
          tags
        }
        description
        title
        slackEnhancedData {
          data
          label
        }
      }
    }
  }
}
`


export default async function GET_POST() {
  try {
    const { post }: PostPageRequest = await WordpressGQL.request(query);
    const img = post.featuredImage;
    console.log(`img`, img)
    const response: PostPageResponse = {
      page: {
        blocks: transformBlocks(post.blocks ?? []),
        category: {
          label: post.categories.nodes[0].name,
          uri: post.categories.nodes[0].uri
        },
        author: {
          image: {
            alt: post.author.node.userfields.image.node.altText,
            src: downgradeToHttp(post.author.node.userfields.image.node.sourceUrl),
            title: post.author.node.userfields.image.node.title
          },
          name: post.author.node.name,
          occupation: post.author.node.userfields.occupation
        },
        date: post.date,
        excerpt: post.excerpt,
        tags: post.tags.nodes.map(({ name, uri }) => {
          return {
            label: name,
            uri
          }
        }),
        title: post.title,
        image: {
          alt: post.featuredImage !== null ? post.featuredImage.node.altText : '',
          src: post.featuredImage !== null ? downgradeToHttp(post.featuredImage.node.sourceUrl) : 'https://images.pexels.com/photos/2693208/pexels-photo-2693208.png',
          title: post.featuredImage !== null ? post.featuredImage.node.title : ''
        },
        introduction: post.postpage.introduction,
        readingTime: '3 min'
      },
      seo: {
        canonical: post.seo.canonicalUrl,
        metaDescription: post.seo.description,
        metaTitle: post.seo.title,
        ogDescription: post.seo.openGraph.description,
        ogTitle: post.seo.openGraph.title,
      }
    }
    return response;
  }
  catch (err) {
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);
  }
}
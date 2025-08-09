import WordpressGQL from "@/lib/configs/WordpressGQL";
import transformBlocks from "@/lib/functions/transformBlocks";
import { gql } from "graphql-request";

const query = gql`
query IndustryPage {
  industry(id: "gastronomia", idType: SLUG){
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
    title
    seo {
      title
      description
      openGraph {
        description
        title
      }
    }
  }
}
`

export default async function GET_INDUSTRY_PAGE(slug:string){
    try {
        const {industry}: IndustryPageRequest = await WordpressGQL.request(query, { slug });

        const response: IndustryPageResponse = {
            page:{
                title:industry.title,
                blocks:transformBlocks(industry.blocks ?? [])
            },
            seo:{
                metaTitle: industry.seo.title,
                metaDescription: industry.seo.description,
                ogTitle: industry.seo.openGraph.title,
                ogDescription: industry.seo.openGraph.description
            }
        }

        return response;

    }catch (err){
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);

    }
}
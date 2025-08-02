import WordpressGQL from "@/lib/configs/WordpressGQL";
import { gql } from "graphql-request";

const query = gql`
query Posts {
  posts {
    nodes {
      categories(first: 1) {
        nodes {
          name
          uri
          slug
        }
      }
      date
      excerpt(format: RENDERED)
      featuredImage {
        node {
          altText
          sourceUrl(size: MEDIUM_LARGE)
          title(format: RENDERED)
        }
      }
      title(format: RENDERED)
      uri
      seo {
        openGraph {
          slackEnhancedData {
            label
            data
          }
        }
      }
    }
  }
}
`


type request = {
    posts: {
        nodes: Array<{
            categories: {
                nodes: Array<{
                    name: string;
                    uri: string;
                    slug: string;
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
            seo: {
                openGraph: {
                    slackEnhancedData: Array<{
                        label: string;
                        data: string;
                    }>
                }
            }
        }>
    }
}

type response = Array<{
    category: T_Link;
    date: string;
    excerpt: string;
    image: T_Image;
    title: string;
    uri: string;
    readingTime: string;
}>


export default async function GET_POSTS() {
    try {
        const request: request = await WordpressGQL.request(query);
        const response: response = request.posts.nodes.map(({ categories, date, excerpt, featuredImage, seo: { openGraph: { slackEnhancedData } }, title, uri }) => {
            return {
                category: {
                    label: categories.nodes[0].name,
                    uri: categories.nodes[0].uri,
                },
                date: date,
                excerpt,
                image: {
                    alt: featuredImage.node.altText,
                    src: featuredImage.node.sourceUrl,
                    title: featuredImage.node.title
                },
                readingTime: `3 minuty`,
                title,
                uri
            }
        })
        return response;
    }
    catch (err) {
        throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);
    }
}
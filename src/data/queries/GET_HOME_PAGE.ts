import { gql } from "graphql-request";

import WordpressGQL from "@/lib/configs/WordpressGQL";

const query = gql`
query HomePage {
  page(id: "/", idType: URI) {
    title(format: RENDERED)
    seo {
      title
      description
      openGraph {
        title
        description
      }
    }
    homepage {
      about {
        title
        subtitle
        image {
          node {
            altText
            title(format: RENDERED)
            sourceUrl(size: THUMBNAIL)
          }
        }
        content
        chat {
          bubble
        }
        button {
          target
          title
          url
        }
      }
      blog {
        button {
          target
          title
          url
        }
        content
        posts {
          nodes {
            ... on Post {
              id
              excerpt(format: RENDERED)
              date
              featuredImage {
                node {
                  altText
                  sourceUrl(size: THUMBNAIL)
                  title(format: RENDERED)
                }
              }
              seo {
                seoScore {
                  badgeHtml
                  hasFrontendScore
                  rating
                  score
                }
                openGraph {
                  slackEnhancedData {
                    data
                    label
                  }
                }
              }
              title(format: RENDERED)
              uri
            }
          }
        }
        title
        subtitle
      }
      hero {
        content
        movie {
          node {
            mediaType
            sourceUrl(size: LARGE)
          }
        }
        subtitle
        title
      }
      industries {
        content
        title
        list_of_industries {
          industry {
            target
            title
            url
          }
        }
      }
      offer {
        title
        content
        button {
          url
          title
          target
        }
        cards {
          subservices {
            subservice {
              url
              target
              title
            }
          }
          title
          fieldGroupName
          content
        }
      }
      partners {
        title
        list {
          link {
            url
            title
            target
          }
          image {
            node {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              title(format: RENDERED)
            }
          }
        }
      }
      projects {
        title
        subtitle
        content
      }
    }
  }
}
`
const GET_HOME_PAGE = async () => {
  try {
    const data = await WordpressGQL.request(query);
    return data;
  } catch (error: any) {
    console.error("GraphQL Error:", error);
    // Możesz też zwrócić częściowe dane lub null:
    return error?.response?.data ?? null;
  }
};

export default GET_HOME_PAGE


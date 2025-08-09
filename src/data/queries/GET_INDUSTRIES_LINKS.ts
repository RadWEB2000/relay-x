import WordpressGQL from "@/lib/configs/WordpressGQL";
import { gql } from "graphql-request";

const query = gql`
    query INDUSTRIES_LINKS {
    industries(first: 999999999) {
        nodes {
        slug
        uri
        }
    }
    }
`

export default async function GET_INDUSTRIES_LINKS(){
    try {
        const {industries}: IndustriesLinksRequest = await WordpressGQL.request(query);

        const response: IndustriesLinksResponse = {

            industries:industries.nodes.map(({slug,uri}) => {
            return {
                slug,uri
            }
        })
        }

        return response;

    }catch (err){
    throw new Error(`❌ Błąd przy pobieraniu danych GET_POSTS: ${err}`);

    }
}
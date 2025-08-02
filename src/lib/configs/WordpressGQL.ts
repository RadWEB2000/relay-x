import { WP_API_KEY } from "@/data/static/constants";
import { GraphQLClient } from "graphql-request";

const WordpressGQL = new GraphQLClient(WP_API_KEY, {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${WP_API_KEY}`,
    },
})


export default WordpressGQL;
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

export const graphqlGetData = async (query, variables) => {
  const client = new ApolloClient({
    uri: "http://sudo-appli-1sm9v2n49w2v4-1553770535.us-east-1.elb.amazonaws.com/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`${query}`,
    variables
  });

  return data;
}

export default graphqlGetData;
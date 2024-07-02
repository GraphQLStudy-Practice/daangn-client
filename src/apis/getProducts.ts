import { graphql } from "react-relay";

const getProducts = graphql`
  query getProductsQuery {
    products {
      id
      title
      imageUrl
      price
      location
    }
  }
`;

export default getProducts;

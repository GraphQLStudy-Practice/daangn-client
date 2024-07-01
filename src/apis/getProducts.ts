import { graphql } from "react-relay";

const getProducts = graphql`
  query getProductsQuery {
    products {
      id
      title
      imageUrl
      price
      location
      uploadDate
    }
  }
`;

export default getProducts;

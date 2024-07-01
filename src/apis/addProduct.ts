import { graphql } from "react-relay";

const addProduct = graphql`
  mutation addProductMutation($input: AddProductInput!) {
    addProduct(input: $input) {
      id
      title
      imageUrl
      price
      location
      uploadDate
    }
  }
`;

export default addProduct;

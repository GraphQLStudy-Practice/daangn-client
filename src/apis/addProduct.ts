import { graphql } from "react-relay";

const addProduct = graphql`
  mutation addProductMutation(
    $title: String
    $imageUrl: String
    $price: Int
    $location: String
  ) {
    addProduct(
      title: $title
      imageUrl: $imageUrl
      price: $price
      location: $location
    ) {
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

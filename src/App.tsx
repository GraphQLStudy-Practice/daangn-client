import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./views/MainPage";
import AddPage from "./views/AddPage";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "3.39.54.196:8080/graphql",
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query Products {
          products {
            id
            title
            imageUrl
            price
            location
            uploadDate
          }
        }
      `,
    })
    .then((result) => console.log(result));

  const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    { path: "/add", element: <AddPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

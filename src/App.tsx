import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./views/MainPage";
import AddPage from "./views/AddPage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    { path: "/add", element: <AddPage /> },
  ]);

  const client = new ApolloClient({
    uri: "http://3.39.54.196:8080/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;

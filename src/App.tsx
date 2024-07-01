import { RelayEnvironmentProvider } from "react-relay";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import environment from "./RelayEnvironment";
import AddPage from "./views/AddPage";
import MainPage from "./views/MainPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    { path: "/add", element: <AddPage /> },
  ]);

  // const client = new ApolloClient({
  //   uri: "http://3.39.54.196:8080/graphql",
  //   cache: new InMemoryCache(),
  // });

  return (
    // <ApolloProvider client={client}>
    <RelayEnvironmentProvider environment={environment}>
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
    // </ApolloProvider>
  );
}

export default App;

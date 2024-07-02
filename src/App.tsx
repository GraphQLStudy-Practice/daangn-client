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

  return (
    <RelayEnvironmentProvider environment={environment}>
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  );
}

export default App;

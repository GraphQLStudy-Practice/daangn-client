import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./views/MainPage";
import AddPage from "./views/AddPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    { path: "/add", element: <AddPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

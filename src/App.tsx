import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { ErrorPage } from "./pages";

// Routes for the App
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

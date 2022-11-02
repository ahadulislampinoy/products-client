import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProducts from "./components/AddProducts";
import Home from "./components/Home";
import ManageProducts from "./components/ManageProducts";
import UpdateProduct from "./components/UpdateProduct";
import Root from "./layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "addProducts", element: <AddProducts /> },
      {
        path: "manageProducts",
        element: <ManageProducts />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/updateProducts/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;

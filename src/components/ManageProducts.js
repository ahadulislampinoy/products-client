import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const ManageProducts = () => {
  const products = useLoaderData();
  const [allProducts, setAllProducts] = useState(products);

  const handleDelete = (id, name) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "delete",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const confirmation = window.confirm(
          `Are sure you want to delete product: ${name}`
        );
        if (confirmation) {
          const remainingProducts = allProducts.filter(
            (product) => product._id !== id
          );
          setAllProducts(remainingProducts);
          toast.success("Product deleted");
        }
      });
  };

  return (
    <div className="text-white max-w-2xl mx-auto bg-gray-700 rounded mt-12">
      <ul className="flex flex-col divide divide-y">
        {allProducts.map((product) => (
          <li key={product._id} className="flex flex-row">
            <div className="select-none flex flex-1 items-center p-6 justify-between">
              <div className="flex flex-col">
                <h1 className="font-medium text-2xl">{product.name}</h1>
                <p className="text-base">Quantity:{product.quantity}</p>
              </div>
              <div className="text-lg font-medium">${product.price}</div>
              <div>
                <Link to={`/updateProducts/${product._id}`}>
                  <button
                    type="button"
                    className="px-4 py-3 font-semibold rounded bg-gray-500 text-gray-50"
                  >
                    Update
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(product._id)}
                  type="button"
                  className="px-4 py-3 font-semibold rounded ml-4 bg-rose-500 text-gray-50"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;

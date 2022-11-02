import React from "react";
import toast from "react-hot-toast";

const AddProducts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
    };
    // Post data to database
    fetch(`http://localhost:5000/products`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          e.target.reset();
          toast.success("Product Added!");
        }
      });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-800 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
          Add new product!
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6"
      >
        <div className="flex flex-col">
          <label
            className="text-sm font-bold text-gray-600 mb-1"
            htmlFor="name"
          >
            Product Name
          </label>
          <input
            className="border rounded-md bg-white px-3 py-2"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your product name"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-sm font-bold text-gray-600 mb-1"
            htmlFor="price"
          >
            Product Price
          </label>
          <input
            className="border rounded-md bg-white px-3 py-2"
            type="text"
            name="price"
            id="price"
            placeholder="Enter your product price"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-sm font-bold text-gray-600 mb-1"
            htmlFor="quantity"
          >
            Product Quantity
          </label>
          <input
            className="border rounded-md bg-white px-3 py-2"
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Enter your product quantity"
          />
        </div>

        <div>
          <button className="w-full bg-gray-600 text-white rounded-md p-2">
            Add product
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddProducts;

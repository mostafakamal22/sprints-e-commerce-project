import { LockClosedIcon } from "@heroicons/react/outline";
import React, { useContext, useState } from "react";
import StoreContext from "../../../context/store/StoreContext";
import Spinner from "../Spinner";

/**
 *   to use the form you must provide an onSubmit func to run once the form is submitted
 *   and if you want the form to have pre filled data provide it as initStates prope
 */

const ImagesForm = ({ onSubmit }) => {
  const { setLoading, store } = useContext(StoreContext);

  const [imageName, setImageName] = useState("");
  const [productId, setProuctId] = useState(0);

  // runs the onSubmit func provided as a prope giving it all the state so you can use it
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formStates = {
      id: 0,
      imageName,
      productId,
    };
    onSubmit(formStates);
    setLoading(false);
  };

  return (
    <div>
      <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div>
          <label htmlFor="imageName" className="sr-only">
            Image Link
          </label>
          <input
            id="imageName"
            name="imageName"
            type="text"
            required
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="image link"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="productId" className="sr-only">
            Product Id
          </label>
          <input
            id="productId"
            name="productId"
            type="number"
            required
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            value={productId}
            onChange={(e) => setProuctId(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          {store.loading ? (
            <button
              disabled
              type="submit"
              className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Spinner />
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Please wait
            </button>
          ) : (
            <button
              type="submit"
              className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ImagesForm;

import { LockClosedIcon } from "@heroicons/react/outline";
import React, { useContext, useState } from "react";
import StoreContext from "../../../context/store/StoreContext";
import Upload from "../../../firebase/upload";
import Spinner from "../Spinner";

/**
 *   to use the form you must provide an onSubmit func to run once the form is submitted
 *   and if you want the form to have pre filled data provide it as initStates prope
 */

const ImagesForm = ({ onSubmit, initStates }) => {
  const { store } = useContext(StoreContext);

  const [imageURL, setImageURL] = useState(initStates ? initStates.imageURL : '');
  const [productURL, setProductURL] = useState(initStates ? initStates.productURL : '');
  const [isActive, setIsActive] = useState(initStates ? initStates.isActive : false);

  // runs the onSubmit func provided as a prope giving it all the state so you can use it
  const handleSubmit = (e) => {
    e.preventDefault();
    const formStates = {
      id: initStates ? initStates.id : 0,
      imageURL,
      productURL,
      isActive,
    };
    onSubmit(formStates);
  };

  return (
    <div>
      <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div>
          <label htmlFor="productURL" className="sr-only">
            Product URL
          </label>
          <input
            id="productURL"
            name="productURL"
            type="text"
            required
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Product URL"
            value={productURL}
            onChange={(e) => setProductURL(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <Upload setImages={setImageURL} isEdit={initStates ? true : false} carousel={true} />
          <div className='flex justify-between items-center'>
            <label htmlFor="isActive" className="px-3">
              Is Active
            </label>
            <input
              id="isActive"
              name="isActive"
              type="checkbox"
              checked={isActive}
              className="placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm"
              placeholder="Select category"
              onChange={(e) => setIsActive(e.target.checked ? true : false)}
            >
            </input>
          </div>
        </div>

        <div className="flex justify-center">
          {store.loading ? (
            <button
              disabled
              type="submit"
              className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Please wait
            </button>
          ) : (
            <button
              type="submit"
              className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {initStates ? 'Save' : 'Add'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ImagesForm;

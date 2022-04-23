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
  const { setLoading, store } = useContext(StoreContext);

  const [image, setImage] = useState("");
  const [havelink, setHavelink] = useState(0);
  const [link, setLink] = useState(0);

  // runs the onSubmit func provided as a prope giving it all the state so you can use it
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formStates = {
      id: 0,
      image,
      havelink,
      link,
    };
    onSubmit(formStates);
    setLoading(false);
  };

  return (
    <div>
      <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div>
          <label htmlFor="image" className="sr-only">
            Image Name
          </label>
          <input
            id="image"
            name="image"
            type="text"
            required
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Image Name"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <Upload setCoverImage={setLink} isEdit={false} />
          <div className='flex justify-between items-center'>
            <label htmlFor="havelink" className="px-3">
              Is Showen
            </label>
            <input
              id="havelink"
              name="havelink"
              type="checkbox"
              checked={havelink === 1 ? true : false}
              className="placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm"
              placeholder="Select category"
              onChange={(e) => setHavelink(e.target.checked ? 1 : 0)}
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
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ImagesForm;

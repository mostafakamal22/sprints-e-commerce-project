import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import StoreContext from "../../../context/store/StoreContext";
import ImagesForm from "../../shared/forms/imagesForm";
import Spinner from "../../shared/Spinner";

const ImagesTool = () => {
  const { store, showModal, hideModal, setLoading, showToast } =
    useContext(StoreContext);

  const [images, setImages] = useState([]);
  // get all images from the DB
  const loadImages = async () => {
    setLoading(true);
    const config = {
      method: "get",
      url: "https://mina-jpp1.herokuapp.com/api/images",
    };
    axios(config).then((res) => {
      setImages(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // submit the add form
  const handleAddSubmit = async (formStates) => {
    const imageData = {
      imageName: formStates.imageName,
      productId: formStates.productId,
    };

    /* Send data to API to add new image to the product */
    const config = {
      method: "post",
      url: "https://mina-jpp1.herokuapp.com/api/images",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.auth.token}`,
      },
      data: imageData,
    };
    const res = await axios(config);
    console.log(res);
    hideModal();
    loadImages();
    setLoading(false);
  };

  // open the modal and fill it's content
  const modalAdd = () => {
    const Content = () => {
      return (
        <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Image to product
          </h3>
          <ImagesForm onSubmit={handleAddSubmit} />
        </div>
      );
    };

    showModal(Content);
  };

  return (
    <>
      {store.loading ? (
        <Spinner />
      ) : (
        <div className="grid place-items-center">
          <h1 className="text-left text-xl font-medium p-6 text-gray-700">
            Images Data
          </h1>
          <div className="max-w-2xl px-6">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="p-4 flex">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search image by product id"
                  />
                </div>
                <button
                  onClick={() => modalAdd()}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                >
                  <MdAdd size={30}></MdAdd> Add Image
                </button>
              </div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      User Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span>Edit or Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {images.map((image, i) => (
                    <tr
                      key={i}
                      className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {image.imageName}
                      </th>
                      <td className="px-6 py-4">{image.productId}</td>
                      <td className="px-6 py-4 flex max-w-fit">
                        <button
                          id={i}
                          /*onClick={(e) => modalEdit(e.currentTarget.id)}*/ className="group relative flex-grow flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                        >
                          <MdEdit />
                        </button>
                        <button
                          id={i}
                          /*onClick={(e) => handleDelete(e.currentTarget.id)}*/ className="group relative flex-grow flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:bg-rose-700"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagesTool;

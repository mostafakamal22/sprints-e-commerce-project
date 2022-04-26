import { useContext, useEffect, useState } from "react";
import StoreContext from "../context/store/StoreContext";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase/config";
import { MdOutlineClose, MdUpload } from "react-icons/md";
import ImageInput from "./ImageInput";

const Upload = ({ setImages, setLoading, carousel }) => {

  const { showToast } = useContext(StoreContext)

  const [image1, setimage1] = useState('')
  const [image2, setimage2] = useState('')
  const [image3, setimage3] = useState('')
  const [image4, setimage4] = useState('')
  const [image5, setimage5] = useState('')

  useEffect(() => {
    setImages([image1, image2, image3, image4, image5])
    console.log([image1, image2, image3, image4, image5]);
  }, [image1, image2, image3, image4, image5])

  if (!carousel) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3">
        <ImageInput id='image1' setImages={setimage1} />
        <ImageInput id='image2' setImages={setimage2} />
        <ImageInput id='image3' setImages={setimage3} />
        <ImageInput id='image4' setImages={setimage4} />
        <ImageInput id='image5' setImages={setimage5} />
      </div>
    )
  }

  return (
    <div>
      <ImageInput id='image' setImages={setImages} />
    </div>
  );
};

export default Upload;

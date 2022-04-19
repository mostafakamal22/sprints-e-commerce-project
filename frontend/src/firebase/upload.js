import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useContext, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { v4 as uuid } from 'uuid';
import StoreContext from "../context/store/StoreContext";
import { app } from './config'

const storage = getStorage();

const Upload = ({ setCoverImage, isEdit }) => {

    const { showToast, setLoading } = useContext(StoreContext)

    const [isRunning, setIsRunning] = useState(false)
    const [url, setURL] = useState('')
    const [progress, setProgress] = useState(0)

    const handleUpload = async (file) => {
        setLoading(true)

        // Upload file to the object 'images/fileName.jpeg'
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
                switch (snapshot.state) {
                    case 'paused':
                        setIsRunning(false)
                        return;
                    case 'running':
                        setIsRunning(true)
                        return;
                    default:
                        return;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        showToast(`User doesn't have permission to access the object`, false)
                        return;
                    case 'storage/canceled':
                        // User canceled the upload
                        showToast(`User canceled the upload`, false)
                        return;
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        showToast(`Unknown error occurred, inspect error.serverResponse`, false)
                        return;
                    default:
                        return;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setCoverImage(downloadURL)
                    setURL(downloadURL)
                    setIsRunning(false)
                    setLoading(false)
                });
            }
        );
    }


    return (
        <div className='w-1/2 grid place-items-center'>
            <label htmlFor="image" className={`flex items-center justify-between w-full py-2 px-4 text-sm font-medium rounded-md text-white ${isRunning ? 'bg-gray-600 hover:bg-gray-600' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none`}>
                {!isRunning ? 'Upload Image' : `Uploading... ${progress}%`} {url !== '' ? <MdCheckCircle></MdCheckCircle> : null}
            </label>
            <input
                id="image"
                name="image"
                type="file"
                required={!isEdit}
                disabled={isRunning}
                className="hidden"
                onChange={(e) => {
                    handleUpload(e.target.files[0])
                }}
            />
        </div>
    )
}

export default Upload
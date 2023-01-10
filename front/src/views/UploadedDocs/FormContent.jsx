import { createElement, useRef, useState, createRef, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Lucide, Alert } from "@/base-components";
import { getBaseApi } from "../../configuration";
import dom from "@left4code/tw-starter/dist/js/dom";

const token = localStorage.getItem("token");
import { useRecoilStateLoadable } from "recoil";
import { allUserListState } from "../../state/admin-atom";
const headers = {
  Authorization: `Bearer ${token}`,
  ContentType: "application/json",
};
function FormContent(props) {
  console.log("content", props.type);

  const conRef = createRef(props.type);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("Title");
  const [dismiss, setDismiss] = useState(false);
  const [filesData, setFilesState] = useRecoilStateLoadable(allUserListState);
  const [progress, setProgress] = useState(0);

  const handelTitle = (e) => {
    e.target.value;
    setTitle(e.target.value);

    console.log("Title", e.target.value);
  };

  const removeFile = (id) => {
    axios.post(
      getBaseApi() + "delete_file",
      { id: id },
      {
        headers,
      }
    );
  };

  const handelFileUpload = async (e) => {
    // console.log("title___", title);


    var titles = document.getElementById("title" + props.type + props.id).value;
  

    if (titles == "") {
      alert("Title Required !");
      return;
    }

    setFile(e.target.files[0]);

    const formData = new FormData(); // Update the formData object
    formData.append("file", e.target.files[0], "File Name"); // Details of the uploaded file
    formData.append("title", titles);
    formData.append("type", props.type);

    // (this.state.selectedFile); // Request made to the backend api // Send formData object
    try {
      const response = await axios.post(
        getBaseApi() + "file_upload",
        formData,
        {
          headers,
          onUploadProgress: (progressEvent) => {
            let percentComplete = progressEvent.loaded / progressEvent.total;
            percentComplete = parseInt(percentComplete * 100);
            setProgress(percentComplete);
          },
        }
      );
      //console.log(response);
      setFilesState(response?.data?.data);
    } catch (err) {
      setLoading(false);
    }

   
  };

  return (
    <div ref={conRef}>
      <div className="mb-3">
        <label htmlFor="vertical-form-1" className="form-label">
          Title
        </label>
        <input
          defaultValue=""
          type="text"
          className="form-control"
          id={"title" + props.type + props.id}
          placeholder="Passport"
        />
      </div>
      <div className="mb-3">
        <div className="flex items-center justify-center w-full">
          {progress !== 100 && (
            <label
              htmlFor={"dropzone-file" + props.type + props.id}
              className="flex flex-col items-center justify-center w-full h-54 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Lucide icon="UploadCloud" className="w-10 h-10" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Max File Size 25MB
                </p>
              </div>
              <input
                id={"dropzone-file" + props.type + props.id}
                onChange={handelFileUpload}
                type="file"
                className="hidden"
              />

              {progress > 0 && progress < 100 && (
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: progress + "%" }}
                  >
                    {progress}%
                  </div>
                </div>
              )}
            </label>
          )}

          {progress === 100 && (
            <Alert className="alert-secondary w-full flex items-center mb-2">
              File Uploaded Successfully
              <button
                type="button"
                className="btn-close text-black"
                aria-label="Close"
                onClick={(e) => removeFile(e)}
              >
                <Lucide icon="X" className="w-4 h-4" />
              </button>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

FormContent.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number,
};

FormContent.defaultProps = {
  type: "",
  id: "",
};

export default FormContent;

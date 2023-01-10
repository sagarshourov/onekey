import { Lucide, LoadingIcon, Modal, ModalBody } from "@/base-components";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { userFileListState } from "../../state/users-atom";

import { getBaseApi } from "../../configuration";

const token = localStorage.getItem("token");
import AttachmentTable from "./AttachmentTable";
import { useParams } from "react-router-dom";

const headers = {
  Authorization: `Bearer ${token}`,
  ContentType: "application/json",
};


const ViewAttachment = (props) => {
  let { id } = useParams();
  const [selectId, setSelectId] = useState(0);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const usersData = useRecoilState(userFileListState);
 
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Uploaded Docs</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <div className="hidden md:block mx-auto text-slate-500"></div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500"></div>
          </div>
        </div>
        {/* BEGIN: Data List */}

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          {usersData[0] && (
            <AttachmentTable
              setSelectId={setSelectId}
              setDeleteConfirmationModal={setDeleteConfirmationModal}
              users={usersData[0][id]}
            />
          )}
        </div>
        {/* END: Data List */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        show={deleteConfirmationModal}
        onHidden={() => {
          setDeleteConfirmationModal(false);
        }}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 text-danger mx-auto mt-3"
            />
            <div className="text-3xl mt-5">Are you sure?</div>
            <div className="text-slate-500 mt-2">
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button
              onClick={() => handelDelete(selectId)}
              type="button"
              className="btn btn-danger w-24"
            >
              Delete
              {loading && (
                <LoadingIcon
                  icon="three-dots"
                  color="white"
                  className="w-4 h-4 ml-2"
                />
              )}
            </button>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
};

export default ViewAttachment;

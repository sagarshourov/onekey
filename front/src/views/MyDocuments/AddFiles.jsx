import {
  Lucide,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalBody,
  TabGroup,
  Dropzone,
} from "@/base-components";
import { useRecoilStateLoadable, useRecoilState } from "recoil";
import FormContent from "./FormContent";

import { allUserListState } from "../../state/admin-atom";
import { adminFileListState } from "../../state/users-atom";

import { useEffect, useState, useRef } from "react";
const AddFiles = (props) => {
  const [usersData, setUserData] = useRecoilStateLoadable(allUserListState);

  const [fileState, setFileState] = useRecoilState(adminFileListState);

  const [personal, setPersoanl] = useState([{ id: 1 }]);
  const [education, setEducation] = useState([{ id: 1 }]);
  const [document, setDocument] = useState([{ id: 1 }]);

  const [selected, setSelected] = useState(0);

  const handelAddForm = (obj) => {
    let newVal = { id: 0 };

    if (obj == "personal") {
      setPersoanl([...personal, newVal]);
      setSelected(0);
    } else if (obj == "education") {
      setEducation([...education, newVal]);
      setSelected(1);
    } else if (obj == "document") {
      setDocument([...document, newVal]);
      setSelected(2);
    }
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Add New Documents</h2>

      <div className="intro-y  mt-12 sm:mt-4">
        <div className=" py-0 xl:py-5 grid grid-cols-12 gap-0 divide-y xl:divide-y-0 divide-x divide-dashed ">
          <div className="report-box__item p-5  col-span-12 ">
            <div className="grid xs:grid-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-2 place-items-center ">
              {usersData.state === "hasValue" &&
                Object.keys(document).map((keyName, i) => (
                  <FormContent
                    setFileState={setFileState}
                    key={i}
                    usersData={usersData.contents}
                    type="5"
                  />
                ))}

              <button
                onClick={() => handelAddForm("document")}
                className="btn btn-primary mt-5 p-5 "
              >
                <Lucide icon="Plus" className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFiles;

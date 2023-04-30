import {
  Lucide,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabGroup,
} from "@/base-components";

import FormContent from "./FormContent";

import { useState } from "react";
const AddFiles = (props) => {


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
          <div className="report-box__item py-5 xl:py-0 px-5 col-span-12 ">
            <TabGroup selectedIndex={selected}>
              <TabList className="nav-tabs">
                <Tab className="w-full py-4" tag="button">
                  Personal Document
                </Tab>
                <Tab className="w-full py-4" tag="button">
                  Education Document{" "}
                </Tab>

                <Tab className="w-full py-4" tag="button">
                  Other Document
                </Tab>
              </TabList>
              <TabPanels className="border-l bg-white dark:bg-bg-white/5 border-r border-b">
                <TabPanel className="leading-relaxed p-5 ">
                  <div className="grid xs:grid-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-2 place-items-center ">
                    {Object.keys(personal).map((keyName, i) => (
                      <FormContent type="3" id={i} key={i} />
                    ))}

                    <button
                      onClick={() => handelAddForm("personal")}
                      className="btn btn-primary mt-5 p-5 "
                    >
                      <Lucide icon="Plus" className="w-10 h-10" />
                    </button>
                  </div>

                  {/* <div className="flex justify-center ">
                    <button className="btn btn-primary mt-5">Save</button>
                  </div> */}
                </TabPanel>
                <TabPanel className="leading-relaxed p-5">
                  <div className="grid xs:grid-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-2 place-items-center ">
                    {Object.keys(education).map((keyName, i) => (
                      <FormContent type="4" id={i} key={i} />
                    ))}

                    <button
                      onClick={() => handelAddForm("education")}
                      className="btn btn-primary mt-5 p-5 "
                    >
                      <Lucide icon="Plus" className="w-10 h-10" />
                    </button>
                  </div>
                </TabPanel>
                <TabPanel className="leading-relaxed p-5">
                  <div className="grid xs:grid-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-2 place-items-center ">
                    {Object.keys(document).map((keyName, i) => (
                      <FormContent key={i} id={i} type="5" />
                    ))}

                    <button
                      onClick={() => handelAddForm("document")}
                      className="btn btn-primary mt-5 p-5 "
                    >
                      <Lucide icon="Plus" className="w-10 h-10" />
                    </button>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFiles;

import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@/base-components";

const  UserMain =() =>{
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-8">
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-6">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Recent Activities
              </h2>
            </div>
            <div className="intro-y report-box mt-12 sm:mt-4">
              <div className="box py-0 xl:py-5 grid grid-cols-12 gap-0 divide-y xl:divide-y-0 divide-x divide-dashed divide-slate-200 dark:divide-white/5">
                <div className="report-box__item py-5 xl:py-0 px-5 col-span-12 ">
                  <h3 className="text-lg py-3 mb-4">Student Information</h3>
                  <div>
                    <label htmlFor="vertical-form-1" className="form-label">
                      SEVIS ID number
                    </label>

                    <div className="input-group w-full">
                      <div className="input-group-text">
                        <Lucide icon="Code" className="w-4 h-4 mt-2" />
                      </div>
                      <input
                        type="text"
                        className=" py-4 form-control"
                        placeholder=""
                        disabled
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="vertical-form-1" className="form-label">
                      Interview
                    </label>

                    <div className="input-group w-full">
                      <div className="input-group-text">
                        <Lucide icon="Calendar" className="w-4 h-4 mt-2" />
                      </div>
                      <input
                        type="text"
                        className=" py-4 form-control"
                        placeholder=""
                        disabled
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="vertical-form-1" className="form-label">
                      University / Institution
                    </label>

                    <div className="input-group w-full">
                      <div id="input-group-email" className="input-group-text">
                        <Lucide icon="Home" className="w-4 h-4 mt-2" />
                      </div>
                      <input
                        type="text"
                        className=" py-4 form-control"
                        placeholder=""
                        disabled
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="vertical-form-1" className="form-label">
                      Visa Type Status
                    </label>

                    <div className="input-group w-full">
                      <div id="input-group-email" className="input-group-text">
                      <Lucide icon="Info" className="w-5 h-4 mt-2" />
                      </div>
                      <input
                        type="text"
                        className=" py-4 form-control"
                        placeholder=""
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
        </div>
      </div>
      <div className="col-span-12 2xl:col-span-4">
        <div className="2xl:border-l border-slate-300/50 h-full 2xl:pt-6 pb-6">
          <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 gap-y-8">
            {/* BEGIN: Attachments */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="mt-4">
                <div className="intro-x">
                  <div className="file box px-5 py-5 mb-3 flex items-center">
                    
                    <div className="ml-5 mr-auto">
                      <h1 className="font-large">Sagar Roy</h1>
                      <div className="text-slate-500 text-xs mt-1">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMain;

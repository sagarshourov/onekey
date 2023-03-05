

import { useState } from "react";


function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState();
  const [salesReportFilter, setSalesReportFilter] = useState();

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          {/* <div className="col-span-12 mt-6">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                General Report
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <Lucide
                  icon="Calendar"
                  className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                />
                <Litepicker
                  value={generalReportFilter}
                  onChange={setGeneralReportFilter}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="form-control sm:w-56 box pl-10"
                />
              </div>
            </div>
            <div className="intro-y report-box mt-12 sm:mt-4">
              <div className="box py-0 xl:py-5 grid grid-cols-12 gap-0 divide-y xl:divide-y-0 divide-x divide-dashed divide-slate-200 dark:divide-white/5">
                <div className="report-box__item py-5 xl:py-0 px-5 col-span-12 sm:col-span-6 xl:col-span-3">
                  <div className="report-box__content">
                    <div className="flex">
                      <div className="report-box__item__icon text-primary bg-primary/20 border border-primary/20 flex items-center justify-center rounded-full">
                        <Lucide icon="PieChart" />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__item__indicator text-success cursor-pointer"
                          content="5.2% Higher than last month"
                        >
                          +5.2%
                          <Lucide icon="ArrowUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-2xl font-medium leading-7 mt-6">
                      $149,300
                    </div>
                    <div className="text-slate-500 mt-1">Total Assets</div>
                  </div>
                </div>
                <div className="report-box__item py-5 xl:py-0 px-5 sm:!border-t-0 col-span-12 sm:col-span-6 xl:col-span-3">
                  <div className="report-box__content">
                    <div className="flex">
                      <div className="report-box__item__icon text-pending bg-pending/20 border border-pending/20 flex items-center justify-center rounded-full">
                        <Lucide icon="CreditCard" />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__item__indicator text-danger cursor-pointer"
                          content="2% Lower than last month"
                        >
                          -2%
                          <Lucide icon="ArrowDown" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-2xl font-medium leading-7 mt-6">
                      5.241
                    </div>
                    <div className="text-slate-500 mt-1">New Transactions</div>
                  </div>
                </div>
                <div className="report-box__item py-5 xl:py-0 px-5 col-span-12 sm:col-span-6 xl:col-span-3">
                  <div className="report-box__content">
                    <div className="flex">
                      <div className="report-box__item__icon text-warning bg-warning/20 border border-warning/20 flex items-center justify-center rounded-full">
                        <Lucide icon="ShoppingBag" />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__item__indicator text-success cursor-pointer"
                          content="4.1% Higher than last month"
                        >
                          +4.1%
                          <Lucide icon="ArrowDown" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-2xl font-medium leading-7 mt-6">
                      1.405
                    </div>
                    <div className="text-slate-500 mt-1">New Products</div>
                  </div>
                </div>
                <div className="report-box__item py-5 xl:py-0 px-5 col-span-12 sm:col-span-6 xl:col-span-3">
                  <div className="report-box__content">
                    <div className="flex">
                      <div className="report-box__item__icon text-success bg-success/20 border border-success/20 flex items-center justify-center rounded-full">
                        <Lucide icon="HardDrive" />
                      </div>
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__item__indicator text-danger cursor-pointer"
                          content="1% Lower than last month"
                        >
                          -1%
                          <Lucide icon="ArrowDown" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-2xl font-medium leading-7 mt-6">
                      2.034
                    </div>
                    <div className="text-slate-500 mt-1">New Stores</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* END: General Report */}
         
       
        </div>
      </div>
      <div className="col-span-12 2xl:col-span-3">
        <div className="2xl:border-l border-slate-300/50 h-full 2xl:pt-6 pb-6">
          <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 gap-y-8">
            {/* BEGIN: Attachments */}
            {/* <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Shared Files
                </h2>
                <a href="" className="ml-auto text-slate-500 truncate">
                  View More
                </a>
              </div>
              <div className="mt-4">
                <div className="intro-x">
                  <div className="file box px-5 py-3 mb-3 flex items-center">
                    <div className="w-12 file__icon file__icon--directory"></div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Documentation.pdf</div>
                      <div className="text-slate-500 text-xs mt-1">
                        1 KB Document File
                      </div>
                    </div>
                    <Dropdown>
                      <DropdownToggle className="w-5 h-5 text-slate-500">
                        <Lucide icon="MoreVertical" className="w-4 h-4" />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                            Link
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="file box px-5 py-3 mb-3 flex items-center">
                    <div className="w-12 file__icon file__icon--file"></div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Rocketman.xd</div>
                      <div className="text-slate-500 text-xs mt-1">
                        20 MB Audio File
                      </div>
                    </div>
                    <Dropdown>
                      <DropdownToggle className="w-5 h-5 text-slate-500">
                        <Lucide icon="MoreVertical" className="w-4 h-4" />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                            Link
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="file box px-5 py-3 mb-3 flex items-center">
                    <div className="w-12 file__icon file__icon--empty-directory"></div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Latest Report.xls</div>
                      <div className="text-slate-500 text-xs mt-1">
                        20 KB Zipped File
                      </div>
                    </div>
                    <Dropdown>
                      <DropdownToggle className="w-5 h-5 text-slate-500">
                        <Lucide icon="MoreVertical" className="w-4 h-4" />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                            Link
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

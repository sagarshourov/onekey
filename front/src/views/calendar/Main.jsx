import {
  Lucide,
  FullCalendarDraggable,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@/base-components";
import Calendar from "@/components/calendar/Main";
import dom from "@left4code/tw-starter/dist/js/dom";

function Main() {
  const dragableOptions = {
    itemSelector: ".event",
    eventData(eventEl) {
      return {
        title: dom(eventEl).find(".event__title").html(),
        duration: {
          days: parseInt(dom(eventEl).find(".event__days").text()),
        },
      };
    },
  };

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Calendar</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">
            <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Event Reports
          </button>
          <button className="btn box">
            <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Calendar Side Menu */}
        <TabGroup className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div className="box p-2 intro-y">
            <TabList className="nav-pills">
              <Tab className="w-full py-2" tag="button">
                Event List
              </Tab>
              <Tab className="w-full py-2" tag="button">
                Add New Event
              </Tab>
            </TabList>
          </div>
          <TabPanels className="mt-5 intro-y">
            <TabPanel>
              <FullCalendarDraggable
                id="calendar-events"
                options={dragableOptions}
                className="h-[820px] overflow-y-auto scrollbar-hidden"
              >
                <div className="event box p-5 cursor-pointer mt-5 first:mt-0">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                    <div className="event__title font-medium truncate">
                      VueJs Amsterdam
                    </div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 text-slate-500 ml-auto"
                    />
                  </div>
                  <div className="border-b border-t border-slate-200/60 dark:border-darkmode-400 py-5 my-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      02 February 2022
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      <span className="event__days mr-1">2</span> Days
                      <span className="mx-1">•</span> 09.00 AM - 04.00 PM
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                  </div>
                  <div className="flex">
                    <button className="btn btn-outline-secondary py-1 px-2">
                      <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                      Reschedule
                    </button>
                    <button className="btn btn-outline-secondary py-1 px-2 ml-auto">
                      <Lucide icon="UserX" className="w-4 h-4 mr-2" /> Cancel
                    </button>
                  </div>
                </div>
                <div className="event box p-5 cursor-pointer mt-5 first:mt-0">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <div className="event__title font-medium truncate">
                      Vue Fes Japan 2022
                    </div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 text-slate-500 ml-auto"
                    />
                  </div>
                  <div className="border-b border-t border-slate-200/60 dark:border-darkmode-400 py-5 my-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      24 March 2022
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      <span className="event__days mr-1">3</span> Days
                      <span className="mx-1">•</span> 09.00 AM - 04.00 PM
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                  </div>
                  <div className="flex">
                    <button className="btn btn-outline-secondary py-1 px-2">
                      <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                      Reschedule
                    </button>
                    <button className="btn btn-outline-secondary py-1 px-2 ml-auto">
                      <Lucide icon="UserX" className="w-4 h-4 mr-2" /> Cancel
                    </button>
                  </div>
                </div>
                <div className="event box p-5 cursor-pointer mt-5 first:mt-0">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    <div className="event__title font-medium truncate">
                      Laracon 2022
                    </div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 text-slate-500 ml-auto"
                    />
                  </div>
                  <div className="border-b border-t border-slate-200/60 dark:border-darkmode-400 py-5 my-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      24 March 2022
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      <span className="event__days mr-1">4</span> Days
                      <span className="mx-1">•</span> 09.00 AM - 04.00 PM
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                  </div>
                  <div className="flex">
                    <button className="btn btn-outline-secondary py-1 px-2">
                      <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                      Reschedule
                    </button>
                    <button className="btn btn-outline-secondary py-1 px-2 ml-auto">
                      <Lucide icon="UserX" className="w-4 h-4 mr-2" /> Cancel
                    </button>
                  </div>
                </div>
                <div className="event box p-5 cursor-pointer mt-5 first:mt-0">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                    <div className="event__title font-medium truncate">
                      VueJs Japan
                    </div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 text-slate-500 ml-auto"
                    />
                  </div>
                  <div className="border-b border-t border-slate-200/60 dark:border-darkmode-400 py-5 my-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      10 December 2022
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      <span className="event__days mr-1">2</span> Days
                      <span className="mx-1">•</span> 09.00 AM - 04.00 PM
                    </div>
                    <div className="flex items-center mt-3">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 text-slate-500 mr-2"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                  </div>
                  <div className="flex">
                    <button className="btn btn-outline-secondary py-1 px-2">
                      <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                      Reschedule
                    </button>
                    <button className="btn btn-outline-secondary py-1 px-2 ml-auto">
                      <Lucide icon="UserX" className="w-4 h-4 mr-2" /> Cancel
                    </button>
                  </div>
                </div>
              </FullCalendarDraggable>
            </TabPanel>
            <TabPanel>
              <div className="box p-5">
                <div>
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="form-control w-full"
                    placeholder="Event title"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    id="date"
                    type="text"
                    className="datepicker form-control w-full"
                    data-single-mode="true"
                    placeholder="Event title"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="time" className="form-label">
                    Time
                  </label>
                  <input
                    id="time"
                    type="text"
                    className="form-control w-full"
                    placeholder="Event title"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <textarea
                    id="location"
                    className="form-control w-full"
                  ></textarea>
                </div>
                <button type="button" className="btn btn-primary w-full mt-5">
                  Save
                </button>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        {/* END: Calendar Side Menu */}
        {/* BEGIN: Calendar Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="box p-5">
            <Calendar />
          </div>
        </div>
        {/* END: Calendar Content */}
      </div>
    </>
  );
}

export default Main;

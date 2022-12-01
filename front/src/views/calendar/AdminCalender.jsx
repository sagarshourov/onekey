import {
  Lucide,
  FullCalendarDraggable,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Litepicker,
  TomSelect,
  Alert,
} from "@/base-components";
import Calendar from "@/components/calendar/Main";
import { LoadingIcon } from "@/base-components";
import dom from "@left4code/tw-starter/dist/js/dom";
import axios from "axios";
import { getAdmin } from "../../configuration";
import { useState } from "react";

import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { eventListState } from "../../state/events-atom";

const Events = (props) => {
  const [eventDatas, setEventState] = useRecoilStateLoadable(eventListState);

  const [date, setDate] = useState("");
  const [select, setSelect] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handelSave = async () => {
    if (select == "") {
      alert("Select user !");

      return false;
    }

    if (notes == "") {
      alert("Notes required !");

      return false;
    }

    setLoading(true);
    setSuccess(false);
    const LOGIN_URL = getAdmin() + "save_event";
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };
    try {
      const response = await axios.post(
        LOGIN_URL,
        { user_id: select, date: date, notes: notes },
        {
          headers,
        }
      );

      if (response.data.success) {
        setNotes("");
        setSelect("");
        setSuccess(true);
        setLoading(false);
      }

      //  console.log(response.data);

      // window.location.reload();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Users Events List</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0"></div>
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
                className="h-[820px] overflow-y-auto scrollbar-hidden"
              >
                {eventDatas.state === "hasValue" &&
                  eventDatas.contents.events.map((event, key) => {
                    return (
                      <div
                        key={key}
                        className="event box p-5 cursor-pointer mt-5 first:mt-0"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                          <div className="event__title font-medium truncate">
                            {event.users && event.users.first_name}
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
                            {event.note_date && event.note_date}
                          </div>

                          <div className="flex items-center mt-3">
                            <Lucide
                              icon="Map"
                              className="w-4 h-4 text-slate-500 mr-2"
                            />
                            {event.notes && event.notes}
                          </div>
                        </div>
                        <div className="flex">
                          <button className="btn btn-outline-secondary py-1 px-2 ml-auto">
                            <Lucide icon="UserX" className="w-4 h-4 mr-2" />{" "}
                            Cancel
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </FullCalendarDraggable>
            </TabPanel>
            <TabPanel>
              <div className="box p-5">
                <div className="mt-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <Litepicker
                    value={date}
                    onChange={setDate}
                    options={{
                      format: "YYYY-MM-DD",
                      autoApply: false,
                      showWeekNumbers: true,
                      dropdowns: {
                        minYear: 1990,
                        maxYear: null,
                        months: true,
                        years: true,
                      },
                    }}
                    className="form-control w-full block mx-auto"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="time" className="form-label">
                    Users
                  </label>
                  {eventDatas.state == "hasValue" && (
                    <select
                      onChange={(e) => setSelect(e.target.value)}
                      className="form-control"
                    >
                      <option>Select..</option>
                      {eventDatas.contents.users.map((user, index) => (
                        <option key={index} value={user.id}>
                          {user.first_name} ({user.email})
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className="mt-3">
                  <label htmlFor="notes" className="form-label">
                    Notes
                  </label>
                  <textarea
                    onChange={(e) => setNotes(e.target.value)}
                    className="form-control w-full"
                  ></textarea>
                </div>
                <button
                  onClick={handelSave}
                  type="button"
                  className="btn btn-primary w-full mt-5 mb-5"
                >
                  Save
                  {loading && (
                    <LoadingIcon
                      icon="three-dots"
                      color="white"
                      className="w-4 h-4 ml-2"
                    />
                  )}
                </button>

                {success && (
                  <Alert className="alert-secondary mb-2">
                    {" "}
                    Successfully add Events
                  </Alert>
                )}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        {/* END: Calendar Side Menu */}
        {/* BEGIN: Calendar Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="box p-5">
            {eventDatas.state == "hasValue" && (
              <Calendar type="1" events={eventDatas.contents.events} />
            )}
          </div>
        </div>
        {/* END: Calendar Content */}
      </div>
    </>
  );
};

export default Events;

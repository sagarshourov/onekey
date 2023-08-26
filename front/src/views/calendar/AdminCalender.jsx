import {
  Lucide,
  FullCalendarDraggable,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Litepicker, Alert,
  Modal,
  ModalBody
} from "@/base-components";
import Calendar from "@/components/calendar/Main";
import { LoadingIcon } from "@/base-components";
import axios from "axios";
import { getAdmin } from "../../configuration";
import { useState } from "react";

import { useRecoilStateLoadable } from "recoil";
import { eventListState } from "../../state/events-atom";
const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
  ContentType: "application/json",
};

import { filter } from "lodash";

function applySortFilters(array, searchValue) {
  return filter(array, (_items) => {
    if (_items.users !== null) {
      return (
        _items?.users?.email
          .toLowerCase()
          .indexOf(searchValue.toLowerCase()) !== -1 ||
        _items?.users?.first_name
          .toLowerCase()
          .indexOf(searchValue.toLowerCase()) !== -1
      );
    }
  });
}

const Events = (props) => {
  const [eventDatas, setEventState] = useRecoilStateLoadable(eventListState);

  const [delConfirmationModal, setDelConfirmationModal] = useState(false);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const [notiConfrimModal, setNotiConfirmationModal] = useState(false);

  const [date, setDate] = useState("");
  const [select, setSelect] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);
  const [event_id, setEventId] = useState(false);

  const [search, setSearch] = useState("");
  const deleteEvent = async () => {
    const LOGIN_URL = getAdmin() + "delete_event";

    setLoading(true);

    try {
      const response = await axios.post(
        LOGIN_URL,
        { event_id: event_id },
        {
          headers,
        }
      );

      if (response?.data?.success) {
        setLoading(false);
        setDelConfirmationModal(false);
        setDeleteConfirmationModal(false);
        setEventState(response?.data?.data);
      }

      //console.log(response);
    } catch (err) {
      setLoading(false);
    }
  };

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
        setEventState(response?.data?.data);
      }

      //  (response.data);
    } catch (err) {
      setLoading(false);
    }
  };

  const confirmNotification = async (val) => {
    setLoading(true);
    setSuccess(false);
    const LOGIN_URL = getAdmin() + "save_event";

    try {
      const response = await axios.post(
        LOGIN_URL,
        { user_id: select, date: date, notes: notes, notification: val },
        {
          headers,
        }
      );

      if (response.data.success) {
        setNotes("");
        setSelect("");
        setSuccess(true);
        setLoading(false);
        setEventState(response?.data?.data);
        setNotiConfirmationModal(false);
      }

      //  (response.data);
    } catch (err) {
      setLoading(false);
    }
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  let filterData = applySortFilters(eventDatas.contents.events, search);

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
                {eventDatas.state === "hasValue" ?
                  eventDatas?.contents?.events.map((event, key) => {
                    return (
                      <div
                        key={key}
                        className="event box p-5 cursor-pointer mt-5 first:mt-0"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                          <div className="event__title font-medium truncate">
                            {event.users && event.users?.first_name}
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
                          <button
                            onClick={() => {
                              setDelConfirmationModal(true);

                              setEventId(event.id);

                             // console.log("event", event);
                            }}
                            className="btn btn-outline-secondary py-1 px-2 ml-auto"
                          >
                            <Lucide icon="UserX" className="w-4 h-4 mr-2" />{" "}
                            Cancel
                          </button>
                        </div>
                      </div>
                    );
                  }):(<h1 className="m-5">Loading...</h1>)
                
                }
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
                        maxYear: 2030,
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
                  {eventDatas.state == "hasValue" ? (
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
                  ):(<h1 className="m-5">Loading...</h1>)}
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
                  onClick={() => {
                    if (select == "") {
                      alert("Select user !");

                      return false;
                    }

                    if (notes == "") {
                      alert("Notes required !");

                      return false;
                    }

                    setNotiConfirmationModal(true);
                  }}
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
            <div className="flex justify-center ...">
            <input type="password" name="password" className="hidden" placeholder="secret" />
              <input
                type="text"
                className="form-control mb-5 w-96"
                placeholder="Search by user"
                onChange={handelSearch.bind(this)}
              />
            </div>

            {eventDatas.state == "hasValue" ? (
              <Calendar
                type="1"
                deleteEvent={deleteEvent}
                setEventId={setEventId}
                events={filterData}
                loading={loading}
                deleteConfirmationModal={deleteConfirmationModal}
                setDeleteConfirmationModal={setDeleteConfirmationModal}
              />
            ):(<h1 className="m-5">Loading...</h1>)}
          </div>
        </div>
        {/* END: Calendar Content */}

        <Modal
          show={delConfirmationModal}
          onHidden={() => {
            setDelConfirmationModal(false);
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
                  setDelConfirmationModal(false);
                }}
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button
                onClick={deleteEvent}
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

        <Modal
          show={notiConfrimModal}
          onHidden={() => {
            setNotiConfirmationModal(false);
          }}
        >
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="Bell"
                className="w-16 h-16 text-success mx-auto mt-3"
              />
              <div className="text-3xl mt-5"> </div>
              <div className="text-xl text-slate-500 mt-2">
                Do you want to notify the client?
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                type="button"
                onClick={() => {
                  confirmNotification(0);
                }}
                className="btn btn-outline-secondary w-24 mr-1"
              >
                No
              </button>
              <button
                onClick={() => {
                  confirmNotification(1);
                }}
                type="button"
                className="btn btn-success text-white w-24"
              >
                Yes
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
      </div>
    </>
  );
};

export default Events;

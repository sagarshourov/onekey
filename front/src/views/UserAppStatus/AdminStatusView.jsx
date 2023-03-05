import {
  Lucide,
  AccordionGroup,
  AccordionItem,
  Accordion,
  AccordionPanel,
} from "@/base-components";
import axios from "axios";
import "./styles.css";
import { useRecoilValue } from "recoil";

import { getAdmin, getBaseApi } from "../../configuration";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { appStatusSlect } from "../../state/admin-atom";
const checkMain = (u_status, id) => {
  let active = false;
  u_status.map((status, index) => {
    if (parseInt(status.status_text) === id) {
      active = true;
    }
  });

  return active;
};

const checkSub = (u_status, id) => {
  let active = false;
  u_status.map((status, index) => {
    if (parseInt(status.sub_status_text) === id) {
      active = true;
    }
  });
  return active;
};

const formatDate = (dat) => {
  //const date = dat.split(" ");
  return dat.split("T")[0];
};

const token = localStorage.getItem("token");

const headers = {
  Authorization: `Bearer ${token}`,
  ContentType: "application/json",
};

const StatusView = (props) => {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const status = useRecoilValue(appStatusSlect(id));

  const handelMain = async (main_id, sub_id, active) => {
    setLoading(true);
    const LOGIN_URL = getAdmin() + "save_app_status";

    try {
      const response = await axios.post(
        LOGIN_URL,
        { status_text: main_id, sub_id: sub_id, user_id: id, active: active },
        {
          headers,
        }
      );

      //  window.location.reload();
    } catch (err) {
      setLoading(false);
    }
  };

  const handelNotes = (e) => {
    const obj = { [e.target.name]: e.target.value };

    setNotes({
      ...notes,
      ...obj,
    });
  };

  const saveNotes = async () => {
    setLoading(true);
    const LOGIN_URL = getAdmin() + "save_notes";

    if (!notes.notes && notes.notes == "") {
      alert("Note required !");
    }
    if (!notes.status && notes.status == "") {
      alert("Select status required !");
    }

    try {
      const response = await axios.post(
        LOGIN_URL,
        { user_id: id, message: notes.notes, status_text: notes.status },
        {
          headers,
        }
      );

      window.location.reload();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">User Status</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <div className="intro-y box  p-5 mt-2">
          <ul className="timeline">
            <li className="timeline-line"></li>
          </ul>
          <ul className="timeline">
            <li className="timeline-line"></li>

            {status.status_text.length > 0 &&
              status.status_text.map((statu, index) => {
                let active = checkMain(status.user_app_status, statu.id);

                return (
                  <li
                    key={index}
                    className={"timeline-item" + (active ? " active" : "")}
                  >
                    <div className="timeline-badge">
                      <a
                        href="#"
                        className="key_sub_sec"
                        onClick={() => handelMain(statu.id, null, active)}
                      ></a>
                    </div>
                    <div className="timeline-panel">
                      <AccordionGroup selectedIndex={1} className="p-5">
                        <AccordionItem className="custom-className ">
                          <Accordion className="">{statu.title}</Accordion>
                          <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed ">
                            <div className="timeline-content">
                              <ul>
                                {statu.sub_status.map((sub, ind) => {
                                  let actie = checkSub(
                                    status.user_app_status,
                                    sub.id
                                  );
                                  return (
                                    <li
                                      key={ind}
                                      className={actie ? " active" : ""}
                                    >
                                      <span>{sub.title}</span>
                                      <a
                                        href="#"
                                        className="key_sub_sec"
                                        onClick={() =>
                                          handelMain(statu.id, sub.id, actie)
                                        }
                                      ></a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </AccordionPanel>
                        </AccordionItem>
                      </AccordionGroup>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="intro-y box  p-5 mt-2">
          <h3 className="text-2xl">Notes</h3>

          <ol className="relative border-l border-gray-200 m-5 dark:border-gray-700">
            {status.notes.length > 0 &&
              status.notes.map((note, index) => (
                <li key={index} className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                   A
                  </span>
                  <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <div className="justify-between items-center mb-3 sm:flex">
                      <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                        {formatDate(note.created_at)}
                      </time>
                      <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                        {note?.created_by?.first_name}
                        <a
                          href="#"
                          className="font-semibold text-gray-900 dark:text-white hover:underline pl-3"
                        >
                          {note?.status?.title}
                        </a>
                      </div>
                    </div>
                    <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                      {note.message}
                    </div>
                  </div>
                </li>
              ))}
          </ol>

          <div className="col-span-12  mt-5">
            <label htmlFor="vertical-form-1" className="form-label">
              Status
            </label>
            <select
              className="form-select mt-2 sm:mr-2"
              aria-label="Default select example"
              name="status"
              onChange={(e) => handelNotes(e)}
            >
              <option>Select</option>
              {status.status_text.length > 0 &&
                status.status_text.map((statu, index) => (
                  <option key={index} value={statu.id}>
                    {statu.title}
                  </option>
                ))}
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="vertical-form-2" className="form-label">
              Notes
            </label>

            <textarea
              onChange={(e) => handelNotes(e)}
              name="notes"
              placeholder="Notes"
              className="form-control"
            ></textarea>
          </div>

          <button onClick={saveNotes} className="btn btn-primary mt-5">
            Add Notes
          </button>
        </div>
      </div>
    </>
  );
};

export default StatusView;

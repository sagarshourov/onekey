import {
  Lucide,
  AccordionGroup,
  AccordionItem,
  Accordion,
  AccordionPanel,
} from "@/base-components";
import "./styles.css";
import { useRecoilStateLoadable } from "recoil";
import { userAppState } from "../../state/users-atom";

const checkMain = (u_status, id) => {
  let active = " ";
  u_status.map((status, index) => {
    if (parseInt(status.status_text) === id) {
      active = " active";
    }
  });
  return active;
};

const checkSub = (u_status, id) => {
  let active = " ";
  u_status.map((status, index) => {
    if (parseInt(status.sub_status_text) === id) {
      active = " active";
    }
  });
  return active;
};

const formatDate = (dat) => {
  //const date = dat.split(" ");
  return dat.split("T")[0];
};

const StatusView = (props) => {
  const [status, setStatus] = useRecoilStateLoadable(userAppState);

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">User App Status</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <div className="intro-y box  p-5 mt-2">
          <ul className="timeline">
            <li className="timeline-line"></li>
          </ul>
          <ul className="timeline">
            <li className="timeline-line"></li>

            {status.state == "hasValue" &&
              status.contents.status_text.map((statu, index) => {
                return (
                  <li
                    key={index}
                    className={
                      "timeline-item" +
                      checkMain(status.contents.user_app_status, statu.id)
                    }
                  >
                    <div className="timeline-badge">
                      <a
                        href="#"
                        className="key_sub_sec"
                       
                      ></a>
                    </div>
                    <div className="timeline-panel">
                      <AccordionGroup selectedIndex={1} className="p-5">
                        <AccordionItem className="custom-class ">
                          <Accordion className="">{statu.title}</Accordion>
                          <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed ">
                            <div className="timeline-content">
                              <ul>
                                {statu.sub_status.map((sta, ind) => {
                                  return (
                                    <li
                                      key={ind}
                                      className={checkSub(
                                        status.contents.user_app_status,
                                        sta.id
                                      )}
                                    >
                                      <span>{sta.title}</span>
                                      <a
                                        href="#"
                                        className="key_sub_sec"
                                        data-id="12"
                                        sub_data-id="65"
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

          <ol className="relative border-l border-gray-200 m-5  dark:border-gray-700">
            {status.state == "hasValue" &&
              status.contents.notes.length > 0 &&
              status.contents.notes.map((note, index) => (
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
        </div>
      </div>
    </>
  );
};

export default StatusView;

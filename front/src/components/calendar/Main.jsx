import "@fullcalendar/core/vdom";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import dom from "@left4code/tw-starter/dist/js/dom";
import { Lucide, FullCalendar, Modal, ModalBody } from "@/base-components";

import { useState } from "react";
function event_format(data) {
  let obj = [];
  data.map((dat, index) => {
    obj.push({
      start: dat.note_date,
      title: dat.users ? dat.users.first_name : "",
      description: dat.notes,
    });
  });

  return obj;
}

const Main = (props) => {
  const { events } = props;

  //console.log(events.contents);
  const [modelTitle, setModelTitle] = useState("");
  const [modelDescription, setModelDescription] = useState("");
  const options = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    droppable: true,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    aspectRatio: 1.5,
    navLinks: true,
    editable: true,
    events: event_format(events.contents),
    eventClick: function (info) {
      console.log(info);
      // alert("Event: " + info.event._def.extendedProps.description);

      //setModelTitle()
      setModelDescription(info.event._def.extendedProps.description);
      setModelTitle(info.event.title);
      setDeleteConfirmationModal(true);
      // change the border color just for fun
      // info.el.style.borderColor = "red";
    },
  };
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  return (
    <>
      <FullCalendar options={options} />

      <Modal
        show={deleteConfirmationModal}
        onHidden={() => {
          setDeleteConfirmationModal(false);
        }}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <Lucide
              icon="Calendar"
              className="w-16 h-16 text-info mx-auto mt-3"
            />
            <div className="text-3xl mt-5">{modelTitle}</div>
            <div className="text-slate-500 mt-2">
             {modelDescription}
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
            <button type="button" className="btn btn-danger w-24">
              Delete
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Main;

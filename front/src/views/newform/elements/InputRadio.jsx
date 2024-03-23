import classnames from "classnames";

const InputRadio = (props) => {
  //  console.log("visible", props.isVisible);
  return (
    <>
      {props.isVisible && (
        // <div className="mt-5  gap-5 flex-none lg:flex lg:flex-row">

        <div
          className={`mt-5 flex-none${
            props.inline ? " lg:flex gap-5 lg:flex-row" : ""
          }`}
        >
          <label className="basis-2/6 sa-label">{props.label}</label>
          <div className="flex gap-5 flex-col sm:flex-row mt-2 basis-4/6">
            <div className="form-check mr-2">
              <input
                {...props.register(props.title)}
                className="form-check-input"
                type="radio"
                name={props.title}
                value="1"
              />
              <label className="form-check-label" htmlFor="radio-switch-4">
                {props.titleNo}
              </label>
            </div>
            <div className="form-check mr-2 mt-2 sm:mt-0">
              <input
                {...props.register(props.title)}
                className="form-check-input-lg"
                type="radio"
                name={props.title}
                value="1"
              />
              <label className="form-check-label" htmlFor="radio-switch-5">
                {props.titleYes}
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputRadio;

import classnames from "classnames";

const InlineSwitch = (props) => {
  const { title, setFormData, formData } = props;

  const handelSwitch = (fieldName) => {
    setFormData(fieldName, !formData[fieldName], { shouldValidate: true });
  };

  return (
    <>
      {props.isVisible && (
        <div className=" form-switch mt-5 gap-5 flex-none lg:flex lg:flex-row">
          <label
            className={classnames({
              "sa-label": true,
              "mr-2": true,
              "basis-4/12": !props.fullWidth,
              "basis-11/12": props.fullWidth,
            })}
            htmlFor="checkbox-switch-7"
          >
            {props.label}
            <div className="form-help">{props?.helpText}</div>
          </label>
          <div
            className={classnames({
              "basis-8/12": !props.fullWidth,
              "basis-1/12": props.fullWidth,
            })}
          >
            {/* <input
              className="form-check-input "
              type="checkbox"
              onChange={() => props.handleCheckboxChange(props.title)}
            /> */}

            <div
              className={`sa-toggle-${
                formData && formData[title] ? true : false
              } sa-toggle`}
              tabIndex="0"
            >
              <div className="bubble"></div>
              <div onClick={() => handelSwitch(title)} className="no">
                No
              </div>
              <div
                onClick={() => handelSwitch(title)}
                className="yes no-toggle"
              >
                Yes
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InlineSwitch;

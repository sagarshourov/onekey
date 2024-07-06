import classnames from "classnames";

const InlineChildSwitch = (props) => {
  const { formData, setFormData, onChange, parent, index } = props;

  const handelSwitch = (field, value) => {
    setFormData(field, value, { shouldValidate: true });
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
            <div
              className={`sa-toggle-${
                formData &&
                formData[parent][index] &&
                formData[parent][index][props.title] &&
                formData[parent][index][props.title]
              } sa-toggle`}
              tabIndex="0"
              title={props.title}
            >
              <div className="bubble"></div>
              <div
                onClick={(e) =>
                  handelSwitch(`${parent}.${index}.${props.title}`, false)
                }
                className="no"
              >
                No
              </div>
              <div
                onClick={(e) =>
                  handelSwitch(`${parent}.${index}.${props.title}`, true)
                }
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

export default InlineChildSwitch;

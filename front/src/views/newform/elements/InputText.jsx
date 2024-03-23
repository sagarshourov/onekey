import classnames from "classnames";

const InputText = (props) => {
  props.formData &&
    console.log("disabled", props.formData[props.title]);
  return (
    <>
      {props.isVisible && (
        <>
          <div className="mt-5 ">
            <label
              htmlFor="regular-form-3"
              className="form-label sa-label w-full "
            >
              {props.label}
              <span className="text-danger pl-1">*</span>
              {/* <Tippy
    tag="a"
    href="#"
    className="tooltip p-0 btn btn-rounded-primary"
    content="This is awesome tooltip example!"
    options={{
      theme: "light",
    }}
  >
    <Lucide icon="HelpCircle" className="w-4 h-4" />
  </Tippy> */}
            </label>
            <input
              {...props.register(props.title)}
              type={props.type}
              placeholder={props.label}
              name={props.title}
              className={classnames({
                "form-control": true,
                "border-danger": props.errors[props.title],
              })}
              disabled={
                props.formData
                  ? props.formData[props.title]
                  : false
              }
            />
            {props.errors[props.title] && (
              <div className="text-danger mt-2">
                {props.errors[props.title].message}
              </div>
            )}
            <div className="form-help">{props.helpText}</div>
          </div>
          {props.condition && props.formData && (
            <div className="form-check mt-2">
              <input
                {...props.register(props.check)}
                className="form-check-input"
                type="checkbox"
                value=""
                name={props.check}
                checked={props.formData[props.title] ? true : false}
                onChange={() => props.handleCheckboxChange(props.title)}
              />
              <label className="form-check-label" htmlFor="checkbox-switch-3">
                {props.checkLabel ? props.checkLabel : "Does not apply"}
              </label>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default InputText;

import classnames from "classnames";

const InputTextArea = (props) => {
  return (
    <>
      {props.isVisible && (
        <div className="mt-5 flex-none gap-5 lg:flex lg:flex-row">
          <label
            htmlFor="regular-form-3"
            className="form-label basis-4/12  sa-label "
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

          <textarea
            {...props.register(props.title)}
            name={props.title}
            className={classnames({
              "form-control": true,
              "basis-8/12": true,
              "border-danger": props.errors[props.title],
            })}
            placeholder={props.label}
          ></textarea>

          {props.errors[props.title] && (
            <div className="text-danger mt-2">
              {props.errors[props.title].message}
            </div>
          )}
          <div className="form-help">{props.helpText}</div>
        </div>
      )}
    </>
  );
};

export default InputTextArea;

import classnames from "classnames";

const InputTextArea = (props) => {
  const { label, isVisible, title, errors, register, helpText } = props;
  return (
    <>
      {isVisible && (
        <div className="mt-5 flex-none gap-5 lg:flex lg:flex-row">
          <label
            htmlFor="regular-form-3"
            className="form-label basis-4/12  sa-label "
          >
            {label}
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
            {...register(title)}
            name={title}
            className={classnames({
              "form-control": true,
              "basis-8/12": true,
              "border-danger": errors[title],
            })}
            placeholder={label}
          ></textarea>

          {errors[title] && (
            <div className="text-danger mt-2">{errors[title].message}</div>
          )}
          <div className="form-help">{helpText}</div>
        </div>
      )}
    </>
  );
};

export default InputTextArea;

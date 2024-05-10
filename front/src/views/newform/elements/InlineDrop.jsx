import classnames from "classnames";

const InlineDrop = (props) => {
  const { title, setFormData, formData } = props;

  const handelSelect = (e, fieldName) => {
    setFormData(fieldName, e.target.value, { shouldValidate: true });
    console.log("formdata", formData);
  };

  return (
    <>
      {props.isVisible && (
        <div
          className={`mt-5 flex-none${
            props.inline ? " lg:flex gap-5 lg:flex-row" : ""
          }`}
        >
          <label
            htmlFor="regular-form-3"
            className="form-label basis-2/6 sa-label"
          >
            {props.label}
            <span className="text-danger pl-1">*</span>
          </label>
          <div className="basis-4/6">
            <select
              {...props.register(props.title)}
              className="form-select w-full "
              aria-label=".form-select example"
              name={props.title}
              onChange={(e) => handelSelect(e, title)}
            >
              <option>Select...</option>
              {props.data &&
                props.data.map((data, index) => (
                  <option key={index} value={data.value}>
                    {data.label}
                  </option>
                ))}
            </select>
            {props.errors[props.title] && (
              <div className="text-danger mt-2">
                {props.errors[props.title].message}
              </div>
            )}
            <div className="form-help">{props.helpText}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default InlineDrop;

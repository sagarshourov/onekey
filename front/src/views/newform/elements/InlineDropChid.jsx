import classnames from "classnames";

const InlineDropChid = (props) => {
  const { formData, parent, index, updateNationality } = props;
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
              {...props.register(`${parent}.${index}.${props.title}`)}
              className="form-select w-full "
              aria-label=".form-select example"
              name={`${parent}.${index}.${props.title}`}
            >
              {props.data &&
                props.data.map((data, index) => (
                  <option key={index} value={data.value}>
                    {data.label}
                  </option>
                ))}
            </select>
            {props.errors[parent] &&
              props.errors[parent][index] &&
              props.errors[parent][index][props.title] && (
                <div className="text-danger mt-2">
                  {props.errors[parent][index][props.title].message}
                </div>
              )}
            <div className="form-help">{props.helpText}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default InlineDropChid;
import classnames from "classnames";

const InputText = (props) => {
  const { required, refs, name } = props;
  return (
    <>
      {props.isVisible && (
        <>
          <div className={props.label ? "mt-5" : ""}>
            {props.label && (
              <label
                htmlFor="regular-form-3"
                className="form-label sa-label w-full "
              >
                {props.label}
                {required && <span className="text-danger pl-1">*</span>}
              </label>
            )}
            <input
              {...props.register(refs)}
              type="text"
              required={required}
              placeholder={props.label}
              name={name}
              className={classnames({
                "form-control": true,
                "border-danger": props.errors[refs],
              })}
              disabled={props.formData ? props.formData[props.check] : false}
            />
            {props.errors[refs] && (
              <div className="text-danger mt-2">
                {props.errors[refs].message}
              </div>
            )}
            <div className="form-help">{props.helpText}</div>
          </div>

          {props.condition && props.formData && (
            <div className=" form-check mt-2">
              <input
                {...props.register(props.check)}
                className="form-check-input"
                type="checkbox"
                value=""
                onChange={() => props.handleCheckboxChange(props.check)}
                name={props.check}
                checked={
                  props.formData[props.check] && props.formData[props.check]
                    ? true
                    : false
                }
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

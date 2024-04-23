import { Title } from "chart.js";
import classnames from "classnames";

const InputText = (props) => {
  const {
    formData,
    handleCheckboxChange,
    setFormData,
    disabled,
    required,
    refs,
    name,
    isVisible,
    helpText,
    label,
    errors
  } = props;

  const handelCheck = (chkName, fieldName) => {
    handleCheckboxChange(fieldName);
    setFormData(chkName, !formData[chkName], { shouldValidate: true });

    // clear errors
  };

  return (
    <>
      {isVisible && (
        <>
          <div className={label ? "mt-5" : ""}>
            {label && (
              <label
                htmlFor="regular-form-3"
                className="form-label sa-label w-full "
              >
                {label}
                {required && <span className="text-danger pl-1">*</span>}
              </label>
            )}
            <input
              {...props.register(refs)}
              type="text"
              required={required}
              placeholder={label}
              name={name}
              className={classnames({
                "form-control": true,
                "border-danger": errors[refs],
              })}
              disabled={disabled}
              // onChange={(e) => handleChange(e, name)}
            />
            {errors[refs] && (
              <div className="text-danger mt-2">
                {errors[refs].message}
              </div>
            )}
            <div className="form-help">{helpText}</div>
          </div>

          {props.condition && props.formData && (
            <div className=" form-check mt-2">
              <input
                {...props.register(props.check)}
                className="form-check-input"
                type="checkbox"
                value=""
                onChange={() => handelCheck(props.check, name)}
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

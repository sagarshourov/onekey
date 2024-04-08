import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";
import InputRadio from "../elements/InputRadio";
const UsContact = (props) => {
  const [radio, handleRadio] = useState(0);

  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Us Contact </h2>
      <hr className="my-5 sa-border-primary" />
      <div className={`mt-5 `}>
        <label className=" sa-label my-5">
          Do you know a person or organization that you want to list as your
          point of contact in the U.S.?
        </label>

        <div className="form-check my-5">
          <input
            className="form-check-input"
            type="radio"
            value="1"
            name="us_contact"
            onChange={() => handleRadio(1)}
          />
          <label className="form-check-label" htmlFor="radio-switch-4">
            I know a Person
          </label>
        </div>
        <div className="form-check my-5">
          <input
            className="form-check-input-lg"
            type="radio"
            value="2"
            name="us_contact"
            onChange={() => handleRadio(2)}
          />
          <label className="form-check-label" htmlFor="radio-switch-5">
            I know a Organization
          </label>
        </div>
        <div className="form-check my-5">
          <input
            className="form-check-input-lg"
            type="radio"
            value="3"
            name="us_contact"
            onChange={() => handleRadio(3)}
          />
          <label className="form-check-label" htmlFor="radio-switch-5">
            I don't know any of them
          </label>
        </div>
      </div>
      {radio === 1 && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"firstName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  First Name, "
              isVisible={true}
              disabled={false}
            />

            <InputText
              title={"lastName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  Last Name "
              isVisible={true}
              disabled={false}
            />
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"fullName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  Phone Number  "
              isVisible={true}
              disabled={false}
            />

            <InputText
              title={"fullName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label=" Email Address "
              isVisible={true}
              disabled={false}
            />
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"additionalFirstName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="Street address (Line 1)"
              isVisible={true}
              disabled={false}
            />
            <InputText
              title={"additionalLastName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="Street address (Line 2) "
              disabled={false}
              isVisible={true}
            />
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"telecodeFirstName"}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label="City"
              isVisible={true}
              disabled={false}
            />

            <InputText
              title={"telecodeFirstName"}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label=" State/Province "
              isVisible={true}
              disabled={false}
            />
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"telecodeFirstName"}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label=" State/Province"
              isVisible={true}
              disabled={false}
            />
            <InputText
              title={"telecodeFirstName"}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label=" Postal Zone/Zip Code"
              isVisible={true}
              disabled={false}
            />
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"telecodeFirstName"}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label=" Country/Region"
              isVisible={true}
              disabled={false}
            />
          </div>
        </div>
      )}

      {radio === 2 && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"firstName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  Organization name "
              isVisible={true}
              disabled={false}
            />

            <InputText
              title={"lastName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  Phone Number"
              isVisible={true}
              disabled={false}
            />
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"fullName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  Email Address "
              isVisible={true}
              disabled={false}
            />

            <InputText
              title={"fullName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  Street address (Line 1) "
              isVisible={true}
              disabled={false}
            />
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"additionalFirstName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="Street address (Line 2)"
              isVisible={true}
              disabled={false}
            />
            <InputText
              title={"additionalLastName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="City "
              disabled={false}
              isVisible={true}
            />
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"telecodeFirstName"}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label=" State/Province "
              isVisible={true}
              disabled={false}
            />
            <InputText
              title={"telecodeFirstName"}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label=" Postal Zone/Zip Code"
              isVisible={true}
              disabled={false}
            />
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-32">
            <InputText
              title={"telecodeFirstName"}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label=" Country/Region "
              isVisible={true}
              disabled={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UsContact;

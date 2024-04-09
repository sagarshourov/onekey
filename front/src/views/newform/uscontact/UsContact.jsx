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
              refs={"uscontact.person.firstName"}
              name={"uscontact.person.firstName"}
              required={true}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  First Name, "
              isVisible={true}
              disabled={false}
            />

            <InputText
              refs={"uscontact.person.lastName"}
              name={"uscontact.person.lastName"}
              required={true}
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
              refs={"uscontact.person.phoneNumber"}
              name={"uscontact.person.phoneNumber"}
              required={true}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  Phone Number  "
              isVisible={true}
              disabled={false}
            />

            <InputText
              refs={"uscontact.person.email"}
              name={"uscontact.person.email"}
              required={true}
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
              refs={"uscontact.person.streetAddress"}
              name={"uscontact.person.streetAddress"}
              required={true}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="Street address (Line 1)"
              isVisible={true}
              disabled={false}
            />
            <InputText
              refs={"uscontact.person.streetAddress2"}
              name={"uscontact.person.streetAddress2"}
              required={true}
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
              refs={"uscontact.person.city"}
              name={"uscontact.person.city"}
              required={true}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label="City"
              isVisible={true}
              disabled={false}
            />

            <InputText
              refs={"uscontact.person.state"}
              name={"uscontact.person.state"}
              required={true}
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
              refs={"uscontact.person.zipcode"}
              name={"uscontact.person.zipcode"}
              required={true}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label=" Postal Zone/Zip Code"
              isVisible={true}
              disabled={false}
            />
            <InputText
              refs={"uscontact.person.country"}
              name={"uscontact.person.country"}
              required={true}
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
              refs={"uscontact.organization.name"}
              name={"uscontact.organization.name"}
              required={true}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  Organization name "
              isVisible={true}
              disabled={false}
            />

            <InputText
              refs={"uscontact.organization.phone"}
              name={"uscontact.organization.phone"}
              required={true}
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
              refs={"uscontact.organization.email"}
              name={"uscontact.organization.email"}
              required={true}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="  Email Address "
              isVisible={true}
              disabled={false}
            />

            <InputText
              refs={"uscontact.organization.streetAddress"}
              name={"uscontact.organization.streetAddress"}
              required={true}
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
              refs={"uscontact.organization.streetAddress2"}
              name={"uscontact.organization.streetAddress2"}
              required={true}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="Street address (Line 2)"
              isVisible={true}
              disabled={false}
            />
            <InputText
              refs={"uscontact.organization.city"}
              name={"uscontact.organization.city"}
              required={true}
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
              refs={"uscontact.organization.state"}
              name={"uscontact.organization.state"}
              required={true}
              helpText=" "
              register={props.register}
              type="text"
              errors={props.errors}
              label=" State/Province "
              isVisible={true}
              disabled={false}
            />
            <InputText
              refs={"uscontact.organization.zipcode"}
              name={"uscontact.organization.zipcode"}
              required={true}
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
              refs={"uscontact.organization.country"}
              name={"uscontact.organization.country"}
              required={true}
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

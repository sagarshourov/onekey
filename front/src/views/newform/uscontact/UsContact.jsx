import { useState } from "react";
import InputText from "../elements/InputText";
import dat from "../elements/data.json";
import InlineDrop from "../elements/InlineDrop";
const UsContact = (props) => {
  const { formData, setFormData } = props;
  const [radio, setRadio] = useState(
    formData.us_contact ? formData.us_contact : 0
  );

  // formData.us_contact && setRadio(formData.us_contact);

  const handleRadio = (e) => {
    setRadio(e);
    setFormData("us_contact", e, { shouldValidate: true });
  };
  console.log(formData.us_contact);

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
            className="form-check-input-lg"
            type="radio"
            value="1"
            name="us_contact"
            onChange={() => handleRadio(1)}
            defaultChecked={formData.us_contact == 1 ? true : false}
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
            defaultChecked={formData.us_contact == 2 ? true : false}
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
            defaultChecked={formData.us_contact == 3 ? true : false}
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
              formData={formData}
              setFormData={setFormData}
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
              formData={formData}
              setFormData={setFormData}
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
              formData={formData}
              setFormData={setFormData}
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
              formData={formData}
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
              formData={formData}
              setFormData={setFormData}
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
              formData={formData}
              setFormData={setFormData}
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
              formData={formData}
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
              formData={formData}
              setFormData={setFormData}
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
              formData={formData}
              setFormData={setFormData}
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
              formData={formData}
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
            <InlineDrop
              formData={formData}
              setFormData={setFormData}
              title={"uscontact.person.country"}
              helpText=""
              register={props.register}
              errors={props.errors}
              label=" Country/Region"
              isVisible={true}
              disabled={false}
              data={dat.countries}
              inline={true}
            />
          </div>
        </div>
      )}

      {radio === 2 && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
            <InputText
              formData={formData}
              setFormData={setFormData}
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
              formData={formData}
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
              formData={formData}
              setFormData={setFormData}
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
              formData={formData}
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
              formData={formData}
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
              formData={formData}
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
              formData={formData}
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
              formData={formData}
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
            <InlineDrop
              formData={formData}
              setFormData={setFormData}
              title={"uscontact.organization.country"}
              helpText=""
              register={props.register}
              errors={props.errors}
              label=" Country/Region"
              isVisible={true}
              disabled={false}
              data={dat.countries}
              inline={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UsContact;

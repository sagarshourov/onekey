import { useState } from "react";
import InputText from "../elements/InputText";
const PersonalInformation = (props) => {
  const [date, setDate] = useState("");
  const { errors, register, setFormData, formData } =
    props;
  return (
    <>
      <h2 className="mb-5 text-xl font-bold">
        {" "}
        Additional Point of Contact Information{" "}
      </h2>

      <hr className="my-5 sa-border-primary" />

      <h5 className="mb-5 text font-bold">
        List at least two contacts in your country of residence who can verify
        the information that you have provided on this application. Do not list
        immediate family members or other relatives.
      </h5>

      <hr className="my-5 sa-border-primary" />

      <div>
        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"addInfo.lastName"}
              name={"addInfo.lastName"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"Last name "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="basis-6/12">
            <InputText
              refs={"addInfo.firstName"}
              name={"addInfo.firstName"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={" First name  "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>

        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"addInfo.address"}
              name={"addInfo.address"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"Address "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
              require={true}
            />
          </div>
          <div className="basis-6/12">
            <InputText
              refs={"addInfo.city"}
              name={"addInfo.city"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={" City  "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"addInfo.address"}
              name={"addInfo.address"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={" State or province  "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
              require={true}
            />
          </div>
          <div className="basis-6/12">
            <InputText
              refs={"addInfo.postCode"}
              name={"addInfo.postCode"}
              required={false}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"  Postal code   "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>

        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"addInfo.country"}
              name={"addInfo.country"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={" Country  "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
              require={true}
            />
          </div>
          <div className="basis-6/12">
            <InputText
              refs={"addInfo.phone"}
              name={"addInfo.phone"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"Phone Number   "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"addInfo.email"}
              name={"addInfo.email"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"  Email Address   "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
              require={false}
            />
          </div>
        </div>
      </div>
      <hr className="my-5 sa-border-primary" />

      <h5 className="mb-5 text font-bold">Second Contact </h5>

      <hr className="my-5 sa-border-primary" />

      <div>
        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"secondInfo.lastName"}
              name={"secondInfo.lastName"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"Last name "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="basis-6/12">
            <InputText
              refs={"secondInfo.firstName"}
              name={"secondInfo.firstName"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={" First name  "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>

        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"secondInfo.address"}
              name={"secondInfo.address"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"Address "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
              require={true}
            />
          </div>
          <div className="basis-6/12">
            <InputText
              refs={"secondInfo.city"}
              name={"secondInfo.city"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={" City  "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"secondInfo.address"}
              name={"secondInfo.address"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={" State or province  "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
              require={true}
            />
          </div>
          <div className="basis-6/12">
            <InputText
              refs={"secondInfo.postCode"}
              name={"secondInfo.postCode"}
              required={false}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"  Postal code   "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>

        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"secondInfo.country"}
              name={"secondInfo.country"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={" Country  "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
              require={true}
            />
          </div>
          <div className="basis-6/12">
            <InputText
              refs={"secondInfo.phone"}
              name={"secondInfo.phone"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"Phone Number   "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
        <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
          <div className="basis-6/12 ">
            <InputText
              refs={"secondInfo.email"}
              name={"secondInfo.email"}
              required={true}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              label={"  Email Address   "}
              isVisible={true}
              disabled={false}
              condition={false}
              formData={formData}
              setFormData={setFormData}
              require={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;

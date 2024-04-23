

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";

import InlineInputText from "../elements/InlineInputText";
import InlineSwitch from "../elements/InlineSwitch";
const OtherPersonPayerInfo = (props) => {
  const {
    isVisible,

    register,
    formData,
    handleCheckboxChange,
    setFormData,
    errors,
  } = props;
  // console.log("key", props?.check);

  return (
    <>
      {isVisible && (
        <>
          <div className="mt-5 border p-5  border-blue-200 ">
            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"otherPayerInfo.name"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="What is the  name of the person paying for the trip?"
            />
            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"otherPayerInfo.number"}
              helpText=" "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Telephone number"
            />
            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"otherPayerInfo.relation"}
              helpText=""
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Relationship to you"
            />

            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"otherPayerInfo.address.email"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={formData.payerInfo_email_checkbox}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Email Address"
              condition={true}
              check={"payerInfo_email_checkbox"}
              checkLabel="Does not apply"
            />

            <InlineDrop
              formData={formData}
              setFormData={setFormData}
              title={"otherPayerInfo.relation"}
              helpText=""
              register={props.register}
              errors={props.errors}
              label=" Relationship to you"
              isVisible={true}
              disabled={false}
              data={dat.relation}
              inline={true}
            />

            <InlineSwitch
              setFormData={setFormData}
              isVisible={true}
              title="hasSameAddressAsMailingOrHome"
              label="Person paying for trip has same address"
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              fullWidth={false}
              helpText=" "
              inline={true}
            />
            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"otherPayerInfo.address.streetAddress2"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={!formData.hasSameAddressAsMailingOrHome}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Street address (Line 1
              )"
            />

            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"otherPayerInfo.address.streetAddress2"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={!formData.hasSameAddressAsMailingOrHome}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Street address (Line 2)"
            />

            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"otherPayerInfo.address.city"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={!formData.hasSameAddressAsMailingOrHome}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="City"
            />
            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"otherPayerInfo.address.city"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={!formData.hasSameAddressAsMailingOrHome}
              disabled={formData.companyPayerInfo_city_checkbox}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="State/Province"
              condition={true}
              check={"companyPayerInfo_city_checkbox"}
              checkLabel={"Does not apply"}
            />

            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"otherPayerInfo.address.zipcode"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={!formData.hasSameAddressAsMailingOrHome}
              disabled={formData.personPayerInfo_zipcode_checkbox}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Postal Zone/Zip Code"
              condition={true}
              check={"personPayerInfo_zipcode_checkbox"}
              checkLabel={"Does not apply"}
            />
            <InlineDrop
              formData={formData}
              setFormData={setFormData}
              title={"otherPayerInfo.country"}
              helpText=""
              register={props.register}
              errors={props.errors}
              label=" Country/Region"
              isVisible={!formData.hasSameAddressAsMailingOrHome}
              disabled={false}
              data={dat.countries}
              inline={true}
            />
          </div>
        </>
      )}
    </>
  );
};

export default OtherPersonPayerInfo;

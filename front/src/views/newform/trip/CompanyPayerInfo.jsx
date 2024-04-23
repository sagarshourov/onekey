

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";

import InlineInputText from "../elements/InlineInputText";
const CompanyPayerInfo = (props) => {
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
              title={"companyPayerInfo.name"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Company Payer Name"
            />
            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"companyPayerInfo.name"}
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
              title={"companyPayerInfo.name"}
              helpText=" "
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
              title={"companyPayerInfo.address.streetAddress"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Street address (Line 1)"
            />

            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"companyPayerInfo.address.streetAddress2"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Street address (Line 2)"
            />
            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"companyPayerInfo.address.city"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="City"
            />
            <InlineInputText
              setFormData={setFormData}
              required={true}
              title={"companyPayerInfo.address.city"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
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
              title={"companyPayerInfo.address.zipcode"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={formData.companyPayerInfo_zipcode_checkbox}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Postal Zone/Zip Code"
              condition={true}
              check={"companyPayerInfo_zipcode_checkbox"}
              checkLabel={"Does not apply"}
            />
            <InlineDrop
              formData={formData}
              setFormData={setFormData}
              title={"companyPayerInfo.country"}
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
        </>
      )}
    </>
  );
};

export default CompanyPayerInfo;

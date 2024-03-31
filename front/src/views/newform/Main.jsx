import { Litepicker, Tippy, Lucide } from "@/base-components";
import "./form.css";
import classnames from "classnames";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import Toastify from "toastify-js";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputText from "./elements/InputText";
import FirstStep from "./steps/FirstStep";
import Passport from "./passport/Passport";
import Contact from "./contact/Contact";
import UsContact from "./uscontact/UsContact";
import Trip from "./trip/Trip";

import Family from "./family/Family";
import Security from "./security/Security";
import Education from "./education/Education";
import Review from "./review/Review";
const Main = (props) => {
  const [callSwitch, setCallSwitch] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    hasAdditionalNames: false,
    hasTelecode: false,
    additionalFirstName: "",
    hasEverLostPassport: false,
    hasMultipleNationalities: false,
    hasMultiplePermanentResidents : false,
    lostpassports: [
      {
        passportNumber: "",
        passportIssueCountryInput: "",
        Explain: "",
      },
    ],
    nationalities: [
      {
        country: "",
        hasPassportNumber: "",
        passportNumber: "",
      },
    ],
    residents: [
      {
        permanentResidents: "",
      },
    ],

    
  });

  const [fieldVisibility, setFieldVisibility] = useState({
    hasBirthStateProvince: false,
    // Add more fields if needed
  });

  const CallSwitch = () => {
    setCallSwitch(() => !callSwitch);
  };

  //additionalFirstName, additionalLastName , telecodeFirstName ,telecodeLastName ,gender, maritalStatus , birthDate, birthCity , birthStateProvince , birthCountryInput
  const schema = yup
    .object({
      firstName: yup.string().required("First Name Required!").min(2),
      lastName: yup.string().required().min(2),
      userEmail: yup.string().required().email(),

      // additionalFirstName: yup.string().required().min(2),
      additionalFirstName: yup.string().when("hasAdditionalNames", {
        is: true,
        then: yup.string().required("Must enter"),
        otherwise: yup.string(), // or any other validation rules for when it's false
      }),
      additionalLastName: yup.string().when("hasAdditionalNames", {
        is: true,
        then: yup.string().required("Must enter").min(2),
        otherwise: yup.string(), // or any other validation rules for when it's false
      }),
      telecodeFirstName: yup.string().when("hasTelecode", {
        is: true,
        then: yup.string().required("Must enter"),
        otherwise: yup.string(), // or any other validation rules for when it's false
      }),
      telecodeLastName: yup.string().when("hasTelecode", {
        is: true,
        then: yup.string().required("Must enter"),
        otherwise: yup.string(), // or any other validation rules for when it's false
      }),
      birthCity: yup.string().required().min(2),

      birthStateProvince: yup.string().when("hasBirthStateProvince", {
        is: false,
        then: yup.string().required("Birth State/Province Required!").min(2),
      }),
      fullName: yup.string().when("hasFullName", {
        is: false,
        then: yup.string().required("Full Name is  Required!").min(2),
      }),
      passportNumber: yup.string().required().min(2),
      passportBookNumber: yup.string().required().min(2),
      passportCity: yup.string().required().min(2),
    })
    .required();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleCheckboxChange = (fieldName) => {
    console.log("File name", fieldName);
    console.log("formData", formData);
    setFormData({
      ...formData,
      [fieldName]: !formData[fieldName],
    });

    // fieldName && register(fieldName);
  };

  const onSubmit = async (data) => {
    setFormData((formData) => ({ ...formData, ...data }));

    setCurrentStep(currentStep + 1);

    if (currentStep < 3) {
      // setCurrentStep(currentStep + 1);
    } else {
      // Final step, handle form submission
      console.log("Form data:", { ...formData, ...data });
    }

    console.log("Form data:", formData);
    // console.log("currentStep:", currentStep);

    setCurrentStep(currentStep + 1);
    // console.log("onSubmit");
    // //event.preventDefault();
    // console.log("onSubmit");
    // const result = await trigger();
    // //var data = new FormData(event.target);
    // console.log("data", event);
    // console.log("result", result);
    // if (!result) {
    // } else {
    // }
  };

  const nextStep = () => {
    handleSubmit((data) => {
      setFormData((formData) => {
        const updatedFormData = { ...formData, ...data };
        const isStepAlreadyCompleted = (formData.stepsCompleted || []).includes(
          currentStep
        );

        if (!isStepAlreadyCompleted) {
          return {
            ...updatedFormData,
            stepsCompleted: [...(formData.stepsCompleted || []), currentStep],
          };
        }

        return updatedFormData;
      });

      setCurrentStep(currentStep + 1);
    })();
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const renderFormFields = () => {
    switch (currentStep) {
      case 0:
        return (
          <FirstStep
            fieldVisibility={fieldVisibility}
            handleCheckboxChange={handleCheckboxChange}
            register={register}
            errors={errors}
            formData={formData}
          />
        );
      case 1:
        return (
          <Passport
            formData={formData}
            setFormData={setFormData}
            fieldVisibility={fieldVisibility}
            handleCheckboxChange={handleCheckboxChange}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <Contact
            fieldVisibility={fieldVisibility}
            handleCheckboxChange={handleCheckboxChange}
            register={register}
            errors={errors}
            formData={formData}
          />
        );
      case 3:
        return (
          <Trip
            fieldVisibility={fieldVisibility}
            handleCheckboxChange={handleCheckboxChange}
            register={register}
            errors={errors}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <UsContact
            fieldVisibility={fieldVisibility}
            handleCheckboxChange={handleCheckboxChange}
            register={register}
            errors={errors}
            formData={formData}
          />
        );
      case 5:
        return (
          <Family
            fieldVisibility={fieldVisibility}
            handleCheckboxChange={handleCheckboxChange}
            register={register}
            errors={errors}
            formData={formData}
          />
        );
      case 6:
        return (
          <Education
            fieldVisibility={fieldVisibility}
            handleCheckboxChange={handleCheckboxChange}
            register={register}
            errors={errors}
            formData={formData}
          />
        );
      case 7:
        return (
          <Security
            fieldVisibility={fieldVisibility}
            handleCheckboxChange={handleCheckboxChange}
            register={register}
            errors={errors}
            formData={formData}
          />
        );
      case 8:
        return (
          <Review
            fieldVisibility={fieldVisibility}
            handleCheckboxChange={handleCheckboxChange}
            register={register}
            errors={errors}
            formData={formData}
          />
        );

      default:
        return null;
    }
  };

  const jumpStep = (step) => {
    setCurrentStep(step);
  };
  const checkActiveStep = (step) => {
    return currentStep === step;
  };
  const checkFinishedStep = (step) => {
    return (formData.stepsCompleted || []).includes(step);

    console.log("formdata", formData);
    return false;
  };

  return (
    <div className="">
      <div className="flex items-center mt-8">
        <h2 className="intro-y text-lg font-medium mr-auto">
          {" "}
          U.S. VISA APPLICATION{" "}
        </h2>
      </div>
      {/* BEGIN: Wizard Layout */}
      <div className="intro-y box p-1 lg:p-5 sm:y-3 mt-5 bg-custom">
        <ul className="sa-stepper-container ">
          <li
            onClick={() => jumpStep(0)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(0),
              "sa-step-finished ": checkFinishedStep(0),
            })}
          >
            <span className="hidden lg:flex">Applicant Information</span>
            <span className=" lg:hidden">1</span>
          </li>
          <li
            onClick={() => jumpStep(1)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(1),
              "sa-step-finished ": checkFinishedStep(1),
            })}
          >
            <span className="hidden lg:flex"> Passport Information </span>
            <span className=" lg:hidden">2</span>
          </li>
          <li
            onClick={() => jumpStep(2)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(2),
              "sa-step-finished ": checkFinishedStep(2),
            })}
          >
            <span className="hidden lg:flex"> Contact Information</span>
            <span className=" lg:hidden">3</span>
          </li>
          <li
            onClick={() => jumpStep(3)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(3),
              "sa-step-finished ": checkFinishedStep(3),
            })}
          >
            <span className="hidden lg:flex"> Trip Details</span>
            <span className=" lg:hidden">4</span>
          </li>
          <li
            onClick={() => jumpStep(4)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(4),
              "sa-step-finished ": checkFinishedStep(4),
            })}
          >
            <span className="hidden lg:flex"> U.S Contact</span>
            <span className=" lg:hidden">5</span>
          </li>
          <li
            onClick={() => jumpStep(5)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(5),
              "sa-step-finished ": checkFinishedStep(5),
            })}
          >
            <span className="hidden lg:flex">Family Background</span>
            <span className=" lg:hidden">6</span>
          </li>
          <li
            onClick={() => jumpStep(6)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(6),
              "sa-step-finished ": checkFinishedStep(6),
            })}
          >
            <span className="hidden lg:flex"> Employment / Education</span>
            <span className=" lg:hidden">7</span>
          </li>
          <li
            onClick={() => jumpStep(7)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(7),
              "sa-step-finished ": checkFinishedStep(7),
            })}
          >
            <span className="hidden lg:flex">Security Questions</span>
            <span className=" lg:hidden">8</span>
          </li>
          <li
            onClick={() => jumpStep(8)}
            className={classnames({
              "sa-step": true,
              "sa-last-step": true,
              "sa-active-step": checkActiveStep(8),
              "sa-step-finished ": checkFinishedStep(8),
            })}
          >
            <span className="hidden lg:flex"> Review &amp; Certification</span>
            <span className=" lg:hidden">9</span>
          </li>
        </ul>
        <div className="sa-form-container p-3 lg:p-10">
          <form className="validate-form" onSubmit={onSubmit}>
            {renderFormFields()}

            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <button className="btn btn-lg" type="button" onClick={prevStep}>
                  Previous Step
                </button>
              )}
              {currentStep < 8 && (
                <button
                  type="button"
                  className="btn btn-lg btn-success text-white  py-3"
                  onClick={nextStep}
                >
                  Next Step
                </button>
              )}
              {currentStep === 8 && (
                <button
                  className="btn btn-lg btn-success text-white  py-3"
                  type="submit"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;

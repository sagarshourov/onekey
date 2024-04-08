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
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    hasAdditionalNames: false,
    hasTelecode: false,
    additionalFirstName: "",
    hasEverLostPassport: false,
    hasMultipleNationalities: false,
    hasMultiplePermanentResidents: false,
    lostpassports: [
      {
        id: Date.now(),
        passportNumber: "",
        passportIssueCountryInput: "",
        Explain: "",
      },
    ],
    nationalities: [
      {
        id: Date.now(),
        country: "",
        passportNumber: "",
        hasPassportNumber: false,
      },
    ],
    residents: [
      {
        id: Date.now(),
        permanentResidents: "",
      },
    ],
    hasSameMailingAddressAsHome: true,
    hasAdditionalPhoneNumbers: false,
    hasAdditionalEmails: false,
    hasAdditionalSocialMedia: false,
    hasOtherTravelers: false,
    travelingWithOrganization: false,
    haveYouEverBeenToUS: false,
    hasIssuedVisa: false,
    hasBeenRefusedForVisa: false,

    hasAnyoneEverFilledOnBehalf: false,

    hasWorkedToOrganization: false,
    hasOtherSpeakingLanguages: false,
    belongsToTribe: false,
    hasImmediateRelativesInUS: false,

    fatherInfo: [
      {
        id: Date.now(),
        hasBirthDate: false,
        isInUS: false,
      },
    ],
    motherInfo: [
      {
        id: Date.now(),
        hasBirthDate: false,
        isInUS: false,
      },
    ],

    // trip details

    travelers: [
      {
        id: Date.now(),
        firstName: "",
        lastName: "",
        relation: "",
      },
    ],
    previousVisit: [
      {
        id: Date.now(),
        arrivalDate: "",
        stayLengthValue: "",
        stayLengthType: "",
      },
    ],
    USDriverLicenses: [
      {
        id: Date.now(),
        licenseId: "",
        state: "",
      },
    ],

    //hasImmediateRelativesInUS: false,
    // hasWorkedToOrganization: false,
    //hasOtherSpeakingLanguages: false, // duplicate
    hasBeenPreviouslyEmployed: false,
    hasAttendedEducationalInstitutions: false,
    additionalPhones: [
      {
        id: Date.now(),
        number: "",
      },
    ],
    additionalEmails: [
      {
        id: Date.now(),
        email: "",
      },
    ],
    additionalSocials: [
      {
        id: Date.now(),
        platform: "",
        username: "",
      },
    ],
    purposes: [
      {
        id: Date.now(),
        mainPurpose: "",
        specify: "",
      },
    ],

    immediateRelatives: [
      {
        id: Date.now(),
        firstName: "",
        lastName: "",
        relation: "",
        status: "",
        hasImmediateRelativesInUS: false,
      },
    ],
    additionalLanguage: [
      {
        id: Date.now(),
        otherSpeakingLanguages: "",
      },
    ],
    previousJobs: [
      {
        id: Date.now(),
        employer: "",
      },
    ],
    hasTraveledWithinFiveYear: false,
    travelCountries: [
      {
        id: Date.now(),
        country: "",
      },
    ],
  });

  const [fieldVisibility, setFieldVisibility] = useState({
    hasBirthStateProvince: false,
    // Add more fields if needed
  });

  //additionalFirstName, additionalLastName , telecodeFirstName ,telecodeLastName ,gender, maritalStatus , birthDate, birthCity , birthStateProvince , birthCountryInput
  let schema = {};
  if (currentStep == 0) {
    schema = yup
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
      })
      .required();
  } else if (currentStep == 1) {
    schema = yup
      .object({
        passportNumber: yup.string().required().min(2),
        passportBookNumber: yup.string().required().min(2),
        passportCity: yup.string().required().min(2),
        nationalities: yup.array().of(
          yup.object().shape({
            country: yup.string().required("Country is required"),
            passportNumber: yup
              .string()
              .required("Passport number is required"),
          })
        ),
      })
      .required();
  } else if (currentStep == 2) {
   // homeAddress.streetAddress
    schema = yup
      .object({
        streetAddress: yup.string().required().min(2),
      })
      .required();
  } else if (currentStep == 3) {
    schema = yup.object({}).required();
  } else if (currentStep == 4) {
    schema = yup.object({}).required();
  } else if (currentStep == 5) {
    schema = yup.object({}).required();
  } else if (currentStep == 6) {
    schema = yup.object({}).required();
  } else if (currentStep == 7) {
    schema = yup.object({}).required();
  } else if (currentStep == 8) {
    schema = yup.object({}).required();
  }


  const {
    register,
    handleSubmit,
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

  const nextStep = () => {
    console.log("next atep", currentStep);
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
      console.log("current step _on submit", currentStep);
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
            setFormData={setFormData}
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
            setFormData={setFormData}
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
            setFormData={setFormData}
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
            setFormData={setFormData}
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
            setFormData={setFormData}
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
            setFormData={setFormData}
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
          <form className="validate-form">
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

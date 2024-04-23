import "./form.css";
import classnames from "classnames";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import FirstStep from "../../newform/steps/FirstStep";
import Passport from "../../newform/passport/Passport";
import Contact from "../../newform/contact/Contact";
import UsContact from "../../newform/uscontact/UsContact";
import Trip from "../../newform/trip/Trip";

import Family from "../../newform/family/Family";
import Security from "../../newform/security/Security";
import Education from "../../newform/education/Education";
import PersonalInformation from "../../newform/PersonalInformation/PersonalInformation";
import PerviousTravels from "../../newform/PerviousTravels/PerviousTravels";
import TravelCompanions from "../../newform/TravelCompanions/TravelCompanions";
import AdditionalContact from "../../newform/AdditionalContact/AdditionalContact";

import ThankYou from "../../newform/ThankYou/ThankYou";

const DsViewData = (props) => {
  const { data } = props;

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState([]);

  const [stepsCompleted, setstepsCompleted] = useState([]);

  const { register, getValues, clearErrors, setValue } = useForm({
    defaultValues: data,
  });

  const nextStep = () => {
    //  console.log("getformData", getValues());

    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const renderFormFields = () => {
    switch (currentStep) {
      case 0:
        return (
          <FirstStep
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );
      case 1:
        return (
          <PersonalInformation
            formData={getValues()}
            setFormData={setValue}
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
          />
        );

      case 2:
        return (
          <Trip
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );

      case 3:
        return (
          <TravelCompanions
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );

      case 4:
        return (
          <PerviousTravels
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );

      case 5:
        return (
          <Contact
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );

      case 6:
        return (
          <Passport
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );

      case 7:
        return (
          <UsContact
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );

      case 8:
        return (
          <Family
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );
      case 9:
        return (
          <Education
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );
      case 10:
        return (
          <Security
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );
      case 11:
        return (
          <AdditionalContact
            handleCheckboxChange={clearErrors}
            register={register}
            errors={errors}
            formData={getValues()}
            setFormData={setValue}
          />
        );
      case 12:
        return <ThankYou />;
      default:
        return null;
    }
  };

  const jumpStep = (step) => {
    setCurrentStep(step);
  };
  const checkActiveStep = (step) => {
    // console.log("s", getValues());
    return currentStep === step;
  };
  const checkFinishedStep = (step) => {
    return (stepsCompleted || []).includes(step);
  };

  return (
    <div className="">
      {/* BEGIN: Wizard Layout */}
      <div className="intro-y ">
        {/* <ul className="sa-stepper-container ">
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
            <span className="hidden lg:flex"> Personal Information </span>
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
            <span className="hidden lg:flex"> Trip Details</span>
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
            <span className="hidden lg:flex"> Travel Companions </span>
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
            <span className="hidden lg:flex"> Pervious Travels </span>
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
            <span className="hidden lg:flex"> Contact Information</span>
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
            <span className="hidden lg:flex"> Passport Information </span>
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
            <span className="hidden lg:flex"> U.S Contact</span>
            <span className=" lg:hidden">8</span>
          </li>
          <li
            onClick={() => jumpStep(8)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(8),
              "sa-step-finished ": checkFinishedStep(8),
            })}
          >
            <span className="hidden lg:flex">Family Background</span>
            <span className=" lg:hidden">9</span>
          </li>
          <li
            onClick={() => jumpStep(9)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(9),
              "sa-step-finished ": checkFinishedStep(9),
            })}
          >
            <span className="hidden lg:flex"> Employment / Education</span>
            <span className=" lg:hidden">10</span>
          </li>
          <li
            onClick={() => jumpStep(10)}
            className={classnames({
              "sa-step": true,
              "sa-active-step": checkActiveStep(10),
              "sa-step-finished ": checkFinishedStep(10),
            })}
          >
            <span className="hidden lg:flex">Security Questions</span>
            <span className=" lg:hidden">11</span>
          </li>
          <li
            onClick={() => jumpStep(11)}
            className={classnames({
              "sa-step": true,
              "sa-last-step": true,
              "sa-active-step": checkActiveStep(11),
              "sa-step-finished ": checkFinishedStep(11),
            })}
          >
            <span className="hidden lg:flex"> Additional Point of Contact</span>
            <span className=" lg:hidden">12</span>
          </li>
        </ul> */}
        <div className="sa-form-container p-3">
          <div className="intro-y box p-5">
            <FirstStep
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <PersonalInformation
              formData={getValues()}
              setFormData={setValue}
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <Trip
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <TravelCompanions
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <PerviousTravels
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <Contact
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <Passport
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <UsContact
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <Family
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <Education
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <Security
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
          <div className="intro-y box p-5 mt-5">
            <AdditionalContact
              handleCheckboxChange={clearErrors}
              register={register}
              errors={errors}
              formData={getValues()}
              setFormData={setValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DsViewData;

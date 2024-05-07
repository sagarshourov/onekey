import "./form.css";
import classnames from "classnames";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import FirstStep from "./steps/FirstStep";
import Passport from "./passport/Passport";
import Contact from "./contact/Contact";
import UsContact from "./uscontact/UsContact";
import Trip from "./trip/Trip";

import Family from "./family/Family";
import Security from "./security/Security";
import Education from "./education/Education";
import axios from "axios";
import { firstStepSchema } from "./steps/validationSchemas"; // Import the schema from the separate file

import { PersonalInfoSchema } from "./PersonalInformation/PersonalInfoSchema";

import { travelCompanionsSchema } from "./TravelCompanions/TravelCompanionsSchema";

import { passportSchema } from "./passport/PassportSchema";
import { contactSchema } from "./contact/contactSchema";
import { educationSchema } from "./education/educationSchema";

import { familySchema } from "./family/familySchema";

import { usContactSchema } from "./uscontact/usContactSchema";

import { tripSchema } from "./trip/tripSchema";

import { PerviousTravelsSchema } from "./PerviousTravels/PerviousTravelsSchema";
import { AdditionalContactSchema } from "./AdditionalContact/AdditionalContactSchema";
import { securitySchema } from "./security/securitySchema";
import { getDsState } from "../../state/admin-atom";
import { useRecoilValueLoadable, useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import PerviousTravels from "./PerviousTravels/PerviousTravels";
import TravelCompanions from "./TravelCompanions/TravelCompanions";
import { loginState } from "../../state/login-atom";
import AdditionalContact from "./AdditionalContact/AdditionalContact";

import ThankYou from "./ThankYou/ThankYou";
import { getAdmin } from "../../configuration";
const Main = (props) => {
  const login = useRecoilValue(loginState);

  console.log("login", login);

  let { id } = useParams();
  const data = useRecoilValueLoadable(getDsState([login.userId, id]));

  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    hasAdditionalNames: true,
    hasTelecode: true,
    currentStep: 0,
    stepsCompleted: [],
    userEmail: "",
    maritalStatus: "",
    additionalFirstName: "",
    hasEverLostPassport: false,
    hasMultipleNationalities: false,
    hasMultiplePermanentResidents: false,
    lostpassports: [
      {
        id: Date.now(),
        passportNumber: null,
        passportIssueCountryInput: null,
        Explain: null,
        passportNumber_check: false,
      },
    ],
    nationalities: [
      {
        id: Date.now(),
        country: "",
        passportNumber: 0,
        hasPassportNumber: false,
      },
    ],
    residents: [{ id: Date.now(), permanentResidents: null, country: "" }],
    hasSameMailingAddressAsHome: true,
    hasAdditionalPhoneNumbers: false,
    hasAdditionalEmails: false,
    hasAdditionalSocialMedia: true,
    hasOtherTravelers: false,
    travelingWithOrganization: true,
    haveYouEverBeenToUS: true,
    hasIssuedVisa: true,
    hasBeenRefusedForVisa: true,
    hasAnyoneEverFilledOnBehalf: true,
    hasWorkedToOrganization: true,
    hasOtherSpeakingLanguages: true,
    belongsToTribe: true,
    hasImmediateRelativesInUS: false,
    fatherInfo: [
      {
        id: Date.now(),
        hasBirthDate: true,
        isInUS: true,
        status: "",
      },
    ],
    motherInfo: [
      {
        id: Date.now(),
        hasBirthDate: true,
        isInUS: true,
        status: "",
      },
    ],
    travelers: [
      {
        id: Date.now(),
        firstName: "",
        lastName: "",
        relation: "",
      },
      {
        id: Date.now(),
        lastName: "",
        firstName: "",
        relation: "",
      },
    ],
    previousVisit: [
      {
        id: Date.now(),
        arrivalDate: {
          dayIndex: 0,
          monthIndex: 0,
          yearIndex: 0,
        },
        stayLengthValue: 0,
        stayLengthType: "",
      },
      {
        id: Date.now(),
        arrivalDate: {
          dayIndex: 0,
          monthIndex: 0,
          yearIndex: 0,
        },
        stayLengthValue: 0,
        stayLengthType: "",
      },
    ],
    USDriverLicenses: [
      {
        id: 0,
        licenseId: 0,
        state: null,
        licenseId_checkbox: false,
      },
    ],
    hasBeenPreviouslyEmployed: true,
    hasAttendedEducationalInstitutions: true,
    personPayingForTrip: "",
    additionalPhones: [{ id: Date.now(), phoneNumber: null }],
    additionalEmails: [{ id: Date.now(), email: null }],
    socialsMedia: [{ id: Date.now(), platform: 0, username: 0 }],
    additionalSocials: [{ id: Date.now(), platform: 0, username: 0 }],
    purposes: [{ id: Date.now(), mainPurpose: 0, specify: null }],
    immediateRelatives: [
      {
        id: Date.now(),
        firstName: "",
        lastName: "",
        relation: "",
        status: null,
        hasImmediateRelativesInUS: true,
        motherInfo: { statusInput: "" },
      },
    ],
    additionalLanguage: [{ id: Date.now(), otherSpeakingLanguages: "" }],
    previousJobs: [
      {
        id: Date.now(),
        employer: "",
        streetAddress: "",
        streetAddress2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        jobPhoneNumber: "",
        title: "",
        jobAddress: { state: "" },
        jobStartDate: {
          dayIndex: 0,
          monthIndex: 0,
          yearIndex: 0,
        },
      },
    ],
    educationalInstitution: [
      {
        id: Date.now(),
        name: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        jobPhoneNumber: "",
        startDate: { dayIndex: 0, monthIndex: 0, yearIndex: 0 },
        endDate: { dayIndex: 0, monthIndex: 0, yearIndex: 0 },
      },
    ],
    hasTraveledWithinFiveYear: true,
    hasSameAddressAsMailingOrHome: true,
    travelCountries: [
      { id: Date.now(), country: null, jobAddress: { country: "" } },
      { id: Date.now(), country: null, jobAddress: { country: "" } },
    ],
    firstName: "",
    lastName: "",
    fullName: "",
    hasFullName: false,
    gender: 0,
    birthDate: { dayIndex: 1, monthIndex: 0, yearIndex: 0 },
    birthCity: "",
    birthStateProvince: "",
    hasBirthStateProvince: false,
    birthCountry: "",
    nationalId: "",
    nationalId_check: false,
    USSocialSecurityAreaNumber: "",
    USSocialSecurityAreaNumber_check: true,
    USTaxpayerIdNumber: "",
    USTaxpayerIdNumber_check: false,
    reasonForTripToUSSelect: { value: "" },
    hasTravelPlansInput: "",
    addInfo: {
      lastName: "",
      firstName: "",
      address: "",
      city: "",
      postCode: "",
      country: "",
      phone: "",
      email: "",
      state: "",
    },
    secondInfo: {
      lastName: "",
      firstName: "",
      address: "",
      city: "",
      postCode: "",
      country: "",
      phone: "",
      email: "",
      state: "",
    },
    form_id: 0,
    fatherInfo_firstname_checkbox: false,
    fatherInfo_lastName: "",
    fatherInfo_lastname_checkbox: false,
    motherInfo_firstName: "",
    motherInfo_firstname_checkbox: false,
    motherInfo_lastName: "",
    motherInfo_lastname_checkbox: false,
    partnerInfo: {
      firstName: "",
      birthDate: { dayIndex: 0, monthIndex: 0, yearIndex: 0 },
      nationalityCountryInput: "",
      birthCity: "",
      birthCity_checkbox: false,
      birthCountry: "",
      addressType: "",
    },
    speakingLanguagesInput: "",
    fatherInfo_firstName: "",
    telecodeFirstName: "",
    telecodeLastName: "",
    additionalLastName: "",
    hasUSDriversLicense: true,
    licenseId_checkbox: false,
    lastVisa: {
      postName: "",
      visaNumber: 0,
      year: 0,
      explain: "",
      visaCancelledExplain: "",
    },
    issueDate: { dayIndex: 0, monthIndex: 0, yearIndex: 0 },
    expirationDate: { dayIndex: 0, monthIndex: 0, yearIndex: 0 },
    visaNumber_checkbox: false,
    hasSameType: true,
    sameCountry: true,
    tenPrinted: true,
    hadVisaLost: true,
    hasVisaCancelled: true,
    clearanceReceived: true,
    homeAddress: [{ streetAddress: 0, city: 0, state: 0, zipCode: 0 }],
    state_checkbox: false,
    ZipCode_checkbox: false,
    phonePrimary: 0,
    phoneSecondary: 0,
    phoneWork: 0,
    passportType: 0,
    passportNumber: 0,
    passportBookNumber: 0,
    passportBookNumber_checkbox: false,
    passportIssueCountry: "",
    passportCity: 0,
    passportState: 0,
    passportCountry: "",
    passportIssueDate: {
      dayIndex: 0,
      monthIndex: 0,
      yearIndex: 0,
    },
    passportExpiryDate: {
      dayIndex: 0,
      monthIndex: 0,
      yearIndex: 0,
    },
    nationalityInput: "",
    us_contact: 0,
    uscontact: {
      person: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: 0,
        streetAddress: "",
        streetAddress2: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      },
    },
    fatherInfo_birthDate: {
      dayIndex: 0,
      monthIndex: 0,
      yearIndex: 0,
    },
    tribeName: "",
    organizations: "",
    jobTypeInput: "",
    jobEmployer: "",
    jobAddress: {
      streetAddress: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    jobAddress_state_checkbox: false,
    jobAddress_zipCode_checkbox: false,
    jobPhoneNumber: "",
    jobStartDate: { dayIndex: 0, monthIndex: 0, yearIndex: 0 },
    jobMonthlyIncome: "",
    hasJobMonthlyIncome_checkbox: false,
    jobDescribe: "",
    zipCode_checkbox: false,
    hasServedMilitary: true,
    militaryExperiences: [
      {
        country: "",
        service: "",
        rank: "",
        speciality: "",
        dateStart: { dayIndex: 1, monthIndex: 0, yearIndex: 1970 },
        dateEnd: { dayIndex: 1, monthIndex: 4, yearIndex: 1974 },
      },
    ],
    hasExplosiveExperience: true,
    hasExplosiveExperienceExplain: "",
    insurgentOrganizationMember: true,
    insurgentOrganizationMemberExplain: null,
    communicableDisease: true,
    communicableDiseaseExplain: null,
    disorder: true,
    disorderExplain: null,
    moneyLaundering: true,
    moneyLaunderingExplain: null,
    prostitution: true,
    prostitutionExplain: null,
    controlledSubstances: true,
    controlledSubstancesExplain: null,
    arrested: true,
    arrestedExplain: null,
    drugAddict: true,
    drugAddictExplain: null,
    trafficking: true,
    traffickingExplain: null,
    assistedTrafficking: true,
    assistedTraffickingExplain: null,
    relativeTrafficking: true,
    relativeTraffickingExplain: null,
    illegalActivity: true,
    illegalActivityExplain: "",
    terroristActivity: true,
    terroristActivityExplain: "",
    financingTerrorists: true,
    financingTerroristsExplain: null,
    terroristMember: true,
    terroristMemberExplain: null,
    genocide: true,
    genocideExplain: null,
    torture: true,
    tortureExplain: null,
    killings: true,
    killingsExplain: "",
    childSoldier: true,
    childSoldierExplain: "",
    religiousFreedom: true,
    religiousFreedomExplain: "",
    sterilization: true,
    sterilizationExplain: "",
    transplantation: true,
    transplantationExplain: "",
    visaFraud: true,
    visaFraudExplain: "",
    withheldCustody: true,
    withheldCustodyExplain: "",
    voted: true,
    votedExplain: "",
    avoidTax: true,
    avoidTaxExplain: "",
    hasTerroristRelative: true,
    hasTerroristRelativeExplain: "",
    wasDeported: true,
    wasDeportedExplain: "",
  });

  // const [formData, setFormData] = useState({
  //   hasAdditionalNames: false,
  //   hasTelecode: false,
  //   currentStep: 0,
  //   stepsCompleted: [],
  //   userEmail: "",
  //   maritalStatus: "",
  //   additionalFirstName: "",
  //   hasEverLostPassport: false,
  //   hasMultipleNationalities: false,
  //   hasMultiplePermanentResidents: false,
  //   lostpassports: [
  //     {
  //       id: Date.now(),
  //       passportNumber: "",
  //       passportIssueCountryInput: "",
  //       Explain: "",
  //       passportNumber_check: false,
  //     },
  //   ],
  //   nationalities: [
  //     {
  //       id: Date.now(),
  //       country: "",
  //       passportNumber: "",
  //       hasPassportNumber: false,
  //     },
  //   ],
  //   residents: [
  //     {
  //       id: Date.now(),
  //       country: "",
  //     },
  //   ],
  //   hasSameMailingAddressAsHome: true,
  //   hasAdditionalPhoneNumbers: false,
  //   hasAdditionalEmails: false,
  //   hasAdditionalSocialMedia: false,
  //   hasOtherTravelers: false,
  //   travelingWithOrganization: false,
  //   haveYouEverBeenToUS: false,
  //   hasIssuedVisa: false,
  //   hasBeenRefusedForVisa: false,
  //   hasAnyoneEverFilledOnBehalf: false,
  //   hasWorkedToOrganization: false,
  //   hasOtherSpeakingLanguages: false,
  //   belongsToTribe: false,
  //   hasImmediateRelativesInUS: false,

  //   fatherInfo: [
  //     {
  //       id: Date.now(),
  //       hasBirthDate: false,
  //       isInUS: false,
  //       stayLengthType:'',
  //       firstName:'',
  //       lastName:'',

  //     },
  //   ],
  //   motherInfo: [
  //     {
  //       id: Date.now(),
  //       hasBirthDate: false,
  //       isInUS: false,
  //       stayLengthType:'',
  //       firstName:'',
  //       lastName:'',

  //     },
  //   ],

  //   // trip details

  //   travelers: [
  //     {
  //       id: Date.now(),
  //       firstName: "",
  //       lastName: "",
  //       relation: "",
  //     },
  //   ],
  //   previousVisit: [
  //     {
  //       id: Date.now(),
  //       arrivalDate: "",
  //       stayLengthValue: "",
  //       stayLengthType: "",
  //     },
  //   ],
  //   USDriverLicenses: [
  //     {
  //       id: Date.now(),
  //       licenseId: "",
  //       state: "",
  //       licenseId_checkbox: false,
  //     },
  //   ],
  //   hasBeenPreviouslyEmployed: false,
  //   hasAttendedEducationalInstitutions: false,
  //   personPayingForTrip: "self",
  //   additionalPhones: [
  //     {
  //       id: Date.now(),
  //       phoneNumber: "",
  //     },
  //   ],
  //   additionalEmails: [
  //     {
  //       id: Date.now(),
  //       email: "",
  //     },
  //   ],

  //   socialsMedia: [
  //     {
  //       id: Date.now(),
  //       platform: "",
  //       username: "",
  //     },
  //   ],

  //   additionalSocials: [
  //     {
  //       id: Date.now(),
  //       platform: "",
  //       username: "",
  //     },
  //   ],
  //   purposes: [
  //     {
  //       id: Date.now(),
  //       mainPurpose: "",
  //       specify: "",
  //     },
  //   ],

  //   immediateRelatives: [
  //     {
  //       id: Date.now(),
  //       firstName: "",
  //       lastName: "",
  //       relation: "",
  //       status: "",
  //       hasImmediateRelativesInUS: false,
  //     },
  //   ],
  //   additionalLanguage: [
  //     {
  //       id: Date.now(),
  //       otherSpeakingLanguages: "",
  //     },
  //   ],
  //   previousJobs: [
  //     {
  //       id: Date.now(),
  //       employer: "",
  //     },
  //   ],
  //   educationalInstitution: [
  //     {
  //       id: Date.now(),
  //       name: "",
  //     },
  //   ],

  //   hasTraveledWithinFiveYear: false,
  //   hasSameAddressAsMailingOrHome: true,
  //   travelCountries: [
  //     {
  //       id: Date.now(),
  //       country: "",
  //     },
  //   ],
  // });
  const [loading, setLoading] = useState(true);

  const validationSchemas = [
    firstStepSchema,
    PersonalInfoSchema,
    tripSchema,
    travelCompanionsSchema,
    PerviousTravelsSchema,
    contactSchema,
    passportSchema,
    usContactSchema,
    familySchema,
    educationSchema,
    securitySchema,
    AdditionalContactSchema,
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
    setValue,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemas[currentStep]),
    defaultValues: formData,
  });

  useEffect(() => {
    if (data.state === "hasValue" && loading) {
      setLoading(false);
      // console.log("after loaded", JSON.parse(data.contents.data.content));
      // var dat = JSON.parse(data.contents.data.content);

      data.contents &&
        data.contents.data &&
        data.contents.data.content &&
        reset(JSON.parse(data.contents.data.content));

      data.contents &&
        data.contents.data &&
        data.contents.data.content &&
        setFormData(JSON.parse(data.contents.data.content));

      //console.log("after ", JSON.parse(data.contents.data.content));
    }

    // console.log("before loaded", data.contents.data.content );
  });

  const headers = {
    Authorization: `Bearer ${login?.token}`,
    ContentType: "application/json",
  };

  const submitDataServer = async (data) => {
    const URL = getAdmin() + "save_ds_form";

    data.form_id = id;

    data.currentStep = currentStep;

    console.log("form data", data);
    try {
      const response = await axios.post(URL, data, {
        headers,
      });

      if (response?.data?.success) {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      if (!err?.response?.data?.success) {
        //console.log("Err", err?.response?.data?.message.email[0]);

        console.log(err);
      }
    }
  };

  const nextStep = () => {
    //  console.log("getformData", getValues());

    console.log("errors next submit", errors);
    handleSubmit((data) => {
      // setFormData((formData) => {
      //   const updatedFormData = { ...formData, ...data };
      //   const isStepAlreadyCompleted = (formData.stepsCompleted || []).includes(
      //     currentStep
      //   );

      //   if (!isStepAlreadyCompleted) {
      //     return {
      //       ...updatedFormData,
      //       stepsCompleted: [...(formData.stepsCompleted || []), currentStep],
      //     };
      //   }

      //   return updatedFormData;
      // });

      console.log("after submit", formData);

      if (formData.complete == 1) {
        setCurrentStep(currentStep + 1);
        var nextStep = getValues().currentStep + 1;
        setValue("currentStep", nextStep, {
          shouldValidate: true,
        });
      } else {
        const isStepAlreadyCompleted = (
          getValues().stepsCompleted || []
        ).includes(getValues().currentStep);

        if (!isStepAlreadyCompleted) {
          setValue(
            "stepsCompleted",
            [...(getValues().stepsCompleted || []), getValues().currentStep],
            {
              shouldValidate: true,
            }
          );
        }

        //  console.log("current step _on submit", currentStep);

        submitDataServer(getValues());

        setCurrentStep(currentStep + 1);
        var nextStep = getValues().currentStep + 1;
        setValue("currentStep", nextStep, {
          shouldValidate: true,
        });
      }
    })();
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);

    var prevStep = getValues().currentStep - 1;

    setValue("currentStep", prevStep, {
      shouldValidate: true,
    });
  };
  const renderFormFields = () => {
    switch (getValues().currentStep) {
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

    setValue("currentStep", step, {
      shouldValidate: true,
    });
  };
  const checkActiveStep = (step) => {
    // console.log("s", getValues());
    return getValues().currentStep === step;
  };
  const checkFinishedStep = (step) => {
    return (getValues().stepsCompleted || []).includes(step);
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
        </ul>
        <div className="sa-form-container p-3 lg:p-10">
          <form className="validate-form">
            {renderFormFields()}

            <div className="flex justify-between mt-8">
              {getValues().currentStep > 0 && getValues().currentStep < 12 && (
                <button className="btn btn-lg" type="button" onClick={prevStep}>
                  Previous Step
                </button>
              )}
              {getValues().currentStep < 11 && (
                <button
                  type="button"
                  className="btn btn-lg btn-success text-white  py-3"
                  onClick={nextStep}
                >
                  Next Step
                </button>
              )}
              {getValues().currentStep === 11 && (
                <button
                  className="btn btn-lg btn-success text-white  py-3"
                  type="button"
                  onClick={nextStep}
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

import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";
const Review = (props) => {
  const [date, setDate] = useState("");
  const [fieldVisibility, setFieldVisibility] = useState({
    hasAdditionalNames: false,
    hasBirthStateProvince: false,
    // Add more fields if needed
  });
  const handleCheckboxChange = (fieldName) => {
    setFieldVisibility({
      ...fieldVisibility,
      [fieldName]: !fieldVisibility[fieldName],
    });
  };
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Consent and Declaration </h2>

      <hr className="my-5 sa-border-primary" />

     
    </>
  );
};

export default Review;

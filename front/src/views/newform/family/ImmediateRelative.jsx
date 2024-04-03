import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";

import InlineDrop from "../elements/InlineDrop";

const ImmediateRelative = (props) => {
  // console.log("key", props?.check);
  return (
    <>
      {props.isVisible && (
        <div className="mt-5 border p-5  border-blue-200">
          <h3 className="text-xl font-bold">Immediate relative #1 </h3>

          <div className="mt-5">
            <InlineInputText
              title={"immediateRelatives[0].firstName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label=" First (Given) Name(s)"
              isVisible={true}
              disabled={false}
              fieldVisibility={props.fieldVisibility}
              handleCheckboxChange={props.handleCheckboxChange}
            />

            <InlineInputText
              title={"immediateRelatives[0].lastName"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label=" Family Name(s)"
              isVisible={true}
              disabled={false}
              fieldVisibility={props.fieldVisibility}
              handleCheckboxChange={props.handleCheckboxChange}
            />

            <InlineDrop
              isVisible={true}
              register={props.register}
              errors={props.errors}
              title={"motherInfo.relation"}
              data={[
                { label: "SPOUSE", value: "SPOUSE" },
                { label: "FIANCÉ/FIANCÉE", value: "FIANCE_FIANCEE" },
                { label: "CHILD", value: "CHILD" },
                { label: "SIBLING", value: "SIBLING" },
              ]}
              label="Relationship to You"
              inline={true}
            />
            <InlineDrop
              isVisible={true}
              register={props.register}
              errors={props.errors}
              title={"motherInfo.statusInput"}
              inline={true}
              data={[
                { label: "U.S. CITIZEN", value: "US_CITIZEN" },
                {
                  label: "U.S. LEGAL PERMANENT RESIDENT (LPR)",
                  value: "US_PERMANENT_RESIDENT",
                },
                { label: "NONIMMIGRANT", value: "NONIMMIGRANT" },
                { label: "OTHER/I DON'T KNOW", value: "OTHER_OR_UNKNOWN" },
              ]}
              label="Relative's status"
            />
          </div>
          <button className="btn">+ Add immediate relative</button>
        </div>
      )}
    </>
  );
};

export default ImmediateRelative;

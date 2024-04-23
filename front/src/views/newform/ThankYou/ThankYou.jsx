import { useState } from "react";
const ThankYou = (props) => {
  const [date, setDate] = useState("");

  return (
    <>
      <hr className="my-5 sa-border-primary" />
      <h2 className="mb-5 text-xl font-bold text-center">
        {" "}
        Thank you. Your form has been submitted and your consultant has been
        notified.{" "}
      </h2>

      <hr className="my-5 sa-border-primary" />
    </>
  );
};

export default ThankYou;

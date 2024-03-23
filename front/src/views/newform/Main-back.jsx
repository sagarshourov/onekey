const NewForm = () => {
  const next = () => {
    console.log("next");
  };

  return (
    <>
      <div className="flex">
        {/* steps  */}
        <div className="col">Next 1</div>
        <div className="col">Next 2</div>
        <div className="col">Next 3</div>

        <div className="container">
          {/* Container */}

          <h1>Step 1</h1>
          <h1>Step 2</h1>
          <h1>Step 3</h1>

          <div className="container">
            {/* Step 1 */}
            <form action="" className="form"></form>
          </div>
          <div className="container-2">
            {/* Step 2 */}
            <form className="form">
              <h3> General Information </h3>
              <h4>Email Address</h4>
              <input className="form-control" value="E-mail Address" />
              <br />
              <h4>Email Address</h4>
              <input className="form-control" value="E-mail Address" />
            </form>
          </div>
          <div className="container-3">
            <h4>Applicant Information</h4>
            <label>First name(s) or given name(s)</label>

            {/* Step 3 */}
            <form className="form"></form>

            <label>Family name(s) or last name(s)</label>

            <label>Full name in your native alphabet</label>

            <label>
              Have you ever gone by other names, such as maiden, religious,
              professional, or alias names?
            </label>

            <label>
              Have you used a four-letter code to represent your name in a
              communication system?
            </label>
            <label>Gender</label>

            <label>Marital Status</label>
            <label>Date of Birth</label>

            <label>City of Birth</label>
            <label>State/region/province of birthplace</label>

            <label>Country of Birth</label>

            <h1> Passport Information </h1>

            <label>Type of passport/travel document</label>
            <label>Passport/Travel Document Number</label>
            <label>Passport Book Number</label>
            <label>
              Issuing country/authority of the passport/travel document
            </label>
            <label>City</label>
            <label>State/Region/Province</label>
            <label>Country/Region</label>
            <label>Passport Issuance Date</label>
            <label>Passport Expiration Date</label>
            <label>Have you ever lost a passport or had one stolen?</label>
            <label>Country/Region of Origin (Nationality)</label>

            <h1> Additional Nationalities </h1>
            <label>
              Do you currently hold or have you ever held any nationality other
              than the one indicated above?
            </label>

            <label>Other Country/Region of Origin (Nationality)</label>
            <label>
              Do you hold a passport for the other country/region of origin
              (nationality) above?
            </label>
            <label>Passport/Travel Document Number</label>
            <label>
              Are you a permanent resident of a country/region other than your
              country/region of origin (nationality) as indicated above?
            </label>
            <label>Other Permanent Resident Country/Region</label>

            <label>National Identification Number</label>
            <label>U.S. Social Security area number</label>
            <label>U.S. Social Security Group Number</label>
            <label>U.S. Social Security Serial Number</label>

            <label>U.S. Taxpayer ID Number</label>

            <h1> Contact Information </h1>

            <label>Street address (Line 1)</label>
            <label>Street address (Line 2)</label>

            <label>City</label>
            <label>State/Province</label>
            <label>Postal Zone/Zip Code</label>
            <label>Country/Region</label>
            <label>
              Is your Mailing Address the same as your Home Address?
            </label>
            <label>Primary Phone Number</label>
            <label>Secondary Phone Number</label>
            <label>Work Phone Number</label>
            <label>
              Have you used any other phone number in the last five years?
            </label>
            <label>
              Have you used any other email address in the last five years?
            </label>
            <label>1. Additional Phone Number</label>
            <label>
              Have you used any other email address in the last five years?
            </label>
            <label>Additional email address</label>
            <label>Social media provider/Platform</label>

            <label>
              Do you wish to provide information about any other websites or
              applications you have used within the last five years to create or
              share content, such as photos, videos, or status updates?
            </label>

            <h1>Trip Details</h1>
            <label>
              Choose an embassy location for your visa application interview
            </label>
            <label>Reason for the Trip</label>
            <label>Purpose of the trip to the US #1</label>
            <label>Purpose of the trip to the US</label>

            <label>Have you made any specific travel plans yet?</label>
            <label>Will anyone be traveling with you?</label>
            <label>Have you ever visited or traveled to the United States before?</label>
            <label>Have you ever been issued a U.S. visa before?</label>
            <label>Have you ever been denied a U.S. visa, entry to the United States, or withdrawn your application for entry at the port of entry?</label>
            <label>Has anyone filed an immigrant petition for you with the United States Citizenship and Immigration Service?</label>
            <label>Who is paying for the trip?</label>
            <label></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewForm;

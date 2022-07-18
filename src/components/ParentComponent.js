import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";
function ParentComponent() {

  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    console.log(firstName)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }
   

  return (
    <div>
 <Form
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleSubmit ={handleSubmit}
    />
    <DisplayData 
            firstName= {firstName}
            lastName= {lastName}
            submittedData={submittedData}
            errors={errors}
            />
    </div>
   
  );
}

export default ParentComponent;

import React from "react";

function DisplayData(props) {
  console.log(props.submittedData)
  const listOfSubmissions = props.submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });
   
  return (
    <div>
       {props.errors.length > 0
      ? props.errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
      <h3>List of submissions</h3>
      {listOfSubmissions}
      
    </div>
  );
}

export default DisplayData;
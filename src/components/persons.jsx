import React from "react";

const Persons = ({ match }) => {
  return (
    <h2>
      {" "}
      Id {match.params.id} and Age {match.params.age}{" "}
    </h2>
  );
};

export default Persons;

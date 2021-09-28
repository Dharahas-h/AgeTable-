import React, { Component } from "react";

const Filter = (props) => {
  const ages = [12, 13];
  return (
    <nav>
      <h4>Age</h4>
      <ul>
        {ages.map((a) => {
          return (
            <li
              className={
                a == props.ageFilter ? "btn btn-dark" : "btn btn-light"
              }
              onClick={() => props.ageChanger(a)}
            >
              {a}
            </li>
          );
        })}
        <li
          className={props.ageFilter === 0 ? "btn btn-dark" : "btn btn-light"}
          onClick={() => props.ageChanger(0)}
        >
          ALL
        </li>
      </ul>
    </nav>
  );
};

export default Filter;

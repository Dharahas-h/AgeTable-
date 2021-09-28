import React from "react";
import { Link } from "react-router-dom";

const PersonTable = (props) => {
  const { persons, onDelete, onSort, order, onOrder, path } = props;
  const head = ["Id", "name", "age"];
  function Icon(pat) {
    if (path === pat) {
      return (
        <i
          className={
            order === "asc" && path === pat
              ? "fa fa-sort-asc"
              : "fa fa-sort-desc"
          }
          onClick={onOrder}
        ></i>
      );
    } else {
      return null;
    }
  }

  return (
    <table className="table table-dark table-striped ">
      <thead>
        <tr>
          {head.map((a) => {
            return (
              <th onClick={() => onSort(a)}>
                {a} {Icon(a)}
              </th>
            );
          })}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((data) => {
          return (
            <tr>
              <td>{data.Id}</td>
              <td>
                <Link
                  className="btn btn-success  "
                  to={`/app/${data.Id}/${data.age}`}
                >
                  {data.name}
                </Link>
              </td>
              <td>{data.age}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(data.Id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PersonTable;

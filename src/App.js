import React, { Component } from "react";
import Pagination from "./components/pagination";
import Filter from "./components/filter";
import { getMovies } from "./moviesData";
import PersonTable from "./components/moviesTable";

class App extends Component {
  state = {
    persons: getMovies(),
    newName: "",
    newAge: "",
    pageSize: 4,
    currentPage: 1,
    ageFilter: 0,
    sortColumn: { path: "Id", order: "asc" },
  };

  getPersons(array, currentPage, pageSize) {
    //let start = pageSize * (currentPage - 1);
    let persons = array.filter(
      (obj) =>
        array.indexOf(obj) + 1 < currentPage * pageSize + 1 &&
        array.indexOf(obj) + 1 > pageSize * (currentPage - 1)
    );

    return persons;
  }

  filPersons(array, age) {
    var per;
    if (age === 0) {
      per = this.state.persons;
    } else {
      per = array.filter((obj) => obj.age == age);
    }
    return per;
  }

  sortPersons(arr, sortby, order) {
    arr.sort((a, b) => {
      if (order === "asc") {
        return a[sortby] - b[sortby];
      } else if (order === "des") {
        return b[sortby] - a[sortby];
      }
    });
  }

  handleDelete = (id) => {
    this.setState({ persons: this.state.persons.filter((a) => a.Id !== id) });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleAgeChange = (age) => {
    this.setState({ ageFilter: age });
  };

  handleSort = (pat) => {
    this.setState({
      sortColumn: {
        path: pat,
        order: this.state.sortColumn.order === "asc" ? "des" : "asc",
      },
    });
  };

  handleOrder = () => {
    if (this.state.sortColumn.order === "asc") {
      this.setState({
        sortColumn: { path: this.state.sortColumn.path, order: "des" },
      });
    } else {
      this.setState({
        sortColumn: { path: this.state.sortColumn.path, order: "asc" },
      });
    }
  };

  render() {
    const { persons, currentPage, pageSize, ageFilter, sortColumn } =
      this.state;
    console.log(sortColumn.order);
    const filperson = this.filPersons(persons, ageFilter);
    this.sortPersons(filperson, sortColumn.path, sortColumn.order);
    const fperson = this.getPersons(filperson, currentPage, pageSize);
    console.log(filperson);
    console.log(sortColumn.path);

    return (
      <React.Fragment>
        <div className="container">
          <h5 className="text-primary">
            The no entries in table are
            <span className="text-danger"> {filperson.length} </span>
          </h5>
          <PersonTable
            persons={fperson}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            order={sortColumn.order}
            onOrder={this.handleOrder}
            path={this.state.sortColumn.path}
          />
          <Pagination
            itemsCount={filperson.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
          <Filter ageFilter={ageFilter} ageChanger={this.handleAgeChange} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

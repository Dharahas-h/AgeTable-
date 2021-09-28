/*handleSubmit = () => {
    this.setState({
      persons: [
        ...this.state.persons,
        {
          Id: this.state.persons.length + 1,
          name: this.state.newName,
          age: this.state.newAge,
        },
      ],
    });
  };*/

{
  /*<table>
            <thead>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </thead>
            <tbody>
              <td>
                <input
                  type="text"
                  onChange={(a) => {
                    this.setState({
                      newName: `${a.target.value}`,
                    });
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  onChange={(a) => {
                    this.setState({ newAge: `${a.target.value}` });
                  }}
                />
              </td>
              <td>
                <button onClick={this.handleSubmit}>Submit</button>
              </td>
            </tbody>
                </table>*/
}

function Sortpersons(persons, sortby, type) {
  persons.sort((a, b) => {
    if (type="asc"){
      return a.sortby - b.sortby
    } 
    else (type="des"){
      return b.sortby - a.sortby
    }
;
}

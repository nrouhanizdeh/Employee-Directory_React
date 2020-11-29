import { Form, Button, FormControl, Container } from "react-bootstrap";
import React from "react";
import Api from "../../utils/Api";
import ResultTable from "../ResultTable";

class Main extends React.Component {
  state = {
    employee: [],
    search: "",
    filterEmployee: [],
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee() {
    Api.getUsers().then((results) => {
      this.setState({ employee: results.data.results });
      this.handleFilteredEmployee();
    });
  }

  handleInputChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    // Update the input's state
    this.setState({
      [name]: value,
    });
    this.handleFilteredEmployee();
  };

  handleFilteredEmployee = () => {
    let newFilterEmployee;

    if (this.state.search === "") {
      newFilterEmployee = this.state.employee;
    } else {
      newFilterEmployee = this.state.employee.filter((employee) => {
        return (
          employee.name.first.toLowerCase().includes(this.state.search) ||
          employee.name.last.toLowerCase().includes(this.state.search)
        );
      });
    }
    this.setState({
      filterUsers: newFilterEmployee,
    });
  };

  render() {
    return (
      <div>
        <Container className="justify-content-center">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.search}
              name="search"
              onChange={this.handleInputChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <ResultTable employee={this.state.filterEmployee} />
        </Container>
        ;
      </div>
    );
  }
}
export default Main;

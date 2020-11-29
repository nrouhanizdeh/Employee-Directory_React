import React from "react";
import { Table } from "react-Bootstrap";

function Result({ employee }) {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employee.length
            ? employee.map((employee, i) => {
                let { name, picture, phone, email } = employee;
                return (
                  <tr key={`${employee}-${i}`}>
                    <th>
                      <img src={picture.medium} alt=" Employee Image" />
                    </th>
                    <td>{name.first + " " + name.last}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
      ;
    </div>
  );
}

export default Result;

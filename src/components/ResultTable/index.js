import React from "react";
import { Table, Image } from "react-bootstrap";

function ResultTable({ employee }) {
  return (
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
                    <Image src={picture.medium} alt=" Employee Image" />
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
  );
}

export default ResultTable;

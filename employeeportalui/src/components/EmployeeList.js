import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/employees");
    setEmployees(response.data);
    console.log(response.data);
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="columns">
      <div className="column is-full">
        <Link to="/add" className="button is-success mt-5">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Department</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.location}</td>
                <td>
                  <Link
                    to={`edit/${employee.id}`}
                    className="button is-info is-small mr-3"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;

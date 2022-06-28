import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getEmployeeById();
  }, []);

  const getEmployeeById = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/v1/employees/${id}`
    );
    // console.log(response);
    setName(response.data.name);
    setLocation(response.data.location);
    setDepartment(response.data.department);
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    const emplUpdate = {
      name,
      department,
      location,
      id,
    };

    try {
      await axios.put(`http://localhost:8080/api/v1/employees`, emplUpdate);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-full">
        <form onSubmit={updateEmployee}>
          <div className="field">
            <label htmlFor="" className="label">
              Name
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Department
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Department"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Location
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
              <Link to="/" className="button is-danger ml-3">
                Batal
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const saveEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/employees", {
        name,
        department,
        location,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-full">
        <form onSubmit={saveEmployee}>
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

export default AddEmployee;

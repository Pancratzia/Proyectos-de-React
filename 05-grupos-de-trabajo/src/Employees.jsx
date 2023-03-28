import React from "react";
import { useState } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
import "./Employees.css";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "masculino",
      teamName: "EquipoA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "femenino",
      teamName: "EquipoA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "femenino",
      teamName: "EquipoA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "masculino",
      teamName: "EquipoB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "masculino",
      teamName: "EquipoB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "femenino",
      teamName: "EquipoB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "masculino",
      teamName: "EquipoC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "femenino",
      teamName: "EquipoC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "femenino",
      teamName: "EquipoC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "masculino",
      teamName: "EquipoD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "masculino",
      teamName: "EquipoD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "masculino",
      teamName: "EquipoD",
    },
  ]);

  const [selectedTeam, setSelectedTeam] = useState("EquipoA");

  function handleTeamSelectionChange(event) {
    setSelectedTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: "" } : { ...employee, teamName: selectedTeam } : employee);
    setEmployees(transformedEmployees);
  }

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="EquipoA">Equipo A</option>
            <option value="EquipoB">Equipo B</option>
            <option value="EquipoC">Equipo C</option>
            <option value="EquipoD">Equipo D</option>
          </select>
        </div>

        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
            <div className="card-collection">
              {employees.map((employee) => (
                <div
                  id={employee.id}
                  className={employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"}
                  style={{ cursor: "pointer" }}
                  onClick={handleEmployeeCardClick}
                >
                  {(employee.gender === "masculino" ?
                    <img src={maleProfile} className="card-img-top" /> : (
                      <img src={femaleProfile} className="card-img-top" />
                    )
                  )}
                  <div className="card-body">
                    <h5 className="card-title">Nombre: {employee.fullName} </h5>
                    <p className="card-text">Cargo: {employee.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;

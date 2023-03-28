import React from 'react';
import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';
import './Employees.css';

const Employees = () => {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "masculino",
            teamName: "EquipoA"
        },
        {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "femenino",
            teamName: "EquipoA"
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "femenino",
            teamName: "EquipoA"
        },
        {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "masculino",
            teamName: "EquipoB"
        },
        {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "masculino",
            teamName: "EquipoB"
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "femenino",
            teamName: "EquipoB"
        },
        {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "masculino",
            teamName: "EquipoC"
        },
        {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "femenino",
            teamName: "EquipoC"
        },
        {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "femenino",
            teamName: "EquipoC"
        },
        {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "masculino",
            teamName: "EquipoD"
        },
        {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "masculino",
            teamName: "EquipoD"
        },
        {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "masculino",
            teamName: "EquipoD"
        }
    ]);



    return (
        <main className='container'>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className='card-collection'>
                      {
                        employees.map((employee) => (
                            <div id={employee.id} className="card m-2" style={{cursor:"pointer"}}>
                                <img src={employee.gender === "femenino" ? femaleProfile : maleProfile} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Nombre: {employee.fullName} </h5>
                                    <p className='card-text'>Cargo: {employee.designation}</p>
                                </div>
                            </div>
                        ))
                    }  
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Employees;
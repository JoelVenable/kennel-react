import React, { Component } from 'react';
import { EmployeeList } from '../EmployeeList/EmployeeList';
import "./kennel.css";


import { LocationList } from '../LocationList/LocationList';
import { AnimalList } from '../AnimalList/AnimalList';


import { locationData } from "../../data/locationData";
import { animalData } from "../../data/animalData";
import { ownerData } from "../../data/ownerData";
import { employeeData } from "../../data/employeeData";



export class Kennel extends Component {





  state = {
    employees: employeeData,
    locations: locationData,
    animals: animalData,
    owners: ownerData
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} locations={this.state.locations} />
        <AnimalList animals={this.state.animals} owners={this.state.owners} />

      </article>
    )
  }
}
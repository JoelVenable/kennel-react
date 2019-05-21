import React, { Component } from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./components/LocationList/LocationList";
import { AnimalList } from "./components/AnimalList/AnimalList";
import { EmployeeList } from "./components/EmployeeList/EmployeeList";
import { API } from "./modules/API";





export class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    animalOwners: []
  }



  deleteAnimal = (animalId) => {
    API.animals.delete(animalId)
      .then(() => API.animals.fetch())
      .then(items => this.setState({ animals: items }))
  }


  componentDidMount() {
    Promise.all([
      API.animals.fetch(),
      API.owners.fetch(),
      API.locations.fetch(),
      API.animalOwners.fetch(),
      API.employees.fetch()
    ])
      .then(([animals, owners, locations, animalOwners, employees]) => {
        let newState = {
          animals,
          owners,
          locations,
          animalOwners,
          employees
        }
        this.setState(newState);
      })
  }

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList
            animals={this.state.animals}
            owners={this.state.owners}
            deleteAnimal={this.deleteAnimal}
          />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} locations={this.state.locations} />
        }} />

      </>
    )
  }
}
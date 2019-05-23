import React, { Component } from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./components/LocationList/LocationList";
import { AnimalList } from "./components/AnimalList/AnimalList";
import { EmployeeList } from "./components/EmployeeList/EmployeeList";
import { API } from "./modules/API";
import { OwnerList } from "./components/OwnerList/OwnerList";
import "./mainView.css";
import { AnimalDetail } from "./components/AnimalList/AnimalDetail";
import { LocationDetail } from "./components/LocationList/LocationDetail";
import { AnimalForm } from "./components/AnimalList/AnimalForm";

export class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    animalOwners: [],
  }


  getAnimalObject = (animalId) => {
    this.state.animals.find(animal => animal.id === animalId)
  }


  deleteAnimal = (animalId) => {
    API.animals.delete(animalId)
      .then(() => API.animals.fetch())
      .then(items => this.setState({ animals: items }))
  }

  addAnimal = (newAnimal) => {
    API.animals.add(newAnimal)
  }


  async componentDidMount() {
    this.setState({
      animals: await API.animals.fetch(),
      owners: await API.owners.fetch(),
      locations: await API.locations.fetch(),
      animalOwners: await API.animalOwners.fetch(),
      employees: await API.employees.fetch()
    })
  }


  getAnimalOwners(animalId) {
    let animalOwners = this.state.animalOwners.filter(
      (animalOwner) => animalOwner.animalId === animalId);

    let owners = animalOwners.map(animalOwner => {
      let outputObject = this.state.owners.find(owner => owner.id === animalOwner.ownerId)
      outputObject.animalOwnerId = animalOwner.id;
      return outputObject;
    });
    return owners;

  }


  render() {
    return (
      <div className="main-view">
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/locations/:locationId(\d+)"
          render={(props) => {
            let location = this.state.locations.find(location =>
              location.id === parseInt(props.match.params.locationId)
            )

            if (!location) {
              location = { id: 404, name: "Location not found" }
            }

            return <LocationDetail location={location} />

          }}

        />
        <Route exact path="/animals" render={(props) => {
          return <>
            <div className="animalList">

              <h2>Animal List</h2>
              <button type="button"
                className="btn btn-success"
                onClick={() => {

                }}></button>
            </div>

            <AnimalList
              {...props}
              animals={this.state.animals}
              owners={this.state.owners}
              deleteAnimal={this.deleteAnimal}
              animalOwners={this.state.animalOwners}
            />
          </>
        }} />
        <Route path="/animals/:animalId(\d+)"
          render={(props) => {
            let animal = this.state.animals.find(animal =>
              animal.id === parseInt(props.match.params.animalId)
            )

            if (!animal) {
              animal = { id: 404, name: "404", breed: "Animal not found" }
            }

            return <>
              <AnimalDetail animal={animal}
                deleteAnimal={this.deleteAnimal}
                owners={this.getAnimalOwners(animal.id)} />
            </>

          }}

        />

        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {() => {
            console.log(props)
            return ...props}}
            addAnimal={this.addAnimal} />

    }} />

        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} locations={this.state.locations} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} animals={this.state.animals} />
        }} />

      </div>
    )
  }
}
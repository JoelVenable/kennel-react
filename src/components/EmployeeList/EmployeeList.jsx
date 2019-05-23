import React, { Component } from 'react';
import { API } from '../../modules/API';
import { AnimalItem } from '../AnimalList/AnimalItem';



export class EmployeeList extends Component {

  state = {
    locations: [],
    employees: []
  }


  async componentDidMount() {
    let newObj = {
      employees: await API.employees.fetch(),
      locations: await API.locations.fetch()
    };
    console.log(newObj)
    this.setState(newObj);

  }
  render() {
    return (
      <section className="employees">
        <h2>Employee List</h2>
        {this.state.locations.map(location =>
          <>
            <h3 key={location.id}>{location.name}</h3>
            <ul>
              {this.state.employees
                .filter(employee => employee.storeId === location.id)
                .map(employee => <li key={employee.id}>{employee.first_name} {employee.last_name}</li>)}
            </ul>
          </>
        )}
      </section>
    )
  }
}


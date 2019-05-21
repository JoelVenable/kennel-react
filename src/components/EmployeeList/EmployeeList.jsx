import React, { Component } from 'react';
import { ownerData } from '../../data/ownerData';

export class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
        <h2>Employee List</h2>
        {this.props.locations.map(location =>
          <>
            <h3 key={location.id}>{location.name}</h3>
            <ul>
              {this.props.employees
                .filter(employee => employee.storeId === location.id)
                .map(employee => <li key={employee.id}>{employee.firstName} {employee.lastName}</li>)}
            </ul>
          </>
        )}
      </section>
    )
  }
}


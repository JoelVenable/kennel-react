const myDB = "http://localhost:8088";


const endpoints = {
  animals: new Endpoint(`${myDB}/animals`),
  animalOwners: new Endpoint(`${myDB}/animalOwners`),
  employees: new Endpoint(`${myDB}/employees`),
  locations: new Endpoint(`${myDB}/locations`),
  owners: new Endpoint(`${myDB}/owners`)
};



export const API = {
  animals: {
    fetch: (id) => endpoints.animals.read(id),
    fetchWithLocation: (locationId) => endpoints.animals.read(`?locationId=${locationId}`),
    delete: (id) => endpoints.animals.delete(id),
    add: (newAnimal) => endpoints.animals.create(newAnimal)
  },
  animalOwners: {
    fetch: (id) => endpoints.animalOwners.read(id),
    fetchOwnerFromAnimalId: (animalId) => endpoints.animalOwners.read(`?animalId=${animalId}&_expand=owner`)
  },
  employees: {
    fetch: (id) => endpoints.employees.read(id)
  },
  locations: {
    fetch: (id) => endpoints.locations.read(id)
  },
  owners: {
    fetch: (id) => endpoints.owners.read(id)
  }

}

function Endpoint(url) {
  this.create = (obj) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json());
  };
  this.read = (params) => {
    let newURL = url;
    if (!!params) newURL += `${params}`;
    return fetch(newURL)
      .then(response => response.json());
  };
  this.update = (id, object) => {
    return fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    })
      .then(response => response.json());
  };
  this.replace = (id, newObject) => {
    return fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    })
      .then(response => response.json());
  };
  this.delete = (id) => {
    return fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json());
  };

}
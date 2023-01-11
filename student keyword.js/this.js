//this refers to the object and it can be used in global object, local object, function, inner function, arrow function, constructor and class.

// this keyword
//'this' of global object
this.house = {
    housetype: "Bungalow",
  };
  console.log(this.house.housetype);
  //'this' of local object
  let house = {
    name: "VK Residency",
    display() {
      return `${this.name}`;
    },
  };
  console.log(house.display());
  //'this' of function
  this.area = "30x30 sqft";
  this.rooms = "Six Rooms";
  ("use strict");
  const houseArea = function () {
    console.log(`${this.area}`);
  };
  houseArea.call(this);
  //'this' of inner function
  this.rooms = "Six Rooms";
  ("use strict");
  let houseRooms = function () {
    let NumberofRooms = function () {
      console.log(`${this.rooms}`);
    };
    NumberofRooms.call(this);
  };
  houseRooms.call(this);
  //'this' of arrow function
  this.room = "Living Room";
  let roomName = () => {
    console.log(`${this.room}`);
  };
  roomName();
  //'this' of constructor function
  function person(name, age) {
    this.name = name;
    this.age = age;
  }
  let father = new person("Alex", 45);
  console.log(father.name);
  //'this' of class
  class vehicle {
    constructor(name, engine, mileage) {
      this.name = name;
      this.engine = engine;
      this.mileage = mileage;
    }
    details() {
      console.log(`${this.name}` + ` ${this.engine} ` + `${this.mileage}`);
    }
  }
  let bike = new vehicle("Himalayan", "450cc", "30kmpl");
  bike.details();
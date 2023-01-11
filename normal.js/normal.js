// this is inside global scope
this.table='window table';
console.log(window.table);
this.garage={
    table:'garage table'
};
// this inside an object
let johnRoom={
    table:'johns table'
};
console.log(johnRoom.table);
//this inside a method.
this.garage={
    table:'garage table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};

let johnsRoom={
    table:'johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};
johnsRoom.cleanTable();
this.garage.cleanTable();
// this is inside the function
const cleanTable=function(){
    console.log(`cleaning ${this.table}`)
};
console.log();

//call the function to resecure.
const cleanTabe=function(soap){
    console.log(`cleaning ${this.table} using {soap}`)
};

cleanTable.call(this, 'some soap');
cleanTable.call(this.garage, 'some soap');
cleanTable.call(johnRoom, 'some soap');

// this inside an inner function
innerFunction.bind(this)(soap);
innerFunction(soap);

//this is a constuctor

let createRoom=function(name){
this.table=`${name}s room`
}

const jillsRoom=new createRoom(jill);
const jilsRoom=new createRoom(john);

// this inside class
class createRoo( ){
    constructor(name){
        this.table=`${name}s table`
    };
}


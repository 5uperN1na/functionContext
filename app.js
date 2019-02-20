//Binding a method to an object

let person = {
    name : "Paula"
};

function printName()
{
    console.log(this.name);
}

let boundPrintName = printName.bind(person);
boundPrintName(); 

//Excerise
//Create bound copies of printFullName and printDetails to person called boundPrintFullName and boundPrintDetails.

let p = {
    firstName : "Paula",
    lastName : "Suarez",
    age : 42
};

function printFullName()
{
    console.log(this.firstName + " " + this.lastName);
}

function printDetails()
{
    console.log(this.firstName + " is " + this.age + " years old");
}

// TODO: create bound copies of printFullName and printDetails.
let boundPrintFullName = printFullName.bind(p);
let boundPrintDetails = printDetails.bind(p);

boundPrintFullName();
boundPrintDetails();

//More practice

let children = {
    f : 'Julien',
    l : 'Suarez',
    a : 6,
    f1 : 'Vivien',
    l1 : 'Suarez',
    a1 : 2

};

function printChildrenName(){
    console.log (this.f + " " + this.l);
    console.log (this.f1 + " " + this.l1);
}

function printDets() {
    console.log(this.f + " is " + this.a + " years old");
    console.log(this.f1 + " is " + this.a1 + " years old");

}

//bind
let boundPrintChildrenName = printChildrenName.bind(children);
let boundPrintDets = printDets.bind(children);

//invoke
boundPrintChildrenName();
boundPrintDets();
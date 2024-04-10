
// write a program that creates objects containing these items.


// datatype person object
interface person{
    age : number,
    name :string,
    nationality :string,
    student :boolean
}
//person object 
let person :person={
    age : 28,
    name :'zafar',
    nationality:'pakistani',
    student:true
}
// print person
console.log(person);

// data type of car object
interface car {
    maker : string,
    color:string,
    automatic :boolean
}
// car object
let car: car={
    maker:"toyota",
    color:'black',
    automatic:true

}
// print car
console.log(car);
let magician:string[]=['Harry Potter',"Hermione Granger","Ron Weasley","Albus Dumbledore"];

function copy_Array(arr:string[]){
    return[...arr]
}



function make_Great(magician_Array:string[]){
    for(let i=0; i<magician_Array.length; i++){
        magician_Array[i] = "The Great "  + magician_Array[i]
    }
}




function show_Magicians(magician:string[]){
    magician.forEach(element => {
        console.log(element);
    });
}
const copy_Magician_Array = copy_Array(magician);
make_Great(copy_Magician_Array);

console.log("\n\nThis is my orignal array: ")
show_Magicians(magician);
console.log("\n\nThis is my modified copy of the array: ")
show_Magicians(copy_Magician_Array);
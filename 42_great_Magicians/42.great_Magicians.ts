let magician:string[]=['Harry Potter',"Hermione Granger","Ron Weasley","Albus Dumbledore"];

function make_Great(magician_Array:string[]){
    for(let i=0; i<magician_Array.length; i++){
        magician [i] = "The Great "  + magician_Array[i]
    }
}




function show_Magicians(magician:string[]){
    magician.forEach(element => {
        console.log(element);
    });
}
make_Great(magician);
show_Magicians(magician);
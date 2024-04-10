function make_Sandwich(item:string[]){

    console.log("\nMaking your sandwich with :");

    item.forEach(element => console.log(" " + element));
    console.log("\nEnjoy your sandwich");
}

make_Sandwich(["Ham","cheese","lettuce"]);
make_Sandwich(["turkey","Bacon"]);
make_Sandwich(["Peanut butter","Jelly"]);
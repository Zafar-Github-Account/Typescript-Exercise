

let Guest_List:string[]=['Imran khan','Nawaz sharif','Asif ali zardari'];

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')


// }

let absent_Guest : string = 'Imran Khan';
let new_Guest : string = 'kamran Tessori';
Guest_List[0]=new_Guest;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')


}
console.log(`Mr.${absent_Guest} is not coming to the party. `);

console.log('good News! We Find Big Table So We Are Inviting 3 More Guest,')

Guest_List.unshift('sir zia khan');
Guest_List.splice(2 , 0 , 'maryam Nawaz');
Guest_List.push('bilawal Bhutto Zardari');

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')


}

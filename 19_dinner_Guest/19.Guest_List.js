"use strict";
let Guest_List = ['Imran khan', 'Nawaz sharif', 'Asif ali zardari'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'kamran Tessori';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
// console.log(`Mr.${absent_Guest} is not coming to the party. `);
// console.log('good News! We Find Big Table So We Are Inviting 3 More Guest,');
// array mein 3 guest add kiye hain.
Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0, 'maryam Nawaz');
Guest_List.push('bilawal Bhutto Zardari');
// yahan per mena 6 guest ke array ko print kraya hain.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
//sorry Message to guest for not inviting.
// console.log('\nSorry we can not arrang big table,Only two peoples will be invited.');
//Yahan per mene guest remove kiye hain.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    //     console.log(`sorry Mr.${remove_Guest}, you are not invited for dinner. `);
}
//hamare bache hoye 2 invited guest.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr ' + Guest_List[i] + ',\n\nyou are still invited.\n\nThank you!\n\n')
// }
//mena sare guest array se remove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
// Exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`total number of guest are: ${Guest_List.length}`);

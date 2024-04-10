"use strict";
let current_users = ["taHa", "daNiyal", "sAlman", "hamzah", "john"];
let new_Users = ["bilal", "taHa", "zafar", "ali", "hamzah"];
new_Users.forEach(new_username => {
    let lowercase = new_username.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`the username ${new_username} is not available. please write a diffrent username`);
    }
    else {
        console.log(`the username ${new_username} is available.`);
    }
});

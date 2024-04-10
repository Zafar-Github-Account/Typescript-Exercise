var personName = '';
personName = prompt('what is your name?') || " ";
var lowerCase = personName.toLowerCase();
var UpperCase = personName.toUpperCase();
var titleCase = personName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
if (personName !== null && personName !== "") {
    alert("Hello ".concat(personName, ",Here are your name in:\nLowerCase:").concat(lowerCase, "\nUpperCase:").concat(UpperCase, "\nTitleCase:").concat(titleCase));
}
else {
    alert("please fill your name !");
}

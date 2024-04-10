"use strict";
function describe_City(city, country = "Default Country") {
    console.log(`${city} is in ${country}`);
}
describe_City("Karachi", "Pakistan");
describe_City("Tokyo", "japan");
describe_City("Paris");

"use strict";
// # Getting Started Exercises with TypeScript and Node.js
// Note: Try these short programs to get some firsthand experience with TypeScript and Node.js.
// You might want to create a new folder for each exercise to keep them organized.
// Create a single Github repository to commit the code for these exercises and once finished submit the URL of the repo. 
// 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, 
// “Hello Eric, would you like to learn some Python today?”
var friendName = "Eric";
console.log(`Hello ${friendName}, would you like to learn some Python today?`);
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var nameOfPerson = "Muhammad Bilal";
console.log(`Name in upper case is `, nameOfPerson.toUpperCase());
console.log(`Name in upper case is `, nameOfPerson.toLowerCase());
var titleCaseName = nameOfPerson.toLowerCase().replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
console.log(`Name in title case is `, titleCaseName);
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var famousQuote = `Kobe Bryant once said, "Hard work outweighs talent — every time."`;
console.log(famousQuote);
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = `Kobe Bryant`;
var message = `"Hard work outweighs talent — every time."`;
console.log(`${famous_person} once said, ${message}`);
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var nameWithWhitespace = "\n\t   Muhammad Bilal   \t\n";
console.log("Name with Whitespace is = ", nameWithWhitespace);
var strippedName = nameWithWhitespace.trim();
console.log("Stripped Name:", strippedName);
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
console.log(`The addition of two numbers that makes Number 8 is: 6 + 2 = `, 6 + 2);
console.log(`The subtraction of two numbers that makes Number 8 is: 10 - 2 = `, 10 - 2);
console.log(`The multiplication of two numbers that makes Number 8 is: 4 * 2 = `, 4 * 2);
console.log(`The division of two numbers that makes Number 8 is: 16 / 2 = `, 16 / 2);
// 8. You should create four lines that look like this:
// _____________________________________________
// console.log(5 + 3)
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var myFavoriteNumber = 69;
console.log(`My favorite number is ${myFavoriteNumber}`);
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
console.log(`The multiplication of two numbers that makes Number 8 is: 4 * 2 = `, 4 * 2); // This program is for multiplication of two numbers that makes 8.
// Name:Muhammad Bilal , Date: 12/09/2023
var famousQuote = `Kobe Bryant once said, "Hard work outweighs talent — every time."`; // This program is for priniting the value stored in famous quote 
console.log(famousQuote);
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Zain", "Ahmad", "Hamid"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
let friendsNames = ["Zain", "Ahmad", "Hamid"];
for (let i = 0; i < friendsNames.length; i++) {
    console.log(`Hi! ${friendsNames[i]}, Pleased to meet you.`);
}
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var modeOfTransport = ["Motorcycle", "Car", "Train"];
console.log(`The Kawasaki Ninja H2®R is the world's most powerful supercharged hypersport closed-course ${modeOfTransport[0]}.`);
console.log(`The Toyota Supra is a sports ${modeOfTransport[1]} and grand tourer manufactured by the Toyota Motor Corporation beginning in 1978.`);
console.log(`I love to travel by ${modeOfTransport[2]} `);
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Tayyab", "Umer", "Ali Haider"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, You are invited to the dinner, tonight.`);
}
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let personCannotMakeIt = "Umer";
console.log(`Mr.${personCannotMakeIt}, can't make it to the dinner.`);
guestList.splice(1, 1, "Ali Husnain");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, You are invited to the dinner, tonight.`);
}
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
console.log(`It is to inform you that I found a bigger table`);
//  add three guests
var addGuest = ["Zain", "Ahmad", "Hamid"];
// add 1 guest at beginning of array
guestList.unshift(addGuest[0]);
// add one guest at middle of Array
guestList.splice(Math.floor(guestList.length / 2), 0, addGuest[1]);
guestList.push(addGuest[2]);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, You are invited to the dinner, tonight.`);
}
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
console.log(`Dear All! We can invite only two people for dinner.`);
console.log(`The Guest List is: `, guestList);
guestList.pop();
console.log(`The updated Guest List is: `, guestList);
guestList.pop();
console.log(`The updated Guest List is: `, guestList);
guestList.pop();
console.log(`The updated Guest List : `, guestList);
guestList.pop();
console.log(`The updated Guest List is: `, guestList);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, You are still in the list. `);
}
guestList.pop();
console.log(`The updated Guest List is: `, guestList);
guestList.pop();
console.log(`The updated Guest List is: `, guestList);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var placedToVisit = ["Switzerland", "South Africa", "Kashmir", "Muree", "Japan"];
console.log(placedToVisit);
placedToVisit.sort();
console.log(placedToVisit);
placedToVisit.reverse();
console.log(placedToVisit);
placedToVisit.reverse();
console.log(placedToVisit);
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`Hello! Total ${guestList.length} number of people you are invited to dinner`);
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
var cities = ["Mount Everest", "Karachi", "Amazon River", "South Africa", "Japanese"];
for (var nameOfCity of cities) {
    console.log(" - ", nameOfCity);
}
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var students = [
    {
        name: "Ahmad",
        age: 22,
        grade: "9th",
    },
    {
        name: "Zain",
        age: 19,
        grade: "15th",
    },
    {
        name: "Hamid",
        age: 18,
        grade: "2nd",
    },
];
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
let numbers = [10, 20, 30, 40, 50];
let errorNumber = numbers[7]; // This will cause an error
console.log(errorNumber); // We won't see this message
// 23. Conditional Tests: Write a series of conditional tests. Print a statement  describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = "subaru";
console.log("Is car equal to 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car equal to 'honda'? I predict False.");
console.log(car == 'honda');
console.log("Is car not equal to 'ford'? I predict True.");
console.log(car != 'ford');
console.log("Is car not equal to 'subaru'? I predict False.");
console.log(car != 'subaru');
console.log("Is car greater than 'toyota'? I predict False.");
console.log(car > 'toyota');
console.log("Is car less than 'ford'? I predict False.");
console.log(car < 'ford');
console.log("Is car greater than or equal to 'subaru'? I predict True.");
console.log(car >= 'subaru');
console.log("Is car less than or equal to 'subaru'? I predict True.");
console.log(car <= 'subaru');
console.log("Is car equal to 'Subaru' (case-sensitive)? I predict False.");
console.log(car === 'Subaru');
console.log("Is car equal to 'SUBARU' (case-insensitive)? I predict True");
console.log(car.toUpperCase() === 'SUBARU');
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
//     Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple');
let color = 'blue';
console.log("Is color not equal to 'red'? I predict True.");
console.log(color != 'red');
// • Tests using the lower case function
let city = 'New York';
console.log("Is city in lowercase 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 == num2);
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2);
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 less than num2? I predict False.");
console.log(num1 < num2);
console.log("Is num1 greater than or equal to num2? I predict True.");
console.log(num1 >= num2);
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
let sunny = true;
let warm = true;
console.log("Is it sunny and warm? I predict True.");
console.log(sunny && warm);
let rainy = true;
let cold = false;
console.log("Is it rainy or cold? I predict True.");
console.log(rainy || cold);
// • Test whether an item is in a array
let fruits = ['apple', 'banana', 'cherry', 'date'];
console.log("Is 'apple' not in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
// • Test whether an item is not in a array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var p1 = "Muhammad Bilal";
var alien_color = 'green';
if (alien_color === 'green') {
    console.log(`Player: ${p1} just earned 5 points.`);
}
var alien_color2 = 'red';
if (alien_color2 === 'green') {
    console.log(`Player: ${p1} just earned 5 points.`);
}
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color3 = 'yellow';
if (alien_color3 === 'green') {
    console.log(`Player: ${p1} just earned 5 points for shooting the alien.`);
}
else {
    console.log(`Player: ${p1} just earned 10 points.`);
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Version 1:
if (alien_color === 'green') {
    console.log(`Player: ${p1} has earned 5 points for shooting the green alien.`);
}
else if (alien_color === 'yellow') {
    console.log(`Player: ${p1} has  earned 10 points for shooting the yellow alien.`);
}
else if (alien_color === 'red') {
    console.log(`Player: ${p1} has earned 15 points for shooting the red alien.`);
}
// Version 2:
if (alien_color2 === 'green') {
    console.log(`Player: ${p1} has earned 5 points for shooting the green alien.`);
}
else if (alien_color2 === 'yellow') {
    console.log(`Player: ${p1} has  earned 10 points for shooting the yellow alien.`);
}
else if (alien_color2 === 'red') {
    console.log(`Player: ${p1} has earned 15 points for shooting the red alien.`);
}
// Version 3:
if (alien_color3 === 'green') {
    console.log(`Player: ${p1} has earned 5 points for shooting the green alien.`);
}
else if (alien_color3 === 'yellow') {
    console.log(`Player: ${p1} has  earned 10 points for shooting the yellow alien.`);
}
else if (alien_color3 === 'red') {
    console.log(`Player: ${p1} has earned 15 points for shooting the red alien.`);
}
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var age = 25;
if (age < 2) {
    console.log(`The person is a baby`);
}
else if (age >= 2 && age < 4) {
    console.log(`The person is a toddler`);
}
else if (age >= 4 && age < 13) {
    console.log(`The person is a kid`);
}
else if (age >= 13 && age < 20) {
    console.log(`The person is a teenager`);
}
else if (age >= 20 && age < 65) {
    console.log(`The person is an adult`);
}
else {
    console.log(`The person is elder`);
}
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favorite_fruits = ["Orange", "Banana", "Apple"];
if (favorite_fruits.includes("Banana")) {
    console.log(`You Really Like Bananas`);
}
if (favorite_fruits.includes("Apple")) {
    console.log(`You Really Like Apples`);
}
if (favorite_fruits.includes("Grapes")) {
    console.log(`You Really Like Grapes`);
}
if (favorite_fruits.includes("Orange")) {
    console.log(`You Really Like Oranges`);
}
if (favorite_fruits.includes("Strawberry")) {
    console.log(`You Really Like Strawberries`);
}
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var userNames = ["Admin", "Eric", "Zain", "Ahmad", "Hmaid"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "Admin") {
        console.log(`Hello Admin, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
userNames.splice(0, 5);
console.log(userNames);
if (userNames = []) {
    console.log(`We need to find some users`);
}
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Zain", "Ahmad", "Hamid", "Ashar", "Tayyab"];
var new_users = ["Arsalan", "Ahmad", "Ashar", "Akmal", "Salman"];
for (let i = 0; i < new_users.length; i++) {
    var isNameTaken = current_users.some((current_users) => current_users.toLowerCase() === new_users[i].toLowerCase());
    if (isNameTaken) {
        console.log(`"${new_users[i]}" has been used."${new_users[i]}" should not be accepted`);
    }
    else {
        console.log(`"${new_users[i]}" is available.`);
    }
}
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinalNumbers.length; i++) {
    if (ordinalNumbers[i] == 1) {
        console.log(`"1st"`);
    }
    else if (ordinalNumbers[i] == 2) {
        console.log(`"2nd"`);
    }
    else if (ordinalNumbers[i] == 3) {
        console.log(`"3rd"`);
    }
    else if (ordinalNumbers[i] == 4) {
        console.log(`"4th"`);
    }
    else if (ordinalNumbers[i] == 5) {
        console.log(`"5th"`);
    }
    else if (ordinalNumbers[i] == 6) {
        console.log(`"6th"`);
    }
    else if (ordinalNumbers[i] == 7) {
        console.log(`"7th"`);
    }
    else if (ordinalNumbers[i] == 8) {
        console.log(`"8th"`);
    }
    else {
        console.log(`"9th"`);
    }
}
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let myFavPizza = ["Chicken Supreme", "Chicken Tikka", "Guru Special"];
for (let pizza of myFavPizza) {
    console.log(pizza);
}
for (let pizza of myFavPizza) {
    console.log(`I like`, pizza, `pizza`);
}
console.log(`I really like ${myFavPizza[0]}. \nIt is very tasty. \nI really love pizza!`);
// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as: A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would
// make a great pet!
var animals = ["Cat", "Tiger", "Lion"];
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    console.log(animal, `would make a great pet.`);
}
console.log(`They're all obligate carnivores, and the majority of them are lone predators who ambush or stalk their prey.`);
console.log(`Only one of these animal would make a great pet!`);
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`Your shirt size is: "${size}" and the message written on it is: "${message}"`);
}
make_shirt("Large", "You can do it");
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different message.
make_shirt("Large", "I love TypeScript.");
make_shirt("Medium", "Coding like poetry should be short and concise");
make_shirt("X Large", "Be The Greatest.");
// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country) {
    console.log(`${city} is in ${country = "Pakistan"}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Kabul", "Afghanistan");
describe_city("Lahore", "Pakistan");
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    console.log(`"${city}, ${country}"`);
}
city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Faisalabad", "Pakistan");
// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, tracks) {
    let newAlbum = {
        name_Of_Artist: artist_name,
        title_Of_Album: album_title,
        numOfTracks: tracks
    };
    return newAlbum;
}
let album1 = make_album("Nabeel Akbar", "Qaid");
let album2 = make_album("Taimour Baig", "Azal");
let album3 = make_album("aleemrk", "Different Phase", 4);
console.log(album1);
console.log(album2);
console.log(album3);
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicianNames = ["David Copperfield", "Harry Houdini", "Penn & Teller", "Derren Brown"];
show_magicians(magicianNames);
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
let magicianNames2 = ["David Copperfield", "Harry Houdini", "Penn & Teller", "Derren Brown"];
let greatMagicians = make_great(magicianNames2);
show_magicians(greatMagicians);
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let originalMagicianNames = [...magicianNames];
let greatMagicians2 = make_great(originalMagicianNames);
console.log("Original Magicians:");
show_magicians(originalMagicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number
// of arguments each time.
function sandwich(...items) {
    console.log("You sandwich have following items:");
    for (let item of items) {
        console.log(`-> ${item}`);
    }
}
sandwich("Chicken", "Cheese", "BBQ Sauce");
sandwich("Strawberry Jam", "Mango Jam");
sandwich("Chicken", "Tomato", "Cheese", "Another Tomato");
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a
// color or an optional feature.  Print the Object that’s returned to make sure all the information was stored correctly.
function cars_info(manufacturer, model, color) {
    let cars = {
        manufacturer,
        model,
        color
    };
    return cars;
}
let car1 = cars_info("Toyata Supra", 2021);
console.log(car1);
const car2 = cars_info("Porsche 911", 1963, "Black");
console.log(car2);

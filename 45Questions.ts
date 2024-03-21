
//Question No 2 (Persnal Message) 
let Message : string = "hello Eric, Would you like you learn typescript today?";
console.log(Message);
//Question No 3 (Name Cases)
let Name : string = "USMAN";
console.log(Name);
let Name1 : string = "usman";
console.log(Name1);
let Name2 : string = "The Inspiring Journey of Usman: A Tale of Perseverance and Success";
console.log(Name2);
//Question No 4 (Famous qoute) 
let quote : string = "Winston Churchil Once Said,Success is not final, failure is not fatal: It is the courage to continue that counts";
console.log(quote);
//Question No 5 (famous qoute 2)
let famous_person: string = "Albert Einstein";
let Sentence: string = `"Imagination is more important than knowledge." - ${famous_person}`;
console.log(Sentence);
//Question No 6 (Stripping Names)
let personNameWithWhitespace: string = "\t \n  Usman Raza Ansari  \t \n";

console.log("Name with whitespace:", personNameWithWhitespace);

// Stripping whitespace from the name

let strippedName: string = personNameWithWhitespace.trim();

console.log("Stripped Name:", strippedName);
//Question No 7 (Number Eight)
//For Addition 
let addition : Number = 5 + 6;
console.log("additionddResult:", + addition);
//for Subtraction
let subtraction : Number = 10 - 8;
console.log("subtractionResult:", + subtraction);
//For Multiplication
let multiply : Number = 50 * 10;
console.log("multiplicationResult:", + multiply);
//For Division 
let Division : Number = 20 / 40;
console.log("DivisionResult:", + Division);
//Question No 8.
let numONE : Number = 5;
let numTwo : Number = 3;
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//Question No 9 (Favorite Number)
let fav_num : number = 7
let Words : string = `"My Fav Number is ${fav_num}"`;
console.log(Words);
//Question No 10 (Adding Comments)
//this program run hello This is Usman
let imp_message : string = "Hello This is Usman"
console.log(imp_message);
//this program run my age
let aGe : string = "My Age is 18";
console.log(aGe);
//Question No 11 
let Names: string[] = ["Abu Bakar", "Umar", "Usman", "Ali", "Hassan"];

// Print each person's name using forEach method
Names.forEach((name,index) => {
    console.log("Friend " + (index + 1)," : " + name);
});
//Question No 12 (Greetings)
let names : string[] = ["Abu Bakar", "Umar", "Usman", "Ali", "Hassan"];

// Print each person's name using forEach method
names.forEach((name) => {
    console.log("Salam, " + name + "! Have a Great Ramadan" );
});
//Question No 13 (Your Own Array)
let fav_Motorcycles: string[] = ["Honda", "BMW", "Yamaha", "Ducati", "Kawasaki"];

// Print statements about favorite motorcycles
fav_Motorcycles.forEach((motorcycle) => {
    console.log("I would like to own a " + motorcycle + " motorcycle.");
});
//Question No 14 (Guest List)
let questlists : string[] = ["Musa","Esa","Adam"]

//print statments about invitation of a dinner 
questlists.forEach((questlist) => {
    console.log("Care to join for a delightful dinner?" + questlist + " Your company would make it even more special!")
})
//Question No 15 
let guestS: string[] = ["Abu bakar", "Umar", "Usman", "Ali", "Hassan"];
let unableToAttenD: string = "Hassan";

// Print initial set of invitation messages
console.log("Initial set of invitation messages:");
guestS.forEach((guest) => {
    console.log("Dear " + guest + ", you are invited to dinner!");
});

// Print the name of the guest who can't make it
console.log("\nUnfortunately, " + unableToAttenD + " can't make it to the dinner.\n");

// Replace the guest who can't make it with a new person
let newInvite: string = "Hussain";
let index_ToRemove: number = guestS.indexOf(unableToAttenD);
if (index_ToRemove !== -1) {
    guestS.splice(index_ToRemove, 1, newInvite);
}

// Print second set of invitation messages
console.log("Second set of invitation messages:");
guestS.forEach((guest) => {
    console.log("Dear " + guest + ", you are invited to dinner!");
});

// Question No 16 (More Guests) 
let guesTS: string[] = ["ABU BAKAR", "UMER", "USMAN", "ALI", "HASSAN"];
let unableToAtteND: string = "HUSSAIN"; // Guest who can't make it

// Print initial set of invitation messages
console.log("Initial set of invitation messages:");
guesTS.forEach((guest) => {
    console.log("Dear " + guest + ", you are invited to dinner!");
});

// Print the name of the guest who can't make it
console.log("\nUnfortunately, " + unableToAtteND + " can't make it to the dinner.\n");

// Replace the guest who can't make it with a new person
let newInviteS: string = "Frank";
let indexTo_Remove: number = guesTS.indexOf(unableToAtteND);
if (indexTo_Remove !== -1) {
    guesTS.splice(indexTo_Remove, 1, newInviteS);
}

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!\n");

// Add new guests
let New_Guests: string[] = ["ANEEQ", "MARYAM", "HAIDER"];
guesTS.unshift(New_Guests[0]);
guesTS.splice(Math.floor(guesTS.length / 2), 0, New_Guests[1]);
guesTS.push(New_Guests[2]); 

// Print updated set of invitation messages
console.log("Updated set of invitation messages:");
guesTS.forEach((guest) => {
    console.log("Dear " + guest + ", you are invited to dinner!");
});
//Question No 17 (Shrinking list)
let guests_1: string[] = ["ABU BAKAR" , "UMER" , "USMAN" , "ALI" , "HASSAN" , "ANEEQ" , "MARYAM" , "HAIDER"];
let unableToAttend_1: string = "HASSAN"; // Guest who can't make it

// Print initial set of invitation messages
console.log("Initial set of invitation messages:");
guests_1.forEach((guest) => {
    console.log("Dear " + guest + ", you are invited to dinner!");
});

// Print the name of the guest who can't make it
console.log("\nUnfortunately, " + unableToAttend_1 + " can't make it to the dinner.\n");

// Replace the guest who can't make it with a new person
let newInvite_1: string = "HUSSAIN";
let indexToRemove_1: number = guests_1.indexOf(unableToAttend_1);
if (indexToRemove_1 !== -1) {
    guests_1.splice(indexToRemove_1, 1, newInvite_1);
}

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!\n");

// Add new guests
let newGuests_1: string[] = ["ANEEQ", "MARYAM", "HAIDER"];
guests_1.unshift(newGuests_1[0]); // Add to the beginning
guests_1.splice(Math.floor(guests_1.length / 2), 0, newGuests_1[1]); // Add to the middle
guests_1.push(newGuests_1[2]); // Add to the end

// Print updated set of invitation messages
console.log("Updated set of invitation messages:");
guests_1.forEach((guest) => {
    console.log("Dear " + guest + ", you are invited to dinner!");
});

// Inform that only two people can be invited for dinner
console.log("\nOops! Due to unforeseen circumstances, we can only invite two people for dinner.\n");

// Remove guests until only two names remain
while (guests_1.length > 2) {
    let removedGuest: string = guests_1.pop()!;
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}

// Print invitation messages for the two remaining guests
console.log("\nInvitation messages for the two remaining guests:");
guests_1.forEach((guest) => {
    console.log("Dear " + guest + ", you are still invited to dinner!");
});

// Remove the last two names from the list
guests_1.pop();
guests_1.pop();

// Print the final list to ensure it's empty
console.log("\nFinal list after removing all guests:", guests_1);
//Question No 18 ( Array of places to visit)

let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Brazil", "Egypt"];

//original order
console.log("Original Order:");
console.log(placesToVisit);

// alphabetical order without modifying the original list
console.log("\nAlphabetical Order (without modifying original list):");
console.log([...placesToVisit].sort());

// Verify original order
console.log("\nOriginal Order (still intact):");
console.log(placesToVisit);

// reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order (without modifying original list):");
console.log([...placesToVisit].sort().reverse());

// Verify original order
console.log("\nOriginal Order (still intact):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("\nBack to Original Order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nAlphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit);

//Question No 19 
let guests: string[] = ["ABUBAKAR", "ALI", "USMAN", "ALI", "HASSAN"];
let unableToAttend: string = "HASSAN"; // Guest who can't make it

// Print initial set of invitation messages
console.log("Initial set of invitation messages:");
guests.forEach((guest) => {
    console.log("Dear " + guest + ", you are invited to dinner!");
});

// Print the name of the guest who can't make it
console.log("\nUnfortunately, " + unableToAttend + " can't make it to the dinner.\n");

// Replace the guest who can't make it with a new person
let newInvitee: string = "HUSSAIN";
let indexToRemove: number = guests.indexOf(unableToAttend);
if (indexToRemove !== -1) {
    guests.splice(indexToRemove, 1, newInvitee);
}

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!\n");

// Add new guests
let newGuests: string[] = ["ANEEQ", "MARYAM", "HAIDER"];
guests.unshift(newGuests[0]); // Add to the beginning
guests.splice(Math.floor(guests.length / 2), 0, newGuests[1]); // Add to the middle
guests.push(newGuests[2]); // Add to the end

// Print number of people invited to dinner
console.log("Number of people invited to dinner: " + guests.length);
//Question No 20 (Array)
// Creating an array of countries
let countries: string[] = ["United States", "Canada", "United Kingdom", "France", "Germany", "Japan", "China", "Australia", "Brazil", "India"];
// Creating an array of cities
let cities: string[] = ["Karachi" , "Sydney" , "London" , "New York" , "Tokyo"]
// Printing the list of countries
console.log("List of countries:");
countries.forEach(country => {
    console.log(country);
});
// Printing the list of cities
console.log("\nList Of Cities:");
cities.forEach(cities => {
    console.log(cities);
});
//Question No 21 (Objects)

type student_1 = {
    id: number;
    name: string;
    grade: string;
    roll_num: number;
    school_name: string;
} 
let student: student[] = [
    { id: 1 , name: "Muhammad" , grade: "4th", roll_num:25, school_name:"Muhammad Ali Juahar Academy" },
    { id: 2 , name: "Sharjeel" , grade: "5th" , roll_num:29, school_name:"Muhammad Ali Juahar Academy" },
    { id: 3 , name: "Muneej", grade: "6th" , roll_num:21, school_name:"Muhammad Ali Juahar Academy" },
    { id: 4 , name: "Shahmeer", grade: "7th" , roll_num:28, school_name:"Muhammad Ali Juahar Academy" },
 ]
 console.log("\nList Of A Students:");
 student.forEach((student,index) => {
     console.log(`Student ${index + 1}`);
     console.log(`ID: ${student.id}`);
     console.log(`Name: ${student.name}`);
     console.log(`Grade: ${student.grade}`);
     console.log(`Roll Number: ${student.roll_num}`);
     console.log(`School Name: ${student.school_name}`);

    
});
//Question No 22 (intentional error)

type student = {
    id: number;
    name: string;
    grade: string;
    roll_num: number;
    school_name: string;
} 
let students: student[] = [
    { id: 1 , name: "Muhammad" , grade: "4th", roll_num:25, school_name:"Muhammad Ali Juahar Academy" },
    { id: 2 , name: "Sharjeel" , grade: "5th" , roll_num:29, school_name:"Muhammad Ali Juahar Academy" },
    { id: 3 , name: "Muneej", grade: "6th" , roll_num:21, school_name:"Muhammad Ali Juahar Academy" },
    { id: 4 , name: "Shahmeer", grade: "7th" , roll_num:28, school_name:"Muhammad Ali Juahar Academy" },
 ]
 console.log("\nList Of A Students:");
 students.forEach((student,index) => {

    //introducing ntentional error
    if(index === 3){
        console.log(students[index + 1]) //accessing index that does not exist 
    }
     console.log(`Student ${index + 1}`);
     console.log(`ID: ${student.id}`);
     console.log(`Name: ${student.name}`);
     console.log(`Grade: ${student.grade}`);
     console.log(`Roll Number: ${student.roll_num}`);
     console.log(`School Name: ${student.school_name}`);
});
//Question No 23 (contional Tests)
// Test NO 1
let Cricketer = 'Babar Azam';

console.log("Cricketer == 'Babar Azam'? I predict True.")

console.log(Cricketer == 'Babar Azam')
// Test NO 2
let basketballer_player = 'messi';

console.log("is messi == 'basketballer Player'? I predict False.")

console.log(basketballer_player != 'messi')
// Test NO 3
let country = 'Switzerland';

console.log("Is Switzerland is a Beautiful country? I predict True.")

console.log(country == 'Switzerland')
// Test NO 4
let city = 'Tokyo';

console.log("Is Tokyo is the most less populated city in the world? I predict False.")

console.log(city != 'Tokyo')
// Test NO 5
let Desert = 'Sahara';

console.log("Is Sahara is the largest desert in the world? i predict False")
//Sahara is not largest but hottest largest desert 
console.log(Desert != 'Sahara')

let x = 5;
let y = 10;

// Test NO 6: Check if x is greater than y
console.log("Is x > y? I predict False.");
console.log(x > y);

// Test NO 7: Check if x is less than or equal to y
console.log("Is x <= y? I predict True.");
console.log(x <= y);

// Test  NO 8: Check if the sum of x and y is equal to 15
console.log("Is the sum of x and y equal to 15? I predict True.");
console.log(x + y == 15);

// Test NO 9: Check if x is not equal to y
console.log("Is x not equal to y? I predict True.");
console.log(x != y);

// Test NO 10: Check if x multiplied by 2 is greater than y
console.log("Is x * 2 > y? I predict False.");
console.log(x * 2 > y);
//Question No 24 (More Tests)
//Tests for equality and inequality with strings
let fruit1: string = "apple";
let fruit2: string = "banana";
console.log("Is fruit1 equal to 'apple'? I predict True.");
console.log(fruit1 === 'apple');
console.log("Is fruit2 not equal to 'apple'? I predict True.");
console.log(fruit2 !== 'apple');

// Tests using the lower case function
let city_1: string = "Lahore";
let city_2: string = "Karachi";
console.log("Is city1 in lower case equal to 'Lahore'? I predict False.");
console.log(city_1.toLowerCase() === 'Lahore');
console.log("Is city2 in lower case equal to 'karachi'? I predict True.");
console.log(city_2.toLowerCase() === 'karachi');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 20;
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10);
console.log("Is num1 not equal to 20? I predict True.");
console.log(num1 != 20);
console.log("Is num2 less than num1? I predict False.");
console.log(num2 < num1);
console.log("Is num2 less than or equal to 10? I predict False.");
console.log(num2 <= 10);

// Tests using "and" and "or" operators
let ages: number = 25;
console.log("Is age greater than or equal to 20 and less than or equal to 30? I predict True.");
console.log(ages >= 20 && ages <= 30);
console.log("Is age less than 18 or greater than 30? I predict False.");
console.log(ages < 18 || ages > 30);
// // Define an array
let fruits: string[] = ["apple", "banana", "orange", "kiwi"];

// Test whether an item is in the array
let fruitToFind: string = "banana";
console.log(`Is '${fruitToFind}' in the array? I predict True.`);
console.log(fruits.includes(fruitToFind));

// Test whether an item is not in the array
let fruits1: string = "grape";
console.log(`Is '${fruits}' not in the array? I predict True.`);
console.log(!fruits.includes(fruits1));
//Question No 25 (Alien Colors #1)
let Alien_color : string = 'green';
if(Alien_color == 'green') {
    console.log("You Earned 5 points")
}
let Alien_color1 : string = 'red';
if(Alien_color1 == 'green') {
    console.log("You Earned 5 points")
}
//Question 26 (Alien Colors #2)
let Alien_colors : string = 'green';

if (Alien_colors =='green') {
    console.log("You earned 5 points by shooting the alien")
} else {
    console.log("You earned 10 points")
}
if (Alien_color == 'Red') {
    console.log("You earned 5 points by shooting the alien")
    
} else {
    console.log("You earned 10 points")
}
//Question No 27 (Alien colors #3)
let Alien_color2 : string = 'green';
// let Alien_color : string = 'yellow';
// let Alien_color : string = 'red';
if (Alien_color2 =='green') {
    console.log("You earned 5 points")
} else if(Alien_color2 == 'yellow') {
    console.log("You earned 10 points")
} else if(Alien_color2 == 'red') {
    console.log("You earned 15 points")
} else {
    console.log("No Rewards")
}
//Question 28 (Stage of Life)
let age : number = 80;
if(age < 0){
   console.log("Error: Age cannot be negative ")
} else if (age < 2) {
    console.log("The Person is a Baby")  
} else if(age < 4) {
    console.log("The Person is Todler")
} else if(age < 13) {
    console.log("The Person is Kid")
} else if(age < 20) {
    console.log("The person is Teenager")
} else if(age < 65) {
    console.log("The person is Adult")
} else {
    console.log("The Person is Elder")
}
//Question 29 (Fav Fruits)
let fav_fruit : string[] = ["Banana" ,"Mango" ,"Apple","Grape","Orange"];
if(fav_fruit.includes("Banana")){
    console.log("Hey! You really like Banana")
}
if(fav_fruit.includes("Mango")){
    console.log("Hey! You really like Mango")
}
if(fav_fruit.includes("Apple")){
    console.log("Hey! You really like Apple")
}
if(fav_fruit.includes("Grape")){
    console.log("Hey! You really like Grape")
}
if(fav_fruit.includes("Orange")){
    console.log("Hey! You really like Orange")
}
//Question No 30 
// Array of usernames
let usernames: string[] = ["Admin", "Eric", "Momin", "Sib", "Lob"];

// Loop through the array and print greetings
for (let username of usernames) {
    if (username === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again`);
    }
}
//Question 31 (No user)
let users : string[] = ["Momin" , "Haider" , "Imad"];
//users = []
if(users.length > 0) {
    console.log(`Number of users:${users.length}`);
    console.log(`users:`)
    users.forEach (user => {
        console.log(user);
    });
} else {
    console.log("We need more users");
};
// Question 32 (Checking users)
let current_users : string[] = ["azam" , "umer" , "aneeq" , "shehri" , "ali"]
let new_users : string[] = ["aneeq" , "umer" , "adnan" , "rizwan" , "yasir"]
new_users.forEach(new_user => {

    const lowercase_current_users = current_users.map(user => user.toLowerCase());
    const lowercase_new_user = new_user.toLowerCase();

    if(lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`Username '${new_user}' is not available,Try something new`);
    } else {
        console.log("This Username Is available.");
    }
})
//Question 33 (ordinal numbers)
let num9 : number[] = [1,2,3,4,5,6,7,8,9]
num9.forEach(num9 => {
let ordinalEnding: string;
if(num9==1){
    ordinalEnding = "st";
} else if (num9 == 2) {
    ordinalEnding = "nd";
} else if (num9== 3){
    ordinalEnding = "rd";
} else {
    ordinalEnding = "th";
}
console.log(`${num9}${ordinalEnding}`);
});
//Question 34 (pizzas)
// Array of favorite pizza names
const favoritePizzas: string[] = ['Margherita', 'Pepperoni', 'BBQ Chicken'];
console.log("Printing pizza names:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log("\nPrinting sentences about favorite pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza.`);
}
console.log("\nI really love pizza!");
//Question 35 (Animals)

let animals: string[] = ['dog', 'cat', 'rabbit'];

console.log("Names of animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet.");
//Question 36 (shirts)
function make_shirt(size: string, message: string): void {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}
// Calling the function
// make_shirt("medium", "Hello, World!");
//Question 37 (large shirt)
function create_shirt(size: string = "large", message= "i love typescript"): void {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}
create_shirt();

create_shirt("medium");
// Calling the function
create_shirt("Extra large", "code typscript!");
//Question 38 (city)
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Paris");
//QUestion 39 (city names)
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three different city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Tokyo", "Japan");
let city3 = city_country("Paris", "France");

console.log(city1);
console.log(city2);
console.log(city3);
//QUestion 40 (album)
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Making three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3");

// Printing each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
//QUestion 41 (Magician)
function show_magicians_1(magicians: string[]): void {
    console.log("list of magicians:");
    for (let magician of magicians){
        console.log(magician)
    }
}
let Magician_names_1 : string[] = ["Zephyr the Enchanter" , "Mystique the Illusionist" , "Merlin the Magnificent"]

show_magicians(Magician_names_1)

//Question No 42 (The Great)
function show_magicians_2(magicians: string[]): void {
    console.log("list of magicians:");
    for (let magician of magicians){
        console.log(magician)
    }
}
function make_great_1(magicians: string[]): void {
    for (let i = 0;i < magicians.length ; i++ )
    {
    magicians[i] = "The Great " + magicians[i];
    }
}



let Magician_names : string[] = ["Zephyr the Enchanter" , "Mystique the Illusionist" , "Merlin the Magnificent"]

make_great(Magician_names)

show_magicians(Magician_names)

//Question No 43 (unchanged)
// Define a function called show_magicians that takes an array of strings as a parameter
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define a function called make_great that modifies a copy of the array of magicians by adding the phrase "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}

// Array of magician names
let magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller", "Dynamo"];

// Call the make_great function with a copy of the array of magicians' names
let greatMagicians: string[] = make_great([...magicianNames]); // Using the spread operator to create a copy

// Call the function to print the original magician names
show_magicians(magicianNames);

// Call the function to print the modified magician names
show_magicians(greatMagicians);


//Question 44 (sandwiches)
function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Avocado");

//Question 45 (carinfo)
// Define a function called createCar that stores information about a car in an Object
function createCar(manufacturer: string, modelName: string, ...otherDetails: [string, any][]): any {
    let carInfo: any = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Loop through the other details provided and add them to the carInfo object
    for (let detail of otherDetails) {
        carInfo[detail[0]] = detail[1];
    }
    return carInfo;
}

// Call the function with required information and two other name-value pairs
let car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the Object that's returned to make sure all the information was stored correctly
console.log(car);












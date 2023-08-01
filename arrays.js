var names = ["Maeve", "Isaac", "Dylan", "June"]
var grades = [100, 93, 65, 87]
var statements = [true, false, true, false]

//Calling the pop method will return all elements in an array, less the last element.
names.pop();
console.log(names);

//Calling the push method will add a new element to the end of an array, then return all elements.
grades.push(49);
console.log(grades);

//Calling the shift method will return all elements in an array, less the first element.
statements.shift()
console.log(statements);

//Index positions serve the same purpose as numbered tickets do for a deli, by representing an individual in a larger 
//collection of people/entities. When the number on the ticket is announced, the person it represents is identified within the group.
//The group of people at the deli could be considered to be the array, and the ticket numbers could be used like an index position
// to identify where they are in the waiting queue and who is being called to the counter.
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
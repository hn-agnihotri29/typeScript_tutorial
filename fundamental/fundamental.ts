//In JS in an  array each element can be of a different type
//In this case we do not really need type annotation since all elements are number compiler infer and guess the type of array
/*
for an empty array we need to explicitly give the type of array otherwise it shows any type
let numbers: number[] = []; 
*/
//Array
let numbers: number[] = [1,2,3];

//Tuples
/*
each element has a particular type like 1, 'Mosh':- an id and type
user[0] -> has a number of properties and methods
user[1] -> has string properties and methods

tuple is useful when we only have 2 value 
*/
let user: [number, string] = [1, 'Mosh'];
 
//Enum 
const enum Size {Small, Medium, Large};
let mySize: Size = Size.Medium; //output --------->  2 

  

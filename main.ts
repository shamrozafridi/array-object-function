
// --------------------------------------Assignment 2:Manipulating an Array: Rearranging Words---------------------------

// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".


import chalk from "chalk";

console.log(chalk.green('\t \n /////////////////////// Arrange this scrambled array ////////////////////////////\n \t'));


const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

console.log(chalk.cyan(`Array: ${scrambledArray}`));


// Remove elements (true,123,"am","a") with splice  method

scrambledArray.splice(2,4);

console.log(chalk.blue(scrambledArray));


// Remove last element of array with pop method 

scrambledArray.pop();

console.log(chalk.gray(scrambledArray));


// Add elements ("I") with unshift method

scrambledArray.unshift("I");

console.log(chalk.italic(scrambledArray));


// Add elements ("am","a") with splice method 

scrambledArray.splice(1,0,"am","a");

console.log(chalk.red(scrambledArray));



// To combine elements back to a single string ("I am a student of GIAIC")
const result = scrambledArray.join(" ");
console.log(chalk.underline(`\n Final result is: \n`));

console.log(chalk.magenta(`\n ${result} \n`))


// --------------------------------------Assignment 2:Manipulating an Array: Rearranging Words---------------------------

// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".


console.log(chalk.green('\t \n /////////////////////// Arrange this scrambled array ////////////////////////////\n \t'));


const scrambledArrays = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

console.log(chalk.cyan(`Array: ${scrambledArrays}`));


// Remove elements (true,123,"am","a") with splice  method

scrambledArrays.splice(2,4);

console.log(chalk.blue(scrambledArrays));


// Remove last element of array with pop method 

scrambledArrays.pop();

console.log(chalk.gray(scrambledArrays));


// Add elements ("I") with unshift method

scrambledArray.unshift("I");

console.log(chalk.italic(scrambledArray));


// Add elements ("am","a") with splice method 

scrambledArray.splice(1,0,"am","a");

console.log(chalk.red(scrambledArray));



// To combine elements back to a single string ("I am a student of GIAIC")
const results = scrambledArrays.join(" ");
console.log(chalk.underline(`\n Final result is: \n`));

console.log(chalk.magenta(`\n ${result} \n`))


// ---------------------------Assignment 3: Company Product Catalog-------------------------


// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.



type Product = {
    name: string;
    model: string;
    cost: number;
    quantity: number;
};

const inventory: Product[] = [];

const product1: Product = {
    name: "iphone",
    model: "15 Pro",
    cost: 286.900,
    quantity: 10,
};

const product2: Product = {
    name: "iphone",
    model: "12",
    cost: 12000,
    quantity: 10,
};

const product3: Product = {
    name: "iphone",
    model: "14 Plus",
    cost: 499.999,
    quantity: 15,
};

inventory.push(product1, product2, product3);

console.log("\n inventory \n",inventory);

console.log(chalk.blue(`\n Quantity of the third product: ${inventory[2].quantity} \n`));

// adding another product to the inventory 

const product4:Product = {
    name: "samsung",
    model: "A14",
    cost: 31.999,
    quantity: 12,
};
inventory.push(product4);

console.log("current inventory",inventory);
console.log(chalk.magenta(`\n Quantity of the fourth product: ${inventory[3].quantity} \n`));
inventory.forEach((product, index) => {
    console.log(chalk.yellow(`Product ${index + 1}: ${product.name}`)); 
});


// --------------------------------------Assignment 4: Student List Organizer---------------------------------------


// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?


type Student = {
  name: string;
  isSenior: boolean;
  hasCompletedAssignments: boolean;
};

let students: Student[] = [
  { name: "Fatima", isSenior: true, hasCompletedAssignments: true },
  { name: "Unzila", isSenior: false, hasCompletedAssignments: false },
  { name: "Sk-afridi", isSenior: true, hasCompletedAssignments: true },
  { name: "Asma", isSenior: false, hasCompletedAssignments: false },
  { name: "Farhana", isSenior: true, hasCompletedAssignments: true },
  { name: "Rukhsana", isSenior: false, hasCompletedAssignments: false },
  { name: "Nida", isSenior: true, hasCompletedAssignments: true },
  { name: "Hania", isSenior: false, hasCompletedAssignments: false },
];

console.log(chalk.green("\n  Students list :"), students, "\n ");

function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
  return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}

const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log(chalk.blue("\n Senior Students with Assignments :"), seniorStudentsWithAssignments, "\n");

function removeIncompleteAssignments(students: Student[]): Student[] {
  return students.filter(student => student.hasCompletedAssignments);
}

const updatedClassList = removeIncompleteAssignments(students);
console.log(chalk.green("Students with completed assignments :"), updatedClassList);


  console.log(chalk.magenta(`Congratulations! Yor are very hard-working students. Keep it up!`));
  console.log(chalk.italic('\n \t Fatima, Sk-afridi, Farhana, Nida \t \n'));



function findStudentsWithIncompleteAssignments(students: Student[]): Student[] {
  return students.filter(student => !student.hasCompletedAssignments);
}

const studentsWithIncompleteAssignments = findStudentsWithIncompleteAssignments(students);
console.log(chalk.red("Students with Incomplete Assignments :"), studentsWithIncompleteAssignments);

console.log(chalk.red(`Warning! Dear student, kindly complete your assignment on time; otherwise, you will not be qualified for this course!`));
console.log(chalk.italic('\n \t Unzila, Asma, Hania, Rukhsana \n \t'));

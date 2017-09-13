# Practical JavaScript Notes

- Documenting requirements and tasks using the "It should" statement. A programming convention adopted for application requirements.

- New Tab = url://about:blank
- Key Shortcut for Console (CMD + Option + J) or right click inspect > console.

## Arrays
- A list is also known in programming as an array.
- An array in JavaScript is surrounded by brackets, each item surrounded by quotes.
- Arrays are stored in variables (var) following the variable name (todos) for referencing later and the value (array) to set to the variable.
- Array example:

		var todos = ['item 1', 'item 2', 'item 3']

### Displaying a List
- Displaying elements using 'console.log()' command. Similar to a print statement. Example:

		console.log('Hello World!')

- You can pass variables into 'console.log()', but not surrounded in quotes since it is not a string/text. Ex:

		console.log(todos)

- The console.log command can also take multiple items.

### Adding to a List
- New command call 'push'. Ex:

		todos.push('item 4')

### Change an a List Element
- variable[num]
- An array in programming always starts at 0 and not one. Computers start counting at 0. Humans start counting at 1.
- Changing an existing list item.

		variable[num] = 'New Updated Value'

### Deleting a List Item
- New call command to delete called 'splice'. Two numbers telling splice where to delete. First number is where to start deleting and second is where to stop:

		todos.splice(0, 1

## Functions
- Functions are just basically recipes with code.
- Functions encourage code reuse.
- A function is a recipe example would be:

		makeTurkeySandwich
  			Get one slice of bread.
  			Add turkey.
  			Put a slice of bread on top.

- The structure of a function.

		function functionName(parameters) {
 			steps ends with a semi-colon;
		}

- The makeTurkeySandwich pseudo-function would be:

		function makeSandwich() {
		  Get one slice of bread;
		  Add turkey;
		  Put a slice of bread on top;
		}

- In order to run a function, type the function name with opening and closing parenthesis.
When using a function, the input in the parenthesis are called 'arguments' not 'parameters'.

		makeTurkeySandwich(arguments)

- Customizing functions with parameters:

		makeSandwichWith _____
		  Get one slice of bread.
		  Add _____. // parameter/variable goes here
		  Put a slice of bread on top.

		function makeSandwichWith(filling) {
		  Get one slice of bread;
		  Add filling; // Adding the variable.
		  Put a slice of bread on top;
		}

- An example function saying "Hi" to a person:

		function sayHiTo(person) {
		  console.log('Hi', person);
		}

		sayHiTo('Bill') // Hi, Bill

- The person parameter is set to 'Bill' as the argument.

### Objects
- Object structure in JavaScript:

		var myComputer = { // myComputer object
			// properties
			// name, colon, value, separated by commas
			operatingSystem: 'mac',
			screenSize: '15 inches',
			purchaseYear: 2011
		};

## Object & Function Relationship

		var bill = {
			name: 'Bill',
			sayName: function() {
				console.log(this.name); // this refers to this entire object
			}
		}

- *'this'* when used as an argument refers to the entire object itself.
- A *method* is a property that's equal to a function.
- 'this.name' is calling a method to get the name property. '.name' will access the property 'name'.
- An anonymous function is a function without a name.

### Booleans
- Booleans are a representation of true or false statements.
- ! is called a bang operator. Indicates the opposite of whatever comes after it. !true = false & !false = true.
- != indicates *not* equal to value.

### Loops! For-Loops & While-Loops
- A loop is for repeating a certain amount of code, any number of times.

		// keep track of a variable called i and set it to 0
		i = 0
		// say 'hey' if 'i' is less than 3.
		say "hey" if i < 3
		// after that increase 'i' by 1.
		Increase i by 1

		0 "hey"
		1 "hey"
		2 "hey"
		3

- Loop syntax in JavaScript names

		i = 0 							// Initialization
		say "hey" if i < 3 	// Condition
		Increase i by 1 		// Final-Expression

- JavaScript Loop structure:

		<!-- for (initialization; condition; final-expression) {
			console.log("steps");
		} -->

		// Both methods are the same for incrementing by 1.
		// i = i + 1
		// i++
		// i += 1

		for (var i = 0; i < 3; i++) {
		  console.log("hey");
		}

## Looping Over Arrays

		var testArray = ['item 1', 'item 2', 'item 3'];

		// .length notation is a JavaScript function indicating the dynamic length of an existing array.
		for (var i = 0; testArray.length; i++ ) {
			// i is also a variable you can use.
			//console.log(i);
			console.log(testArray[i]);
		}

### If Statements
- If and else statements add logic to a program.

    if (condition) {
      // code that runs if condition is true
    } else {
      // code that runs if condition is false
    }

- You can use multiple if and else statements in an if block.
- If-Else statements.

### JavaScript Data Types
- Objects (Can be as complex as you want.)

		- {} // todoList, arrays, functions

- Primitives (Simple building blocks of a language. Limited data types. If it's not a primitive, it's an object.)

		- Text/String			// 'Look at this string!'
		- Number/Integer	// 1, 2, 3, 4, ...
		- Boolean					// true, false
		- Undefined				// value that hasn't been set.
		- Null						// 'Nothing'

- Primitive Comparisons:

		hello === hello // true
		hello === goodbye // false
		1 === 1 // true
		1 === 2 // false
		true === true // true
		true === false // false

- Object Comparisons:

		{1, 2, 3} === {1, 2, 3}
		// false, because it's not the same 'internal memory address/references'. Comparing memory addresses.

- When an object is created, it is saved in a unique location in computer memory. Hence the different memory address, even if the object is the same visually.
- The only way to compare objects with a true value is to assign it to a variable:

		var houseA = {};

		houseA === houseA // true

### HTML Essentials
- Keywords surrounded by angle brackets is called a tag. Each tag has an opening and closing tag, closing tag indicated by a forward slash.

		<html></html>

- A set of tags is called an element. <html></html> Is an HTML element. And there are more tags and elements inside of it. HTML Syntax:

		<!DOCTYPE html> <!-- For Specifying HTML type. Boilerplate thing. -->
		<html> <!-- Parent HTML Element -->
			<head> <!-- Child Head Element -->
				<link rel="stylesheet" href="style.css"> <!-- Child Link Tag -->
				<script src="script.js"></script> <!-- Child Script Tag -->
			</head> <!-- End Head Element -->
			<body> <!-- Child Body Element -->
				<h1>Hello, World!</h1> <!-- Child H1 Element -->
			</body> <!-- End Body Element -->
		</html> <!-- End HTML Element -->

		<button id="button"></button> <!-- id is an attribute. Along with rel, href, etc. -->

- Inside the body tag is the user interface that the users will most likely see and be interacting with.
- DOM (Document Object Model)
- HTML is just plain text that gives the browser information about the page, but the DOM is what the browser understands the document to be.
- The DOM is used to inspect elements in a browser.

### Buzzwords Used Often in a Professional Setting!
- Higher Order Functions:
	-	Functions that accept other functions.
	- Enhance the behavior of other functions.

- Callback Functions:
	- The functions that are passed into higher order functions.

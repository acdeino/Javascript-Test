// Use Double forward slashes to comment
// Using them to describe functions and code is a good practice
// Just like in C, every command or declaration has to be followed with a semicolon (;)


// A variable is a symbolic name for a value
// Variables are declared with the let keyword:
let x;                                 // Declare a variable named x.

// Values can be assigned to variables with an = sign
x = 0;                                 // Now the variable x has the value 0.

x                                      // => 0: A variable evaluates to its value.


// Javascript supports several types of values
x = 1;                                // Numbers (Integers in this case).

x = 0.01;                             // Numbers can be integers or reals.

x = "Hello, World";                   // Strings can be assigned to variables, but must be into quotations marks (" ").

x = 'Javascript';                     // It is also possible to use single quote marks instead of double.

x = true;                             // Boolean value can be assigned to variables as well.

x = false;                            // Different Boolean specimen.

x = null;                             // Null is a special value that means the variable has no value.

x = undefined;                        // Undefined is a special value that means the variable has no precise value assigned.


// Javascript most important datatypes are the so called objects
// An object is a collection of name-value pairs, or a string to value map.

let book = {                          // Objects are enclosed in curly braces.

    topic: "Javascript",              // The property "topic" has value "Javascript".

    edition: 7                        // The property "edition" has value 7.

};                                    // The curly brace and the semicolon mark the end of the object.


// Access the properties of an object with . or []

book.topic                            // => "Javascript"

book["edition"]                       // => 7 | another way to access property values.

book.author = "Flanagan";             // Create new properties by assignment.

book.contents = {};                   // {} is an empty object with no properties

//
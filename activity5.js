let favActorFirstName = "Johnny";//This line declare a variable name favActorFirstName and store a string value of Depp.
let favActorLastName = "Depp";//This line declare a variable name favActorLastName and store a string value of Depp.
let fullName = favActorFirstName.concat(" " + favActorLastName);//This line declares the variable name fullName using concat() which combines the favActorFirstName and favActorLastName
let uppercase = "JOHNNY DEPP";//This line declare a variable name uppercase which stores the uppercased fullName.
let message = "My favorite actor is " + " " + uppercase;// This declares the variable name message where it store "My favorite actor is" concatenating with the value in uppercase variable.
message += " " + "his best show is Pirates of the Caribbean";// Appends (+=) the message "his best show is Pirates of the Caribbean".

//prints the outputs.
console.log(favActorFirstName);
console.log(favActorLastName);
console.log(fullName);
console.log (uppercase);
console.log(message);


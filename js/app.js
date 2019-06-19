//console.log("We are alive!");


//Part 1: 
//1. The difference between interpolation and concatenation is that concatenation 
//adds strings together and interpolation is a template that strings new stuff together.

//2. DRY stand for "Don't repeat yourself". We should pay attention to it because it makes 
//our code cleaner and helps so we don't have broken codes as well as saves time. While 
//loops and regular loops help us with dry code.

//3. The difference between declaring a variable and assigning a value to a variable is that 
//declaring a variable means that memory is put for the variable and assigning a value to a 
//variable is when a value is assigned to the variable. The value in a variable can change so
//defining the variable means what the value is at the end of an operation.

//4. Const is when you want to be strict about not duplicating variables that are exactly 
//the same. Let allows you to redefine a variable.

//5. A parent directory is the directory in which the folder or current directory
//you are working on (or thinking of) lives in. 

//6. One way to find out what a command does in Unix is to type "man" and then the command
//that you want to know.

//7. Tab completion makes typing a lot faster! It saves time as well as helps with typo's.



//Part 2:
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b, b < c);
console.log(a === a, a < d);
console.log(e === 'Kevin');
console.log(48 =='48');



//Part 3:
//1. It is an infinite loop because it is not specified where it will start or where it
//will end. I think it is an infinite loop. Missing num++

//2. It is an infinite loop because it also does not say where it will start or end. 
// Missing num++

//3. 
let letters = "A"; //every time there is the word "letters" the value is "A"
let i = 0; //every time there is a letter "i" the value is 0

while (i < 20) { // 0 is less than 20 which is a true so now it goes to the next
	letters += "A"; //"A" is plus or equal to "A", which is true so go on to next
	i++; //the loop is done and can stop
}

console.log(letters); //equals true based on the code before

//the expected result was wrong. It looks like the answer was "A" twenty (or twenty one) times



//Part 4
//1. "for" loops everything is done inside the loop
//"while" loops have to be incremented before the loop and also it executes if the condition is true

//2. 
for (let i = 0; i <=999; i++){
	console.log(`The number is ${i}`);
}

//3. 
//The first part of the control statement is: the variable where our loop will start 
//The second part of the control statement is: is saying which condition the loop will run to
//The third part of the control statement is: increases the value each time till the end, controlling the stop of the loop

//4. 
for (let i = 999; i >=0; i--){
	console.log(`The number is ${i}`);
}

//5. 
for (let i = 0; i <=10; i++){
	console.log(`The value of i is: ${i} of 10`);
}



//	console.log("The number is ${i}");

// console.log("The number is" + "" + ${i});






































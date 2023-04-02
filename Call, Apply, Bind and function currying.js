Question:
- Write a function and use 'call' to call the function
- Write a program using apply
- Write a program using bind
- Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
(Dont pass in args. Read from 'this' and use BIND)

Solution:
Call, Apply, Bind:
var obj = {num:2};
var addToThis= function(a){
   return this.num+a;
};

console.log(addToThis.call(obj,3));

 var obj = {num:2};
var addToThis= function(a,b,c){
   return this.num+a+b+c;
};

var arr=[3,4,5];
console.log(addToThis.apply(obj,arr)); 

var obj = {num:2};
var addToThis= function(a,b,c){
   return this.num+a+b+c;
};

var close=addToThis.bind(obj); 
console.log(close(3,4,5));

var obj = {age:20};
    var addToThis= function(){
       console.log(this.age);
    };
    
    var output=addToThis.bind(obj);
   output();

Currying:
Using bind:
ex:
let multiply = function(x,y){
console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this,3,4);
multiplyByThree(5); //It will ignore the 5 and take the value of 'y' as 4.
Output:
6
12

Using closures:
ex:
let multiply = function(x){
      return function (y){
         console.log(x*y);
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(4);
Output:
6
12
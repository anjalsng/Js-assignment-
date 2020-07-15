/*console.log()---Mainly used to log(print) the output to console. we can put any type inside the log() ,be it a string ,array, object ,boolean etc.*/

console.log("java script");
console.log(1);
console.log("true");
console.log("null");
console.log(undefined);
console.log(["a","b","c"]); // array
console.log({a:1,b:2,c:3,d:4});
/*
console.error()---
    Used to log error message to the console. ueful n testing of code. By efault the rror message ill be high-lighted with red color */
console.error("error occured")
console.warn("this is the warning message")
//console.clear()
//console.time() and console.timeEnd()
console.time('xyz');
let fun1 = function(){
    console.log('fun1 is running')
 }
 let fun2 = function(){
    console.log('fun2 is running')
 }
console.timeEnd('xyz');
fun1();
fun2()
 //console.count() method
 for(let i=0;i<5;i++){
     console.count(i);
 }

 console.table({"javaScript":"Brendan Eich",'python':'Guido van Rossum','c++':'Bjarne Stroutrup'})
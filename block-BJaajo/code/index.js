Create the execution context diagram of the following code. Also write the output of the code below. Keep in mind to have call stack, web browser API and event loop in the diagram. After creating the execution context diagram add the image to the img folder.

console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 2000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0); // execute this code after 1000 ms
console.log('Third');
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0);
console.log('Fourth');
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0);
console.log('Fourth');
What will be the output of the code below and why? Also write the timing of the output starting with 0 ms.
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
console.log('First');
setTimeout(function exec() {
  console.log('Second');
}, 0);
runWhileLoopForNSeconds(3);
console.log('Third');
Convert the synchronous code given below into asynchronous. If you execute this code it will print one, two and three. Change the code in such a way that it should print one, three and two. You are not allowed to move the code up and down.
console.log('one');
console.log('two');
console.log('three');
Convert the synchronous code given below into asynchronous. If you execute this code it will print one, two and three. Change the code in such a way that it should print one, three and two. You are not allowed to move the code up and down.
console.log('one');
console.log('two');
console.log('three');
Write a function named asyncForEach that is similar to forEach. But asyncForEach is asynchronous in nature rather than synchronous.
funciton asyncForEach(){
  //
}
//  Output of the function below should be
// one
// three
//  1, 2, 3

console.log('one');
asyncForEach([1, 2, 3], (num) => console.log(num));
console.log('three');
Convert the following function into asynchronous. The output of the function will be
Convert the code below in such way that the output should be the one below

console.log('First Call');
[1, 2, 3, 4, 5].firEach((num) => console.log(num));
console.log('Last Call');

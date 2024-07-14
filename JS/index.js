console.log("hello world");
const arr=[1,2,3,4]
const arr2=[6,7,8,9];
//when a arry is concated with another array the type of the final array will be object
const final_arr3=arr.concat(arr2); console.log(final_arr3);
console.log(`the type of the final array is ${typeof(final_arr3)}`);

console.log(`is the final array is a arry? ${Array.isArray(final_arr3)}`);
//typecasting
console.log(`the array is  ${Array.from(final_arr3)}`)
  
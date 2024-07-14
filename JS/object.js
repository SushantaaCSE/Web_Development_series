//object literls 
const sym=Symbol("key1")
const user={
    name:"sushanta",
    "full name":"sushanta ruidas",
    [sym]:"key1",
    age:23,
    
    location:"westbengal"

}
console.log(user.name);
console.log(user["full name"]);
console.log(user[sym]);
console.log(typeof(user[sym]))
user.location="bankura"
console.log(user.location);
Object.freeze(user);
user.location="up"
console.log(user.location)
console.log(user);
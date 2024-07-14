//singleton object
const user={}
user.id="1Sushanta"
user.name="sushanta"
const regularUser={
    email: "johndoe@gmail.com",
    fullname:{
        firstname:"sushanta",
        lastname:"ruidas"

    }
}
const obj1={

}
console.log(regularUser);
console.log("user keys");
console.log(Object.keys(user))
console.log("user values");
console.log(Object.values(user));
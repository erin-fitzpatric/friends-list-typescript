import { Friend } from "./friend.class";

let friendArray = [];
let friend1: Friend = new Friend("Scott", 29, "tocs@gmail.com", true);
friendArray.push(friend1);
let friend2: Friend = new Friend("Chea", 29, "chea@gmail.com", true);
friendArray.push(friend2);
let friend3: Friend = new Friend("Sam", 25, "sam@gmail.com", false);
friendArray.push(friend3);
let friend4: Friend = new Friend("Joe", 27, "joe@gmail.com", false);
friendArray.push(friend4);
let friend5: Friend = new Friend("Colton", 23, "cl@gmail.com", false);
friendArray.push(friend5);

console.log("Name\tAge\tEmail\t\t\tBest")
console.log("================================================");
for (let f of friendArray) {
    console.log(f.name + "\t" + f.age + "\t" + f.email + "\t\t" + f.bestFriend);
}


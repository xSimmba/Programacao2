//    console.log("Hello");
//
//    let a = 1;
//    let b = 0;
//
//    const fibonnci = () => {
//
//        for (let i = 0; i < 10; i++) {
//            const temp = a;
//            a = a += b;
//            b = temp;
//            console.log(a);
//        }
//    }

//    fibonnci();

//=======================================


//    let user = {
//        id: 0,
//        name: 'Luka',
//        age: 20,
//        gender: "male",
//        DoB: '20/08/2003',
//        hobbies: ['surf', 'futebol','golf','programming']
//    }
//  console.log(user)

//    for (const key in user) {
//            console.log(user[key])
//    
//    }

//=========================================================

//const originalObject = {
//    key1 : "value1",
//    key2 : "value2",
//    key3 : "value3",
//};

//const entriesArray = Object.entries(originalObject);

//console.log(entriesArray);

//const transformArray = entriesArray.map(([key, value])) => {
//    return {
//        originalKey: key,
//        original
//    }
//}

//let user = {
//    id: 0,
//    name: 'Luka',
//    age: 20,
//    gender: "male",
//    DoB: '20/08/2003',
//    hobbies: ['surf', 'futebol','golf','programming']
//}

//class User {

//    #name;
//    age;

//    constructor(user) {
//        this.#name = user.name;
//        this.age = user.age;
//    }
//    #getName() {
//        return this.name;
//    }
//    getAge() {
//        return this.age;
//   }
//
//    set name(value) {
//        this.#name = value;
//    }
//    get name() {
//        return this.#name
//    }
//}

//const user2 = new User(user);
//console.log(user2.#getName());


import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

const car = new Car();
const motorcycle = new Motorcycle();







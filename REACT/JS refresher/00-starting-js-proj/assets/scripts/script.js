import key from './api.js';

//console.log(key);


// const user = 
// {
//     name : "Max",
//     age : 20
// }

// console.log(Max);


// class User{

//     constructor (name,age){
//         this.name = name;
//         this.age = age
//     }
// }


// let user1 = new User("max" , 31);

// console.log(user1.age);


function transformToObjects(numberArray) {
    return numberArray.map(item => ({ val: item }));
}
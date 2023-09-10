


const users=[
    {
        id:1,
        name:"arun",
        age:25,
        isActive:true
    },
    {
        id:2,
        name:"nitin",
        age:15,
        isActive:true
    },
    {
        id:3,
        name:"ravi",
        age:27,
        isActive:false
    },
    {
        id:4,
        name:"vijay",
        age:21,
        isActive:true
    },
    {
        id:5,
        name:"jatin",
        age:10,
        isActive:true
    }
]

// solution 1

// const names=[]
// for(let i=0;i<users.length;i++){
//     names.push(users[i].name)
// }

// console.log("name of users:",names)

// active name

// const names=[]
// for(let i=0;i<users.length;i++){
//     if(users[i].isActive){

//         names.push(users[i].name)
//     }
// }

// console.log("name of users:",names)

// using forEach()
// it does not return any value

// const names=[]
// users.forEach((user)=>{
//     if(user.isActive){

//         names.push(user.name)
//     }
// })
// console.log("users name is:",names)

// using map() and method chaining

const names=users.filter((user)=>user.isActive).sort((u1,u2)=>u1.age<u2.age?1:-1).map((user)=>user.name)
console.log("user name is here:",names)
console.log("here we are learning how to write the code in efficient way")
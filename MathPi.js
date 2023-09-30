// console.log(Math.ceil(Math.PI))

let changer = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(changer)

let user = {
    name: "fotu",
    email: "fotu@gmail.com",
    age: 36,
    isLoggedIn: function(){
        console.log(`No, user is logged out`)
    }
}

// console.log(Object.getOwnPropertyDescriptor(user, "email"))

Object.defineProperty(user, "email", {
    writable: false,
    configurable: false,
})

// console.log(Object.getOwnPropertyDescriptor(user, "email"))

for (let [key, value] of Object.entries(user)) {

    
    if(typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}
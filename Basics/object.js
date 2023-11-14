//singleton
// Object.create         by constructor
// object Literals

const Jsuser = {}    // Object create but empty

const sym = Symbol("key1")

const User = {
    name: "Mohd Adil",
    age: 25,
    [sym]: "12345",
    email: "brokenaedil@gmail.com",
    address: "Alld UP",
    country: "India",
    "country Code": +91,
    isLoggedIn: false,
    lastLogin: ["Saturday, Friday"]
}

User.email = "siddiquiadil0786@gmail.com"

// To access Object properties
console.log(User.name);
console.log(User["country Code"]);
console.log(User[sym]);
console.log(User.email);

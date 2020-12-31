let userArray = process.argv.slice(2);

    // what goes here?
let [,username, email,...args] = userArray;

console.log({username:username, email:email})

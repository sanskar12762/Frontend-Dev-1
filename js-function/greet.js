// main function that prints greeting
function greetUser(name, callback) {
    console.log("Hello " + name);

    // now call the callback function
    callback();
}

// this function will run after greeting
function showEndMessage() {
    console.log("Welcome to the course!");
}

// calling the function with callback
greetUser("Ananya", showEndMessage);

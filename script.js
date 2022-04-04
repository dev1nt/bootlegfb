// database array stores (user's) username and passwords. 
var database = [
{
    username: "Devin",
    password: "Iloveu123"
}, 
{
    username: "Andrew",
    password: "1234"
},
{
    username: "Bob",
    password: "0987"
}];

// newsfeed array stores (user's) username and timeline.
var newsfeed = [
{
    username: "Devin",
    timeline: "I love learning code!",
},
{
    username: "Andrew",
    timeline: "I like JavaScript!",
},
{
    username: "Bob",
    timeline: "I'm chilling rn and learning JS.",
}
];

// function checks (if user is valid) by checking if (username and password) matches with a (username and password) in the (database array) and if one matches return (true).
// Else the entered (username and password) will look for a match in the (database array) and if it (doesn't) match then return (false). 
function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && 
            database[i].password === password){
            return true;
        }
    }
    return false;
}

// SignIn function looks to see ifUserValid function retruns true and if so it then logs newsfeed. If it returns false then alert will an pop up with wrong username and password.
function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password.");
        alert("Window will close on ok.");
        window.close();
    }
}

// Prompts user to enter a username and password.
// And saves it to a variable.   
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// takes the input from the prompt and can now be used with the signIn function.
signIn(userNamePrompt, passwordPrompt);
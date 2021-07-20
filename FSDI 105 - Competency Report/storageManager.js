const KEY_USERS = "users";
const KEY_LOGIN = "login";


//everything you want to save should be a key: value pair
//  name (key)   value (Chris)
//users (key)    [listof users - an array]
//value and key should be on a string
//local storage doesn't support objects, only supports strings
//JSON - Javascript Object Notation -- a way to represent objects as Strings; then you save the strings

function saveUser(user) {  //receive
    //The three steps to add the old data:
    //load old data
    let data = readUsers();
 
    //merge
    data.push(user);

    //then save 
    let val = JSON.stringify(data); //parse into a JSON string
    localStorage.setItem(KEY_USERS, val);  //save
}


//this will return all the users we have so far
function readUsers() { //read
    let data = localStorage.getItem(KEY_USERS);
    if (!data) {
        return [];
    }    else {
    let list = JSON.parse(data); //parse string back into object
    return list;
    }
}

function clearUsers() {
    localStorage.removeItem(KEY_USERS);
}

function getLoggedIn() {
    let dataStr = localStorage.getItem(KEY_LOGIN);
    if (dataStr) {
    return JSON.parse(dataStr);
    }
    return null;
}

//    localStorage.setItem(KEY_LOGIN, JSON.parse(user));



function saveLoggedIn(user) {
localStorage.setItem(KEY_LOGIN, JSON.stringify(user));
}

function logOut() {
    localStorage.removeItem(KEY_LOGIN);
}

//can call readUsers() to see if you have more objects in your storage





function clearData() {
    //WARNING: this will clear ALL data, not just users
localStorage.clear();
}
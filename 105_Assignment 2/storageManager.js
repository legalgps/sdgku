

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
    localStorage.setItem("users",val);  //save
}


//this will return all the users we have so far
function readUsers() { //read
    let data = localStorage.getItem("users");
    if (!data) {
        return [];
    } 
    else {
    let list = JSON.parse(data); //parse string back into object
    return list;
    }
}

//can call readUsers() to see if you have more objects in your storage


function clearUsers() {
    localStorage.removeItem("users");
}



function clearData() {
    //WARNING: this will clear ALL data, not just users
localStorage.clear();
}
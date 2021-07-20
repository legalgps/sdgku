errorOnForm = false;





function User(email,password,first,last,age,address,phone,payment,color) {
    this.email = email;
    this.password = password;
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.address = address;
    this.phoneNumber = phone;
    this.payment = payment;
    this.color = color;

//   return email,password,first,last,age,address,phone,payment,color;
}




function registerUser(){
  // if(errorOnForm)

    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#selColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color)    
    saveUser(user); //this function exists in storageManager
    setNavInfo(); //update the user counts
    readUsers();
  //  clearForm();
}
    function clearForm()  {
        // homework: clear every input field
        // set the select to first element
        // set the color back to black

        //part 2 - organize the files
    
    

    



    console.log(email,password,first,last,age,address,phone,payment,color);
    


   // HW: get the values for the all controls

    // 2nd part: Create an object constructor for User
    // create a user object with data from the input fields
    // console log the object

   // console.log(email, password);
}


function changeColor () {
    let color = $("#selColor").val();
    console.log("new color",color);

    $("#hForm").css("color",color); 
    

}

function validatePass() {
    let txtPass = $("#txtPassword");
    let password = txtPass.val();

    if (password.length < 5) {
       txtPass.css('border', '2px solid red');
        displayError("Error: Password too short");
        
    }

    else {
       txtPass.css("border", "1px solid rgb(133, 133, 133)");
        hideError();
    }
}


function validateFirstName() {
    let txtFirst = $("#txtFirst");
    let first = txtFirst.val();


    if (first = "") {
        displayError();
    }
    else {
        hideError();
    }
}




function displayError(text){
    $("#alertError").removeClass("hide").text(text);
    $("#btnSave").attr("disabled",true);
    errorOnForm = true;

}

function hideError() {
    $("#alertError").addClass("hide");
    $("#btnSave").attr("disabled",false);
    errorOnForm = false;
}


/*function readUsers() { //read
    let data = localStorage.getItem("users");
    if (!data) {
        return [];
    } 
    else {
    let list = JSON.parse(data); //parse string back into object
    return list;
    }
}
*/
//catch the change on the input; in your change functin: get text from pw input, if text is less than 5 charactaers, console a msg






function init() {
console.log("Register Page");

/*
    # id
    . class
    TAG

    */

   


    $("#btnSave").click( registerUser);



    $("#selColor").change(changeColor);

    $("#txtPassword").change(validatePass);

}

window.onload = init;





/*    email
    password
    first
    last
    age
    address
    phone number
    payment
    color
*/

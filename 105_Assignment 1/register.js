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
   

    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#txtselPayment").val();
    let color=$("#txtselColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color)    
    saveUser(user); //this function exists in storageManager

    readUsers();



    console.log(email,password,first,last,age,address,phone,payment,color);
    


   // HW: get the values for the all controls

    // 2nd part: Create an object constructor for User
    // create a user object with data from the input fields
    // console log the object

   // console.log(email, password);
}






function init() {
console.log("Register Page");

/*
    # id
    . class
    TAG

    */
    $("#btnSave").click( registerUser);
    
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

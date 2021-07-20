function login() {
    let email =  $('#txtEmail').val();
    let password = $('#txtPassword').val();
  //  let firstName = $('')

    console.log(email, password);

        let usersList = readUsers();
        let found = false;
        for(let i=0; i < usersList.length; i++) {
            let user=usersList[i];
                     if(user.email === email && user.password === password) {
                         found = true;
                console.log("You are now logged in");      
                //send user to another page
       saveLoggedIn(user);
       window.location = "users.html";

            }
        }

        if(!found) {
            console.error("Invalid credentials");      
        $("#alertError").removeClass("hide");
        setTimeout(function() {
            $('#alertError').addClass("hide");
        },5000);
    }                    
}

function showProperDiv() {
    //load data
    let currentUser = getLoggedIn();
    if (currentUser) {
        //hide login form
        $('#loginForm').hide();
        $('#logoutForm').show();

$('#hEmail').text(currentUser.email);
$('#hName').text(currentUser.firstName + " " + currentUser.lastName)

        //set headings info
        //curenUser.email

        console.log(currentUser.email);
    } else {
        $('#loginForm').show();
        $('#logoutForm').hide();
    }
}

function init() {
console.log("Home Page");
showProperDiv();

$("#btnLogin").click(login);
$("#btnLogOut").click(function () {
    logOut();
    showProperDiv();
});


}

window.onload = init;
/*


function displayUsers(users) {
    //travel the array
    for(let i=0; i < users.length; i++) {
        //get each user
        let user = users[i];

        //display the user
        let syntax =
        `<tr>
            <td>${user.email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.payment}</td>
            <td style=background-color:${user.color}></td>
        </tr>`;

    
        $("#tblUsers").append(syntax);
    }

}





function init() {
    console.log("Listing users");

    var users = readUsers();
    displayUsers(users);

    //hook events
    $("#btnClear").click(function() {
        clearUsers();

        location.reload();
    });
    }


*/





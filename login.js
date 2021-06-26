var userNameDB="chris@legalgps.com";
var passwordDB="123";

function login(){
    var un=document.getElementById("userName").value;
    var ps=document.getElementById("password").value;

    if(userNameDB===un && passwordDB===ps){
        
document.write(`Welcome to the system ${un}`);
}else{
    document.write('Incorrect values');
}
console.log(un,ps);

}
var salon={  
    name:"the fashion pet",
    address:{
        street:"Atalanta Ave",
        number:"307"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}


var c=0;
    class Pet{
        constructor(name,age,gender,breed,service,ownerName,contactPhone){
            this.name=name;
            this.age=age;
            this.gender=gender;
            this.breed=breed;
            this.service=service;
            this.ownerName=ownerName;
            this.contactPhone=contactPhone;
            this.id=c++;
        }
}



function displayPet(){
    var tmp="";
    document.getElementById("info").innerHTML=`<p>Amount of Pets: ${salon.pets.length}</p>`;   
    for(var i=0;i<salon.pets.length;i++){

        tmp+=`
        <table id="${salon.pets[i].id}" class="pet">
        <th class="pet-title">
         <p> Name: ${salon.pets[i].name}</p>
                <button onclick="deletePet(${salon.pets[i].id});">🗑️</button>
            </th>
            <td> Age: ${salon.pets[i].age} </td>
            <td> Gender: ${salon.pets[i].gender} </td>
            <td> Breed: ${salon.pets[i].breed} </td>
            <td> Service: ${salon.pets[i].service} </td>
            <td> Owner: ${salon.pets[i].ownerName} </td>
            <td> Contact Phone: ${salon.pets[i].contactPhone} </td>
        </table>`;
    }
    document.getElementById("pets").innerHTML=tmp;
}


function deletePet(id){
    var div=document.getElementById(id);
    for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];
        if(aPet.id==id){
            deleteIndex=i;
        }
    }
    salon.pets.splice(deleteIndex,1);
    div.remove();
    displayPet();
}
function validation(i1,i2,i3,i4,i5,i6,i7){
    if(i1!="" &&
        i2!=""&&
        i3!="" &&
        i4!="" &&
        i5!="" &&
        i6!="" &&
        i7!=""){
            var flag=true;
        }
        return flag;
    }    
    function registerPet(){
        //get and store the values
        var inputName=document.getElementById("petName").value;
        var inputAge=document.getElementById("petAge").value;
        var inputGender=document.getElementById("petGender").value;
        var inputBreed=document.getElementById("petBreed").value;
        var inputService=document.getElementById("petService").value;
        var inputOwnerName=document.getElementById("ownerName").value;
        var inputPhone=document.getElementById("ownerPhone").value;
//console.log
//create generic object
if(validation(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputPhone)){
var thePet=new Pet(inputName,Number(inputAge),inputGender,inputBreed,inputService,inputOwnerName,inputPhone);
console.log(thePet);
//push object into array
salon.pets.push(thePet);
//clear inputs
clearInputs();
displayPet();
}else{
    alert("Enter correct values");
}
    }

function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("ownerName").value="";
    document.getElementById("ownerPhone").value="";
}

function init(){
    console.log("init");
    var scooby=new Pet("Scooby",50,"Male","Dane","Shower","Shaggy","555-555-555");
    var scrappy=new Pet("Scrappy",40,"Male","Dane","Nails cut","Shaggy","666-666-666");  
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
displayPet();
//hook events
document.querySelector(`#btn-register`).addEventListener("click", registerPet);
}
window.onload=init;
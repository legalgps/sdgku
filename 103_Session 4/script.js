//characterone
let characterOneName="Good Guys";
let characterOnePoints=100;

let characterTwoName="Bad Girl";
let characterTwoPoints=100;

function displayCharacter(){
    document.getElementById("info-c2").innerHTML=` <p><b>Name: </b>${characterTwoName}</p>
                    <p><b>Points: </b> ${characterTwoPoints}</p>`;
}

displayCharacter();

    function attack(){
        document.getElementById("console").innerHTML=`<p><b>Attacking:</b>}</p>`;
        //discount points   
        var newPoints=characterTwoPoints-20;
            //cond
    if (newPoints<=0){
        document.getElementById("console").innerHTML=`<p><b>You're F'd </b></p>`;
        document.getElementById("btn-attack2").style.display="none";
    }else{
        //var
        characterTwoPoints=newPoints;

        //disp

        displayCharacter();
    }
        
    //BadGirl

    function displayCharacter2(){
        document.getElementById("info-c1").innerHTML=`<p><b>Name: </b>${characterOneName}</p>
        <p><b>Points: </b>${characterOnePoints}</p>`;
}

displayCharacter2();

function attack2(){
document.getElementById("console").innerHTML=`<p><b>Attacking:</b>}</p>`;
//discount points   
var characterOneNewPoints=characterOnePoints-20;
//cond
if(characterOneNewPoints<=0){
document.getElementById("console").innerHTML=`<p><b>You're F'd </b></p>`;
document.getElementById("btn-attack").style.display="none";
}else{
//var
characterOnePoints=characterOneNewPoints;
//disp


displayCharacter2();


}
}
    }
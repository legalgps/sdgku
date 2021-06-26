


function productInput(){
    var productName=prompt("Enter Product Name:");
    var quantity=prompt("Enter Quantity");
    var price=prompt("Enter price");

alert(`
You wanted ${productName}. 
You ordered ${quantity} of them. 
Your initial total is ${quantity*price}.
After taxes, your total will be ${quantity*price*1.25}
`);

}
productInput();


/*


function productInput(){
    var productName=prompt("Enter Product Name:");
var quantity=prompt("Enter Quantity");
var price=prompt("Enter price");

alert(`
You wanted ${productName}. 
You ordered ${quantity} of them. 
Your initial total is ${quantity*price}.
`)


}


/*

function calculator(){
    var number1=Number(prompt("Enter your number 1:"));
    var number2=Number(prompt("Enter your number 2:"));

    document.getElementById("results").innerHTML=`
                      <p>${number1} + ${number2} = ${number1+number2}</p>
                      <p>${number1} - ${number2} = ${number1-number2}</p>
                       <p>${number1} x ${number2} = ${number1*number2}</p>
                       <p>${number1} / ${number2} = ${number1/number2}</p>
                    `;
}




var password=prompt("Enter your password");
var age=prompt("How old are you?");
var country=prompt("What country do you live in?");
var salary=prompt("How much money do you make each month?")

document.write(`Here's all the shit we have on you:
<h4>${myName}</h4>
<h4>${email}</h4>
<h4>${password}</h4>
<h4>${age}</h4>
<h4>${country}</h4>
<h4>Monthly Salary ${salary*12}</h4>

`)





//console.log("Welcome to the system " + myName);

//document.write("Welcome to the system " + myName)

//var password=prompt("Enter your password:");
//document.write(`<h1>Welcome</h1> to the system  ${myName}
//<br>
//<p>${password}</p>`)

//document.write("<h1>Welcome to the system"+myName+"</
h1")
*/
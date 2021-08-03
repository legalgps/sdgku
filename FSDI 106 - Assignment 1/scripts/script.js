
function createTodo() {
    //console.log("Creating new Todo");    

    let dick = $('#txtTodo').val();
    console.log(dick);
    //get the text
    //console log it


    //syntax can be anything -- including dick2  -- append just means, "look for where the id is in html, and 'append' or Add, to that part"
    let dickHTML = 
    `<div>
  
        <label>${dick}</label>

        <button class="btn btn-sm btn-primary"><i class="fas fa-check-square"></i>         Done</button>
        <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i>        Delete</button>
    </div>`
 

    $('#pendingList').append(dickHTML);

}



function init() {
console.log("Todo APP");

//hook events
$("#btnSave").click(createTodo);
}


window.onload = init;


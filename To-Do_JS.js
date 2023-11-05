
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
let noOfTask= document.getElementById("no-task") ;
let count=0;


// on click function to add List item

function addList(){
    if(inputBox.value===""){
        alert("Enter You List Name");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        let close=document.createElement("span");
        close.classList.add("closeBtn");
        close.innerHTML="\u00d7"
        li.appendChild(close);
        listContainer.appendChild(li);
        
        count++;
        let str=count+" Task Left"
        noOfTask.innerText=str;
    }

    inputBox.value="";
    saveData();
}

// Key Event function to add List To Enter the button 


inputBox.addEventListener("keydown",function(event){
    if(event.keyCode == 13){
        addList();
    }
})

//=============== To Deleted the list item and checked list or unchecked function ==============


listContainer.addEventListener("click", e => {
if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData();
} else if(e.target.tagName='SPAN'){
    e.target.parentElement.remove();
    count--;
    let str=count+" Task Left"
    noOfTask.innerText=str;

    saveData();
}
} , false);




// ================== Save the Program in Local Storage ==========================


function saveData(){
localStorage.setItem("Data", listContainer.innerHTML);
}


// ================  To loa the save data from the local storage ==================

function showData(){
listContainer.innerHTML=localStorage.getItem("Data");
}

showData();

// =============== On hover Condition to show and hide the ADD button =====================

const row=document.querySelector(".row");
row.addEventListener("mouseout",function(){
document.querySelector("#todo-list-add-btn").style.display = 'none';
});

row.addEventListener("mouseover",function(){
document.querySelector("#todo-list-add-btn").style.display = 'block';
});






//======================== On hover Condition to show and hide Deleted Button list item     ======================== 


listContainer.addEventListener("mouseover", (e) => {
    if (e.target.tagName === 'LI') {
        e.target.querySelector("span.closeBtn").style.display = 'block';
    }
});

listContainer.addEventListener("mouseout", (e) => {
    if (e.target.tagName === 'LI') {
        e.target.querySelector("span.closeBtn").style.display = 'none';
    }
});
const inputbox = document.getElementById("input-box");
const containerlist = document.getElementById("list-cont");

function onclck(){
    if(inputbox.value===""){
        alert("It cannot be blank");
    }
      else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
         containerlist.appendChild(li);
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
         }
         inputbox.value="";
         savedata();
}
containerlist.addEventListener("click",function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false); 

function savedata(){
    localStorage.setItem('data',containerlist.innerHTML);
}
function showdetail(){
    containerlist.innerHTML = localStorage.getItem("data")
}
showdetail();

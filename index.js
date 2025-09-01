const input= document.getElementById('input');
const container=document.querySelector('.container')
const task=document.getElementById('add-task')
const submit=document.getElementById('submit')

submit.addEventListener("click" ,() =>{
const value=task.value.trim();
if(!value) return;
const li=document.createElement("li");
const checkbox=document.createElement("input");
checkbox.type="checkbox";
checkbox.addEventListener("change",(e) =>{
    if(e.target.checked){
     li.classList.add("done")
    }
    else{
     li.classList.remove("done")
    }
})
const trash = document.createElement("button");
trash.textContent="🗑️"
trash.style.cursor="pointer";
trash.addEventListener("click",() =>{
    li.remove(checkbox);
})
li.appendChild(checkbox);
li.appendChild(document.createTextNode(" " + value));
li.appendChild(trash);
container.appendChild(li);
 task.value = "";
})

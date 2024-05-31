 const formEl = document.querySelector(".form")
const inputEl = document.querySelector(".input") 

const ulEl = document.querySelector(".list")

let list = JSON.parse(localStorage.getItem("lsit")); 

list.forEach(task=>{
    toDoList(task)
})
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    toDoList(task)
});


function toDoList(task){
    let new_Task = inputEl.value;

    if(task){
        new_Task=task.name
    }

    const liEl = document.createElement("li");

    if(task && task.checked){
        liEl.classList.add("checked");
    }
    liEl.innerText = new_Task;
    ulEl.appendChild(liEl)
inputEl.value="" 
const checkBtnEl = document.createElement("div")

checkBtnEl.innerHTML = ` 
<i class="fa-solid fa-circle-check"></i>
`;
liEl.appendChild(checkBtnEl);
const trashBtnEl = document.createElement("div")
trashBtnEl.innerHTML=`
<i class="fa-solid fa-trash-arrow-up"></i>
`;
liEl.appendChild(trashBtnEl);
checkBtnEl.addEventListener("click",()=>{
    liEl.classList.toggle("checked")
    updatelocalstorage();
});
trashBtnEl.addEventListener("click",()=>{
    liEl.remove();
    updatelocalstorage();
});
updatelocalstorage() 
}
function updatelocalstorage(){
    const liEls = document.querySelectorAll("li")
     list=[]
    liEls.forEach(liEl=>{
        list.push({
            name:liEl.innerText,
            checked:liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list",JSON.stringify(list))


}

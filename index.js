 /* we need to add listener to "form" to catch the content that what we have typed */
 const formEl = document.querySelector(".form")

 /* whatever we are typing in content box that is feteched with ".input"(class selector)  */
const inputEl = document.querySelector(".input") /* we are getting the input content what user is giving from .input */

const ulEl = document.querySelector(".list")

let list = JSON.parse(localStorage.getItem("lsit")); /* convert into array again */

list.forEach(task=>{
    toDoList(task)
})

/* two parameters 1.event that we want to use 2.funtion which will start when event happens */
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    /* suppose if we enter the text in provided box and then pressing enter the pages reloads and that text is gone.Reloading has to stop,for this we prevent reloading,that text remains same */
    /* if we go and type something the content is not removing and page is also not getting refreshed */
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

/* from the above three lines ,we have created variable new_Task and the new content which is going to typed are added in li.appending the new text */
/* with line 22,the new text which we have typed after clicking enter those were added to list  */
inputEl.value="" /* With this line after entering into new text we press enter and then it added to list,but by adding this line after pressing enter the text was removed after adding the new content to list */

/* Now adding those icons to new list items */
const checkBtnEl = document.createElement("div")

checkBtnEl.innerHTML = ` 
<i class="fa-solid fa-circle-check"></i>
`;
liEl.appendChild(checkBtnEl);
/* by this 31,32,33,34 lines the check button will be added to new list items also */


const trashBtnEl = document.createElement("div")
trashBtnEl.innerHTML=`
<i class="fa-solid fa-trash-arrow-up"></i>
`;
liEl.appendChild(trashBtnEl);

/* same reason for this trash button also */
/* Now if you comment the lsit items those will be removed from the code,but if we type dynamically the items will be added */


/* Now adding event listener to check-box icon  and trash button */

/* adding event listener to checkbox-icon */
checkBtnEl.addEventListener("click",()=>{
    liEl.classList.toggle("checked")
    updatelocalstorage();
});
/* adding event listener to trash icon */ 
trashBtnEl.addEventListener("click",()=>{
    liEl.remove();
    updatelocalstorage();
});

/* the problem is the text we are typing is not stored.If we refresh the page the content is gone */
/* for this we use local storage. */
updatelocalstorage() /* calling localstorage function */
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
    localStorage.setItem("list",JSON.stringify(list)) /* list variable is converted into string datatype */


}
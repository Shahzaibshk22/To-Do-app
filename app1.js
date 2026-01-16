const todoList=document.getElementById("todoList")
const Inputvalue=document.getElementById("todoInput")

function onClickBtn(xyz){
    xyz.textcontent="text changed"
}
function addTodo(ele){
    let cleanInput=Inputvalue.value
    if(Inputvalue.value==""){
        alert("Instruction Invalid")
    }
    else {
    const li=document.createElement("li") 
    li.classList.add("li")
    const updateBtn=document.createElement("button")
    updateBtn.textContent="Upd"
    updateBtn.classList.add("update-btn")   
    const delbtn=document.createElement("button")
    delbtn.textContent="Del"   
    delbtn.classList.add("delete-btn")
    const completeBtn=document.createElement("button")
    completeBtn.textContent="Comp"   
    completeBtn.classList.add("complete-btn")
    
    li.innerText=Inputvalue.value
    todoList.append(li)
    li.append(updateBtn, delbtn , completeBtn)

    delbtn.addEventListener("click",()=>{
    li.remove()    
    }) 
    
    updateBtn.addEventListener("click",()=>{
    Inputvalue.value = cleanInput   
    ele.textContent="Update" 
    ele.addEventListener("click",()=>{
        li.textContent=Inputvalue.value
        ele.textContent="Add+" 
        li.remove() 
    })
    })
    completeBtn.addEventListener("click",()=>{
        const newli=document.createElement("li")
        newli.textContent= li.firstChild.textContent
        newli.classList.add("second-li")
        todoList.appendChild(newli)
    })
    Inputvalue.value=""
}             
}
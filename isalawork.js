const inputdata=document.getElementById("data")
const todolist=document.querySelector("#todoslist")
const btnsubmit=document.getElementById("submit")
btnsubmit.onclick=function(){
    const li=document.createElement("li")
    li.innerText=inputdata.value 
    li.classList.add("toggleAnimation")
    console.log(li) 
    inputdata.value=""
    todolist.appendChild(li)
    li.addEventListener("click",function(){
        li.style.backgroundColor="green"
        li.style.color="white"
        li.classList.remove("toggleAnimation")
    })
    li.ondblclick=function(){
        li.remove()
    }
}

// li.addEventListener("click",function(){
//     li.style.backgroundColor="green"
// })
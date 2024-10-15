addThings=()=>{
    if(input.value){
        
            // content.innerHTML+=`<li>${input.value} \u00d7</li>`
        let li=document.createElement("li")
        li.innerHTML=input.value
        content.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML='\u00d7'
        li.appendChild(span)   
      
    }
    else{
        alert("You must have enter something")
    }
    input.value=""
    saveData()
}
content.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
    
},false);

function saveData(){
    localStorage.setItem("data",content.innerHTML)
}
function showData(){
    content.innerHTML=localStorage.getItem("data")
}
showData();


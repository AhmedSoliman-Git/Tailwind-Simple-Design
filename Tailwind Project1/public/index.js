let dd= document.getElementById("ham");
let menu = document.getElementById("menu")
let dark = document.querySelectorAll("#moon")
dd.onclick=function(){
    menu.classList.toggle('hidden')
}

let a = new Date().getFullYear() ;
document.getElementById("date").innerHTML = a+" @" ;
let links = document.querySelectorAll("#hlink");
links.forEach((link)=>{
    link.addEventListener(('click'),function(){
        menu.classList.toggle("hidden")
    })
})

dark.forEach((dark)=>{
    dark.onclick=()=>{
        document.body.classList.toggle("dark")
    }
})
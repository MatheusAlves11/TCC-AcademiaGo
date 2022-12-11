var btn = document.querySelector("#EnviarEmail")
var container = document.querySelector(".confimarEmail")

btn.addEventListener('click', function(){
    if(container.style.display === "block"){
       container.style.display = 'none' 
    } else {
        container.style.display = 'block'
    }
})
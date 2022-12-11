const diaSemana = document.querySelectorAll("[data-dia]"); 

hoje = new Date;
var dia=hoje.getDay();
for (const posicoes of diaSemana) {
    if(diaSemana==dia){
        posicoes.classList.add("destacar");
    }
}
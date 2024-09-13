const itensPerguntasERespostas = document.querySelectorAll(".item");
console.log(itensPerguntasERespostas)

itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemAtivoAtual = document.querySelector(".ativo");
        itemAtivoAtual.classList.remove("ativo");

        item.classList.add("ativo");
    });
})




/*
const itensperguntasERespostas = document.querySelectorAll(".item");

itensperguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemAtivoAtual = document.querySelector(".ativo");
        itemAtivoAtual.classList.remove("ativo");
        item.classList.add("ativo");
    })
})

*/
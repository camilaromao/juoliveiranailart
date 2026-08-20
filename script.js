// =========================================
// ELEMENTOS DO MODAL
// =========================================

const abrirTabela = document.getElementById("abrirTabela");
const fecharTabela = document.getElementById("fecharTabela");
const modalTabela = document.getElementById("modalTabela");


// =========================================
// ABRIR MODAL
// =========================================

abrirTabela.addEventListener("click", function () {

    modalTabela.classList.add("ativo");

    document.body.style.overflow = "hidden";

});


// =========================================
// FUNÇÃO PARA FECHAR
// =========================================

function fecharModal() {

    modalTabela.classList.remove("ativo");

    document.body.style.overflow = "";

}


// =========================================
// BOTÃO X
// =========================================

fecharTabela.addEventListener("click", function () {

    fecharModal();

});


// =========================================
// CLICAR FORA DO PDF
// =========================================

modalTabela.addEventListener("click", function (evento) {

    const conteudo = document.querySelector(".modal-conteudo");

    if (!conteudo.contains(evento.target)) {

        fecharModal();

    }

});


// =========================================
// TECLA ESC
// =========================================

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        fecharModal();

    }

});


// =========================================
// ANIMAÇÃO DOS CARDS
// =========================================

const itens = document.querySelectorAll(".item");

const observador = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("aparecer");

        }

    });

});


itens.forEach(function (item) {

    observador.observe(item);

});

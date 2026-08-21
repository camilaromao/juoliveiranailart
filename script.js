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


// BOTÃO DE AGENDAR // 

const botao = document.getElementById("agendar");


botao.addEventListener("mouseenter", () => {

    for (let i = 0; i < 8; i++) {

        const brilho = document.createElement("span");

        brilho.classList.add("brilho");

        brilho.style.left = Math.random() * 100 + "%";

        brilho.style.top = Math.random() * 100 + "%";

        botao.appendChild(brilho);


        setTimeout(() => {

            brilho.remove();

        }, 1000);

    }

});

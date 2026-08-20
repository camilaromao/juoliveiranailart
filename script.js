// ===== BOTÃO PDF ===== //

const abrirTabela = document.getElementById("abrirTabela");

const fecharTabela = document.getElementById("fecharTabela");

const modalTabela = document.getElementById("modalTabela");


// =========================================
// ABRIR MODAL
// =========================================

abrirTabela.addEventListener("click", () => {

    modalTabela.classList.add("ativo");

    document.body.style.overflow = "hidden";

});


// =========================================
// FECHAR MODAL
// =========================================

fecharTabela.addEventListener("click", () => {

    modalTabela.classList.remove("ativo");

    document.body.style.overflow = "";

});


// =========================================
// FECHAR CLICANDO FORA
// =========================================

modalTabela.addEventListener("click", (evento) => {

    if (evento.target === modalTabela) {

        modalTabela.classList.remove("ativo");

        document.body.style.overflow = "";

    }

});


// =========================================
// FECHAR COM ESC
// =========================================

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        modalTabela.classList.remove("ativo");

        document.body.style.overflow = "";

    }

});


// ===== Fotos aparecendo quando você rola a página ==== //

const itens = document.querySelectorAll(".item");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("aparecer");

        }

    });

});


itens.forEach((item) => {

    observador.observe(item);

});
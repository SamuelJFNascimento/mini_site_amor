/* =========================================
   DATA DO RELACIONAMENTO
========================================= */

const inicio = new Date("2026-07-12T00:00:00");


/* =========================================
   ELEMENTOS
========================================= */

const intro = document.getElementById("intro");
const navLinks = document.getElementById("navLinks");
const menuButton = document.getElementById("menuButton");
const modal = document.getElementById("modal");
const heartsContainer = document.getElementById("hearts-container");

const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


/* =========================================
   ENTRAR NO SITE
========================================= */

function entrar() {

    intro.classList.add("hide");

    document.body.style.overflow = "auto";

    localStorage.setItem("siteAmorVisitado", "true");

    if (!prefersReducedMotion) {
        criarCoracoes(8);
    }

    setTimeout(() => {
        intro.style.display = "none";
    }, 800);
}


/* =========================================
   VERIFICAR SE JÁ VISITOU
========================================= */

function verificarVisita() {

    const visitou =
        localStorage.getItem("siteAmorVisitado");

    if (visitou === "true") {

        intro.classList.add("hide");

        setTimeout(() => {
            intro.style.display = "none";
        }, 800);

        document.body.style.overflow = "auto";

    } else {

        document.body.style.overflow = "hidden";
    }
}

verificarVisita();


/* =========================================
   NAVEGAÇÃO
========================================= */

function ir(id) {

    const elemento = document.getElementById(id);

    if (!elemento) return;

    elemento.scrollIntoView({
        behavior: prefersReducedMotion
            ? "auto"
            : "smooth",
        block: "start"
    });
}


/* =========================================
   MENU MOBILE
========================================= */

function toggleMenu() {

    const aberto =
        navLinks.classList.toggle("active");

    menuButton.setAttribute(
        "aria-expanded",
        aberto
    );

    menuButton.textContent =
        aberto ? "×" : "☰";
}


function fecharMenu() {

    navLinks.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.textContent = "☰";
}


/* =========================================
   FECHAR MENU AO CLICAR FORA
========================================= */

document.addEventListener("click", function(event) {

    const clicouNoMenu =
        navLinks.contains(event.target);

    const clicouNoBotao =
        menuButton.contains(event.target);

    if (
        !clicouNoMenu &&
        !clicouNoBotao &&
        navLinks.classList.contains("active")
    ) {
        fecharMenu();
    }

});


/* =========================================
   CONTADOR
========================================= */

function contador() {

    const agora = new Date();

    let diferenca =
        agora.getTime() -
        inicio.getTime();

    if (diferenca < 0) {
        diferenca = 0;
    }


    const segundo = 1000;

    const minuto =
        segundo * 60;

    const hora =
        minuto * 60;

    const dia =
        hora * 24;


    const dias =
        Math.floor(diferenca / dia);

    const horas =
        Math.floor(
            (diferenca % dia) / hora
        );

    const minutos =
        Math.floor(
            (diferenca % hora) / minuto
        );

    const segundos =
        Math.floor(
            (diferenca % minuto) / segundo
        );


    atualizarNumero(
        "dias",
        dias
    );

    atualizarNumero(
        "horas",
        horas
    );

    atualizarNumero(
        "minutos",
        minutos
    );

    atualizarNumero(
        "segundos",
        segundos
    );
}


function atualizarNumero(id, valor) {

    const elemento =
        document.getElementById(id);

    if (!elemento) return;

    elemento.textContent =
        valor.toLocaleString("pt-BR");
}


contador();

setInterval(contador, 1000);


/* =========================================
   MENSAGENS SECRETAS
========================================= */

const mensagens = {

    triste: {

        icon: "♡",

        title: "Quando estiver triste...",

        text:
            "Eu queria poder estar aí agora para te abraçar. " +
            "Mas enquanto eu não posso, lembre-se: você é muito amada, " +
            "sua vida tem propósito e Deus está cuidando de você. " +
            "Respira. Vai ficar tudo bem. ❤️"

    },


    saudade: {

        icon: "✉",

        title: "Quando sentir minha falta...",

        text:
            "Saiba que provavelmente eu também estou pensando em você. " +
            "Feche os olhos por alguns segundos e imagine aquele abraço " +
            "que eu daria em você se estivesse aí. Em breve estaremos juntos novamente. ❤️"

    },


    abraco: {

        icon: "♡",

        title: "Quando precisar de um abraço...",

        text:
            "Considere esse um abraço meu. " +
            "Um daqueles demorados, apertados e que fazem esquecer " +
            "por alguns segundos qualquer problema. " +
            "Eu estou aqui. ❤️"

    },


    amor: {

        icon: "♥",

        title: "Nunca esqueça disso",

        text:
            "Eu amo você. Amo quem você é, amo sua fé, " +
            "amo o seu coração e sou grato a Deus por ter " +
            "colocado você na minha vida. " +
            "Espero poder continuar escolhendo você todos os dias. ❤️"

    }

};


/* =========================================
   ABRIR MENSAGEM
========================================= */

function msg(tipo) {

    const mensagem =
        mensagens[tipo];

    if (!mensagem) return;


    document.getElementById("modalIcon")
        .textContent =
        mensagem.icon;


    document.getElementById("modalTitle")
        .textContent =
        mensagem.title;


    document.getElementById("modalText")
        .textContent =
        mensagem.text;


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow = "hidden";
}


/* =========================================
   FECHAR MODAL
========================================= */

function fechar() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        intro.style.display !== "none"
            ? "hidden"
            : "auto";
}


/* =========================================
   ESC FECHA MODAL
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            if (
                modal.classList.contains("active")
            ) {
                fechar();
            }

            if (
                navLinks.classList.contains("active")
            ) {
                fecharMenu();
            }
        }

    }
);


/* =========================================
   SURPRESA FINAL
========================================= */

function finalSurprise() {

    const icon =
        document.getElementById("modalIcon");

    const title =
        document.getElementById("modalTitle");

    const text =
        document.getElementById("modalText");


    icon.textContent = "✝";

    title.textContent =
        "Minha última promessa. ❤️";

    text.textContent =
        "Enquanto Deus permitir, " +
        "eu quero continuar escolhendo você, " +
        "cuidando de nós e fazendo o possível " +
        "para que nossa história seja cada vez mais bonita. " +
        "Eu te amo.";


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";


    if (!prefersReducedMotion) {
        criarCoracoes(25);
    }
}


/* =========================================
   CRIAR UM CORAÇÃO
========================================= */

function criarCoracao() {

    if (!heartsContainer) return;


    const heart =
        document.createElement("span");

    heart.className = "heart";

    heart.textContent =
        Math.random() > 0.5
            ? "♡"
            : "♥";


    const tamanho =
        Math.random() * 14 + 10;

    const esquerda =
        Math.random() * 100;

    const duracao =
        Math.random() * 5 + 5;


    heart.style.left =
        `${esquerda}%`;

    heart.style.fontSize =
        `${tamanho}px`;

    heart.style.animationDuration =
        `${duracao}s`;


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, duracao * 1000);
}


/* =========================================
   CRIAR VÁRIOS CORAÇÕES
========================================= */

function criarCoracoes(quantidade = 5) {

    if (prefersReducedMotion) return;

    for (let i = 0; i < quantidade; i++) {

        setTimeout(
            criarCoracao,
            i * 150
        );

    }
}


/* =========================================
   CORAÇÕES AUTOMÁTICOS
========================================= */

if (!prefersReducedMotion) {

    setInterval(() => {

        // Mantém poucos corações na tela
        if (
            heartsContainer.children.length < 8
        ) {
            criarCoracao();
        }

    }, 2200);

}


/* =========================================
   SCROLL REVEAL
========================================= */

const elementosHidden =
    document.querySelectorAll(".hidden");


if (
    "IntersectionObserver" in window &&
    !prefersReducedMotion
) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("show");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    elementosHidden.forEach(
        (elemento) => {

            observer.observe(elemento);

        }
    );

} else {

    elementosHidden.forEach(
        (elemento) => {

            elemento.classList.add("show");

        }
    );

}


/* =========================================
   VIBRAÇÃO LEVE NO CELULAR
========================================= */

function vibrar() {

    if (
        "vibrate" in navigator &&
        !prefersReducedMotion
    ) {
        navigator.vibrate(20);
    }
}


/* =========================================
   VIBRAR AO ABRIR MENSAGEM
========================================= */

document.querySelectorAll(
    ".message-button"
).forEach(
    (botao) => {

        botao.addEventListener(
            "click",
            vibrar
        );

    }
);


/* =========================================
   EVITAR MENU CONTEXTUAL EM ALGUNS ELEMENTOS
========================================= */

document.querySelectorAll(
    ".intro-heart, .final-cross"
).forEach(
    (elemento) => {

        elemento.addEventListener(
            "contextmenu",
            event => event.preventDefault()
        );

    }
);
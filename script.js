document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formulario-fale-conosco");
  const mascara = document.querySelector(".mascara-formulario");

  // Mostrar o formulário
  window.mostrarFormulario = function () {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
  };

  // Esconder o formulário
  window.esconderFormulario = function () {
    form.style.left = "-300px";
    form.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
  };

  // Voltar ao topo suavemente
  window.voltarAoTopo = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Mostrar botão "Voltar ao Topo" quando a seção "Nossos Serviços" estiver visível
  window.addEventListener("scroll", () => {
    const botao = document.querySelector(".botao-voltar-topo");
    const secaoServicos = document.querySelector(".nossos-servicos");
    const posicaoSecao = secaoServicos.getBoundingClientRect();

    if (posicaoSecao.top <= window.innerHeight && posicaoSecao.bottom >= 0) {
      botao.classList.add("mostrar");
    } else {
      botao.classList.remove("mostrar");
    }
  });
});


const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

// Mostrar o formulário
function mostrarFormulario() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

// Esconder o formulário
function esconderFormulario() {
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
  mascara.style.visibility = "hidden";
}

// Voltar ao topo suavemente
function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mostrar botão de voltar ao topo somente na seção
window.addEventListener('scroll', function () {
  const botao = document.querySelector('.botao-voltar-topo');
  const secaoServicos = document.querySelector('.nossos-servicos');
  const posicaoSecao = secaoServicos.getBoundingClientRect();

  if (posicaoSecao.top <= window.innerHeight && posicaoSecao.bottom >= 0) {
    botao.classList.add('mostrar');
  } else {
    botao.classList.remove('mostrar');
  }
});


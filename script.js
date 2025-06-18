const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

// Função para chamar o formulario clicando em entre em contato//
function mostrarFormulario(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

// Função para esconder o formulario clicando em qualquer campo da tela fora do formulario//
function esconderFormulario(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

// quando clicar no botão ele volta ao topo da tela
 function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Quando rolar o site pra baixo aparece o botão
window.addEventListener('scroll', function () {
  const botao = document.querySelector('.botao-voltar-topo');
  const secaoServicos = document.querySelector('.nossos-servicos');
  const posicaoSecao = secaoServicos.getBoundingClientRect();

  // Se a parte superior da seção estiver visível na tela, mostra o botão
  if (posicaoSecao.top <= window.innerHeight && posicaoSecao.bottom >= 0) {
    botao.classList.add('mostrar');
  } else {
    botao.classList.remove('mostrar');
  }
});

  

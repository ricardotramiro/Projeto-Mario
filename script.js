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

 

  

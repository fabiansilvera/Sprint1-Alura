// Para ocultar el boton Copiar o el Layout
const layout = document.querySelector('.imagen-layout'); 
const copiar = document.querySelector('.boton-copiar'); 

// Text Areas
const texto = document.querySelector('.textarea-principal');
const encriptador = document.querySelector('.textarea-criptico') ;

// Encriptar o Desencriptar
const encriptar = document.querySelector('#encriptar') ;
const desencriptar = document.querySelector('#desencriptar') ;

// EventListener de botones
encriptar.addEventListener('click',cambiarTexto);
desencriptar.addEventListener('click',desencriptarTexto);
copiar.addEventListener('click',copiarTexto);

if (encriptador.value == '') {
copiar.style.display = "none";
}

// funciones
function cambiarTexto() { 
// variables de cambiarTexto
mensaje = texto.value.toLowerCase()
letras = []
palabra = ''
// Incrustar las letras en un arreglo
for (let i = 0 ; i < mensaje.length; i++) {
    letras[i] = mensaje[i]
}
// Cambiar las letras por las nuevas 
for (let i = 0; i < letras.length; i++) {
    if ( letras[i] == "a") {
        letras[i] = "ai"
    } 
    if (letras[i] == "e") {
        letras[i] = "enter"
    }
    if (letras[i] == "i") {
        letras[i] = "imes"
    }
    if (letras[i] == "o") {
        letras[i] = "ober"
    }   
    if (letras[i] == "u") {
        letras[i] = "ufat"
    }
}
// Juntarlo en 1 palabra 
for( let i = 0; i < letras.length; i++) {
    palabra = palabra + letras[i];   
}  

// mostrar texto
encriptador.value = palabra;

// Ocultar layout y mostrar boton de copiar
if (!mensaje == '') {
  layout.style.display = "none"
 if (layout.style.display == "none") {
    copiar.style.display = "block"
    };
}}

function desencriptarTexto() {
// Funciones desencriptarTexto
mensaje = texto.value.toLowerCase()
letras = []
palabra = ''
// Incrustar las letras en un arreglo
for (let i = 0 ; i < mensaje.length; i++) {
    letras[i] = mensaje[i]
}
// Cambiar las letras por las nuevas 
for (let i = 0; i < letras.length; i++) {
    if ( letras[i] == "a" && letras[i+1] == "i") {
        letras[i] = 'a'
        letras[i+1] = ''
    }
    if (letras[i] == "e" && letras[i+1] == "n"  && letras[i+2] == "t"  && letras[i+3] == "e"  && letras[i+4] == "r") {
        letras[i] = "e"
        letras[i+1] = ''
        letras[i+2] = ''
        letras[i+3] = ''
        letras[i+4] = ''
    }
    if (letras[i] == "i" && letras[i+1] == "m"  && letras[i+2] == "e"  && letras[i+3] == "s"){
        letras[i] = "i"
        letras[i+1] = ''
        letras[i+2] = ''
        letras[i+3] = ''
    }
    if (letras[i] == "o" && letras[i+1] == "b"  && letras[i+2] == "e"  && letras[i+3] == "r"){
        letras[i] = "o"
        letras[i+1] = ''
        letras[i+2] = ''
        letras[i+3] = ''
    } 
    if (letras[i] == "u" && letras[i+1] == "f"  && letras[i+2] == "a"  && letras[i+3] == "t"){
        letras[i] = "u"
        letras[i+1] = ''
        letras[i+2] = ''
        letras[i+3] = ''
    } 
}

// Juntarlo en 1 palabra 
for( let i = 0; i < letras.length; i++) {
    palabra = palabra + letras[i];   
}  

// Mostrar texto
encriptador.value = palabra;

// Ocultar layout y mostrar boton de copiar
if (!mensaje == '') {
    layout.style.display = "none"
   if (layout.style.display == "none") {
      copiar.style.display = "block"
      };
}}

function copiarTexto() {
    // Funcion para copiar el texto de encriptador
    navigator.clipboard.writeText(encriptador.value);
}

/* `La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"` */
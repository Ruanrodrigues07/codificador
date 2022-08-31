var inputTexto = document.querySelector(".input-texto");
var mensagem = document.querySelector(".mensagem");
var copiar = document.querySelector(".copiar");

function btnEncriptar() {
    var textoCodificado = codificarTexto(inputTexto.value);
    mensagem.value = textoCodificado;
    validaImagem();
}


function codificarTexto(textoInserido){
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    textoInserido = textoInserido.toLowerCase();

    for(let i=0;i < matrizCodigo.length; i++){
        if(textoInserido.includes(matrizCodigo[i][0])){
            textoInserido = textoInserido.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return textoInserido;
}

function btnDescriptar() {
    var textoDescodificado = descodificarTexto(inputTexto.value);
    mensagem.value = textoDescodificado;
    validaImagem();
}

function descodificarTexto(textoInserido){
    var matrixCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    textoInserido = textoInserido.toLowerCase();

    for(let i=0;i < matrixCodigo.length; i++){
        if(textoInserido.includes(matrixCodigo[i][1])){
            textoInserido = textoInserido.replaceAll(matrixCodigo[i][1],matrixCodigo[i][0]);
        }
    }
    return textoInserido;
}

function validaImagem (){

    if (mensagem.value.length > 0) {
        mensagem.style.backgroundImage = "none";
    } else {
        mensagem.style.backgroundImage = "url('img/boneco.PNG')";
    }
}

function copiarTexto () {
    console.log(navigator.clipboard.writeText(mensagem.value))

}
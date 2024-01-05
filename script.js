function insert (num) {
    
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

function clean () {  
    document.getElementById('resultado').innerHTML = "";
}

function back () {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular () {
    var resultado = document.getElementById('resultado').innerHTML;
    //Se tiver alguma coisa dentro do paragrafo resultado, calcule
    if(resultado)
    {
        //Função eval interpreta uma string como expressão, retornando o resultado da avaliação
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');


var q1 = document.getElementById(1);
var q2 = document.getElementById(2);
var q3 = document.getElementById(3);
var q4 = document.getElementById(4);
var q5 = document.getElementById(5);
var q6 = document.getElementById(6);
var q7 = document.getElementById(7);
var q8 = document.getElementById(8);
var q9 = document.getElementById(9);

mudarJogador('X');

function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor(){
    
    if(checaSequencia(q1, q2, q3)){
        mudarCorQuadrado(q1, q2, q3);
        mudarVencedor(q1);
        return;
    }
    if(checaSequencia(q4, q5, q6)){
        mudarCorQuadrado(q4, q5, q6);
        mudarVencedor(q4);
        return;
    }
    if(checaSequencia(q7, q8, q9)){
        mudarCorQuadrado(q7, q8, q9);
        mudarVencedor(q7);
        return;
    }
    if(checaSequencia(q1, q4, q7)){
        mudarCorQuadrado(q1, q4, q7);
        mudarVencedor(q1);
        return;
    }
    if(checaSequencia(q2, q5, q8)){
        mudarCorQuadrado(q2, q5, q8);
        mudarVencedor(q2);
        return;
    }
    if(checaSequencia(q3, q6, q9)){
        mudarCorQuadrado(q3, q6, q9);
        mudarVencedor(q3);
        return;
    }
    if(checaSequencia(q1, q5, q9)){
        mudarCorQuadrado(q1, q5, q9);
        mudarVencedor(q1);
        return;
    }
    if(checaSequencia(q3, q5, q7)){
        mudarCorQuadrado(q3, q5, q7);
        mudarVencedor(q3);
        return;
    }
    velha();
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quad1, quad2, quad3){
    quad1.style.background = '#0f0';
    quad2.style.background = '#0f0';
    quad3.style.background = '#0f0';
}

function checaSequencia(quad1, quad2, quad3){
    var eIgual = false;

    if(quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML){
        eIgual = true;
    }
    return eIgual;
}

function velha(){
    if(q1.innerHTML !== '-' && q2.innerHTML !== '-' && q3.innerHTML !== '-' && q4.innerHTML !== '-' 
    && q5.innerHTML !== '-' && q6.innerHTML !== '-' && q7.innerHTML !== '-' && q8.innerHTML !== '-' && q9.innerHTML !== '-'){
        alert('Deu Velha!');
        reiniciar();
    } 
    
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}
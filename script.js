let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar


let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')


let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')


let articleQuestoes = document.querySelector('.questoes')

let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Quantas espécies de macacos existem no mundo ?",
    alternativaA : "190",
    alternativaB : "260",
    alternativaC : "300",
    alternativaD : "200",
    correta      : "260",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é a capital do Brasil?",
    alternativaA : "Rio de Janeiro",
    alternativaB : "Brasília",
    alternativaC : "Salvador",
    alternativaD : "Lisboa",
    correta      : "Brasília",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Austral é o mesmo que...",
    alternativaA : "Oeste",
    alternativaB : "Leste",
    alternativaC : "Norte",
    alternativaD : "Sul",
    correta      : "Sul",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "A linha do Equador divide a Terra em...",
    alternativaA : "Leste e Oeste",
    alternativaB : "Norte e Sul",
    alternativaC : "Verão e Inverno",
    alternativaD : "Solstícios e Eclipses",
    correta      : "Norte e Sul",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Lado que o sol nasce",
    alternativaB : "Abaixo do Equador",
    alternativaC : "Lado que o sol se põe",
    alternativaD : "Acima do Equador",
    correta      : "Lado que o sol nasce",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Quantos litros de sangue uma pessoa tem?",
    alternativaA : "Tem entre 2 a 4 litros",
    alternativaB : "Tem entre 4 a 6 litros",
    alternativaC : "Tem 10 litros",
    alternativaD : "Tem 7 litros",
    correta      : "Tem entre 4 a 6 litros",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "De quem é a famosa frase “Penso, logo existo”?",
    alternativaA : "Platão",
    alternativaB : "Galileu Galilei",
    alternativaC : "Descartes",
    alternativaD : "Sócrates",
    correta      : "Descartes",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "De onde é a invenção do chuveiro elétrico?",
    alternativaA : "Peru",
    alternativaB : "Inglaterra",
    alternativaC : "Brasil",
    alternativaD : "Aústralia",
    correta      : "Brasil",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Quais o menor e o maior país do mundo?",
    alternativaA : "Vaticano e China",
    alternativaB : "Inglaterra e Canadá",
    alternativaC : "Aústralia e Mônaco",
    alternativaD : "Vaticano e Russia",
    correta      : "Vaticano e Russia",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Quantas casas decimais tem o número pi?",
    alternativaA : "Duas",
    alternativaB : "Centenas",
    alternativaC : "Infinitas",
    alternativaD : "Milhares",
    correta      : "Infinitas",
}

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
}


alternativas.addEventListener('dblclick', () => {
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent

    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        piscarNoAcerto()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        piscarNoErro()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {


    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        
        instrucoes.classList.remove('placar')
        
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}

//botão start

function inviDiv(){
    var x = document.getElementById('inv');
    if(x.style.display == "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


// Temporizador


    function countdown(){
    var tempo = 30;
    var temporizador = setInterval(_temporizador, 1000);
    function _temporizador() {
    if ((tempo - 1) <= -1){
    clearInterval(temporizador);
    console.log('proxima pergunta');
    }else {
    var min = parseInt(tempo / 60, 10);
    var seg = parseInt(tempo % 60, 10);
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;
    var horaImprimivel = min + ":" + seg;
    console.log(horaImprimivel);
    tempo--;
    proximaQuestao();
    }
    }
    }


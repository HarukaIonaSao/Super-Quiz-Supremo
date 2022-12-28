let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta    : "Qual o nome do criador de Dragon Ball?",
    alternativaA : "Akira Toryama",
    alternativaB : "Akira Toriama",
    alternativaC : "Akira Toriyama",
    correta      : "Akira Toriyama"
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual o nome da nova região de Pokemón?",
    alternativaA : "Paldea",
    alternativaB : "Kalos",
    alternativaC : "Alola",
    correta      : "Paldea"
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual o verdadeiro nome do Goku?",
    alternativaA : "Kuririm",
    alternativaB : "Kakaroto",
    alternativaC : "Son Goku",
    correta      : "Kakaroto"
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O primeiro jogo do sonic foi lançado em que ano?",
    alternativaA : "1989",
    alternativaB : "1990",
    alternativaC : "1991",
    correta      : "1991"
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Em qual jogo a Peach NÃO É capturada pelo Bowser?",
    alternativaA : "Mario 3d World",
    alternativaB : "Super Mario Odissey",
    alternativaC : "Mario 64",
    correta      : "Mario 3d World"
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual o jogo com maior mapa de mundo aberto ?",
    alternativaA : "Minecraft",
    alternativaB : "No Man`s Sky",
    alternativaC : "Cyberpunk 2077",
    correta      : "No Man`s Sky",
}

const q7 = {
    numQuestao   : 7,
    pergunta    : "Qual o ano de lançamento de Crash Bandicot?",
    alternativaA : "1994",
    alternativaB : "1996",
    alternativaC : "1997",
    correta      : "1996"
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quantas são as eeveelutions?",
    alternativaA : "6",
    alternativaB : "7",
    alternativaC : "8",
    correta      : "7"
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "O primeiro console de jogos se chama:",
    alternativaA : "Brown Box",
    alternativaB : "Atari VSC ",
    alternativaC : "Magnavox Odyssey",
    correta      : "Magnavox Odyssey",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Em 2019, qual jogo foi eleito o 'Game of the Year'?",
    alternativaA : "Sekiro",
    alternativaB : "Death Stranding",
    alternativaC : "Resident Evil 2",
    correta      : "Sekiro"
}

const q11 = {
    numQuestao   : 11,
    pergunta     : "São locais famosos dos games",
    alternativaA : "Cibertown,Rapture City e Prominence Land",
    alternativaB : "Hope County,Rabanastre e Prontera",
    alternativaC : "Neverland ,Dakara, Straycat",
    correta      : "Hope County,Pallet Town e Los Santos"    
}

const q12= {
    numQuestao   : 12,
    pergunta     : "SEGA é a abreviação de:",
    alternativaA : "Saga Engine Games",
    alternativaB : "Standard Games",
    alternativaC : "Service Games",
    correta      : "Service Games",
}

const q13 = {
    numQuestao   : 13,
    pergunta     : "O jogo Horizon Zero Dawn foi lançado em:",
    alternativaA : "Fevereiro de 2017",
    alternativaB : "Março de 2017",
    alternativaC : "Julho de 2017",
    correta      : "Fevereiro de 2017",
}

const q14 = {
    numQuestao   : 14,
    pergunta     : "'Se tem tela , roda...' é uma frase associada a que jogo?",    
    alternativaA : "Super Mario Bros.",
    alternativaB : "Doom",
    alternativaC : "Pong",
    correta      : "Doom",
}

const q15 = {
    numQuestao   : 15,
    pergunta     : "Quais os pokemon lendários de Galar?",
    alternativaA : "Zapdos e Moltres",
    alternativaB : "Galactus e Eternatus",
    alternativaC : "Zacian e Zamazenta",
    correta      : "Zacian e Zamazenta"
}


const q16 = {
    numQuestao   : 16,
    pergunta     : "Daniel Paladino na minha frente é um meme vindo de qual jogo?",
    alternativaA : "Tíbia",
    alternativaB : "Warcraft",
    alternativaC : "Minecraft",
    correta      : "Tíbia",
}

const q17 = {
    numQuestao   : 17,
    pergunta     : "O jogo mais caro para se produzir foi",
    alternativaA : "Cyberpunk 2077",
    alternativaB : "Star Citizen",
    alternativaC : "Gta V",
    correta      : "Star Citizen",
}

const q18 = {
    numQuestao   : 18,
    pergunta     : "O primeiro console da Atari foi lançado em:",
    alternativaA : "1976",
    alternativaB : "1977",
    alternativaC : "1978",
    correta      : "1977",
}

const q19 = {
    numQuestao   : 19,
    pergunta     : "Qual foi o primeiro console lançado no Brasil?",
    alternativaA : "Polystation",
    alternativaB : "Telejogo",
    alternativaC : "Top Game",
    correta      : "Telejogo"
}

const q20 = {
    numQuestao   : 20,
    pergunta     : "Qual desses jogos NÃO É de um estúdio brasileiro?",
    alternativaA : "Unravel",
    alternativaB : "Chroma Squad",
    alternativaC : "Fobia",
    correta      : "Unravel"
}

// ARRAY  COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20]

let numero = document.querySelector('#numero');
let total  = document.querySelector('#total');

numero.textContent = q1.numQuestao;

let totalDeQuestoes = (questoes.length)-1
total.textContent = totalDeQuestoes;

//  1a QUESTAO COMPLETA PARA INICIAR O JOGO
numQuestao.textContent = q1.numQuestao;
pergunta.textContent   = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;


// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A');
b.setAttribute('value', '1B');
c.setAttribute('value', '1C');


// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}


// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    pontos -= 10 
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
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
    let respostaEscolhida = resposta.textContent
    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida === certa) { 
        somAcerto.play(3); 
        piscarNoAcerto();                  
         pontos += 10 ;
    } else {
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 350);

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play();
    
    instrucoes.textContent = "Obrigada por jogar 😁"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você fez " + pontos + " " + pont

    aviso.textContent = "Você fez " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // ESCONDE O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 5000)
}

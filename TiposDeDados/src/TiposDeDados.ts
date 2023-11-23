// Todos esses dados estão disponíveis na linguagem JavaScript

// String

let nome = 'Lucca';
let email = "Lucca@gmail.com.br";
console.log(typeof nome);
console.log(typeof email);

// Number

let idade:number = 29;
let temperatura = 36.7;
console.log(typeof idade);
console.log(typeof temperatura);

// Boolean

let verdadeiro = true;
let falso = false;
console.log(typeof verdadeiro);
console.log(typeof falso);

// Arrays

let notas : number[] = []; // Desta forma notas é um vetor number que inicia vazio

notas.push(10, 11, 12);

console.log(notas);
console.log(notas.length)

// Objetos

let cliente = {
    nome: 'Lucca',
    email: 'Luccafrietto@gmail.com',
    saldo: 100,
    ativo: true
}

console.log(cliente);

cliente.saldo = 90;

console.log(cliente);

// Tipo Any (Usado quando não temos certeza do tipo de dado, geralmente quando se recebe algo externo)

// Unefined e null, funciona da mesma forma que o JavaScript

let exemplo; // Undefined

// Null é usado de forma intencional, na prática tem o mesmo valor, apenas por questão de convenção é importante saber essa diferença

// Tipos de Dados Avançados/Customizados

type Direcao = "cima" | "baixo" | "esquerda" | "direita";

type Movimento = {
    direcao: Direcao,
    passos: number
}

// function caminhar(direcao: Direcao, passos:number) {
//     console.log(`O personagem caminhou ${passos} passos para ${direcao}`);
// }

function caminhar(movimento: Movimento) {
    console.log(`O personagem caminhou ${movimento.passos} passos para ${movimento.direcao}`);
}

// caminhar("cima", 5);
// caminhar("abc", 4) Desta forma o console aponta um erro de tipo, pois "abc" não corresponde a nenhum dos parametros do tipo Direção que criamos anteriormente
// caminhar("direita", 9);

caminhar({ direcao: "cima", passos: 5});

// Classes (Podem integrar interfaces, respeitando o que a interface impõe no seu "design")

// type tipo = 'Humano';

enum TipoPersonagem {   // Enums (Definir e limitar as possibilidades de valores para uma determinada informação )
    Humano = 'Humano'
}

abstract class Personagem {
    nome: string;
    tipo: TipoPersonagem;

    constructor(nome:string, tipo: TipoPersonagem.Humano) {
        this.nome = nome;
        this.tipo = tipo;
    }

    pular() {
        console.log(`${this.nome} pulou`);
    }
    meuTipo() {
        console.log(`O meu tipo é ${TipoPersonagem.Humano}`);
    }
}

class Humano extends Personagem {
    constructor(nome: string) {
        super(nome, TipoPersonagem.Humano);
    }
}


let lucca = new Humano('Lucca');

lucca.pular();
lucca.meuTipo();

// Tuplas (Conjunto de informações agrupadas, como coordenadas)

let coordenada: [number, number];

coordenada = [10, 20];

console.log(coordenada[0]);
console.log(coordenada[1]);

let [x, y] = coordenada;    // Desconstrução da Tupla e pegando duas variáveis individuais (x e y)

console.log(x, y);

// Union Types

let exemplo2: string | null;

exemplo2 = 'Lucca';

// Suponhamos que essa variável venha de outro sistema que você irá integrar, é dessa forma que você une tipos com Ts
exemplo2 = null;
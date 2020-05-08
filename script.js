alert("Bienvenido");
let serie = [];
let numero = 1;
let anterior = 0;
let aux;
for (let i=0;i<=10;i++){
    serie[i] = anterior;
    aux = numero;
    numero = numero + anterior;
    anterior = aux;
}
console.log(serie);
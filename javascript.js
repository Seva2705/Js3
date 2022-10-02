//Задание "Возведение в степень"

//1

do {
    var num = +prompt('Введите число')
} while (isNaN(num) || num==0)

do {
    var power = +prompt('Введите степень')
} while(isNaN(power)){
    if (power == 0) {
        power = 2
    }
}

let res = 1
for (let i=0; i<power; i++){
    res = res * num
}
console.log(res);


//Лестница

//2

do {
    var num = +prompt ('Введите кол-во ступенек')
} while (isNaN(num) || num == 0)

do {
    var symbol = prompt ('Введите символ')
} while (symbol == '')

do {
    var finalSym = prompt ('Введите конечный символ')
} while (finalSym == '')

for (let i = 0; i< num; i ++){
    finalSym = i == 0 ? finalSym : symbol + finalSym
    console.log(finalSym);
}

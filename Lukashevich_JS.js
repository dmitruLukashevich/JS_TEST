// Составить алгоритм: если введенное число больше 7, то вывести “Привет”

const checkNumber = function(number) {
   
    if (number > 7) {
        console.log ("Привет")
    }  else if(number <=0) {
        console.log ("Введите положительное число")
    } else if (number > 0 && number <= 7)
        console.log ("Введите число побольше")
    }

checkNumber(-22)
checkNumber(2)
checkNumber(10)
console.log("-------------------------------")


// Составить алгоритм: если введенное имя совпадает с Вячеслав, то вывести “Привет, Вячеслав”, если нет, то вывести "Нет такого имени"

const checkName = function (name) {

    let answer = name.toLowerCase()

    if (answer === "вячеслав") {
        console.log ("Привет, Вячеслав")
    } else {
        console.log ("Нет такого имени")
    }
}

checkName("Роберт")
checkName("ВЯчесЛАВ")
console.log("-------------------------------")


// Составить алгоритм: на входе есть числовой массив, необходимо вывести элементы массива кратные 3

var generArray = [];
for ( var i = 0; i <=20; i++ )   {
    generArray.push(Math.round(Math.random() * 1000 ));
}

console.log("Произвольный массив чисел")
console.log(generArray)

const multiplicity = function (gArray) {
    var tmpArr = [],
        length = gArray.length
    for (var i = 0; i < length; i++) {
        if (gArray[i] != 0 && (gArray[i] % 3 == 0)) {
            tmpArr.push(gArray[i]);
        }
    }
    console.log ("Числа кратные 3: " + tmpArr)
}

multiplicity(generArray)
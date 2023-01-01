//Знайти суму та кількість позитивних елементів.
const arraySearch = [16,-37,54,-4,72,-56,47,4,
    -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let sumPositive = 0
let arrayPositive = []
for (let m = 0;m <= arraySearch.length ;m++) {
    if (Number(arraySearch[m]) > 0) {
         sumPositive = sumPositive + arraySearch[m]
         arrayPositive = arrayPositive + arraySearch[m] + ","
    }
}
let arrPositive = arrayPositive.split(',')
alert(`Sum positive items : ${sumPositive} \n
 Number positive items :  ${arrPositive.length - 1}`)
/****************************************************/
//    Знайти мінімальний елемент масиву та його порядковий номер.
let minItem = arraySearch[0]
for (let j = 1; j <= arraySearch.length ; j++) {
    if (minItem > arraySearch[j]) {
        minItem = arraySearch[j]
    }
}
alert(`Minimal item of array : ${minItem}`)
let numberMinItem
for (let k = 0 ; k < arraySearch.length ;k++ ) {
    if (arraySearch[k] > minItem) {
        numberMinItem = k + 2
    }
    else {
        numberMinItem = k + 1
        break
    }
}
alert(`Number minimal item : ${numberMinItem}`)
/****************************************************/
//    Знайти максимальний елемент масиву та його порядковий номер.
let maxItem = arraySearch[0]
for (let j = 1; j <= arraySearch.length ; j++) {
    if (maxItem < arraySearch[j]) {
        maxItem = arraySearch[j]
    }
}
alert(`Maximal item of array : ${maxItem}`)
let numberMaxItem
for (let k = 0 ; k < arraySearch.length ;k++ ) {
    if (arraySearch[k] < maxItem) {
        numberMaxItem = k + 2
    }
    else {
        numberMaxItem = k + 1
        break
    }
}
alert(`Number minimal item : ${numberMaxItem}`)
/***************************************************/
//Визначити кількість негативних елементів.
let arrNegative = []
for (let c = 0; c < arraySearch.length ;c++) {
    for (let b = 0; b < arraySearch.length ; b++) {
        if (arraySearch[c] < 0) {
            arrNegative.push(arraySearch[c])
            c++
        }
    }
}
alert(arrNegative)
alert(`Number negative items :  ${arrNegative.length}`)
/*********************************************************/
//    Знайти кількість непарних позитивних елементів.
let numOddItems = 0
for (let i =0 ; i < (arrPositive.length - 1) ; i++) {
    if (!Number.isInteger(arrPositive[i] / 2)) {
        numOddItems++
    }
}
alert(`Number odd items is : ${numOddItems}`)
/*******************************************************/
//    Знайти кількість парних позитивних елементів.
let numEvenItems = 0
for (let q =0 ; q < (arrPositive.length -1); q++) {
    if (Number.isInteger(arrPositive[q] / 2)) {
        numEvenItems++
    }
}
alert(`Number  even items is : ${numEvenItems}`)
/*******************************************************/
//    Знайти суму парних позитивних елементів.
let sumEvenItems = 0
for (let p =0 ; p < (arrPositive.length -1); p++) {
    if (Number.isInteger(arrPositive[p] / 2)) {
       sumEvenItems = sumEvenItems + Number(arrPositive[p])
    }
}
alert(`Sum  even items is : ${sumEvenItems}`)
/******************************************************/
//   Знайти суму непарних позитивних елементів.
let sumOddItems = 0
for (let h =0 ; h < (arrPositive.length - 1) ; h++) {
    if (!Number.isInteger(arrPositive[h] / 2)) {
        sumOddItems = sumOddItems + Number(arrPositive[h])
    }
}
alert(`Sum odd items is : ${sumOddItems}`)
/*******************************************************/
//    Знайти добуток позитивних елементів.
let multPositiveItems = 1
for (let g = 0; g < (arrPositive.length -1); g++) {
    multPositiveItems = multPositiveItems * Number(arrPositive[g])
}
alert(`Multiplication positive items is : ${multPositiveItems}`)
/**********************************************************/
//    Знайти найбільший серед елементів масиву, остальні обнулити.
let bigItem = arraySearch[0]
for (let f = 1; f < arraySearch.length ; f++) {
    if (bigItem < arraySearch[f]) {
        bigItem = arraySearch[f]
    }
}
let newArraySearch = []
for (let r = 0 ; r < arraySearch.length; r++) {
    if (bigItem > arraySearch[r]) {
        newArraySearch[r] = 0
    }
    else {
        newArraySearch[r] = bigItem
    }
}
alert(`Array of item replaced by zeros : ${newArraySearch}`)
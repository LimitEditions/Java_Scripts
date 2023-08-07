// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i < 11; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     }
//     else if (i % 2 === 0) {
//         console.log(`${i} - четное число`);
//     }
//     else if (i % 2 !== 0) {
//         console.log(`${i} - нечетное число`);
//     }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];
// const newArray = `${array.slice(0, 3)},${array.slice(5, 7)}`;
// console.log(newArray);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 
// таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const array = [];
// function getRandom(min, max){
//     for (let i = 0; i < 5; i++) {
//         array[i] = Math.floor(Math.random() * (max - min));
//     }
// }
// getRandom(0, 10);
// console.log(array);

// let total = 0;
// for (let i = 0; i < array.length; i++) {
//     total += array[i];
// }
// console.log(`Сумма элементов массива равна: ${total}`);

// let min = array[0];
// for (let i = 1; i < array.length; i++) {
//     if (min > array[i]){
//         min = array[i];
//     }
// }
// console.log(`Минимальное значение рано: ${min}`);

// const number = 3;
// let answer = false;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === number){
//         answer = true;
//     }
// }
// console.log (answer ? "В массиве есть число 3" : "В массеве нет числа 3");



// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей 
// горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

// let pix = "x";
// for (let i = 0; i < 20; i++) {
//     console.log(pix);
//     pix = pix + "x";
// }

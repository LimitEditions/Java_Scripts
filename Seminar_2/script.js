// Создать новый файл lesson2.html
// Создать переменную и спросить у пользователя “Ваш возраст”
// Вывести на экран текст. Вам “возраст пользователя” лет
// Спросить у пользователя его имя
// Вывести на экран, Добро пожаловать на сайт “Имя пользователя”

// let age = Number(prompt("Ваш возраст"));
// alert((age > 0) ? `Вам ${age} лет` : `Возраст введен не верно`);
// const userName = prompt("Ваше имя");
// alert(`Добро пожаловать на сайт ${userName}`);

// if (age === 1) {
//     alert(`Вам ${age} год`);
// } else if (2 <= age && age <= 4) {
//     alert(`Вам ${age} года`);
// }else{
//     alert(`Вам ${age} лет`);
// }

// Найти остаток от деления двух переменных
// let a = 13;
// let b = 5;
// Что выведет на экран (Сначала проговорите, потом проверьте)
// let a;
// alert(a); 
// Что выведет на экран (Сначала проговорите, потом проверьте)
// alert('abc' * 3);
// Что выведет на экран (Сначала проговорите, потом проверьте)
// alert( 1 / 0);
// alert(-1 / 0);
// Что выведет на экран (Сначала проговорите, потом проверьте)
// alert('2' * '3');

// let a = 13;
// let b = 5;
// let result = a%b;
// console.log(result);

// let c;
// alert(c); 

// alert('abc' * 3);

// alert( 1 / 0);
// alert(-1 / 0);

// alert('2' * '3');

// Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. Определите, в какой строке кода случилась ошибка.
// Необходимо вывести в консоль результат суммы данных переменных
// let a = '2';
// let b = '3';
// Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести текст
// Сумма чисел равна “результат”
// Разность чисел равна “результат”
// Произведение чисел равно “результат”
// Частное чисел равно “результат”
// Остаток от деления чисел равен “результат”

// let a = '2';
// let b = '3';
// console.log(a * b);

// let number1 = +prompt("Введите первое число");
// let number2 = +prompt("Введите второе число");



// console.log(`Сумма чисел равна ${number1 + number2}`);
// console.log(`Разность чисел равна ${number1 - number2}`);
// console.log(`Произведение чисел равно ${number1 * number2}`);
// if (number2 === 0) {
//     alert("На ноль делить нельзя")
// } else {
//     console.log(`Частное чисел равно ${number1 / number2}`);

//     console.log(`Остаток от деления чисел равен ${number1 % number2}`);
// }

// // Не запуская код, определите, что выведется в консоль: 
// console.log(String(true));
// // Не запуская код, определите, что выведется в консоль:
// console.log('a' + true);
// // Не запуская код, определите, что выведется в консоль:
// console.log(Number(true)); // 1
// // Не запуская код, определите, что выведется в консоль:
// console.log(true + 1);
// // Не запуская код, определите, что выведется в консоль:
// console.log(true + true)
// // Не запуская код, определите, что выведется в консоль:
// console.log(true - true)
// // Не запуская код, определите, что выведется в консоль:
// console.log(String(true) + Number(true)) // ‘true1’

// Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который
// Выводит в консоль “Число больше 5”
// Выводит в консоль “Число меньше 5”
// Выводит в консоль “Число равно 5”
// Даны переменные test1 и test2(вводятся с клавиатуры). Проверьте, равны ли их значения и выведите соответствующее сообщение.
// Пользовать с клавиатуры вводит 2 числа
// Необходимо найти какое из двух чисел минимальное
// Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше 0 и меньше 15.

// let number = +prompt("Введите число");
// if (number > 5) {
//     alert("Число больше 5");
// } else if (number < 5) {
//     alert("Число меньше 5");
// } else {
//     alert("Число равно 5");
// }

// let test1 = prompt("Введите пароль");
// let test2 = prompt("Введите пароль");

// // if (alert("Пароль введен верно");) {
// //     alert("Пароль введен верно");
// // }
// // else{
// //     alert("Пароль введен неверно");
// // }
// let checkPassword = (test1 === test2) ? 'верно' : 'неверно';
// alert(`Пароль введен ${checkPassword}`);

// let number1 = +prompt("Введите число 1");
// let number2 = +prompt("Введите число 2");

// // if (number1 < number2) {
// //     console.log(`Минимальное число ${number1}`);
// // } else {
// //     console.log(`Минимальное число ${number2}`);
// // }
// let answer = (number1 < number2) ? number1 : number2;
// console.log(`Минимальное число ${answer}`);

// let num = +prompt("Введите число");
// // if (num > 0 && num < 15) {
// //     console.log(`Число ${num} больше 0 меньше 15`);
// // }
// // else {
// //     console.log(`Число ${num} не входит в диапазон больше 0 меньше 15`);
// // } 

// let comparison = (num > 0 && num < 15) ? num : num + ' не входит в диапазон';
// console.log(`Число ${comparison} больше 0 меньше 15`);
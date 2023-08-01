// // Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку 
// // "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
// // Создайте функцию которая возводит переданное число в квадрат
// // Сделайте функцию, которая параметром принимает число и проверяет, положительное это число 
// // или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// const helloUser = () => {
//     alert(`Привет ${userName} ${surname} с возрвстом ${age}`)
// }

// const userName = prompt("Введите ваше имя");
// const surname = prompt("Введите вашу фамилию");
// let age = Number(prompt("Введите ваш возраст"));

// helloUser();

// function squaring() {
//     console.log(result = number * number);
// }

// const number = 5;
// squaring();

// function check() {
//     console.log((userNumber > 0) ? `+++` : `---`);
// }

// const userNumber = Number(prompt("Введите число"));
// check();

// function sum(num1, num2, num3) {
//     console.log(`Сумма чисел = ${num1 + num2 + num3}`);
// }

// let num1 = 5, num2 = 6, num3 = 7;
// sum(num1, num2, num3);

// let param1 = '1', param2 = 2, param3 = 3;
// sum(Number(param1), param2, param3);

// function func(num = 5) {
//     console.log(num * num);
// }
// func(2);
// func(3);
// func();

// Сделайте функцию (Math.sqrt(x)), которая параметром принимает число, а возвращает квадратный 
// корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
//  Просуммируйте полученные результаты и выведите их в консоль (используя функцию суммы). (3.732050807568877)
// Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции

// const sum = (num1, num2) => (num1 + num2);

// let number1 = Math.sqrt(3);
// let number2 = Math.sqrt(4);

// console.log(`Сумма чисел = ${sum(number1, number2)}`);

// const minValue = () => (digit1 > digit2) ? digit2 : digit1;

// let digit1 = Number(prompt("Введите число 1"));
// let digit2 = Number(prompt("Введите число 2"));
// minValue();

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели 
// на русском языке.
// Написать функцию, которой передаем имя и время. она возвращает приветствие в зависимости от 
// времени суток (Доброе утро\день\вечер\ночи Иван) (гуглить время js)

const dayOfWeek = () => {
    switch (day) {
        case 1:
            return 'Понедельник'
        case 2:
            return 'Вторник'
        case 3:
            return 'Среда'
        case 4:
            return 'Четверг'
        case 5:
            return 'Пятница'
        case 6:
            return 'Суббота'
        case 7:
            return 'Воскресенье'
        default:
            return 'День недели введен не верно'
    }
}
let day = Number(prompt("Введите число от 1 до 7"));
console.log(dayOfWeek());

function helloUser() {
    if (time >= 0 && time <= 7) {
        return 'Доброй ночи';
    }
    else if (time >= 8 && time <= 9) {
        return 'Доброе утро';
    }
    else if (time >= 10 && time <= 16) {
        return 'Доброго дня';
    }
    else if (time >= 17 && time <= 24) {
        return 'Доброго вечера';
    }
    else {
        'Неверное время';
    }
}

let userName = prompt("Введите ваше имя");
let time = Number(prompt("Введите время"));

console.log(userName !== '' ? `${helloUser()}, ${userName}` : 'имя не введено');

let date = new Date();
console.log(userName !== '' ? `${helloUser(date.getHours())}, ${userName}` : 'Пустая строка');

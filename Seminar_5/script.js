// // 1. Создайте объект с ключами от 1 до 7, в качестве
// // значений содержащий имена дней недели. Выведите на
// // экран “Вторник”

// const week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// }
// console.log(week[2]);


// // 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// // Выведите на экран фамилию, имя и возраст через дефис.

// const user = {
//     name: 'Кирилл',
//     surname: 'Смирнов',
//     age: 18,

// }
// console.log(user.name + "-" + user.surname + "-" + user.age);
// // 3. Добавьте в объект user свойство отчество, которое
// // пользователь должен ввести с клавиатуры
// user.patronymic = prompt("Введите отчество");
// console.log(user);
// // 4. Удалите свойство surname
// delete user.surname;
// console.log(user);

// Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const weekDays = {};
// for (let i = 0; i < arr1.length; i++)
//     weekDays[arr1[i]] = arr2[i];
// console.log(weekDays);

// // 1. const obj = {x: 1, y: 2, z: 3};
// // Переберите этот объект циклом и возведите каждый элемент
// // этого объекта в квадрат.

// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// };
// for (const key in obj) {
//     console.log(Math.pow(obj[key], 2));
// }

// Создать объект товара
// id
// название
// описание
// цена (вывести в консоль, товар с 20% скидкой)

// const product = {
//     id: 1,
//     название: 'кружка',
//     описание: 'красивая, современная',
//     цена: 200
// }
// const sale = product.цена * 0.8;
// console.log(sale);

// const obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum = 0;

// for (const key in obj) {
//   console.log(obj[key]);
//   for (const el in obj[key]) {
//     sum += obj[key][el];
//   }
// }
// console.log(sum);

// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

const ridles = {
    question: 'Сидит дед во 100 шуб одет',
    answer: 'лук',
    askQuestion(){
        answerUser = prompt(this.question).toLowerCase();
        if (answerUser === ridles.answer){
            console.log("Вы выиграли");
        }
        if (answerUser !== ridles.answer){
            prompt("Это овощ");
        }
        if (answerUser !== ridles.answer){
            prompt("Он круглый");
        }
        else{
            console.log("Вы проиграли");;
        }
    } 
    
}
ridles.askQuestion();
console.log();



// document.querySelector('#my-button').onclick = function () {
//     console.log("Событие onclick");
// }

// document.addEventListener('click', () =>{
//     console.log("Событие onclick");
// })

// const buttons = document.querySelectorAll('button');
// for (const button of buttons) {
//     button.onclick = function() {
//         console.log(`Нажата ${button.textContent}`);
//     }
// }

// const buttons = document.querySelectorAll('button');
// buttons.forEach(element => {
//     element.onclick = function() {
//         console.log(`Нажата ${element.textContent}`);
//     }
// })

// document.querySelector("#button5").addEventListener('click', function() {
//     this.textContent = 'Вы нажали на эту кнопку';
//     this.style.color = 'white';
//     this.style.backgroundColor = 'black';
// })

// document.querySelector("#button5").addEventListener('click', function() {
//     this.innerText = 'Не догонишь меня';
//     this.style.backgroundColor = 'red';
//     this.style.transition = 'all 1s ease-in-out';
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     this.style.transform = `translate(${x}px, ${y}px)`;
//     this.disabled = true;
// })

// const buttons = [
//     {id: 'add', text: 'Добавить заголовок', clickHendler: addHeading},
//     {id: 'delete', text: 'Удалить заголовок', clickHendler: deleteHeading},
//     {id: 'hover', text: 'Кнопка с наведением', mouseoverHendler: hoverButtonIn, mouseoutHendler: hoverButtonOut,}
// ];

// function  createButtons () {
//     const btnConteiner = document.querySelector('body');
//     buttons.forEach((element) => {
//         const btn = document.createElement('button');
//         btn.id = element.id;
//         btn.textContent = element.text;
//         btnConteiner.appendChild(btn);

//         if (element.clickHendler) {
//             btn.onclick = element.clickHendler;
//         }
//         if (element.mouseoverHendler) {
//             btn.onmouseover = element.mouseoverHendler;
//         }
//         if (element.mouseoutHendler) {
//             btn.onmouseout = element.mouseoutHendler;
//         }
//     });
// }

// createButtons ();

// function addHeading () {
//     const heading = document.createElement('h1');
//     heading.textContent = 'Новый заголовок';
//     document.body.appendChild(heading);
// }

// function deleteHeading () {
//     const heading = document.querySelector('h1');
//     if(heading) {
//         heading.remove();
//     }
// }

// function hoverButtonIn () {
//     console.log('Вы навели на данную кнопку');
// }

// function hoverButtonOut () {
//     console.log('Вы убрали мышку с кнопки');
// }

// document.querySelector('#add').addEventListener('click', addList);

// document.querySelector('#remove').addEventListener('click', removeList);

// document.querySelector('#addClass').addEventListener('click', addClass);

// function addList () {
//     const list = document.querySelector('#list');
//     const newItem = document.createElement('li');
//     newItem.textContent = 'Новый элемент';
//     list.appendChild(newItem);
// }

// function removeList () {
//     if(list.firstElementChild) {
//         list.firstElementChild.remove();
//     }
// }

// function addClass () {
//     this.classList.add('click');
// }


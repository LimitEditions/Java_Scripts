import {data} from "./data.js";
const result = JSON.parse(data);

const cards = document.querySelector('.cards');
cards.style.display = 'flex';
cards.style.flexWrap = 'wrap';
cards.style.justifyContent = 'center';
cards.style.backgroundColor = 'aliceblue';

result.forEach(({id, name, status, species, gender, location, image}) => {

const content = document.createElement('div');
content.classList.add('content');
content.style.display = 'inline-block';
content.style.margin = '10px 50px';
cards.appendChild(content);

const idEl = document.createElement('h2');
idEl.classList.add('number');
idEl.textContent = `id: ${id}`;
idEl.style.marginLeft = '50px';

content.appendChild(idEl);

const imgCard = document.createElement('img');
imgCard.classList.add('img');
imgCard.src = image;
imgCard.style.borderRadius = '20%';
imgCard.style.border = 'double';
imgCard.style.width = '250px';
content.appendChild(imgCard);

const cardItem = document.createElement('div');
cardItem.classList.add('card__body');
cardItem.style.marginLeft = '20px';
cardItem.style.color = 'brown';
cardItem.style.width = '300px';
content.appendChild(cardItem);

const nameEl = document.createElement('h3');
nameEl.classList.add('text__name');
nameEl.textContent = `name: ${name}`;
nameEl.style.margin = '10px 0';
cardItem.appendChild(nameEl);

const statusEl = document.createElement('h3');
statusEl.classList.add('text__status');
statusEl.textContent = `status: ${status}`;
statusEl.style.margin = '10px 0';
cardItem.appendChild(statusEl);

const speciesEl = document.createElement('h3');
speciesEl.classList.add('text__species');
speciesEl.textContent = `species: ${species}`;
speciesEl.style.margin = '10px 0';
cardItem.appendChild(speciesEl);

const genderEl = document.createElement('h3');
genderEl.classList.add('text__gender');
genderEl.textContent = `gender: ${gender}`;
genderEl.style.margin = '10px 0';
cardItem.appendChild(genderEl);

const locationEl = document.createElement('h3');
locationEl.classList.add('text__home');
locationEl.textContent = `location: ${location}`;
locationEl.style.margin = '10px 0';
cardItem.appendChild(locationEl)
});


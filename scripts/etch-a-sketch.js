const gridContainer = document.querySelector('.js-sketchpad');
const sizeButton = document.querySelector('.js-sizebutton');
const clearButton = document.querySelector('.js-clearbutton');
const colorPicker = document.getElementById('colorPicker');
const eraseButton = document.querySelector('.js-erasebutton');
const randomButton = document.querySelector('.js-randombutton');
let size = {x : 16, y : 16}
let div = '';
let currentColor = '#000000';
let eraseMode = false;

createGrid();

function createGrid() {
  const total = size.x * size.y;
  for(let i = 0; i < total; i++) {
    div = createElement(gridContainer, 'div', '', 'box');

    addHover(div);
  };
  gridContainer.style.setProperty('grid-template-columns', `repeat(${size.x}, 1fr)`)
};

function addHover(element) {
  element.addEventListener('mouseover', () => {
  if (eraseMode) {
    element.style.backgroundColor = '#FFFFFF';
  } else {
    element.style.backgroundColor = currentColor;
    }  
  });
};

function createElement(parent, eleType, html, eleClass) {
  const ele = document.createElement(eleType);
  ele.innerHTML = html;
  ele.classList.add(eleClass);
  return parent.appendChild(ele);
}; 

function deleteGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  };
  gridContainer.style.removeProperty('grid-template-columns');
};

sizeButton.addEventListener ('click', () => {
  const input = prompt('Please enter a value up to 100');
if (input == null || input == '') {
  size = {x : 16, y : 16}
} else {
  size.x = input > 100 ? 100 : input;
  size.y = input > 100 ? 100 : input;
}
  deleteGrid();
  createGrid();
});

clearButton.addEventListener ('click', () => {
  deleteGrid();
  createGrid();
});

colorPicker.addEventListener('input' , (e) => {
  currentColor = e.target.value;
});

eraseButton.addEventListener ('click', () => {
  eraseMode = !eraseMode;
  eraseButton.textContent = eraseMode ? 'Drawing Mode' : 'Erase';
});

randomButton.addEventListener ('click', () => {
  currentColor = getRandomColor();
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  };
  return color;
};
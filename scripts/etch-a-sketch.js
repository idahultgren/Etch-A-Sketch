const gridContainer = document.querySelector('.js-sketchpad');
const sizeButton = document.querySelector('.js-sizebutton');
let size = {x : 16, y : 16}
let div = '';

createGrid();

function createGrid() {
  const total = size.x * size.y;
  for(let i = 0; i < total; i++) {
    div = createElement(gridContainer, 'div', '', 'box');
  };
  gridContainer.style.setProperty('grid-template-columns', `repeat(${size.x}, 1fr)`)
  
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
  gridContainer.style.removeProperty('grid-template columns');
};


sizeButton.addEventListener ('click', () => {
  const input = prompt('Please add a value');
if (input == null || input == '') {
  size = {x : 16, y : 16}
} else {
  size.x = input;
  size.y = input;
}
  deleteGrid();
  createGrid();
});


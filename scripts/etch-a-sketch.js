const gridContainer = document.querySelector('.js-container');
const size = {x : 16, y : 16}

createGrid();

function createGrid() {
  const total = size.x * size.y;
  for(let i = 0; i < total; i++) {
    const div = createElement(gridContainer, 'div', '', 'box');

    div.addEventListener ('mouseover', () => {div.style.backgroundColor = 'black'});
  };
  gridContainer.style.setProperty('grid-template-columns', 'repeat(16, 1fr)')
};

//createElement(gridContainer, 'div', '1', 'box');

function createElement(parent, eleType, html, eleClass) {
  const ele = document.createElement(eleType);
  ele.innerHTML = html;
  ele.classList.add(eleClass);
  return parent.appendChild(ele);
};  

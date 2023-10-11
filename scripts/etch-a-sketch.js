const gridContainer = document.querySelector('.js-container');

createGrid();

function createGrid() {
  const total = 16 * 16;
  for(let i = 0; i < total; i++) {
    createElement(gridContainer, 'div', '', 'box');
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
const grid = document.querySelector(".grid");

const cell = document.createElement("div");
cell.setAttribute("style", "height: 30px; width: 30px; border: 1px 1px; background: yellow");
cell.classList.add(".cell");
const fragment = new DocumentFragment();

for(let i=0; i<256; i++) {
  fragment.appendChild(cell.cloneNode(true));
}

grid.appendChild(fragment);

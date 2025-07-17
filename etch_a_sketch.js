const grid = document.querySelector(".grid");
const GRID_DIMENSION = 480;   // This square grid has equal width and height and both are 480px each.


createGrid(16);   // Initialize a default grid. 
markTrail();      // Run the event handler. 
resetTrail();     // Event handler function for "Clear Trail" button. 

function resetTrail(){
  document.getElementById("clear").addEventListener('click', () => {
    const clearTrail = document.getElementsByClassName("square");
      for(i = 0; i < clearTrail.length; i++){
        clearTrail[i].style.backgroundColor= "rgb(0, 204, 255)";
      }
  })
}

function createGrid(cellsPerSide){ 
  for(let i=0; i<cellsPerSide**2; i++) {         // each cell in the grid is square with equal height and width. Total  number of cells is found by squaring "cellPerSide".
    const cell = document.createElement("div"); 
    cell.classList.add("square");
    cell.style.height = cell.style.width = (GRID_DIMENSION / cellsPerSide) + "px";    //480px divided by number input by user
    grid.appendChild(cell);      
  }
}

document.getElementById("cellNumber").addEventListener('click' , () => {    //Event handler function for "Cells per Side" button
  var cellsPerSide = document.getElementById("sideCells").value;
  grid.textContent= "";
  createGrid(cellsPerSide);
  markTrail();
});

function markTrail(){                     //function that handles the main etch-a-sketch event (i.e. marking a trail by moving the mouse over the squares)
  const colorTrail = document.getElementsByClassName("square");
    for(i = 0; i < colorTrail.length; i++){
      colorTrail[i].addEventListener('mouseover', e => {
        if(document.getElementById("rainbow").checked === true){
          function getRandomColor(){      //first step to get random rgb colors if "Colorful Trail" checkbox is ticked.
            color = Math.ceil(Math.random() * 256);
            return color;
          }
          e.target.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`  //second step to get random rgb colors if "Colorful Trail" checkbox is ticked.
        }else{
          e.target.style.backgroundColor = "#F8C90D";   //use this default color if "Colorful Trail" checkbox is NOT ticked.
        }       
      }
  )};
}
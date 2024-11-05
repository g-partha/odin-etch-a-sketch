// Number of rows and columns of square divs is stored in a variable
let gridSize = 16;

function startGrid(){
    const container = document.querySelector(".container");
    container.innerHTML = "";
    container.style.width = gridSize * 15 + 20 + "px";
    const squareDivArray = [];
    for(let i = 0; i < gridSize * gridSize; i++){
        squareDivArray[i] = document.createElement("div");
        squareDivArray[i].classList.add("square-div");
        container.appendChild(squareDivArray[i]);
    }
    squareDivArray.forEach((item) => {
        item.addEventListener("mouseenter", function(event) {
            let target = event.target;
            target.classList.add("square-div-hovered");
        });
    });
}

startGrid();

const userInputButton = document.querySelector(".user-input-button");
userInputButton.addEventListener("click", function(){
    gridSizePrompt = prompt("Enter a number upto 100 to be set as grid size.", 0);
    if(parseInt(gridSizePrompt) >= 0 && parseInt(gridSizePrompt) <= 100 ){
        gridSize = parseInt(gridSizePrompt);
    }
    else {
        alert("Invalid input! Click the button again and enter a number between 0 and 100.");
    }
    startGrid();
})
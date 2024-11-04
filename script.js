const container = document.querySelector(".container");
const squareDivArray = [];
for(let i = 0; i < 256; i++){
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
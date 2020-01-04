let container = document.querySelector('.container');
let gridSize = 16;

// Create grid of size gridSize
function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        let divi = document.createElement('div');
        divi.classList.add('firstLevel');
        divi.style.height = `${100/size}%`;
        for (let j = 0; j < size; j++) {
            let divj = document.createElement('div');
            divj.classList.add('secondLevel');

            divj.addEventListener('mouseover', () => {
                divj.style.backgroundColor = 'orange';
            });

            divi.appendChild(divj);
        }
        container.appendChild(divi);
    }
}

// Deletes an existing grid
function deleteGrid() {
    let parent = document.querySelector('.container');
    let childs = document.querySelectorAll('.firstLevel');

    childs.forEach(child => parent.removeChild(child));
}

generateGrid(gridSize);

// Button to generate grid
let gen = document.querySelector('#generator');

gen.addEventListener('click', () => {
    let childs = document.querySelectorAll('.firstLevel');
    
    let newSize = prompt('Size (in squares per side):');
    gridSize = +newSize;
    
    if (typeof(gridSize) !== 'number' || !gridSize) return 0;
    if(childs) deleteGrid();

    generateGrid(gridSize);
});

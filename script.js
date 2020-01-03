let container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    let divi = document.createElement('div');
    for (let j = 0; j < 16; j++) {
        let divj = document.createElement('div');
        divj.style.border = '1px solid grey';
        divi.appendChild(divj);
    }
    container.appendChild(divi);
}
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';
container.style.margin = 'auto';

function randomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}


document.body.appendChild(container);
let tile


const numRows = 8;
const numCols = 8;


for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        tile = document.createElement("div")
        tile.style.width = '12.5%';
        tile.style.height = '12.5%';
        tile.style.backgroundColor = randomColor()

     
       /*if ((row + col) % 2 === 0) {
            tile.style.backgroundColor = 'red';
        } else {
            tile.style.backgroundColor = 'black';
        }*/

        
        container.appendChild(tile);
    }
}
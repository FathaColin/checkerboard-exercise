const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';
container.style.margin = 'auto';


document.body.appendChild(container);
let tile


const numRows = 8;
const numCols = 8;
function gradientColor(row, col) {
    const r = Math.floor((row / 7) * 255);
    const g = Math.floor((col / 7) * 255);
    const b = 255 - r;

    return `rgb(${r},${g},${b})`;
}

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        tile = document.createElement("div")
        tile.style.width = '12.5%';
        tile.style.height = '12.5%';
        tile.style.backgroundColor = gradientColor(row, col)


        
        container.appendChild(tile);
    }
}
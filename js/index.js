const DEFAULT_ROW_COL = 32;

function createGrid(row,col) {
    let parentContainer = document.querySelector('.flex-container');
    let rowContainer;

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {

            if(j === 0) {
                rowContainer = document.createElement('div');
                rowContainer.classList.add('flex-row-container');
                parentContainer.appendChild(rowContainer);
            }
            
            let flexItem = document.createElement('div');
            flexItem.classList.add('flex-item');
            rowContainer.appendChild(flexItem);
        }
    }
}

function draw() {
    let gridBoxes = document.querySelectorAll('.flex-item');
    let btn = document.querySelector('.rainbow');
    let colorPicker = document.querySelector(`input[type='color']`);
    let colorBtn = document.querySelectorAll('.color'); 

    console.log(colorBtn[1]);

    let rgbValues = [];
    let btnClicked = 'color';

    colorBtn[1].addEventListener('click', () => {
        btnClicked = 'color';
    });

    colorPicker.addEventListener('input', () => {
        btnClicked = 'color';
    });

    btn.addEventListener('click', () => {        
        btnClicked = 'rainbow';
    });

    gridBoxes.forEach(box => {
        box.addEventListener('mouseenter', event => {
            rgbValues = randomNum();

            if(btnClicked === 'rainbow') {
                event.target.style.backgroundColor = `rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`;

            } else if(btnClicked === 'color') {
                event.target.style.backgroundColor = `${colorPicker.value}`; 
                
            } else {
                event.target.style.backgroundColor = 'rgb(49, 49, 49)';
            }
            
        });
    });    
}

function randomNum() {
    let arr = [];

    for(let i = 0; i < 3; i++) {
        let rand = Math.floor((Math.random() * 255) + 1);
        arr[i] = rand;
    }

    return arr;
}

function deleteGrid() {
    let divItems = document.querySelectorAll('.flex-item');
    let divContainers = document.querySelectorAll('.flex-row-container');

    divItems.forEach(item => {
        item.remove();
    });

    divContainers.forEach(container => {
        container.remove();
    })
}

function updateRange () {
    let input = document.querySelector(`input[type='range']`);

    input.addEventListener('input', event => {
        let value = event.target.value;

        labelText(value);
        deleteGrid();
        createGrid(value,value);
        draw();
    });
}

function labelText(value) {
    let label = document.querySelector('label');

    label.textContent = `${value} x ${value}`;
}

function clear() {
    let btn = document.querySelector('.clear');
    
    btn.addEventListener('click', () => {
        let gridBoxes = document.querySelectorAll('.flex-item');

        gridBoxes.forEach(box => {
            box.style.backgroundColor = 'white';
        });
    });
}

createGrid(DEFAULT_ROW_COL,DEFAULT_ROW_COL);
draw();
labelText(DEFAULT_ROW_COL);
updateRange();
clear();


const DEFAULT_ROW_COL = 4;


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

            flexItem.addEventListener('mouseenter', event => {
                event.target.style.backgroundColor = 'blue';
            });

            rowContainer.appendChild(flexItem);
            

        }
    }

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
    let input = document.querySelector('input');

    input.addEventListener('input', event => {
        let value = event.target.value;

        labelText(value);
        deleteGrid();
        createGrid(value,value);
    });
}

function labelText(value) {
    let label = document.querySelector('label');
    label.textContent = `${value} x ${value}`;
}

createGrid(DEFAULT_ROW_COL,DEFAULT_ROW_COL);
labelText(DEFAULT_ROW_COL);
updateRange();

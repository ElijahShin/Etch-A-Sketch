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

createGrid(4,4);
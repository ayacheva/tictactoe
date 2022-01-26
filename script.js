const board = [
    [
        { isClicked: false, value: '' },
        { isClicked: false, value: '' },
        { isClicked: false, value: '' },
    ],
    [
        { isClicked: false, value: '' },
        { isClicked: false, value: '' },
        { isClicked: false, value: '' },
    ],
    [
        { isClicked: false, value: '' },
        { isClicked: false, value: '' },
        { isClicked: false, value: '' },
    ],
];

const fieldBoard = document.querySelector('.tic-tac-toe-board');

function createBoard(board, field) {
    board.forEach((x, index1) => {
        let row = document.createElement('div');
        row.classList.add('row');
        field.append(row);
        x.forEach((_, index2) => {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-cell', `${index1}_${index2}`)
            row.append(cell);
        });
    })
}

createBoard(board, fieldBoard);

function playMove(event, player) {
    let cellId = event.target.getAttribute('data-cell');
    let x = cellId.split("_")[0];
    let y = cellId.split("_")[1];
    if(!board[x][y].isClicked) {
        board[x][y].isClicked = true;
        board[x][y].value = player;
        event.target.innerText = board[x][y].value;
    }     
}

function handleClick(event) {
    if(event.target.getAttribute('data-cell')) {
        playMove(event, "X");
    }
}

function handleRightClick(event) {
    if(event.target.getAttribute('data-cell')) {
        playMove(event, "O");
    }
}

fieldBoard.addEventListener("click", handleClick);
fieldBoard.addEventListener("contextmenu", handleRightClick);

// Reset
let reset = document.getElementById('reset');

function resetBoard() {
    Object.values(board).forEach((x) => {
        x.forEach((y) => {
            y.isClicked = false;
            y.value = '';
        });
    });
    // createBoard(board);
}

reset.addEventListener('click', resetBoard);
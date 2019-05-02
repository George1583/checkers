var checkers = [
{row: 1, cell: 2, color: 'white'},
{row: 1, cell: 4, color: 'white'},
{row: 1, cell: 6, color: 'white'},
{row: 1, cell: 8, color: 'white'},
{row: 2, cell: 1, color: 'white'},
{row: 2, cell: 3, color: 'white'},
{row: 2, cell: 5, color: 'white'},
{row: 2, cell: 7, color: 'white'},
{row: 3, cell: 2, color: 'white'},
{row: 3, cell: 4, color: 'white'},
{row: 3, cell: 6, color: 'white'},
{row: 3, cell: 8, color: 'white'},
]

function renderBoard() {
    console.log('rendering board')
    return `
    ${renderRow(1)}
    ${renderRow(2)}
    ${renderRow(3)}
    ${renderRow(4)}
    ${renderRow(5)}
    ${renderRow(6)}
    ${renderRow(7)}
    ${renderRow(8)}
    `
}

function renderRow(rowNum) {
    console.log(`rendering row ${rowNum}`)
    return `
     <div id="row-${rowNum}" class="row">
        ${renderCell(rowNum, 1)}
        ${renderCell(rowNum, 2)}
        ${renderCell(rowNum, 3)}
        ${renderCell(rowNum, 4)}
        ${renderCell(rowNum, 5)}
        ${renderCell(rowNum, 6)}
        ${renderCell(rowNum, 7)}
        ${renderCell(rowNum, 8)}
        </div>
        `
    }

function renderCell(rowNum, cellNum) {
    console.log(`rendering cell ${rowNum}-${cellNum}`)
if (cellColor(cellNum, rowNum) === 'black') {
return `<div id="cell-${rowNum}-${cellNum}" class="cell black"></div>`
} else
return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
}

function renderCheckers(){
console.log(`rendering checkers ${checkers}`)
    for(let i=0; i<checkers.length; i++) {
       let checker = checkers[i];
       console.log(`#cell-${checker.row}-${checker.cell}`)
       $(`#cell-${checker.row}-${checker.cell}`).html(renderChecker(checker.color))
    }
}

function renderChecker(color) {
console.log(`${color}`)
return `<div class="checker ${color}-checker></div>`
}

function parity(num) {
console.log(`${num % 2}`)
    return (num % 2 == 0) ? 'even' : 'odd'
}

function cellColor(cellNum, rowNum) {
console.log(`${parity(cellNum)}`)    
return parity(cellNum) == parity(rowNum) ? 'white' : 'black'
}

/***
function renderBoard2(rowNum) {
        let rows = []
        for (var rowNum=1; rowNum<=8; rowNum++) {
        rows.push(renderRow2(rowNum))
        }
        
        return `${rows.join('')}`
}

function renderRow2 (rowNum) {
        let cells = []
        for (var cellNum=1; cellNum<=8; cellNum++) {
        cells.push(renderCell(rowNum, cellNum))
        }
        
        return `
        <div id="row-${rowNum}" class="row">
        ${cells.join('')}
        </div>
        `
        }
***/
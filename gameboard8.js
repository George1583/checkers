$(document).ready(function () {
    console.log('document ready')
    $('#board-container').html(renderBoard())
//  $('.black.cell').click(toggle)
//  $('.black.cell').click(selectChecker) 
renderCheckers()   
// $(`.checker`).click(selectChecker)
// $(`.black.cell`).click(moveSelectedCheckerHere)
})

function toggle() {
    let checker = $(this).children().first()
    checker.toggle()
    if(!checker.is(":visible")){
        switchColor(checker);
    }
}

function switchColor(checker) {
    if (checker.hasClass('black-checker')) {
        checker.removeClass('black-checker')
        checker.addClass('white-checker')
    } else {
        checker.addClass('black-checker')
        checker.removeClass('white-checker')
    }
}

function renderBoard() {
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
    if (cellColor(cellNum, rowNum) === 'black') {
        return `<div id="cell-${rowNum}-${cellNum}" class="cell black"></div>`
    } else
        return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
}

/*** Helper Methods ***/
function parity(num) {
    return (num % 2 == 0) ? 'even' : 'odd'
}

function cellColor(cellNum, rowNum) {
    return parity(cellNum) == parity(rowNum) ? 'white' : 'black'
}    

function moveSelectedCheckerHere() {
console.log('things')
if(selectedChecker) {
console.log('move checker here')
let blackCell = $(this)
console.log(`black cell: `, blackCell)
let id= blackCell.attr('id')
console.log(`id: `, id)
let idParts = id.split('-')
console.log(`idParts = `, idParts)

selectedChecker.row = Number(idParts[1])
selectedChecker.cell = Number(idParts[2])

console.log(`The checker I'm moving is `, selectedChecker.color)
if (selectedChecker.color == `black` && selectedChecker.row == 1) {
    console.log(`I am moving a black checker to the white home row.`)
selectedChecker.isKing = true
} else if (selectedChecker.color == `white` && selectedChecker.row == 8) {
selectedChecker.isKing = true
}

selectedChecker = undefined
renderCheckers()
} else {
console.log(`Please select a checker`)
}
}

function clearBoard() {
$(`.black.cell`).html(``)
$(`.black.cell`).unbind('click')
$(`.out-of-play`).html(``)
}
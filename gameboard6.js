function cellTemplate(rowNum, cellNum) {
    var even = true
    if (cellNum % 2 == 1) even = false
    if (even) {
    return `
    <div id="cell-${rowNum}-${cellNum}" class="cell black">
    <div class="checker red-checker"></div>
    </div>
    `
    } else
    return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
    }
    
    function rowTemplate(rowNum) {
    console.log(`drawing row  number ${rowNum}`)
    var rowString = ''
    rowString = rowString + `<div id="row-${rowNum}" class="row">`
    for (var cellNum=1; cellNum<=8; cellNum++) {
    rowString = rowString + cellTemplate(rowNum, cellNum)
    }
    rowString = rowString + `</div>`
    return rowString
    }
    
    function boardTemplate() {
    var boardString = ''
    for (var rowNum=1; rowNum<=8; rowNum++) {
    boardString = boardString + rowTemplate(rowNum)
    }
    return boardString
    }
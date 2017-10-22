function makeGrid() {
    let row = $('#input_height').val();
    let column = $('#input_width').val();
    for (let i = 0; i < row; ++i) {
        var rows = $('<tr class="cells">');
        $('#pixel_canvas').append(rows);
        for (let j = 0; j < column; ++j) {
            var cell = $('<td class="cells">');
            rows.append(cell);
        }
    }
}

function clearGrid() {
    $('.cells').remove();
}

$(document).ready(function() {
    $('form').submit(function() {
        clearGrid();
        makeGrid();
        
        var color = $('#colorPicker').val();
        $('td').click(function() {
            $(this).css( "background-color", color);
        });
    });
});
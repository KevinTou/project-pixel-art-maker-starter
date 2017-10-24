var height_input = $('#input_height');
var width_input = $('#input_width');

function makeGrid() {
    let row = height_input.val();  
    let column = width_input.val();
    for (let i = 0; i < row; ++i) {
        var rows = $('<tr class="cells">');
        $('#pixel_canvas').append(rows);
        for (let j = 0; j < column; ++j) {
            var cell = $('<td>');
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
        
        var colorPicker = $('#colorPicker');
        $('td').click(function() {
            var color = colorPicker.val();
            $(this).css( "background-color", color);
        });
    });
});
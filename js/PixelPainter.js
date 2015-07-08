var $color= $('<input type ="color">');
var $body = $('body');

$(document).ready(function(){
  var $canvas = $('<div id="canvas"></div>');
  $('#pixelPainter').append('<div id="palette">');
  $('#pixelPainter').append('<div id="canvas">');
  $('#canvas').append('<div class="grid">');
  numGrid(500, 300);
});

$body.append($color);

function numGrid(x, y){
  var input = x+y;
  for (var i=0; i<449; i++){
    $('#canvas').append('<div class="grid" name="mycanvas">');

  }
}

var color = "#f00";

$("#colorpicker").spectrum({ //spectrum config
    color: "#f00",
    showPalette: true,
    showInput: true,
    showAlpha: true,
    chooseText: "Pick",
    cancelText: "X",
    togglePaletteOnly: true,
    showPaletteOnly: true,
    togglePaletteMoreText: "More Colors...",
    togglePaletteLessText: "Less Colors...",
    palette: [
            //color palettes for Spectrum
    ],
    change: function(colorSelected) {
        color = colorSelected.toHexString();
    }
});

$('.pixel').click(function(){

    $(this).css('background-color' , color);

});

var colorVal = $color.val();

function draw(){
$(this).css("background-color", "black", $colorval());
}

function clear(){
  $('.grid').css("background-color", "blue");
}
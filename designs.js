// Select color input
// Select size input
const canv = document.getElementById('pixelCanvas');
let h = $("#inputHeight");
let w = $("#inputWidth");


// When size is submitted by the user, call makeGrid()
$('#inputSubmit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

let c = $("#colorPicker");

function makeGrid() {

// Actual Code-Functionality
    //Initialize
    canv.innerHTML = '';
   let heightVal = h.val();
   let widthVal = w.val();

   //Function to change colour
   let addEvent = function(cell) {
       cell.addEventListener('click', function() {
           cell.style.backgroundColor = c.val();
       });
   }

   //Set the colour of the cell clicked
   for (let i = 0; i < heightVal; i++) {
       let row = canv.insertRow(i);
       for (let j = 0; j < widthVal; j++) {
           let cell = row.insertCell(j);
           cell.addEventListener('click', addEvent(cell));
       }
   }

}

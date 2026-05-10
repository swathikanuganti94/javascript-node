var x = 6;

function toggleColor() {
  var checkbox = document.getElementById("colorToggle");
  var songText = document.getElementById("song");

  if (checkbox.checked) {
    // If selected (checked) -> Orange
    songText.style.color = "orange";
  } else {
    // If unchecked -> Yellow
    songText.style.color = "yellow";
  }
  
  console.log(`Value of x is ${x}. Checkbox is: ${checkbox.checked}`);
}

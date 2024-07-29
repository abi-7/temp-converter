const displayC = document.getElementById("displayC");
const displayF = document.getElementById("displayF");

//This will convert the temperature of C to F and vise versa
displayC.addEventListener("input", () => {
  const cel = parseFloat(displayC.value);
  if (!isNaN(cel)) {
    const fah = ((cel * 1.8) + 32).toFixed(3);
    displayF.value = fah;
  } else {
    displayF.value = "";
  }
});

displayF.addEventListener("input", () => {
    const fah = parseFloat(displayF.value);
    if (!isNaN(fah)) {
      const cel = ((fah - 32) / 1.8).toFixed(3);
      displayC.value = cel;
    } else {
      displayC.value = "";
    }
  });

function reset(){
    displayC.value = 0;
    displayF.value = 32;
}

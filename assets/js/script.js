/// FUNCTION DESAFIO 1


function styleDog(destiny) {
  const imgDog = document.querySelector(destiny)
  const hasBorder = imgDog.style.border
  if (hasBorder) {
    imgDog.style.border = null
  } else {
    imgDog.style.border = '35px solid yellow'
  }
}


//// FUNCTION DESAFIO 2

function resultClick () {

  const input1 = Number(document.querySelector('#input1').value);
  const input2 = Number(document.querySelector('#input2').value);
  const input3 = Number(document.querySelector('#input3').value);
  const modText = document.querySelector('#modText')
  const sumInputs = input1 + input2 + input3;

  if ( sumInputs <=10 ) { 
    modText.innerHTML = `Llevas ${sumInputs} stickers`;
  } else {
    modText.innerHTML= 'llevas demasiados stickers'
  }
}


////// FUNCTION DESAFIO 3


function finalValue () {

  const selectValue1 = (document.querySelector('#select1').value);
  const selectValue2 = (document.querySelector('#select2').value);
  const selectValue3 = (document.querySelector('#select3').value);
  const sumValue = selectValue1 + selectValue2 + selectValue3;
  
  if (sumValue === '911') {
    alert('password correcto')
  } else if (sumValue === '714') {
    alert('password2 correcto')
  } else {
    alert('password incorrecto')
  }
}
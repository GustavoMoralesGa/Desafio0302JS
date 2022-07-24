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

function resultClick (place) {
  const h5mod = document.querySelector(place)
  const input1 = document.querySelector('#input1').value;
  const input2 = document.querySelector('#input2').value;
  const input3 = document.querySelector('#input3').value;
  const modText = document.querySelector('#modText')
  const sumImputs = Number(input1 + input2 + input3); 
  
  if ( sumImputs <=10 ) { 
    modText.innerHTML = 'llevas' + sumImputs + ' stickers.'
  } else {
    modText.innerHTML= 'llevas demasiados stickers'
  }
}


////// FUNCTION DESAFIO 3

const selecValue1 = document.querySelector('"select1').value;
const selecValue2 = document.querySelector('#select2').value;
const selecValue3 = document.querySelector('#select3').value;

finalValue = selecValue1 + selecValue2 + selecValue3;

function finalValue () {
  if (finalValue === '911') {
    alert('password correcto')
  } else if (finalValue === '714') {
    alert('password2 correcto')
  } else {
    alert('password incorrecto')
  }
}
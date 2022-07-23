
function styleDog(destiny) {
  const imgDog = document.querySelector(destiny)
  const hasBorder = imgDog.style.border
  if (hasBorder) {
    imgDog.style.border = null
  } else {
    imgDog.style.border = '35px solid yellow'
  }
}

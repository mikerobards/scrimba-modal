/** 
  Creating interactive buttons: Open Modal
  
  0) Add 'display: none' to '#overlay' - we want to hide it initially!
  1) Use document.getElementById to target "open-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "block"
**/

/** 
  Creating interactive buttons: Close Modal
  
  1) Use document.getElementById to target "close-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "none"
**/

const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("close-modal")
const overlay = document.getElementById("overlay")

openModal.addEventListener("click", ()=>{
    overlay.style.display = "block"
})

closeModal.addEventListener("click", ()=>{
    overlay.style.display = "none"
})


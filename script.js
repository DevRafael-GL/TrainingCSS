let time = 4000,
currentImageIndex = 0,
imagens = document.querySelectorAll(".right img"),
maxImage = imagens.length

function nextImage() {
  imagens[currentImageIndex].classList.remove("selected")

  currentImageIndex++

  if(currentImageIndex >= maxImage) {
    currentImageIndex = 0
  }

  imagens[currentImageIndex].classList.add("selected")
}

function start() {
  setInterval(() => {
    nextImage()
  }, time);
}

window.addEventListener("load", start)



let abrirMenu = document.querySelector(".menu-mobile")
let headerMenu= document.querySelector(".header-menu")

function openMenu() {
  headerMenu.classList.toggle("open")
}

abrirMenu.addEventListener("click", openMenu)
const burger = document.querySelector('#burger')
const slide = document.querySelector('#burger-slide')

burger.addEventListener('click', () => {
  slide.classList.toggle('disp')
})
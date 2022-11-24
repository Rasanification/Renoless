const container = document.querySelector('.slider-container1');
document.querySelector('.sliderPicture1').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})
const container2 = document.querySelector('.slider-container2');
document.querySelector('.sliderPicture2').addEventListener('input', (e) => {
  container2.style.setProperty('--position', `${e.target.value}%`);
})
const container3 = document.querySelector('.slider-container3');
document.querySelector('.sliderPicture3').addEventListener('input', (e) => {
  container3.style.setProperty('--position', `${e.target.value}%`);
})


import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('dropdown').classList.toggle('show')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionTel() {
  document.getElementById('dropdown--tel').classList.toggle('show')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown__button--tel')) {
    var dropdowns = document.getElementsByClassName('.dropdown__content--tel')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}

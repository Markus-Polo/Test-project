function myFunction() {
  document.getElementById('dropdown').classList.toggle('show')
}
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
function myFunctionTel() {
  document.getElementById('dropdown--tel').classList.toggle('show')
}
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

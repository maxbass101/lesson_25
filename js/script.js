"use strict"
// иконка
const searchIcon = document.querySelector('.search-icon'); // иконка
// общий div 
const search = document.querySelector('.search'); 
// форма
const formSearch = document.querySelector('.form-search'); 
//  поле ввода
const searchInput = document.querySelector('.form-search__input');
// значение атрибута numlength из searchInput
const txtNumLength = searchInput.getAttribute('numlength'); 
// span для вывода значения
const txtCounter = document.querySelector('.form-search__numb');
txtCounter.innerHTML = txtNumLength;

document.addEventListener("click", activeSearch);

function activeSearch(event) {
   if (event.target.closest('.search__icon')) {
      search.classList.toggle('active');
   }
   if ((!event.target.closest('.search__icon')) && (!event.target.closest('.form-search'))) {
      search.classList.remove('active');
   }
}

document.addEventListener("keydown", function(event) {
   // console.log(`Нажата клавиша: ${event.code}`);
   if (event.code === "Escape") {
      search.classList.remove('active');
   }
});

document.addEventListener("keyup", txtSetCounter);

function txtSetCounter() {
   const txtCounterResult = parseInt(txtNumLength) + searchInput.value.length;
   txtCounter.innerHTML = txtCounterResult;
}
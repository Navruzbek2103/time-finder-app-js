var elForm = document.querySelector(".form");
var elKilometresInput = document.querySelector("input");
var elParagraph1 = document.querySelector(".list-item-text1");
var elParagraph2 = document.querySelector(".list-item-text2");
var elParagraph3 = document.querySelector(".list-item-text3");
var elParagraph4 = document.querySelector(".list-item-text4");



var person = 3.6;
var velo = 20.1;
var car = 70;
var airplane = 800;
var century = 36525;
var year = 365;
var day = 24;
var hour = 60;
var minut = 60;
var secund = 3600;
var result1 = 0;
var result2 = 0;
var result3 = 0;
var result4 = 0;

elForm.addEventListener("submit", function(qiymat){
  qiymat.preventDefault();

  if(!isNaN(elKilometresInput.value)){
    result1 = elKilometresInput.value.trim() / person;
    elParagraph1.textContent = Math.trunc(result1) + " hour";

    result2 = elKilometresInput.value.trim() / velo;
    elParagraph2.textContent = Math.trunc(result2) + " hour";

    result3 = elKilometresInput.value.trim() / car;
    elParagraph3.textContent = Math.trunc(result3) + " hour";

    result4 = elKilometresInput.value.trim() / airplane;
    elParagraph4.textContent = Math.trunc(result4) + " hour";



    // alert(result12)

    // result1 = 3.6
    // var sec = result1 / secund;
    // alert(Math.trunc(result1))




  }

  else if(isNaN(elKilometresInput.value)){
    alert("Warning! \n \n Iltimos, raqamli ma'lumot kiriting")
    result1 = elKilometresInput.value.trim() * person;
    elParagraph.textContent = "Ma'lumot kiritishda xatolik bor";
  }

  else{
    alert("Texnik nosozlik")
  }

})
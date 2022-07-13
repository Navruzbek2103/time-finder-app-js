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

  var km = elKilometresInput.value.trim();

  if(!isNaN(km)){
    result1 = km / person;
    var result11 = (km / person - Math.trunc(result1)) * 60;
    elParagraph1.textContent = Math.trunc(result1) + " hour " + Math.trunc(result11) + " minute";


    result2 = km / velo;
    var result21 = (km / velo - Math.trunc(result2)) * 60;
    elParagraph2.textContent = Math.trunc(result2) + " hour " +  Math.trunc(result21) + " minute";

    result3 = km / car;
    var result31 = (km / car - Math.trunc(result3)) * 60;
    elParagraph3.textContent = Math.trunc(result3) + " hour " + Math.trunc(result31) + " minute";

    result4 = km / airplane;
    var result41 = (km / airplane - Math.trunc(result4)) * 60;
    elParagraph4.textContent = Math.trunc(result4) + " hour " + Math.trunc(result41) + " minute";



    // alert(result12)

    // result1 = 3.6
    // var sec = result1 / secund;
    // alert(Math.trunc(result1))




  }

  else if(isNaN(km)){
    alert("Warning! \n \n Iltimos, raqamli ma'lumot kiriting")
    result1 = elKilometresInput.value.trim() * person;
    elParagraph.textContent = "Ma'lumot kiritishda xatolik bor";
  }

  else{
    alert("Texnik nosozlik")
  }

})
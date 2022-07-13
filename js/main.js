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
var secund = 60;
var result1 = 0;
var result2 = 0;
var result3 = 0;
var result4 = 0;

elForm.addEventListener("submit", function(qiymat){
  qiymat.preventDefault();

  var km = elKilometresInput.value.trim();

  if(!isNaN(km)){
    result1 = km / person;
    var result11 = (km / person) / 24;
    var result12 = (km / person - Math.trunc(result1)) * minut;
    var result13 = (result13 - Math.trunc(result13)) * secund;

    elParagraph1.textContent = Math.trunc(result11) + " day " + Math.trunc(result1) + " hour " + Math.trunc(result12) + " minute " + Math.ceil(result12) + " secund";


    result2 = km / velo;
    var result21 = (km / velo - Math.trunc(result2)) * minut;
    var result22 = (result21 - Math.trunc(result21)) * secund;
    elParagraph2.textContent = Math.trunc(result2) + " hour " +  Math.trunc(result21) + " minute " + Math.ceil(result22) + " secund";

    result3 = km / car;
    var result31 = (km / car - Math.trunc(result3)) * minut;
    var result32 = (result31 - Math.trunc(result31)) * secund;
    elParagraph3.textContent = Math.trunc(result3) + " hour " + Math.trunc(result31) + " minute " + Math.ceil(result32) + " secund";

    result4 = km / airplane;
    var result41 = (km / airplane - Math.trunc(result4)) * minut;
    var result42 = (result41 - Math.trunc(result41)) * secund;
    elParagraph4.textContent = Math.trunc(result4) + " hour " + Math.trunc(result41) + " minute " + Math.ceil(result42) + " secund";



    // alert(result12)

    // result1 = 3.6
    // var sec = result1 / secund;
    // alert(Math.trunc(result1))




  }

  else if(isNaN(km)){
    alert("Warning! \n \n Iltimos, raqamli ma'lumot kiriting")
    result1 = elKilometresInput.value.trim() * person;
    elParagraph1.textContent = "Ma'lumot kiritishda xatolik bor";
    elParagraph2.textContent = "Ma'lumot kiritishda xatolik bor";
    elParagraph3.textContent = "Ma'lumot kiritishda xatolik bor";
    elParagraph4.textContent = "Ma'lumot kiritishda xatolik bor";
  }

  else{
    alert("Texnik nosozlik")
  }

})
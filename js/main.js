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
    var result11 = (km / person) / 24;
    result1 = km / person;
    var result12 = (km / person - Math.trunc(result1)) * minut;

    var result13 = (result12 - Math.trunc(result12)) * secund;

    elParagraph1.textContent = Math.trunc(result11) + " day " + Math.trunc(result1) + " hour " + Math.trunc(result12) + " minute " + Math.ceil(result13) + " secund";


    var result21 = (km / velo) / 24;
    result2 = km / velo;
    var result22 = (km / velo - Math.trunc(result2)) * minut;
    var result23 = (result22 - Math.trunc(result22)) * secund;
    elParagraph2.textContent = Math.trunc(result21) + " day " + Math.trunc(result2) + " hour " +  Math.trunc(result22) + " minute " + Math.ceil(result23) + " secund";

    var result31 = (km / car) / 24;
    result3 = km / car;
    var result32 = (km / car - Math.trunc(result3)) * minut;
    var result33 = (result32 - Math.trunc(result32)) * secund;
    elParagraph3.textContent = Math.trunc(result31) + " day " + Math.trunc(result3) + " hour " + Math.trunc(result32) + " minute " + Math.ceil(result33) + " secund";

    var result41 = (km / airplane) / 24;
    result4 = km / airplane;
    var result42 = (km / airplane - Math.trunc(result4)) * minut;
    var result43 = (result42 - Math.trunc(result42)) * secund;
    elParagraph4.textContent = Math.trunc(result41) + " day " + Math.trunc(result4) + " hour " + Math.trunc(result42) + " minute " + Math.ceil(result43) + " secund";



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
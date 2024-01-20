var no = Math.floor(Math.random() * 6)+1;
var imageset = "images/dice" + no + ".png";
document.querySelectorAll("img")[0].setAttribute("src",imageset);

var no2 = Math.floor(Math.random()*6)+1;
var imgs="images/dice" + no2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",imgs);

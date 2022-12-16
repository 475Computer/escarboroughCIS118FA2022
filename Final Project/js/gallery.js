var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
function openFullImg(pic) {"use strict"; fullImgBox.style.display = "flex"; fullImg.src = pic; }
function closeFullImg() {"use strict"; fullImgBox.style.display = "None"; }
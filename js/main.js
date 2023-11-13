window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

// Captcha Script

function checkform(theform){
var why = "";

if(theform.CaptchaInput.value == ""){
why += "- Please Enter CAPTCHA Code.\n";
}
if(theform.CaptchaInput.value != ""){
if(ValidCaptcha(theform.CaptchaInput.value) == false){
why += "- The CAPTCHA Code Does Not Match.\n";
}
}
if(why != ""){
alert(why);
return false;
}
}
const alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789123456789"
var a = alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
var b = alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
var c = alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
var d = alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
var e = alphanumeric[Math.floor(Math.random() * alphanumeric.length)];

const code = a + b + c + d + e;
document.getElementById("txtCaptcha").value = code;
document.getElementById("CaptchaDiv").innerHTML = code;

// Validate input against the generated number
function ValidCaptcha(){
var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
if (str1 == str2){
return true;
}else{
return false;
}
}

// Remove the spaces from the entered and generated code
function removeSpaces(string){
return string.split(' ').join('');
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["spouses.", "travelers.", "bloggers.", "explorers."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent +=
      textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay);
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

var modal2 = document.getElementById("armenia");
var btn2 = document.getElementById("myBtnArmenia");
var span = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
};

span.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

var modal3 = document.getElementById("russia");
var btn3 = document.getElementById("myBtnRussia");
var span = document.getElementsByClassName("close3")[0];

btn3.onclick = function () {
  modal3.style.display = "block";
};

span.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
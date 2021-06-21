var web = {
  sliderImg1: document.querySelector(".slider-img-1"),
  sliderImg2: document.querySelector(".slider-img-2"),
  imageBox1: document.querySelector(".slider-img-1 img"),
  imageBox2: document.querySelector(".slider-img-2 img"),
  imgTitle1: document.querySelector(".slider-img-1 .img-title"),
  imgTitle2: document.querySelector(".slider-img-2 .img-title"),
  imgVintageEffect1: document.querySelector(".slider-img-1 .vintage-effect"),
  imgVintageEffect2: document.querySelector(".slider-img-2 .vintage-effect"),
  progressBar: document.querySelector(".progress"),
  progressBarText: document.querySelector(".progress-bar-box .text-top"),
  nextBtn: document.querySelector(".next"),
  prevBtn: document.querySelector(".prev")
}

var sliderCount = 0;
var imgLeftValue = 0;



function next() {
  sliderCount++;
  web.sliderImg1.style.left = "-100%";
  web.sliderImg2.style.left = "0";
  web.imageBox1.style.transform = "scale(1.1)";
  web.imageBox2.style.transform = "scale(1)";
  web.imageBox1.style.animationName = "img-right-end";
  web.imageBox2.style.animationName = "img-left-start";
  web.imgTitle1.style.opacity = "0";
  web.imgTitle2.style.opacity = "1";
  // web.imgVintageEffect1.style.background = "radial-gradient(circle, #ffffff00, #b9b9b900, #77777700, #3b3b3b00, #00000000)"
  // web.imgVintageEffect2.style.background = " radial-gradient(circle, #ffffff00, #b9b9b900, #77777700, #3b3b3b00, #000000)"

  if (sliderCount <= 0) {
    sliderCount = 0;
    web.prevBtn.style.color = "#b3b3b3";
    web.nextBtn.style.color = "#ffffff";
  } else if (sliderCount >= 1) {
    sliderCount = 1
    web.prevBtn.style.color = "#ffffff";
    web.nextBtn.style.color = "#b3b3b3";
  }
  web.progressBarText.innerHTML = (sliderCount + 1).toString();
  web.progressBar.style.width = "100%";
}



function prev() {
  sliderCount--;
  web.sliderImg1.style.left = "0";
  web.sliderImg2.style.left = "100%";
  web.imageBox1.style.transform = "scale(1)";
  web.imageBox2.style.transform = "scale(1.1)";
  web.imageBox1.style.animationName = "img-right-start";
  web.imageBox2.style.animationName = "img-left-end";
  web.imgTitle1.style.opacity = "1";
  web.imgTitle2.style.opacity = "0";
  // web.imgVintageEffect1.style.background = "radial-gradient(circle, #ffffff00, #b9b9b900, #77777700, #3b3b3b00, #000000)"
  // web.imgVintageEffect2.style.background = "radial-gradient(circle, #ffffff00, #b9b9b900, #77777700, #3b3b3b00, #00000000)"

  if (sliderCount <= 0) {
    sliderCount < 0 ? web.imageBox1.style.animationName = "" : web.imageBox1.style.animationName = "img-right-start";
    sliderCount = 0;
    web.prevBtn.style.color = "#b3b3b3";
    web.nextBtn.style.color = "#ffffff";
  } else if (sliderCount >= 1) {
    sliderCount = 1
    web.prevBtn.style.color = "#ffffff";
    web.nextBtn.style.color = "#b3b3b3";
  }
  web.progressBarText.innerHTML = (sliderCount + 1).toString();
  web.progressBar.style.width = "50%";

}


if (sliderCount <= 0) {
  sliderCount = 0;
  web.prevBtn.style.color = "#b3b3b3";
  web.nextBtn.style.color = "#ffffff";
} else if (sliderCount >= 1) {
  sliderCount = 1
  web.prevBtn.style.color = "#ffffff";
  web.nextBtn.style.color = "#b3b3b3";
}
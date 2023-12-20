var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


const showButton = document.getElementById('showButton');
const hideButton = document.getElementById('hideButton');
const hidseButton = document.getElementById('hidseButton');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

showButton.addEventListener('click', () => {
    text1.style.display = 'block';
    text2.style.display = 'none';
    text3.style.display = 'none';
});

hideButton.addEventListener('click', () => {
    text1.style.display = 'none';
    text2.style.display = 'block';
    text3.style.display = 'none';
});
hidseButton.addEventListener('click', () => {
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'block';
});

//***********  autoplay carousel  ***********
 const track = document.getElementById('carouselTrack');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    // Auto play functionality
    function startCarousel() {
        setInterval(() => {
            moveCarousel(1);
        }, 3000); // Change slide every 3 seconds (adjust as needed)
    }

    // Move the carousel track
    function moveCarousel(direction) {
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        const newPosition = -currentIndex * 40 + '%';
        track.style.transform = 'translateX(' + newPosition + ')';
    }

    startCarousel(); 
 /* ******************* scroll ********************* */
 function scrollValue() {
    var navbar = document.getElementById('navBar');
    var home11=document.getElementById('Home11');
    var home22=document.getElementById('Home22');
    var home33=document.getElementById('Home33');
    var home44=document.getElementById('Home44');
    var home55=document.getElementById('Home55');
    var home66=document.getElementById('Home66');
    var home77=document.getElementById('Home77');
    var scroll = window.scrollY;
    console.log(scroll);
    if (scroll < 200 ) {
        navbar.classList.remove('bgnavbar');
        home11.classList.remove('bubbles');
        home22.classList.remove('bubbles');
        home33.classList.remove('bubbles');
        home44.classList.remove('bubbles');
        home55.classList.remove('bubbles');
        home66.classList.remove('bubbles');
        home77.classList.remove('bubbles');
    } else {
        navbar.classList.add('bgnavbar');
        home11.classList.add('bubbles');
     } 
     if (scroll>1200){
        navbar.classList.add('bgnavbar');
        home22.classList.add('bubbles');
        home11.classList.remove('bubbles');
     }else{
        home22.classList.remove('bubbles');
     }
     if (scroll>2200){
        navbar.classList.add('bgnavbar');
        home33.classList.add('bubbles');

        home11.classList.remove('bubbles');
        home22.classList.remove('bubbles');
     }else{
        home33.classList.remove('bubbles');
     }
     if (scroll>3400){
        navbar.classList.add('bgnavbar');
        home44.classList.add('bubbles');

        home11.classList.remove('bubbles');
        home22.classList.remove('bubbles');
        home33.classList.remove('bubbles');
     }else{
        home44.classList.remove('bubbles');
     }
     if (scroll>5700){
        navbar.classList.add('bgnavbar');
        home66.classList.add('bubbles');

        home11.classList.remove('bubbles');
        home22.classList.remove('bubbles');
        home33.classList.remove('bubbles');
        home44.classList.remove('bubbles');
     }else{
        home66.classList.remove('bubbles');
     }
     if (scroll>5700){
        navbar.classList.add('bgnavbar');
        home66.classList.add('bubbles');

        home11.classList.remove('bubbles');
        home22.classList.remove('bubbles');
        home33.classList.remove('bubbles');
        home44.classList.remove('bubbles');
     }else{
        home66.classList.remove('bubbles');
     }
     if (scroll>7800){
        navbar.classList.add('bgnavbar');
        home55.classList.add('bubbles');

        home11.classList.remove('bubbles');
        home22.classList.remove('bubbles');
        home33.classList.remove('bubbles');
        home44.classList.remove('bubbles');
        home66.classList.remove('bubbles');
     }else{
        home55.classList.remove('bubbles');
     }
     if (scroll>8839){
        navbar.classList.add('bgnavbar');
        home77.classList.add('bubbles');

        home11.classList.remove('bubbles');
        home22.classList.remove('bubbles');
        home33.classList.remove('bubbles');
        home44.classList.remove('bubbles');
        home55.classList.remove('bubbles');
        home66.classList.remove('bubbles');
     }else{
        home77.classList.remove('bubbles');
     }

}

window.addEventListener('scroll', scrollValue);


 /* ******************* Count animation on scroll********************* */

 let nums = document.querySelectorAll(".status .number");
let section = document.querySelector(".transparant");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
function statuss() {
   var status = document.querySelectorAll(".status");
 
   for (var i = 0; i < status.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = status[i].getBoundingClientRect().top;
     var elementVisible = 50;
 
     if (elementTop < windowHeight - elementVisible) {
      status[i].classList.add("active");
     } else {
      status[i].classList.remove("active");
     }
   }
 }

function trans() {
   var trans = document.querySelectorAll(".trans");
 
   for (var i = 0; i < trans.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = trans[i].getBoundingClientRect().top;
     var elementVisible = 50;
 
     if (elementTop < windowHeight - elementVisible) {
      trans[i].classList.add("active");
     } else {
      trans[i].classList.remove("active");
     }
   }
 }
 function happycostumer() {
   var happycostumer = document.querySelectorAll(".happycostumer");
 
   for (var i = 0; i < happycostumer.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = happycostumer[i].getBoundingClientRect().top;
     var elementVisible = 150;
 
     if (elementTop < windowHeight - elementVisible) {
      happycostumer[i].classList.add("active");
     } else {
      happycostumer[i].classList.remove("active");
     }
   }
 }

 function projectcomplet() {
   var projectcomplet = document.querySelectorAll(".projectcomplet");
 
   for (var i = 0; i < projectcomplet.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = projectcomplet[i].getBoundingClientRect().top;
     var elementVisible = 150;
 
     if (elementTop < windowHeight - elementVisible) {
      projectcomplet[i].classList.add("active");
     } else {
      projectcomplet[i].classList.remove("active");
     }
   }
 }
 function cups() {
   var cups = document.querySelectorAll(".cups");
 
   for (var i = 0; i < cups.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = cups[i].getBoundingClientRect().top;
     var elementVisible = 150;
 
     if (elementTop < windowHeight - elementVisible) {
      cups[i].classList.add("active");
     } else {
      cups[i].classList.remove("active");
     }
   }
 }
 window.addEventListener("scroll", statuss);
 window.addEventListener("scroll", trans);
 window.addEventListener("scroll", happycostumer);
 window.addEventListener("scroll", projectcomplet);
 window.addEventListener("scroll", cups);
 window.addEventListener("scroll", animes);



 /* ******************* animation on scroll  ********************* */

  /* ******* Part2 About  ******* */
  function happyface() {
   var happyface = document.querySelectorAll(".happyface");
 
   for (var i = 0; i < happyface.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = happyface[i].getBoundingClientRect().top;
     var elementVisible = 50;
 
     if (elementTop < windowHeight - elementVisible) {
      happyface[i].classList.add("active");
     } else {
      happyface[i].classList.remove("active");
     }
   }
 }
 function animes() {
   var animes = document.querySelectorAll(".animes");
 
   for (var i = 0; i < animes.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = animes[i].getBoundingClientRect().top;
     var elementVisible = 150;
 
     if (elementTop < windowHeight - elementVisible) {
      animes[i].classList.add("active");
     } else {
      animes[i].classList.remove("active");
     }
   }
 }
 window.addEventListener("scroll", happyface);
 window.addEventListener("scroll", animes);

  /* ******* Part3 services  ******* */
 function reveal() {
   var reveals = document.querySelectorAll(".reveal");
 
   for (var i = 0; i < reveals.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = reveals[i].getBoundingClientRect().top;
     var elementVisible = 150;
 
     if (elementTop < windowHeight - elementVisible) {
       reveals[i].classList.add("active");
     } else {
       reveals[i].classList.remove("active");
     }
   }
 }
 
 window.addEventListener("scroll", reveal);
 
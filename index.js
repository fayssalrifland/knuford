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

 /* ******************* Count animation ********************* */

 let valuedisplay = document.querySelectorAll(".number");
 let interval = 1000;


 valuedisplay.forEach((valuedisplays) =>{
   let startvalue = 0;
   let endvalue =parseInt(valuedisplays.getAttribute("data-val"));
   let duration = Math.floor(interval /endvalue);
   let counter =setInterval(function (){
      startvalue += 5;
      valuedisplays.textContent = startvalue ;
      if ( startvalue == endvalue) {
         clearInterval(counter);
      }
   }, duration);
 })






 /* ******************* animation on scroll  ********************* */

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
 
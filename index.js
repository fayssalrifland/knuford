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

//***********  aotoplay carousel  ***********
 const track = document.getElementById('carouselTrack');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    // Auto play functionality
    function startCarousel() {
        setInterval(() => {
            moveCarousel(3);
        }, 3000); // Change slide every 3 seconds (adjust as needed)
    }

    // Move the carousel track
    function moveCarousel(direction) {
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        const newPosition = -currentIndex * 20 + '%';
        track.style.transform = 'translateX(' + newPosition + ')';
    }

    startCarousel(); 
 /* ******************* scroll ********************* */
 function scrollValue() {
    var navbar = document.getElementById('navBar');
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('bgnavbar');
    } else {
        navbar.classList.add('bgnavbar');
    }
}

window.addEventListener('scroll', scrollValue);
const IMAGE = document.querySelector('#image');
const SECTION2 = document.querySelector('#section2');

document.addEventListener("scroll", () => {
   let scrollY = window.scrollY;
   const ANIMATIONTHREHOLD = 100;

   if(scrollY > ANIMATIONTHREHOLD) {
    SECTION2.classList.add('show')
   }

});

let imageChange = () => {
    if (window.innerWidth > 820) {
        IMAGE.src = "/assets/images/image-web-3-desktop.jpg";
    } else {
        IMAGE.src = "/assets/images/image-web-3-mobile.jpg";
    }
}

window.onresize = imageChange;
window.onload = imageChange;
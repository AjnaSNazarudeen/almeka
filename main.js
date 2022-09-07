const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const auto = true;
const intervalTime = 5000;
let slideInterval;

// Button click listner 
nextBtn.addEventListener("click", (e) => {
 
    nextSlide();
    if(auto){
        clearInterval(slideInterval)

        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prevBtn.addEventListener("click", (e) => {
    prevSlide();

    if(auto){
        clearInterval(slideInterval)
        
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

const nextSlide = () => {
    // get current class
    const current = document.querySelector(".current");
    // remove current class
    current.classList.remove("current");
    // change current slide
    if(current.nextElementSibling){
        // jump current class to next class
        current.nextElementSibling.classList.add("current");
    }
    else{
        // reset slide
        slides[0].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
    // get current class
    const current = document.querySelector(".current");
    // remove current class
    current.classList.remove("current");
    // change current slide
    if(current.previousElementSibling){
        // jump current class to next class
        current.previousElementSibling.classList.add("current");
    }
    else{
        // reset slide
        slides[slides.length-1].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};

//  auto slide in interval time

if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}


const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');

hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
    hamburger.classList.toggle('rotate');
});




window.addEventListener('scroll',reveal);

function reveal(){
    var scroll1 = document.querySelectorAll('.section11');
    var revealsTwo = document.querySelectorAll('.section22');
    var revealsThree = document.querySelectorAll('.section33');
    
    for(var i=0; i<scroll1.length; i++){
        var windowheight= window.innerHeight;
        var revealtop = scroll1[i].getBoundingClientRect().top;
        var revealTwo = revealsTwo[i].getBoundingClientRect().top;
        var revealpoint = 130;

        if(revealtop < windowheight - revealpoint){
            scroll1[i].classList.add('appear');
        }
        // else{
        //     revealsOne[i].classList.remove('appear');
        // } 
        
        
        if(revealTwo < windowheight - revealpoint){
            revealsTwo[i].classList.add('appear');
        }
        // else{
        //     revealsTwo[i].classList.remove('appear');
        // } 
    }
    for(var i=0; i<revealsThree.length; i++){
        var windowheight= window.innerHeight;
        var revealThree = revealsThree[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealThree < windowheight - revealpoint){
            revealsThree[i].classList.add('appear33');
        }    
    }

}


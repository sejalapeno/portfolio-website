let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };

    });
};



  
document.addEventListener('DOMContentLoaded', function() {
    const scrollReveal = ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });
  
    scrollReveal.reveal('.home-content, .heading', { origin: 'top' });
    scrollReveal.reveal('.home-img, .project-box', { origin: 'bottom' });
    scrollReveal.reveal('.home-content h1, .about-img', { origin: 'left' });
    scrollReveal.reveal('.home-content p, .about-content', { origin: 'right' });
  });
  


document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed(".multiple-text", {
      strings: ['an ML Enthusiast', 'an Artist', "Happy you're here :)"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  });
  



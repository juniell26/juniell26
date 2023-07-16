/*=============== toggle icon navbar ===============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

/*=============== scroll sections active link ===============*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };

    });

    /*=============== sticky navbar ===============*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=============== remove toggle icon navbar ===============*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

     /*=============== Fade In/Out Animation on Scroll===============*/

     window.addEventListener('scroll', fadeInOnScroll);
     window.addEventListener('resize', fadeInOnScroll);
     
     function fadeInOnScroll() {
       const about = document.querySelector('.about');
       const services = document.querySelector('.services');
       const portfolio = document.querySelector('.portfolio');
       const contact = document.querySelector('.contact');
       
       const aboutPosition = about.getBoundingClientRect().top;
       const servicesPosition = services.getBoundingClientRect().top;
       const portfolioPosition = portfolio.getBoundingClientRect().top;
       const contactPosition = contact.getBoundingClientRect().top;
     
       const screenPosition = window.innerHeight / 1.5;
     
       if (aboutPosition < screenPosition) {
         about.classList.add('fade-in');
         about.classList.add('active');
       } else {
         about.classList.remove('fade-in');
         about.classList.remove('active');
       }
     
       if (servicesPosition < screenPosition) {
         services.classList.add('fade-in');
         services.classList.add('active');
       } else {
         services.classList.remove('fade-in');
         services.classList.remove('active');
       }
     
       if (portfolioPosition < screenPosition) {
         portfolio.classList.add('fade-in');
         portfolio.classList.add('active');
       } else {
         portfolio.classList.remove('fade-in');
         portfolio.classList.remove('active');
       }
     
       if (contactPosition < screenPosition) {
         contact.classList.add('fade-in');
         contact.classList.add('active');
       } else {
         contact.classList.remove('fade-in');
         contact.classList.remove('active');
       }
     }
     
     
     

/*=============== submit-successfully button ===============*/

var contactForm = document.getElementById('contact');
var popup = document.querySelector('.popup');
var okButton = document.getElementById('okButton');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Perform form validation here
  // ...

  // Show the popup element
  popup.style.display = 'block';
});

okButton.addEventListener('click', function() {
  // Hide the popup element
  popup.style.display = 'none';
});

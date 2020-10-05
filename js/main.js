'use strict';
//make navbar transparent when it is on the top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});
// Handle scrolling when tapping on the navbar menu

const navbarmenu = document.querySelector('.navbar__menu');
navbarmenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoView(link);
});

//click contact scroll down to contact section

const HomeContactBtn = document.querySelector('.home__contact');
HomeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Home opacity change when scrolling down to about

// const home = document.querySelector('#home');
// const homeHeight = home.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//   if (window.scrollY < homeHeight) {
//     home.classList.add('home--opacity');
//   } else {
//     home.classlist.remove('home--opacity');
//     return;
//   }
// });

const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
}

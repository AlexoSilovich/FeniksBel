
const choice = document.getElementById('choice')
const num_active = document.getElementsByClassName('number_active')
const num_paginat = document.getElementsByClassName('pagination_num')
const dot = document.querySelectorAll("pagination_dots dot")

const upBtn = document.querySelector(".scrollBtn");


// SCROLL================================================

const scrollTop = document.querySelector('.scrollTop')

document.addEventListener("DOMContentLoaded", () => {
  scrollTop.style.opacity = 0
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 1200) {
    scrollTop.style.opacity = 0.6
  } else {
    scrollTop.style.opacity = 0
  }
  if (window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) {
    scrollTop.style.opacity = 0
  }
})

scrollTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})

// BURGER MENU============================================

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    burger.classList.toggle('burger-open');
    navLink.forEach(link => {
        link.classList.toggle('nav-link-open');
    })
    navLink.forEach(item => {item.addEventListener('click', () => {
      navbar.classList.remove('nav-open')
    })})
});


// CHANGE SLIDER==========================================

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// ORDER WINDOW============================================

const orderWindow = document.querySelector('.main_order')
const closeWindow = document.querySelector('.close_order')
const orderBtn = document.querySelectorAll('.open_order')


orderBtn.forEach(item => {item.addEventListener('click', () => {
  orderWindow.style.opacity = '1'
  orderWindow.style.zIndex = '100'
  orderWindow.style.transform = 'translateY(0)'
  if(orderWindow.style.fontSize === '140%') {
    setTimeout(() => {
      orderWindow.style.opacity = '0'
      orderWindow.style.transform = 'translateY(-100%)'
    },2000)
  }
})})

closeWindow.addEventListener('click', () => {
  orderWindow.style.opacity = '0'
  orderWindow.style.transform = 'translateY(-100%)'
})

// =========================================

const imgs = document.getElementById('imgs')

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let ind = 0

// let interval = setInterval(run,4000)

rightBtn.addEventListener('click', () => {
    ind++
    changeImg()
    reserInterval()
})

leftBtn.addEventListener('click', () => {
    ind--
    changeImg()
    reserInterval()
})

function changeImg() {
    if (ind > img.length - 1){
        ind = 0
    } else if (ind < 0){
        ind = img.length - 1
    }
    imgs.style.transform = `translateX(${-ind * 100}%)`
}

// function reserInterval(){
//     clearInterval(interval)
//     interval = setInterval(run,4000)
// }

function run() {
    ind++
    changeImg()
}

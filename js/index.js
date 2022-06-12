const imgs = document.getElementById('imgs')

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const choice = document.getElementById('choice')
const num_active = document.getElementsByClassName('number_active')
const num_paginat = document.getElementsByClassName('pagination_num')
const dot = document.querySelectorAll("pagination_dots dot")

const img = document.querySelectorAll('#imgs img')

const upBtn = document.querySelector(".scrollBtn");


// let ind = 1

// choice.innerText = `${ind}/${img.length}`

// rightBtn.addEventListener('click', () => {
//   ind++
//   changeImg()
//   reserInterval()
// })

// leftBtn.addEventListener('click', () => {
//   ind--
//   changeImg()
//   reserInterval()
// })

// function changeImg() {
//   if (ind > img.length) {
//     ind = 1
//   } else if (ind < 1) {
//     ind = img.length
//   }
//   imgs.style.transform = `translateX(${-ind * 500}px)`
//   choice.innerHTML = `${ind}/${img.length}`
  
// }

// function run() {
//   ind++
//   changeImg()
// }

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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ORDER WINDOW============================================

const orderWindow = document.querySelector('.main_order')
const closeWindow = document.querySelector('.close_order')
const orderBtn = document.querySelectorAll('.open_order')


orderBtn.forEach(item => {item.addEventListener('click', () => {
  orderWindow.style.opacity = '1'
  orderWindow.style.zIndex = '100'
  orderWindow.style.transform = 'translateY(0)'
})})

closeWindow.addEventListener('click', () => {
  orderWindow.style.opacity = '0'
  orderWindow.style.transform = 'translateY(-100%)'
})

// =========================================
// let interval = setInterval(run,4000)

// function reserInterval(){
  //     clearInterval(interval)
  //     interval = setInterval(run,4000)
  // }
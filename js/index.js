const imgs = document.getElementById('imgs')

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const choice = document.getElementById('choice')
const num_active = document.getElementsByClassName('number_active')
const num_paginat = document.getElementsByClassName('pagination_num')
const dot = document.querySelectorAll("pagination_dots dot")

const img = document.querySelectorAll('#imgs img')

const upBtn = document.querySelector(".scrollBtn");


let ind = 1

choice.innerText = `${ind}/${img.length}`

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
  if (ind > img.length) {
    ind = 1
  } else if (ind < 1) {
    ind = img.length
  }
  imgs.style.transform = `translateX(${-ind * 500}px)`
  choice.innerHTML = `${ind}/${img.length}`
  
}

function run() {
  ind++
  changeImg()
}

// SCROLL================================================

const scrollTop = document.querySelector('.scrollTop')

scrollTop.style.opacity = 0

window.addEventListener('scroll', () => {
  if (window.scrollY > 1200) {
    scrollTop.style.opacity = 1
  } else {
    scrollTop.style.opacity = 0
  }
})

scrollTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})


// CHANGE SLIDER==========================================





// let interval = setInterval(run,4000)

// function reserInterval(){
  //     clearInterval(interval)
  //     interval = setInterval(run,4000)
  // }
alert('JS is running inside!');
function log(message) {
  document.body.append(message+' ')
}
log('JS')
const wrapper = document.querySelector('.wrapper');
const watch = document.querySelector('.watch');const hoursEl = document.querySelector('.hours');const colonEl = document.querySelector('.colon');const minutesEl = document.querySelector('.minutes');
log('wrapper & watch: '+!!wrapper&&!!watch)
function onResize() {
  log('resize')
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  let width 
  if (screenWidth/screenHeight>=2.18) {
    width = screenHeight*2.18
  }
  else {
    width = screenWidth
  }
  // width*=0.9
  const fontSize = width*10/27.5
  watch.style.fontSize = fontSize+'px'
}
onResize()
window.addEventListener('resize', onResize)

function tik() {
  log('tik')
  const date = new Date()
  const hours = ('0'+date.getHours()).slice(-2)
  const minutes = ('0'+date.getMinutes()).slice(-2)
  hoursEl.textContent=hours
  minutesEl.textContent=minutes
}
setInterval(tik, 334)

// prevent sleep
setInterval(() => {
    window.location.href = "#stayAwake"; 
    window.location.href = "#";
}, 10000);
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg');
const btn = document.querySelector('.btn');
 
let load = 0
let int = ''
 
 
function bluring(){
 
  load ++
  btn.disabled = true

  if(load > 99){
    clearInterval(int)
    btn.disabled = false
  }
 
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  
}
 
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
 
function reloadBluring(){
    load = 0

    bg.style.filter = "blur(30px)"
    loadText.innerText = `${load}%`;
    loadText.style.opacity = "1";

    int = setInterval(bluring, 30)
}
 
btn.addEventListener('click', reloadBluring)
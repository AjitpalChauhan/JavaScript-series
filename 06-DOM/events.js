// document .getElementById('owl').onclick = function(){
//   alert("owl clicked")
// }

///attachEvent()
//jQuery-on


// type, timestamp, defaultPrevent
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode



document.getElementById("ul").addEventListener('click', function(){
  alert("ul clicked")
}, false)
document.getElementById("owl").addEventListener('click', function(e){
  alert("owl clicked")
  e.stopPropagation() // stop the bubble and catch event effect and only the clicked event will work
}, false)


document.getElementById("google").addEventListener('click', function(e){
  alert("ul clicked");
  e.preventDefault()
}, false)

document.querySelector('#images').addEventListener('click', function(){
  console.log(e.target.parentNode);

  if(e.target.tagName === 'IMG'){
    let removeIt = e.target.parentNode
    // removeIt.remove();]
    // removeIt.parentNode.removeChild(removeIt)
  }

  
}, false)
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d')
let width,height,
isDraw=false,
lastX=0,lastY=0,h=0;

let colorVal =document.getElementById('picker')
fillColor=document.getElementById("fillColor")

window.addEventListener('load',canvasSetter);
window.addEventListener('resize',canvasSetter);

function canvasSetter(){
    width = window.innerWidth*0.75
    height = window.innerHeight*0.7
    canvas.width = width
    canvas.height = height

    let left = width/2* -1
    let top = height/1.8 * -1
    canvas.style.marginLeft = left.toString()+'px'
    canvas.style.marginTop = top.toString()+'px'
    canvas.fillStyle = 'rgba(150,150,150,0.6)';
    ctx.font = "1.2em sans serif"
    // ctx.fillText(Math.floor(width) + ' x ' + Math.floor(height) , width/2 - 90, height/2 +10); //health
    ctx.fillText(Math.floor(width) + ' x ' + Math.floor(height) ,  0, 20); //health
} 
function draw(e) {
    ctx.strokeStyle = '#bada55'
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 10
  
    if (!isDraw) return // stops the function from running
    // console.log('asdfasdf')
    
    
    
    ctx.strokeStyle = colorVal.value
    // ctx.lineWidth = hue
  
    ctx.beginPath()
    // start from
    ctx.moveTo(lastX, lastY)
    // go to
    ctx.lineTo(e.offsetX, e.offsetY)
  
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
  
  }
 

  function updateColor(){
    fillColor.style.borderColor=colorVal.value
  }
  
  canvas.addEventListener('mousedown', (e) => {
    isDraw = true
    lastX = e.offsetX
    lastY = e.offsetY
  })
  
  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mouseup', () => isDraw = false)
  canvas.addEventListener('mouseout', () => isDraw = false)

function refresh(){
    location.reload(true)
  }

  var btns = document.getElementsByClassName("btn")
  console.log(btns)
  for(i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
      var curr=document.getElementsByClassName("active")
      curr[0].className = curr[0].className.replace("active")
      this.className+=" active"
    })
  }
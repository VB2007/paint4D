let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    canvasWidth = canvas.clientWidth,
    canvasHeight = canvas.clientHeight,
    color = document.getElementById('color').value,
    background = document.getElementById("background"),
    button = document.getElementById("tool"),
    tool='brush',
    width = document.getElementById('width').value

canvas.width = canvasWidth
canvas.height = canvasHeight
context.fillStyle = background.value;
context.fillRect(0, 0, canvas.width, canvas.height);

document.getElementById('color').oninput = function(){
    color=this.value
}
document.getElementById('width').oninput = function(){
    width=this.value
}
document.getElementById('img').onclick = function(){
    let img=canvas.toDataURL('image/jpg')
    this.href=img
}



canvas.onmousedown = (e) => {
    canvas.onmousemove = (event) => {
            if (tool == 'brush')
                context.fillStyle = color
            else
                context.fillStyle = background.value
            context.fillRect(event.offsetX - width/2, event.offsetY- width/2, width, width)
        }
        if (tool == 'brush')
                context.fillStyle = color
            else
                context.fillStyle = background.value
            context.fillRect(event.offsetX - width/2, event.offsetY- width/2, width, width)
    context.fillRect(event.offsetX-width/2, event.offsetY-width/2, width, width)
    canvas.onmouseup = () => {
        canvas.onmousemove = null
    }
}


background.addEventListener('input', changeBG);

function changeBG(){
    context.fillStyle = background.value;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

button.addEventListener("click", changeTool);

function changeTool(){
    let btn = document.getElementById("tool");
    if(btn.textContent == "brush"){
        btn.textContent = "eraser";
        tool='eraser'
    }
    else{
        btn.textContent = "brush";
        tool='brush'
    }
}
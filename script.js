let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    canvasWidth = canvas.clientWidth,
    canvasHeight = canvas.clientHeight,
    color = 'white',
    width = 20
canvas.width = canvasWidth
canvas.height = canvasHeight

canvas.onmousedown = () => {
    canvas.onmousemove = (event) => {
        context.fillStyle = color
        context.fillRect(event.offsetX-width/2, event.offsetY-width/2, width, width)
    }
    context.fillStyle = color
    context.fillRect(event.offsetX-width/2, event.offsetY-width/2, width, width)
    canvas.onmouseup = () => {
        canvas.onmousemove = null
    }
}
let img = document.querySelector('img')

document.addEventListener('mousemove', function(mouse){
    let dx = mouse.pageX - window.innerWidth / 2
    let dy = mouse.pageY - window.innerHeight / 2
    let angleX = 60*dx / window.innerWidth / 2
    let angleY = 60*dy / window.innerHeight / 2
    img.style.transform= `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})
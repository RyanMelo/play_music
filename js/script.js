const audio = document.querySelector('audio')

const btnplay = document.querySelector('#btnplay')

const btnpause = document.querySelector('#btnpause')

btnplay.addEventListener('click', function(){
    audio.play()
    btnplay.style.background = '#5DD74C'
    btnpause.style.background = 'white'
})

btnpause.addEventListener('click', function(){
    audio.pause()
    btnpause.style.background = '#5DD74C'
    btnplay.style.background = 'white'
})


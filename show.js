// lets generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i =0; i<6; i++){
        color += hex [Math.floor(Math.random() * 16)];
    }
    return color;
};


let intervalId;
const startChangingColor = function () {
    intervalId = setInterval(changeBgColor, 0.500);

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};


const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);


const video = document.getElementById('myVideo');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');

    startButton.addEventListener('click', () => {
        video.play();
    });

    stopButton.addEventListener('click', () => {
        video.pause();
     
    });



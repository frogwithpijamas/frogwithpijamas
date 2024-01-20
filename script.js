
var capibara = document.getElementById('capibara');
var object = document.getElementById('object');
var message = document.getElementById('message');
var final = true;

var dead = setInterval(function(){
    var capibaraTop = parseInt(window.getComputedStyle(capibara).getPropertyValue('top'));
    var objectLeft = parseInt(window.getComputedStyle(object).getPropertyValue('left'));

    if(objectLeft<30 && objectLeft>0 && capibaraTop>=140){

        final = false;
        object.style.animation = 'none';
        object.style.display = 'none';
        capibara.classList.remove('animate');
        capibara.style.backgroundImage = 'url("img/Capi5.png")';
        capibara.style.backgroundSize = 'contain';
        message.style.display = 'block';

        alert(':( ¡Perdiste!');
        clearInterval(dead);
    }
}, 10);

function jump(){

    if(!final){return;}

    var walking = 'url("img/capiCaminando.gif")';
    var jumping= 'url("img/capiSaltando.gif")';

    if(capibara.classList != 'animate'){
        capibara.classList.add('animate');
        capibara.style.backgroundImage = jumping;
    }

    setTimeout(function(){
        capibara.classList.remove('animate');
        capibara.style.backgroundImage = walking;
    },1200);
}

document.addEventListener('DOMContentLoaded', function () {
    var scrollElement = document.querySelector('.scroll');
    var gameElement = document.getElementById('game');


    // Listen for the end of the scroll animation
    scrollElement.addEventListener('animationend', function () {
        // Hide the scroll element
        scrollElement.style.display = 'none';

        // Show the game element
        gameElement.style.display = 'block';

    });
});




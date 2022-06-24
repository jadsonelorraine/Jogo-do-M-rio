const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const som_pulo = new Audio ();
som_pulo.src='./sons/pulo.aac';


const jump = () => {
    mario.classList.add('jump');
    som_pulo.play();
    setTimeout( () => {
        mario.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {
   
const tuboPosition = tubo.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition <80) {
    
    const som_morrendo = new Audio ();
     som_morrendo.src='./sons/morrendo.aac';
     som_morrendo.play();

    tubo.style.animation = 'none';
    tubo.style.left = `${tuboPosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`

    mario.src = './CSS/img/game.over.png';
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
    
    
    clearInterval(loop);
     
     }
     
     

}, 10);

document.addEventListener('keydown' , jump);

 
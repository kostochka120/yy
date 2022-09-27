import './style/style.scss';

let orientationPage = document.querySelector('.orientationPage');

function detectOrientation(){
    if(window.orientation == 90){
        orientationPage.classList.add('hide')
    }else{
        orientationPage.classList.remove('hide')
    }
}detectOrientation()


window.addEventListener('orientationchange', detectOrientation)
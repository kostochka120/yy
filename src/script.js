import './style/style.scss';

let orientationPage = document.querySelector('.orientationPage');
let rulerPage = document.querySelector('.rulerPage')

let pages = document.querySelectorAll('.page');
let ruler = document.querySelector('.ruler');
let rulerTop = document.querySelector('.topRule');
let rulerBottom = document.querySelector('.bottomRule');

let rulerTopCon = document.querySelector('.topRuleContainer');
let rulerBottomCon = document.querySelector('.bottomRuleContainer');

let range = document.querySelector('.rangeSize');


let convertMM = 4;

function openPage(view){
    for(let page of pages){
         page.classList.add('hide')
    }
    view.classList.remove('hide')
}

if(window.orientation != 90){
    openPage(orientationPage)
}

/*function ruleCreate(){
    let ruleSize = window.innerWidth - 150;

    for(let i = ; i <= ruleSize; i++){}
    let ruleElem = document.createElement("div");
    console.log(ruleElem)

    ruleElem.style.width = '1px';
    ruleElem.style.height = '4px'
    ruleElem.style.marginRight = '2.5px';
    ruleElem.style.background = "white"

    rulerTop.append(ruleElem)
    rulerBottom.append(ruleElem)

    
}ruleCreate()
*/

function ruleCreate(){
    let sum = 0
    while(ruler.clientWidth >= sum){
        let elem = document.createElement('div')
        sum += convertMM;
        elem.style.position = 'absolute'
        elem.style.left = (sum + 0.5) +'px'
        elem.style.width = '1px'
        elem.style.height = '100%'
        elem.style.background = 'white'

        rulerBottomCon.appendChild(elem.cloneNode(true))

        if(rulerBottomCon.children.length % 9 == 0){
            elem.style.height = '197px'
            rulerTopCon.append(elem)
        }else{
            rulerTopCon.append(elem)
        }

    }
}
ruleCreate()


    
    range.addEventListener('touchmove', function(e) {

      let touchLocation = e.targetTouches[0];
      
      range.style.left = touchLocation.pageX-174 + 'px';
      if(0 >= touchLocation.pageX-174){
        range.style.left = '0px'
      }
      if(touchLocation.pageX-150 >= ruler.clientWidth){
        range.style.left = ruler.clientWidth + 'px'
      }
    })
    
    range.addEventListener('touchend', function(e) {
      let x = parseInt(range.style.left);
      let y = parseInt(range.style.top);
    })
    

window.addEventListener('orientationchange', function(){
    if(window.orientation != 90){
        openPage(orientationPage)
    }else{
        openPage(rulerPage)
    }
})
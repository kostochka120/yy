import './style/style.scss';

let SizeOptions = {
    '45': {
      size:['36.5', '52.5'],
      minImg: 'img/sizeImg/size45.png',
      img:'img/packImg/pack45.png',
    },
    '47': {
      size:['52.5', '68.5'],
      minImg: 'img/sizeImg/size47.png',
      img:'img/packImg/pack47.png',
      button:['ozon', 'sber', 'wild', 'yan'],
      link:[
        ['http://sbermegamarket.ru/catalog/details/prezervativy-mysize-pro-r47-3-sht-600007355033/','sber'],
        ['https://market.yandex.ru/product--prezervativy-my-size-47-160-3-sht/13944906','yan'],
        ['https://www.ozon.ru/product/my-size-my-size-razmer-47-3sht-may-sayz-prezervativy-umenshennogo-razmera-shirina-47-mm-189816841','ozon'],
        ['https://www.wildberries.ru/catalog/30314753/detail.aspx?targetUrl=EX','wild'],
    ]
    },
    '49': {
      size:['68.5', '84.5'],
      minImg: 'img/sizeImg/size49.png',
      img:'img/packImg/pack49.png',
      button:['ozon', 'sber', 'wild', 'yan'],
      link:[
        ["https://sbermegamarket.ru/catalog/details/prezervativy-mysize-pro-r49-36-sht-600007355048/",'sber'],
        ["https://market.yandex.ru/product--prezervativy-my-size-49-160/13944905",'yan'],
        ["https://www.ozon.ru/product/my-size-my-size-razmer-49-3sht-may-sayz-prezervativ-umenshennogo-razmera-shirina-49-mm-200959939/",'ozon'],
        ["https://www.wildberries.ru/catalog/30314191/detail.aspx?targetUrl=BP",'wild'],
    ]
    },
    '53': {
      size:['84.5', '100.5'],
      minImg: 'img/sizeImg/size53.png',
      img:'img/packImg/pack53.png',
      button:['ozon', 'sber', 'wild', 'yan'],
      link:[
        ['https://sbermegamarket.ru/catalog/details/prezervativy-mysize-pro-r53-3-sht-600007355035/','sber'],
        ['https://market.yandex.ru/product--prezervativy-my-size-53-178-3-sht/13944904','yan'],
        ['https://www.ozon.ru/product/my-size-my-size-razmer-53-3-sht-may-sayz-prezervativ-srednego-standartnogo-razmera-shirina-53-mm-200932292/','ozon'],
        ['https://www.wildberries.ru/catalog/30312420/detail.aspx?targetUrl=EX','wild'],
      ]
    },
    '57': {
      size:['100.5', '116.5'],
      minImg: 'img/sizeImg/size57.png',
      img:'img/packImg/pack57.png',
      button:['ozon', 'sber', 'wild', 'yan'],
      link:[
        ['https://sbermegamarket.ru/catalog/details/prezervativy-mysize-pro-r57-3-sht-600007355036/','sber'],
        ['https://market.yandex.ru/product--prezervativy-my-size-57-178-3-sht/13944902','yan'],
        ['https://www.ozon.ru/product/my-size-my-size-razmer-57-3-sht-may-sayz-prezervativ-uvelichennogo-bolshogo-razmera-shirina-57-mm-189816852/','ozon'],
        ['https://www.wildberries.ru/catalog/30311356/detail.aspx?targetUrl=BP','wild'],
      ]
    },
    '60': {
      size:['116.5', '132.5'],
      minImg: 'img/sizeImg/size60.png',
      img:'img/packImg/pack60.png',
      button:['ozon', 'sber', 'wild', 'yan'],
      link:[
        ['https://sbermegamarket.ru/catalog/details/prezervativy-mysize-pro-r60-3-sht-600007355037/','sber'],
        ['https://market.yandex.ru/product--prezervativy-my-size-60-193-3-sht/13944903','yan'],
        ['https://www.ozon.ru/product/my-size-my-size-razmer-60-3-sht-may-sayz-prezervativy-uvelichennogo-bolshogo-razmera-shirina-60-mm-189816590/','ozon'],
        ['https://www.wildberries.ru/catalog/30313387/detail.aspx?targetUrl=EX','wild'],
      ]
    },
    '64': {
      size:['132.5', '148.5'],
      minImg: 'img/sizeImg/size64.png',
      img:'img/packImg/pack64.png',
      button:['ozon', 'sber', 'wild', 'yan'],
      link:[
        ['https://sbermegamarket.ru/catalog/details/prezervativy-mysize-pro-r64-3-sht-600007355038/','sber'],
        ['https://market.yandex.ru/product--prezervativy-my-size-64-223-3-sht/13944900','yan'],
        ['https://www.ozon.ru/product/my-size-my-size-razmer-64-3-sht-may-sayz-prezervativ-uvelichennogo-bolshogo-razmera-shirina-64-mm-200934473/','ozon'],
        ['https://www.wildberries.ru/catalog/30289742/detail.aspx?targetUrl=EX','wild'],
      ]
    },
    '69': {
      size:['148.5', '164.5'],
      minImg: 'img/sizeImg/size69.png',
      img:'img/packImg/pack69.png',
      button:['ozon', 'sber', 'wild', 'yan'],
      link:[
        ['https://sbermegamarket.ru/catalog/details/prezervativy-mysize-pro-r69-3-sht-600007355039/','sber'],
        ['https://market.yandex.ru/product--prezervativy-my-size-69-223-3-sht/13944901','yan'],
        ['https://www.ozon.ru/product/my-size-my-size-razmer-69-3-sht-may-sayz-prezervativ-uvelichennogo-bolshogo-razmera-shirina-69-mm-189816851/','ozon'],
        ['https://www.wildberries.ru/catalog/30315419/detail.aspx?targetUrl=EX','wild'],
      ]
    },
    '72': {
      size:['164.5', '188.5'],
      minImg: 'img/sizeImg/size72.png',
      img:'img/packImg/pack72.png',
    },
  };

let orientationPage = document.querySelector('.orientationPage');
let rulerPage = document.querySelector('.rulerPage');
let shopPage = document.querySelector('.shopPage');
let inputPage = document.querySelector('.inputPage')
let MS = {}

let pages = document.querySelectorAll('.page');
let ruler = document.querySelector('.ruler');
let rulerTop = document.querySelector('.topRule');
let rulerBottom = document.querySelector('.bottomRule');

let rulerTopCon = document.querySelector('.topRuleContainer');
let rulerBottomCon = document.querySelector('.bottomRuleContainer');

let range = document.querySelector('.rangeSize');

//button

let toShop = document.querySelector('.toShopButton');
let beforeButton = document.querySelectorAll('.beforeButton')
let buttomLink = [SizeOptions['72']]
let nextButton = document.querySelector('.nextButton')


let convertMM = 4;

function openPage(view){
    for(let page of pages){
        page.classList.add('hide')
    }
    view.classList.remove('hide')
}

if(window.orientation != 90){
    if(inputPage.classList.contains('hide')){
        openPage(orientationPage)
    }
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
    rulerTopCon.innerHTML = ""
    rulerBottomCon.innerHTML = ""
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


    
    range.addEventListener('touchmove', function(e) {

        let touchLocation = e.targetTouches[0];
      
        range.style.left = touchLocation.pageX-174 + 'px';
        if(0 >= touchLocation.pageX-174){
            range.style.left = '0px'
        }
        if(touchLocation.pageX-150 >= ruler.clientWidth){
            range.style.left = ruler.clientWidth + 'px'
        }
        for(let option in SizeOptions){
            if(range.offsetLeft >= +SizeOptions[option].size[0] && range.offsetLeft <= +SizeOptions[option].size[1] ){
                let size = document.querySelector('.size')
                size.lastChild.src = SizeOptions[option].minImg
                buttomLink[0] = SizeOptions[option]
            }
        }
    })
    
    range.addEventListener('touchend', function(e) {
        let x = parseInt(range.style.left);
    })
    

window.addEventListener('orientationchange', function(){

    if(window.orientation != 90){
        openPage(orientationPage)
    }else{
        openPage(inputPage)
    }
})

toShop.addEventListener('click', function(){

    document.querySelector('.bgImgContainer').firstChild.src = buttomLink[0].img
    let linkContainer = document.querySelector('.linkContainer')
    let shopContainer = document.querySelector('.shopContainer')
    let title = document.querySelector('.linkUnd')


    linkContainer.innerHTML = ''

    if(buttomLink[0].link){
        title.innerText = ''
        shopContainer.style.justifyContent = 'space-around'
        for(let elem of buttomLink[0].link){
            let link = document.createElement('a')
            link.className = 'link'
            //let buttonLink = document.createElement('div')
            //buttomLink.className = 'buttonLink'
            link.innerHTML = '<div class="buttomLink">'+`<img src="img/button/${elem[1]}.png">`+'</div>'
            link.href = elem[0]

            linkContainer.append(link)
        }
    }else{
        title.innerText = 'Скоро в продаже'
        shopContainer.style.justifyContent = 'center'
    }
    shopPage.classList.remove('hide')
    rulerPage.classList.add('hide')
})

beforeButton[1].addEventListener('click', function(){
    shopPage.classList.add('hide')
    rulerPage.classList.remove('hide')
})

beforeButton[0].addEventListener('click', function(){
    inputPage.classList.remove('hide')
    rulerPage.classList.add('hide')
})

nextButton.addEventListener('click', function(){
    inputPage.classList.add('hide')
    rulerPage.classList.remove('hide')
    ruleCreate()
})


let phoneBrand = document.getElementById('phoneBrand');
let phoneModelList = Array.from(document.querySelector('[data-select-item]'));

let sizeInput = document.getElementById('sizeInput');
let sizeDimension = document.getElementById('sizeDimension');
let sizeBtn = document.getElementById('sizeBtn');

let phoneInput = document.querySelector('.phone-model-input');
let phoneList = document.querySelector('[data-select-item]');
let listElements = Array.from(phoneList.querySelectorAll('option'));

let viewList = document.querySelector('[data-view-list]');
let viewListItems = [];

phoneModelList.forEach(function($select) {
    $select.onchange = function() {
      sizeInput.value = this.value;
    };
  });

listElements.forEach(function ($elem) {
    var div = document.createElement('div');
    div.textContent = $elem.textContent;
    viewList.appendChild(div);
    viewListItems.push(div);

    div.addEventListener('click', function () {
      phoneInput.value = this.innerText;
      viewList.classList.add('hide');
      sizeInput.value = $elem.value;
    });
  });

    phoneInput.oninput = function() {
        let $input = this;
        viewListItems.forEach(function ($elem) {
            let pattern = new RegExp($input.value, 'i');
            let isText = $elem.textContent.match(pattern);

           !isText ? $elem.style.display = 'none' : $elem.style = '';
        })
    }

    MS.Select = function() {
        var _this = this;
    
        this.$phoneBrand = document.getElementById('phoneBrand');
        this.$phoneModelList = Array.from(document.querySelector('[data-select-item]'));
    
        this.$sizeInput = document.getElementById('sizeInput');
        this.$sizeDimension = document.getElementById('sizeDimension');
        this.$sizeBtn = document.getElementById('sizeBtn');
    
        this.$phoneInput = document.querySelector('.phone-model-input');
        this.$phoneList = document.querySelector('[data-select-item]');
        this.$listElements = Array.from(_this.$phoneList.querySelectorAll('option'));
    
        this.$viewList = document.querySelector('[data-view-list]');
        this.$viewListItems = [];
    
        if (!this.$sizeInput || !this.$sizeDimension || !this.$sizeBtn) {
          return false;
        }
    
        this.$listElements.forEach(function ($elem) {
          var div = document.createElement('div');
          div.textContent = $elem.textContent;
          _this.$viewList.appendChild(div);
          _this.$viewListItems.push(div);
    
          div.addEventListener('click', function () {
            _this.$phoneInput.value = this.innerText;
            _this.$viewList.classList.add('hide');
            _this.$sizeInput.value = $elem.value;
          });
        });
    
        _this.$phoneInput.oninput = function() {
          var $input = this;
          _this.$viewListItems.forEach(function ($elem) {
            var pattern = new RegExp($input.value, 'i');
            var isText = $elem.textContent.match(pattern);
    
            !isText ? $elem.style.display = 'none' : $elem.style = '';
          });
        }
    
        this.$phoneModelList.forEach(function($select) {
          $select.onchange = function() {
            _this.$sizeInput.value = this.value;
          };
        });
    
        this.$sizeBtn.onclick = function() {
          var csswidth = window.screen.width * window.devicePixelRatio;
          var cssheight = window.screen.height * window.devicePixelRatio;
          var value = Number(_this.$sizeInput.value);
    
          if (_this.$sizeDimension.value === 'cm') {
            value /= 2.54;
          }
    
          var diagonalPx = Math.sqrt(((csswidth * csswidth) + (cssheight * cssheight)));
          var inPPI = diagonalPx / value;
          var cmPPI = 2.54 / inPPI;
          var imgwidth = 6 / (cmPPI * window.devicePixelRatio) + 30;
    
          document.querySelector('.ruler__col--first').style.minWidth = imgwidth + 'px';
          document.querySelector('.ruler__col--first').style.maxWidth = imgwidth + 'px';
    
          MS.$selectPhone.classList.add('hide');
          setTimeout(function() {
            MS.$header.classList.add('header--started');
            MS.$headerLogo.style = '';
            MS.$headerLogo.querySelector('.logo').style = '';
            MS.$main.style.display = '';
    
            setTimeout(function() {
              MS.$main.classList.remove('hide');
            }, 125);
          }, 250);
        }
    
        return this;
      };
      new MS.Select();





window.addEventListener('resize', ruleCreate)


//


  let modelInput = document.querySelector('.phone-model-input')

  modelInput.addEventListener('click', function(){
    console.log(1)
    let list = document.querySelector('.list')
    if(list.classList.contains('hide')){
        list.classList.remove('hide')
    }else{
        list.classList.add('hide')
    }
  })


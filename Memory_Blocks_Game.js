
// liste Imgs
let listeImg = [`img/golble.png`, `img/haker.jpg`, `img/smail.png`, `img/kalb.png`, `img/number--5.png`, `img/number-1.jpg`, `img/number-10.jpg`, `img/red.png`, `img/golble.png`, `img/haker.jpg`, `img/smail.png`, `img/kalb.png`, `img/number--5.png`, `img/number-1.jpg`, `img/number-10.jpg`, `img/red.png`]

// Create Number Random
let listeNumberR = new Set();

do{
    let numberRndom = Math.floor(Math.random() * listeImg.length);

    listeNumberR.add(numberRndom);

}while(listeNumberR.size < listeImg.length);
console.log(listeNumberR)

// Add Element To Container
listeNumberR.forEach(e =>{

    let box = document.createElement(`div`);
    console.log(listeImg[e])

    box.classList.add(`box`);
    box.classList.add(`x-${e}`);

    let face = document.createElement(`div`);

    face.classList.add(`face`);

    let img = document.createElement(`img`);

    img.setAttribute(`src`,listeImg[e]);

    face.appendChild(img);

    let back = document.createElement(`div`);

    back.classList.add(`back`);

    box.appendChild(face);

    box.appendChild(back);

    document.querySelector(`.box-grand`).appendChild(box);

})

// Select Element
let box_grand = document.querySelectorAll(`.box-grand .box`);

// Creat Variables
let count = 1;
let clickOne;
let clickTow;
let clickTree;

box_grand.forEach(box =>{

    box.addEventListener(`click`,e =>{


        box.classList.add(`click`);

        if(count == 1){

            clickOne = box.firstElementChild.firstElementChild.getAttribute(`src`);

            box.classList.add(`remove`);

            count++



        }

        if(count == 2 && !(box.classList.contains(`remove`))){

            clickTow = box.firstElementChild.firstElementChild.getAttribute(`src`);

            box.classList.add(`remove`);

            count++



            if(clickOne == clickTow){

                document.querySelectorAll(`.remove`).forEach(box=>{
    
                    box.style.visibility = `hidden`;
    
                    count = 1;
                })
    
            }    

        }

        if(count == 3 && !(box.classList.contains(`remove`))){

            document.querySelectorAll(`.click`).forEach(box =>{

                box.classList.remove(`click`);

                box.classList.remove(`remove`);
            });

            box.classList.add(`click`);

            box.classList.add(`remove`);

            clickOne = box.firstElementChild.firstElementChild.getAttribute(`src`);

            count = 2;

        }

    });

})


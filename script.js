
function quadrinhos (largura,comprimento) {
    let psection = document.querySelector('#pixel-board')
    psection.style.setProperty('width', '210px')
    psection.style.setProperty('heigth', '210px')
    for (let i = 0; i < comprimento; i+=1){
     
     let squareC = document.createElement('div');
     squareC.classList.add('linha');

     psection.appendChild(squareC);

    for (let j = 0; j < largura; j+=1){
       
        let squareL = document.createElement('div');
        squareL.classList.add('pixel');
         squareC.appendChild(squareL);
        
        
    }
    
       
    }
}
quadrinhos(5,5);

let pcolor = document.querySelector('#color-palette')
function selecaoclick(event) {
    // let bselected = document.querySelector('.selected')
    // let bcolor = document.querySelectorAll('.color')

    // for (let i = 0; i < bcolor.length; i+=1){
    //     let bicolor = bcolor[i]

    //     if (bicolor.classList.contains('selected')){
    //         bicolor.classList.remove('selected')
    //     } else {

    //         bicolor.addEventListener('click',function(event){
            
    //                 event.target.classList.toggle('selected');
                    
                
    //         })
    //     }
    // }

    let bselected = document.querySelectorAll('.selected')
    console.log(bselected)
    for (let i = 0; i < bselected.length; i+=1){
        bselected[i].classList.remove('selected')
    }
    event.target.classList.add('selected')

}

pcolor.addEventListener('click',selecaoclick)

//8
let spixel = document.getElementsByClassName('pixel');
function  testar (){
    
    for (let i = 0; i < spixel.length; i+=1){
    spixel[i].addEventListener('click',function (event){
        let selectedcor = document.querySelector('.selected');
        let propstyle = window.getComputedStyle(selectedcor);
        let mudaCor = propstyle.getPropertyValue('background-color')
        event.target.style.backgroundColor = mudaCor;
    })
    }
    
    
}

testar()

let blimpar = document.querySelector('#clear-board')
function limpar (){
    let qpixel = document.querySelectorAll('.pixel')
    for (let i =0; i < qpixel.length; i+=1){
        qpixel[i].style.backgroundColor = 'white'
    }
}

blimpar.addEventListener('click',limpar)




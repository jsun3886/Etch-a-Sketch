spage = document.querySelector(".main");
currentColor = 'blue';
let screenWidth=screen.width
function createBoard(size){
    page = document.querySelector(".main");

    for (row=0; row<size;row++){
        divRow= document.createElement('div')
        divRow.setAttribute('class','row')
        divRow.addEventListener('transitionend',removetransmition);
        boardSize=Math.min(screenWidth,screen.height-100)
        high= Math.round(((boardSize-50)/size));
        divRow.style.height =`${high}px`
        divRow.style.width= (boardSize-50);
        for (col=0; col<size; col++){
            square = document.createElement('div');
            square.setAttribute('class', "square");
            
            square.addEventListener('mouseover',colorsquare);
            square.addEventListener('transitionend',removetransmition);
            square.style.height=`${high}px`;
            square.style.width=`${high}px`;
            

            divRow.appendChild(square);
        }
        page.appendChild(divRow);
    }
}
function colorsquare(){
    this.style.backgroundColor=currentColor;

}

function resizeBoard(){
    numberSquares=prompt("enter the size of the board")
        while(isNaN(parseInt(numberSquares))){
            numberSquares=prompt("enter the size of the board")
        }
        while(parseInt(numberSquares)>100 || parseInt(numberSquares)<0){
            numberSquares=prompt("please enter a size between 1 and 100")
        }
    deleteboard();
    createBoard(numberSquares);
    }


function deleteboard(){
board = document.querySelectorAll('.square');

board.forEach(element => {element.classList.add('deleteing');
    
});
}


setSizeButton= document.querySelector('.numSquaresButton')
setSizeButton.addEventListener('click',resizeBoard)


function removetransmition(e){
    if(e.propertyName != 'transform'){return ;}
    this.remove();
  }
  
function createBigColorBoard(){
    panel= document.querySelector(".colorboard");
    
    for(r=0;r<255;r=r+20){
        for(g=0;g<255;g=g+20){
            for(b=0;b<255;b=b+20){
                swatch= document.createElement('div');
                swatch.classList.add('swatch');
                swatch.style.backgroundColor=`rgba(${r},${g},${b},1`;
                
                
                console.log(swatch);
                panel.appendChild(swatch);

            }
        }

    }

}
colorArray=['red','orange','yellow','green','blue','violet','black']
colorArray.forEach(color=>addSwatch(color))
    
 
function addSwatch(color){
    panel= document.querySelector(".colorboard");
    swatch= document.createElement('div');
    swatch.classList.add('swatch');
    swatch.style.backgroundColor=color
    swatch.addEventListener('click',changeColor)
    panel.appendChild(swatch);
}

function changeColor(){
    currentColor=this.style.backgroundColor;
}
createBoard(16);

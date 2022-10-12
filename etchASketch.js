var page = document.querySelector(".main");
var pointer = document.querySelector('img');
var currentColor = 'blue';
let screenWidth=screen.width
var makeDark=false;
var fadeIn = false;
var fadeOut=false;

/*  creates the board that is size X size made up of divs withe the square class*/
function createBoard(size){
    page = document.querySelector(".main");
    boardSize=Math.min(screenWidth,screen.height-100)
    boardSize-=100;
    high= Math.round(((boardSize)/size));
    knobPLace= document.querySelector('.knobs');
    knobPLace.style.width=`${boardSize+75}px`;
   
    for (row=0; row<size;row++){
        divRow= document.createElement('div')
        divRow.setAttribute('class','row')
        divRow.addEventListener('transitionend',removetransmition);
        
        divRow.style.height =`${high}px`
        divRow.style.width= (boardSize-50);
        for (col=0; col<size; col++){
            square = document.createElement('div');
            square.setAttribute('class', "square");
            square.style.opacity=1;
            square.addEventListener('mouseover',colorsquare);
            square.addEventListener('transitionend',removetransmition);
            square.style.height=`${high}px`;
            square.style.width=`${high}px`;
          
            divRow.appendChild(square);
        }
        page.appendChild(divRow);
    }
}

/* appropriatly changes the background of the square depending on the mode*/
function colorsquare(){
    if(!makeDark && !fadeIn && !fadeOut){
        this.style.backgroundColor=currentColor;
    
    }else if(fadeOut  && this.style.opacity>0){
       
        this.style.opacity=(this.style.opacity-0.2);
        
    }else if(fadeIn && this.style.opacity<1){
        this.style.opacity=parseFloat(this.style.opacity)+0.2;
        
    }else if (makeDark){
        this.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    }

}

/* erases the old board and creates a new one */
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



function removetransmition(e){
    if(e.propertyName != 'transform'){return ;}
    this.remove();
  }
  
// creates a small color swatch to add to the color select panel
function addSwatch(color){
    panel= document.querySelector(".colorboard");
    swatch= document.createElement('div');
    swatch.classList.add('swatch');
    swatch.style.backgroundColor=color
    swatch.addEventListener('click',changeColor)
    panel.appendChild(swatch);
    if(color=='#0000ff'){
        var rect = swatch.getBoundingClientRect();
        pointer.style.position="absolute"
        pointer.style.left=(rect.left-25)+"px";
    }
}
// changes the currently selected color when you click on the associated color swatch also moves the pointer
function changeColor(){
    currentColor=this.style.backgroundColor;
    var rect = this.getBoundingClientRect();
    console.log(rect.left);
    console.log(pointer.style.left);
    pointer.style.position="absolute"
    
    pointer.style.left=(rect.left+5)+"px";
    deselect('color')
    
}


function darkSquare(){
    if (makeDark==false){
        this.classList.add('Pressed');
        
        deselect('randomColor');
    } else{
        this.classList.remove('Pressed');
        makeDark= false; 
    }
}

function fadeInMode(){
    if (fadeIn==false){
        this.classList.add('Pressed');
        deselect('fadeIn');
    } else{
        this.classList.remove('Pressed');
        fadeIn= false; 
    }
}

function fadeOutMode(){
    if (fadeOut==false){
        this.classList.add('Pressed');
        deselect('fadeOut');
    } else{
        this.classList.remove('Pressed');
        fadeOut= false; 
    }
}
/* makes sure you can only select one mode at a time
selected is the mode that is pressed only that button will be inset
the rest of the modes will be set to false, and buttons have their Pressed class removed if it was there. 

*/
function deselect(selected){
darkerButton.classList.remove('Pressed');
makeDark=false;
fadeInButton.classList.remove('Pressed');
fadeIn=false;
fadeOutButton.classList.remove('Pressed');
fadeOut=false;
switch(selected){
    case 'randomColor':
        darkerButton.classList.add('Pressed');
        makeDark=true;
        break;
    case 'fadeIn':
        fadeInButton.classList.add('Pressed');
        fadeIn=true;
        break;
    case 'fadeOut':
        fadeOutButton.classList.add('Pressed');
        fadeOut=true;
        break;

}


}
// event listeners are set up for the various buttons. 
setSizeButton= document.querySelector('.numSquaresButton')
setSizeButton.addEventListener('click',resizeBoard)

darkerButton= document.querySelector('.randomColor');
darkerButton.addEventListener('click',darkSquare)

fadeOutButton = document.querySelector('.ghost');
fadeOutButton.addEventListener('click',fadeOutMode);


fadeInButton = document.querySelector('.ghostBuster');
fadeInButton.addEventListener('click',fadeInMode);


// board and color swatches are initially created
createBoard(16);
colorArray=['#ff0000','#ffa500','#ffff00','#00ff00','#0000ff','#ee82ee','#000000']
colorArray.forEach(color=>addSwatch(color))
 

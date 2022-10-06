page = document.querySelector(".main");


function createBoard(size){
    page = document.querySelector(".main");

    for (row=0; row<size;row++){
        divRow= document.createElement('div')
        divRow.setAttribute('class','row')
        high= Math.round(800/size);
        divRow.style.height =`${high}px`
        for (col=0; col<size; col++){
            square = document.createElement('div');
            square.setAttribute('class', "square");
            
            square.addEventListener('mouseover',colorsquare);
            square.style.height=`${high}px`;
            square.style.width=`${high}px`;
            divRow.appendChild(square);
        }
        page.appendChild(divRow);
    }
}
function colorsquare(){
    this.classList.add('colored');

}

function resizeBoard(){
    numberSquares=prompt("enter the size of the board")
        while(isNaN(parseInt(numberSquares))){
            numberSquares=prompt("enter the size of the board")
        }
        while(parseInt(numberSquares)>100 || parseInt(numberSquares)<0){
            numberSquares=prompt("please enter a size between 1 and 100")
        }
    createBoard(numberSquares);
    }






setSizeButton= document.querySelector('.numSquaresButton')
setSizeButton.addEventListener('click',resizeBoard)

createBoard(16)
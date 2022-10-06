page = document.querySelector(".main");

for (row=0; row<16;row++){
    divRow= document.createElement('div')
    divRow.setAttribute('class','row')
    for (col=0; col<16; col++){
        square = document.createElement('div');
        square.setAttribute('class', "square");
        square.textContent='square';
        square.addEventListener('mouseover',colorsquare)
        divRow.appendChild(square);
    }
    page.appendChild(divRow);
}

function colorsquare(){
    this.classList.add('colored');

}
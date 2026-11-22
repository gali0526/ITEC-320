let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random()*21)+30; //30-50
document.querySelector('#add').onclick = addSquare;

document.querySelector('#change').onclick = changeColors;

function changeColors(){
    let squares = document.querySelectorAll(".square");
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
}

function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor=getRandomColor();
    square.style.top = parseInt(Math.random()*(300-50))+"px";
    square.style.left = parseInt(Math.random()*(700-50))+"px";
    square.onclick = squareClicked;
    squareArea.append(square);

    let size = parseInt(Math.random()*11)+45;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.top = parseInt(Math.random()*(300-size))+"px";
    square.style.left = parseInt(Math.random()*(700-size))+"px";
}

function squareClicked(){
    let myZ = parseInt(this.style.zIndex) || 0;
    let topZ = getTopZ();

    if(myZ === topZ && myZ > 0){
        this.remove();
    }
    else{
        this.style.zIndex = topZ + 1;
    }
}

function getTopZ(){
    let squares = document.querySelectorAll(".square");
    let highest = 0;
    for(let i = 0; i < squares.length; i++){
        let z = parseInt(squares[i].style.zIndex) || 0;
        if(z > highest){
            highest = z;
        }
    }
    return highest;
}


window.onload = function(){
    let squareCount = parseInt(Math.random()*21)+30;
    for(let i = 0; i < squareCount; i++){
        addSquare();
    }
};

function getRandomColor(){
    let possibleLetters = "0123456789ABCDEF";
    let color="#";
    for(let i = 0;i <6;i++){
        let position = parseInt(Math.random()*
        possibleLetters.length)
        color+=possibleLetters.charAt(position);
    }
    return color;
}
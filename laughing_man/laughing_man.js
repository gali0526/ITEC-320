const SQUARE_COUNT= 5;
const TIMER_SPEED = 90;
const SPEED = 50;

const firstSquare = document.querySelector("#square");

firstSquare.style.left = "225px";
firstSquare.style.top = "175px";

firstSquare.addEventListener("click", ()=>{
    alert("OMG YOU CLICKED ME");
});

let box = document.querySelector("#box");
for(let i =0;i<SQUARE_COUNT;i++){
    let square = document.createElement("img");
    square.src="laughing_man.jpg";
    square.alt="Catch The Laughing Man";
    square.className="square";
    square.style.left="225px";
    square.style.top="175px";
    box.appendChild(square);
}

let squares = Array.from(box.children).forEach(
    (element) =>{
        let dx = SPEED *(Math.random()*2-1);
        let dy = SPEED *(Math.random()*2-1);
        let x = parseInt(element.style.left);
        let y = parseInt (element .style.top);

        setInterval(()=>{
            if(x<=0 || x >= 450){
                dx *=-1;
            }

            if(y<=0 || y>=350){
                dy*=-1;
            }

            x = x+dx;
            y = y+dy;
            element.style.left=x+"px";
            element.style.top=y+"px";
        }, TIMER_SPEED);
    }
);
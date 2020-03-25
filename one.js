const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const blobCount = 10;
const colors = new Array("red", "yellow", "orange", "green", "cyan", "purple", "black", "pink");
let x = 50;
let y = 50;

let xChange = 1;
let yChange = 1;

let blobs = new Array();

class Blob {
    constructor(color, size) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.width;
        this.color = color;
        this.size = size;
        this.xChange = Math.random();
        this.yChange = Math.random();
    }

    move(){
        if (this.x >= canvas.width || this.x <= 0) {
            this.xChange *= -1;
        } 
        if (this.y >= canvas.height || this.y <= 0) {
            this.yChange *= -1;
        }
    
        this.x+=this.xChange;
        this.y+=this.yChange;
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2*Math.PI)
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
    }
}

function randomChoice(arr){
    return arr[Math.floor(Math.random() * colors.length)];
}

for(let i=0; i<blobCount; i++){
    let randomColor = randomChoice(colors);
    blobs.push(new Blob(randomColor, 25))
}


function canvasDraw(){
    context.clearRect(0, 0, canvas.width, canvas.height)
    blobs.forEach(function(obj){
        obj.draw();
        obj.move();

    })
}

setInterval(canvasDraw, 10);



// setInterval(function(){
//     blob(x, y, 20, "blue")
// }, 100);  //used for animation



// blob(25, 100, 20, "blue");
// blob(75, 60, 20, "red");
// blob(80, 150, 20, "green");
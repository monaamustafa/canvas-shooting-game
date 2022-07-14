var myCanvas = document.querySelector('canvas');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight
var ctx = myCanvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

})
function spawnEnemies(){
    setInterval(()=>{
console.log("dfjhf");
    },1000)    
}

class Player {
    constructor(x, y, radius, randomColor) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.oraginradius = radius;
        this.randomColor = randomColor
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.strokeStyle = this.randomColor
        ctx.fillStyle = this.randomColor
        ctx.fill()
    }

}
class Projectlies {
    constructor(x, y, radius, randomColor, velocity) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.radius = radius;
        this.randomColor = randomColor
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.strokeStyle = this.randomColor
        ctx.fillStyle = this.randomColor
        ctx.fill()
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    }

}
class Enamy {
    constructor(x, y, radius, randomColor, velocity) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.radius = radius;
        this.randomColor = randomColor
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.strokeStyle = this.randomColor
        ctx.fillStyle = this.randomColor
        ctx.fill()
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    }

}


var randColors = ["#025E73", "#011F26", "#A5A692", "#BFB78F", "#F2A71B"];
var projectlies = [];
window.addEventListener("click", (e) => {
    const angle = Math.atan2(e.y - innerHeight / 2, e.x - innerWidth / 2)
    var radius = 10;
    var x = innerWidth / 2;
    var y = innerWidth / 2;
    var velocity = {

        x: Math.cos(angle),
        y: Math.sin(angle)
    }
    console.log(velocity);
    var randomColor = randColors[Math.floor(Math.random() * randColors.length)];
    projectlies.push(new Projectlies(innerWidth / 2, innerHeight / 2, radius, randomColor, velocity))

})
var player = new Player(innerWidth / 2, innerHeight / 2, 15, randColors[Math.floor(Math.random() * randColors.length)])

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    player.draw();
    projectlies.forEach(element => {
        element.update()
    });
}
animate()
spawnEnemies();
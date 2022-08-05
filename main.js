var cps = 0;
function startGame() {
    PlayerRed= new component(30, 20,"red", 10, 30);
    Bot1 = new component(30, 20, "Green", 10, 90);
    Bot2 = new component(30, 20, "blue", 10, 150);
    Bot3 = new component(30, 20, "pink", 10, 210);
    Bot = new component(30, 20, "Gold", 10, 290);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.getElementById("canvas1"),
    start : function() {
        if(screen.width <= 500){
            if (confirm("It seems like you're on a mobile device. Switch to a tablet or computer for optimal performance.") == true) {
             location.replace("https://blankwhitescreen.com/");
        }
    }
        setInterval(function(){
            if(started == 0){
                ctx.font = "50px Arial"; ctx.fillStyle = "blue";
           ctx.fillText("Click Anywhere To Play", 230, 50);
           ctx                                          
        }
        },0.5);
        this.canvas.width = 900;
        this.canvas.height = 350;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keyup");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
stop : function() {
clearInterval(this.interval);
}
}

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = this.width;
    this.speedX = 0;  
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;        
    }
        
}
 var started = false;
 var secs = 0;
 var clicks = 0;
function move(){
    if (!started){
        started = true;
        setInterval(function(){
        secs++;
    },1000);
    }
    setTimeout(function(){
        cps = 0;
    },100);
    cps = cps +2;
    clicks= clicks + 1;
    

    
    
    

}
function submit(){
    if(event.keyCode === 13){
        localStorage.setItem("username", document.getElementById("usernameinput").value);
    }
}

function updateGameArea() {
    myGameArea.clear();
    PlayerRed.speedX = cps;   
    if (started == 1){
        Bot.speedX = document.getElementById("dif").value / 4;
        Bot1.speedX = document.getElementById("dif").value / 3;
        Bot2.speedX = document.getElementById("dif").value / 6;
        Bot3.speedX = document.getElementById("dif").value / 8;
    }
    PlayerRed.newPos();    
    PlayerRed.update();
    Bot.newPos();    
    Bot.update();
    Bot1.newPos();    
    Bot1.update();
    Bot2.newPos();    
    Bot2.update();
    Bot3.newPos();    
    Bot3.update();
    if ( PlayerRed.x >= 870){
         myGameArea.stop();
         ctx.font = "30px Comic Sans MS";
         ctx.fillStyle = "blue";
         if (secs > 0){
            ctx.fillText(Math.round((clicks/secs + Number.EPSILON) * 100) / 100 + " CPS", 10, 50);
            window.alert("You have defeated the Bot with "+Math.round((clicks/secs + Number.EPSILON) * 100) / 100 +" CPS!"+ " Would you like to play another game?");
            clicks =0;
         }
        
        
    } else if (Bot.x >= 870 ||Bot1.x >= 870||Bot2.x >= 870 ||Bot3.x >= 870){
               myGameArea.stop();
               ctx.font = "20px Comic Sans MS";
               ctx.fillStyle = "blue";
               if (secs > 0){
            ctx.fillText("The Bots have won. Reload to play again.", 10, 50);
            clicks =0;
         } 
        }
}
if(started){
document.getElementById("body").style.overflow = "hidden";
}


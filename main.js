 var cps = 0;
        function startGame() {
            PlayerRed = new component(30, 20, "red", 10, 120);
            Bot = new component(30, 20, "blue", 10, 180);
            PlayerGrn = new component(30, 20, "lime",10, 240);
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
                this.canvas.height = 600;
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
         var started = 0;
         var secs = 0;
         var clicks = 0;
        function move(){
            if (started == 0){
                started = 1;
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
                window.alert(localStorage.username)
            }
        }
        
        function updateGameArea() {
            myGameArea.clear();
            PlayerRed.speedX = cps;   
            if (started == 1){
                Bot.speedX = document.getElementById("dif").value / 4;
            }
            PlayerRed.newPos();    
            PlayerRed.update();
            Bot.newPos();    
            Bot.update();
            PlayerGrn.newPos();
            PlayerGrn.update();
            
            if ( PlayerRed.x >= 870){
                 myGameArea.stop();
                 ctx.font = "30px Comic Sans MS";
                 ctx.fillStyle = "blue";
                 if (secs > 0){
                    ctx.fillText(Math.round((clicks/secs + Number.EPSILON) * 100) / 100 + " CPS", 10, 50);
                    window.alert("You have defeated the Bot with "+Math.round((clicks/secs + Number.EPSILON) * 100) / 100 +" CPS!"+ " Would you like to play another game?");
                    clicks =0;
                 }
                
                
            } else if (Bot.x >= 870){
                       myGameArea.stop();
                       ctx.font = "20px Comic Sans MS";
                       ctx.fillStyle = "blue";
                       if (secs > 0){
                    ctx.fillText("You have been defeated by the Bot!   Reload the page if you think you can win next time.", 10, 50);
                    clicks =0;
                 } 
                }
        }
        if(started == 1){
        document.getElementById("body").style.overflow = "hidden";
        }

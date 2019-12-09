function CanvasManager(canvasId){
    
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    this.stdColor = "green";
    this.bgColor = "black";
    
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    
    this.displayArray = function(vsa){
        
    }
    
    function displayBar(bar){
        ctx.fillRect()
    }
    
    function drawBackGround(){
        ctx.fillStyle = this.bgColor;
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}
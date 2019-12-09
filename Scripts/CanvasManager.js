function CanvasManager(canvasId){
    
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    this.stdColor = "green";
    this.bgColor = "black";
    
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    
    this.drawArray = function(vsa){
        drawBackGround();
        var barWidth = canvas.width/vsa.array.length;
        for(var i = 0; i < vsa.array.length; i++){
            drawBar({height:canvas.height/vsa.array.length * vsa.array[i].value, width:barWidth, start:(barWidth*i)});
        }
    }
    
    function drawBar(bar){
        ctx.fillStyle = "green";
        ctx.fillRect(bar.start,canvas.height - bar.height,bar.width,canvas.height);
    }
    
    function drawBackGround(){
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}
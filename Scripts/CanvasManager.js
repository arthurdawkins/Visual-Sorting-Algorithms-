function CanvasManager(canvasId){
    
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    this.stdColor = "green";
    this.accessColor = "yellow";
    this.bgColor = "black";
    
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    
    this.drawArray = function(vsa){
        drawBackGround(this.bgColor);
        var barWidth = canvas.width/vsa.array.length;
        for(var i = 0; i < vsa.array.length; i++){
            var color = this.stdColor;
            if(vsa.array[i].beingAccessed)color = this.accessColor;
            drawBar({height:canvas.height/vsa.array.length * vsa.array[i].value, width:barWidth, start:(barWidth*i)},color);
        }
    }
    
    this.drawfbArray = function(fba){
        drawBackGround(this.bgColor);
        var barWidth = canvas.width/fba.length;
        for(var i = 0; i < fba.length; i++){
            var color = this.stdColor;
            if(fba.get(i).beingSet)color = this.accessColor;
            drawBar({height:canvas.height/fba.length * fba.get(i).value, width:barWidth, start:(barWidth*i)},color);
        }
    }
    
    function drawBar(bar,color){
        ctx.fillStyle = color;
        console.log(bar);
        ctx.fillRect(bar.start,canvas.height - bar.height,bar.width,canvas.height);
    }
    
    function drawBackGround(color){
        ctx.fillStyle = color;
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}
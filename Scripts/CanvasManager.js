function CanvasManager(canvasId){
    
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    this.stdColor = "green";
    this.beingSetColor = "red";
    this.beingCheckedColor = "yellow";
    this.bgColor = "black";
    
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    
    
    this.drawArray = function(fba){
        drawBackGround(this.bgColor);
        var barWidth = canvas.width/fba.length;
        for(var i = 0; i < fba.length; i++){
            var color = this.stdColor;
            if(fba.get(i).beingSet)color = this.beingSetColor;
            if(fba.get(i).beingChecked)color = this.beingCheckedColor;
            drawBar({height:canvas.height/fba.length * fba.get(i).value, width:barWidth, start:(barWidth*i)},color);
        }
    }
    
    function drawBar(bar,color){
        ctx.fillStyle = color;
        ctx.fillRect(bar.start,canvas.height - bar.height,bar.width,canvas.height);
    }
    
    function drawBackGround(color){
        ctx.fillStyle = color;
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}
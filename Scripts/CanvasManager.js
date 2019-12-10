function CanvasManager(canvasId){
    
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    this.stdColor = "green";
    this.beingSetColor = "red";
    this.beingCheckedColor = "yellow";
    this.bgColor = "black";
    
    canvas.width = canvas.parentElement.parentElement.clientWidth;
    canvas.height = 400;
    
    
    this.drawArray = function(list){
        drawBackGround(this.bgColor);
        var barWidth = canvas.width/list.length;
        for(var i = 0; i < list.length; i++){
            var color = this.stdColor;
            if(list.get(i).beingChecked)color = this.beingCheckedColor;
            if(list.get(i).beingSet)color = this.beingSetColor;
            drawBar({height:canvas.height/list.length * list.get(i).value, width:barWidth, start:(barWidth*i)},color);
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
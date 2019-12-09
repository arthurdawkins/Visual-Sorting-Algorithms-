function VisualSortingArray(size){
    this.running = false;
    this.array = new Array(size);
    this.delay = 500;
    for(var i = 0; i < this.array.length;i++){
        this.array[i] = new index(i+1);
    }
    
    function index(value){
        this.beingAccessed = false;
        this.beingCompared = false;
        this.value = value;
    }
    
    this.shuffle = function(){
        //fisher yates style shuffle
        var ctx = this;
        this.running = true;
        var i = this.array.length-1;
        console.log(i);
        this.interval = setInterval(function() {
            if (!ctx.running){
                ctx.clearAccess();
                clearInterval(ctx.interval);
            }
            else
            {
                ctx.clearAccess();
                var j = Math.floor(Math.random() * (i+1));
                ctx.array[i].beingAccessed = true;
                ctx.array[j].beingAccessed = true;
                var temp = ctx.array[i];
                ctx.array[i] = ctx.array[j];
                ctx.array[j] = temp;
                if(i > 1){
                    i--;
                }else{
                    ctx.running = false;
                }
            }
        }, this.delay);
        
    }
    
    this.clearAccess = function(){
        for(var i = 0; i < this.array.length;i++){
            this.array[i].beingAccessed = false;
        }
    }
    
}
function DelayFeedBackArray(size = null){
    this.array = new Array();
    var ctx = this;
    this.length = 0;
    this.highest = 0;
    this.delay = 100;
    
    
    
    this.newRandom = function(size){
        this.array = new Array();
        for(var i = 0; i < size; i++){
            this.array.push(new data(i+1));
            this.length++;
        }
        this.highest = this.length;
        for(var i = this.length-1; i > 0; i--){
            var j = Math.floor(Math.random() * (i+1));
                //await list.swapWithDelay(i,j);
            var temp = this.array[i].value;
            this.array[i].value = this.array[j].value;
            this.array[j].value = temp;
        }
    }
    
    
    
    this.push = function(value){
        this.length++;
        if(value > this.highest){
            this.highest = value;
        }
        this.array.push(new data(value));  
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, this.delay);
        });
    }
    
    this.get = function(index){
        return this.array[index];
    }
    
    this.getWithDelay = function(index){
        this.array[index].beingChecked = true;
        return new Promise(resolve => {
            setTimeout(() => {
                this.array[index].beingChecked = false;
                resolve(ctx.get(index).value);
            }, this.delay);
        });
    }
    
    this.setWithDelay = function(index,value){
        this.array[index].beingSet = true;
        this.array[index].value = value;
        return new Promise(resolve => { 
            setTimeout(() => {
                this.array[index].beingSet = false;
                resolve();
            }, this.delay);
        });
    }
    
    this.swapWithDelay = function(index1,index2){
        return new Promise(resolve => { 
            setTimeout(async () => {
                this.array[index1].beingSet = true;
                this.array[index2].beingSet = true;
                
                this.array[index1].beingSet = false;
                this.array[index2].beingSet = false;
                resolve();
            }, this.delay);
        });
    }
    
    function data(value){
        this.value = value;
        this.beingChecked = false;
        this.beingSet = false;
    } 
}
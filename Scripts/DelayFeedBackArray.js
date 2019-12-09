function DelayFeedBackArray(size = null){
    this.array = new Array();
    var ctx = this;
    this.length = 0;
    this.delay = 100;
    
    if(size != null){
        this.array = new Array();
        for(var i = 0; i < size; i++){
            this.array.push(new data(0));
            this.length++;
        }
    }
    
    this.push = function(value){
        this.length++;
        this.array.push(new data(value));
    }
    //returns data object
    this.get = function(index){
        return this.array[index];
    }
    
    this.set = function(index,value){
        return this.array[index].value = value;
    }
    
    
    this.pushWithDelay = function(value){
        this.length++;
        this.array[length-1].beingSet = true;
        this.array.push(new data(value));  
        return new Promise(resolve => {
            setTimeout(() => {
                this.array[length-1].beingSet = false;
                resolve();
            }, this.delay);
        });
    }
    //returns value
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
    
    function data(value){
        this.value = value;
        this.beingChecked = false;
        this.beingSet = false;
    } 
}
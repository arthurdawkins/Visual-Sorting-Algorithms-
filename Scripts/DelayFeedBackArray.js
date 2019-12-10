function DelayFeedBackArray(size){
    this.array = new Array();
    var ctx = this;
    this.length = 0;
    this.delay = 50;
    
    
    
    this.push = function(value){
        this.length++;
        this.array.push(new data(value));
    }
    
    for(var i = 0; i < size; i++){
        this.push(i+1);
    }
    for(var i = this.length-1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var temp = this.array[i].value;
        this.array[i].value = this.array[j].value;
        this.array[j].value = temp;
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
                    this.pendingAction = null;
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
                this.pendingAction = null;
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
                this.pendingAction = null;
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
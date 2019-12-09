function DelayFeedBackArray(size = null){
    var array = new Array();
    var ctx = this;
    this.length = 0;
    
    var delay = 0;
    
    this.push = function(value){
        push(value);
        setBeingSet(this.length-1,true);
        return new Promise(resolve => {
            setTimeout(() => {
                setBeingSet(ctx.length-1,false);
                resolve();
            }, delay);
        });
    }
    
    this.get = function(index){
        return get(index);
    }
    this.getWithDelay = function(index){
        setBeingChecked(index,true);
        return new Promise(resolve => {
            setTimeout(() => {
                setBeingChecked(index,false);
                resolve(get(index));
            }, delay);
        });
    }
    
    this.setWithDelay = function(index,value){
        return new Promise(resolve => {
            setBeingSet(index,true);
            setTimeout(() => {
                array[index] = value;
                setBeingSet(index,false);
            }, delay);
        });
    }
    
    
    function push(value){
        ctx.length++;
        array.push(new data(value));
        
    }

    function get(index){
        return array[index];
    }
    
    function setBeingSet(index,val){
        array[index].beingSet = val;
    }
    
    function setBeingChecked(index,val){
        array[index].beingChecked = val;
    }
    
    function data(value){
        this.value = value;
        this.beingChecked = false;
        this.beingSet = false;
    } 
}
function DelayFeedBackArray(size = null){
    var array = new Array();
    var ctx = this;
    this.length = 0;
    
    var delay = 1000;
    
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
    
    this.set = function(index,value){
        return new Promise(resolve => {
            //array[index].beingSet = true;
            setTimeout(() => {
                array[index] = value;
                //array[index].beingSet = false;
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
        console.log(array+" "+index);
        array[index].beingSet = val;
    }
    
    function data(value){
        this.value = value;
        this.beingChecked = false;
        this.beingSet = false;
    }
    
}


async function asyncCall() {
  for(var i = 0; i < 10;i++){
    console.log('calling');
  	var result = await huh();
    console.log(result);
  }
}

//asyncCall();

function huh(_callback){
    return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000);
  });
}


























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




function runnableAlgorithm(name){
    this.name = name;
    
}
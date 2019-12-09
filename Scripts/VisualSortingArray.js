function VisualSortingArray(size){
    
    this.array = new Array(size);
    
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
        for(var i = this.array.length-1; i > 0; i--){
            var j = Math.floor(Math.random() * (i+1));
            var temp = this.array[i];
            this.array[i] = this.array[j];
            this.array[j] = temp;
        }
    }
    
}
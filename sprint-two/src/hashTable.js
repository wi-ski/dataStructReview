

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);

  this._resize = function(){
    if(this._size <= this._limit*.25){
      this._limit = this._limit/2
    }else if(this._size >= this._limit*.75){
      this._limit = this._limit * 2
    }
    var newStorage = LimitedArray(this._limit)
    this._storage.each(function(val,idx,colObj){
      newStorage.set(idx,val)
    });
    this._storage = newStorage
  }
  
  this.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, this._limit);
    var exists = this._storage.get(index)

    if(exists){
      var idx = exists.indexOf(key);
      if(idx!==-1){
        exists[idx+1] = value;   
      }else{
        exists.push(key);
        exists.push(value);
      }
    }else{
      var buck = [key,value];
      this._storage.set(index,buck);
    }
    this._size++;
    this._resize();
  };
  this.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, this._limit);
    var buck = this._storage.get(index);
    if(buck){
      for(var i = 0;i<buck.length;i+=2){
        if(buck[i]===key){
          return buck[i+1];
        }
      }      
    }else{
      return null;
    }
  };
  this.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, this._limit);
    this._storage.set(index,null);
    this._size--;
    // this._resize()
  };

};









/*
 * Complexity: What is the time complexity of the above functions?
 */



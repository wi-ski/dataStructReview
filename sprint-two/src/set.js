var Set = function() {
  this._storage = [];

  this.add = function(item) {
    var qq = this._storage.indexOf(item);
    if(qq !== -1){
      this._storage[qq] = item;
    }else{
      this._storage.push(item);
    }
  };

  this.contains = function(item) {
    return (this._storage.indexOf(item) !== -1)
  };

  this.remove = function(item) {
    var idx = this._storage.indexOf(item)
    if(idx !== -1){
     this._storage.splice(idx,1); 
    }
  };
};




/*
 * Complexity: What is the time complexity of the above functions?
 */

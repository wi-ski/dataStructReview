var BinarySearchTree = function(value) {
  this.left = null
  this.right = null
  this.value = value;

  this.insert = function(val){
    if(val > this.value){
        if(!this.right){
          this.right = new BinarySearchTree(val);
        }else{
          this.right.insert(val);
        }
    }else{
      if(!this.left){
        this.left = new BinarySearchTree(val)
      }else{
        this.left.insert(val);
      }
    }
  };
  this.contains = function(val){
    if(this.value === val){
      return true;
    }
    if(val > this.value){
        if(!this.right){
          return false;
        }else{
          return this.right.contains(val);
        }
    }else{
      if(!this.left){
        return false;
      }else{
        return this.left.contains(val);
      }
    }
  };
  this.depthFirstLog = function(cb){
    // debugger;
    function trav(node){
      cb(node.value);
      if(node.right){
        return trav(node.right);
      }
      if(node.left){
        return trav(node.left);
      }
      return;
    }
    return trav(this);
  };

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

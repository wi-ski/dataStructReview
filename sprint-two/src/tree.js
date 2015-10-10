var Tree = function(value) {

  this.value = value;
  this.children = [];  // fix me

  this.addChild = function(value) {
    this.children.push(new Tree(value));  // fix me
  };

  this.contains = function(target) {
    var cont = false;
    // debugger;
    (function trav(tree){
      if(tree.value===target){
        cont = true;
      }
      if(tree.children.length){
        tree.children.forEach(function(x){
          return trav(x);
        }); 
      }
    })(this);

    return cont;
  };
};




/*
 * Complexity: What is the time complexity of the above functions?
 */

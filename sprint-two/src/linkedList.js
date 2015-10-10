var LinkedList = function() {
  this.head = null;
  this.tail = null;

  this.addToTail = function(value) {
    var newNode = new Node(value);
    if(!this.tail){
      this.tail = newNode;
      this.head = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  this.removeHead = function() {
    var resp = this.head;
    this.head = this.head.next;
    return resp.value;

  };

  this.contains = function(target) {

    var trav = function(node){
      if(node.value === target){
        return true;
      }
      if(node.next){
        return trav(node.next);
      }
      return false;
    };
    return trav(this.head);
  };

};

var Node = function(value) {


  this.value = value;
  this.next = null;


};





/*
 * Complexity: What is the time complexity of the above functions?
 */

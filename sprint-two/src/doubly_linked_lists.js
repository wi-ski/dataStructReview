function dLinkedList(){

  this.head = null;
  this.tail = null;
  this.addToTail = function(val){
    var newNode = new Node(val);
    if(!this.tail){
      newNode.next = newNode;
      this.head = newNode;
      this.tail = newNode
    }else{
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

  };
  this.removeHead = function(){
    this.head = this.head.next; 
    return this.head.value;
  }
  this.contains = function(val){
    function trav(node){
      


      
    }
    return trav(this);
  }



}



var Node = function(value) {


  this.value = value;
  this.previous = null;
  this.next = null;
};
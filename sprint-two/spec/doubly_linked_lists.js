describe('Doubly Linked Lists', function() {
  var dlinkedList;

  beforeEach(function() {
    dlinkedList = new dLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dlinkedList).to.have.property("head");
    expect(dlinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(dlinkedList.addToTail).to.be.a("function");
    expect(dlinkedList.removeHead).to.be.a("function");
    expect(dlinkedList.contains).to.be.a("function");
  });

  it('nodes should have a ".previous" property', function(){
    dlinkedList.addToTail(4);
    expect(dlinkedList.tail).to.have.property("previous");
  });

  it('should have a ".previous" property, which refers to the parent node or null when there is no node', function(){
    dlinkedList.addToTail(4);
    expect(dlinkedList.tail.previous).to.equal(null);
    dlinkedList.addToTail(5);
    expect(dlinkedList.tail.previous.value).to.equal(4);

  });

  it('should designate a new tail when new nodes are added', function(){
    dlinkedList.addToTail(4);
    expect(dlinkedList.tail.value).to.equal(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.head.value).to.equal(4);
    dlinkedList.removeHead();
    expect(dlinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    dlinkedList.addToTail(4);
    expect(dlinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.contains(4)).to.equal(true);
    expect(dlinkedList.contains(5)).to.equal(true);
    expect(dlinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    dlinkedList.removeHead();
    expect(dlinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of dlinkedList
});

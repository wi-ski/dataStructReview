

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.some(function(x){
    return(x===node);
  })
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var idx = this.nodes.indexOf(node);
  this.nodes.splice(idx,1)
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(!this.edges[fromNode]){
    return false;
  }else{
    return this.edges[fromNode].some(function(x){return (x===toNode)})
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(!this.edges[fromNode]){
    this.edges[fromNode] = [toNode];
  }else{
    this.edges[fromNode].push(toNode)
  }
  if(!this.edges[toNode]){
    this.edges[toNode] = [fromNode];
  }else{
    this.edges[toNode].push(toNode);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var tidx = this.edges[fromNode].indexOf(toNode);
  var fidx = this.edges[toNode].indexOf(fromNode);

  this.edges[fromNode].splice(tidx,1)
  this.edges[toNode].splice(fidx,1)
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



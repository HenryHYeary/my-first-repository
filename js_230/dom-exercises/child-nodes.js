function walk(node, callback) {
  callback(node);
  for (let index = 0; index < node.childNodes.length; index++) {
    walk(node.childNodes[index], callback);
  }
}

function walkOnlyChildren(node, callback) {
  for (let index = 0; index < node.childNodes.length; index++) {
    walk(node.childNodes[index], callback);
  }
}

function childNodes(nodeId) {
  let currentNode = document.getElementById(nodeId);
  let directChildren = currentNode.childNodes.length;

  let indirectChildren = 0;
  walkOnlyChildren(currentNode, (node) => {
    indirectChildren += node.childNodes.length;
  });

  return [directChildren, indirectChildren];
}
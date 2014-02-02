// Usally Chrome-oriented, since it is a large % of browsers & Node


// http://jsperf.com/treewalker-vs-dom-traversal/7
var walkWithRecursion = function (root, array) {
	array.push(root);
	var node = root.firstChild;
	while (node !== null) {
		walkWithRecursion(node, array);
		node = node.nextSibling;
	}
}


;

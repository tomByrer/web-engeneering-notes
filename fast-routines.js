// Usally Chrome-oriented, since it is a large % of browsers & Node


// http://jsperf.com/treewalker-vs-dom-traversal/7
// IE10 may be slower
var walkWithRecursion = function (root, array) {
	array.push(root);
	var node = root.firstChild;
	while (node !== null) {
		walkWithRecursion(node, array);
		node = node.nextSibling;
	}
}

// http://jsperf.com/remove-item-from-array-splice-vs-lodash-without-working
for (var i = 0, l = array.length; i < l; i++) {
  if (array[i] === itemToRemove) {
    array.splice(i, 1);
    return;
  }
}

// http://jsperf.com/sparse-to-dense array
var i = 0;
while (i !== array.length) {
  i in array ? ++i : array.splice(i, 1);
}
;


// https://github.com/w3ctag/promises-guide


.

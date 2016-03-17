(function() {
    'use strict'
    function Node(val){
      this.value = val
      this.left = null
      this.right = null
    }
    function BinarySearchTree(){
      this.root = null
    }

    // .prototype is not 'the function prototype' of BST, but rather the object that will be assigned as the prototype of instances created with that function when using 'new'
    // this defines the push method on that prototype, for all future BSTs to use, as their __proto__
    // the difference between assigning every method in BST to 'this.something' is that with 'this.something' every instance of the type gets its own copy of the function. By attaching the functions to prototype, all instances share the same function instances
    BinarySearchTree.prototype.push = function(val){
        //these variables are local and not shared, but the function itself is shared
       var root = this.root

       if(!root){
          this.root = new Node(val)
          return
       }

       var currentNode = root
       var newNode = new Node(val) 

       while(currentNode){
          if(val < currentNode.value){
              if(!currentNode.left){
                 currentNode.left = newNode
                 break
              }
              else{
                 currentNode = currentNode.left
            }
         }
         else{
             if(!currentNode.right){
                currentNode.right = newNode
                break
             }
             else{
                currentNode = currentNode.right
             }
         }
      }
    }
    BinarySearchTree.prototype.print = function(node) {
        if(!node) {
            if(!this.root) return
            var root = this.root
            console.log(root.value)
            if(typeof root.left != 'undefined') BinarySearchTree.prototype.print(this.root.left)
            if(typeof root.right != 'undefined') BinarySearchTree.prototype.print(this.root.right)
        }
        else {
            console.log(node.value)
            if(typeof node.right != 'undefined')BinarySearchTree.prototype.print(node.left)
            if(typeof node.right != 'undefined')BinarySearchTree.prototype.print(node.right) 
        }
    }
    var bst = new BinarySearchTree()
    bst.push(3)
    bst.push(2)
    bst.push(4)
    bst.push(1)
    bst.push(5) 

    bst.print()
})()

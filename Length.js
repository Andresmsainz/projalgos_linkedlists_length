class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        // Write a method that accepts a value and create a new node, 
        // assign it to the list head, and return a pointer to the new head node.

        // create a new node
        var newNode = new Node(value);

        // attach new node to existing list
        newNode.next = this.head;

        // reassign list's head
        this.head = newNode;

        // return the head
        return this.head;
    }

    removeFront() {
        //Write a method to remove the head node and return the new list head node. 
        //If the list is empty, return null.
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }

    front() {
        // Write a method to return the value (not the node) at the head of the list. 
        // If the list is empty, return null.
        if(this.head) {
            return this.head.value;
        }
        return null;
    }

    contains(value) {
        //Runner starts at the head
        var runner = this.head;
        //Loop while we have a runner to look at
        while(runner) {
            // if current looping value matches the passed value we return true
            if(runner.value === value) {
                return true;
            }
            // Get next runner
            runner = runner.next;
        }
        //if we never find a matching value, we return false
        return false;
    }

    length() {
        //How many nodes are on my list
        icount = 0;
        //Runner starts at the head
        var runner = this.head;
        //Loop while we have a runner to look at
        while(runner) {
            // if we still have a runner(node) then we add 1
            icount = icount + 1;
            // Get next runner
            runner = runner.next;
        }
        return icount;
    }
}
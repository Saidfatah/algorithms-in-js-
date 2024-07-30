class Node{
   constructor(data,next){
     this.data = data;
     this.next = next;
   }
}

class LinkedList{
   constructor(head=null){
     this.head = null;
     this.size = 0;
   }
  
  insertFirst(data){
    this.head = new Node(data,this.head)
    this.size++
  }
  
  insertLast(data){
    const node = new Node(data);
    
    if(!this.head){
      this.head = node;
    }else{
      let current=this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    
    this.size++;
  }
  
  insertAtPosition(index,data){    
    if(index < 0 || this.size < index){
       return ;
    }
    
    if(index === 0 ){
      this.insertFirst(data);
    }
    
    const node = new Node(data);
    
    if(!this.head){
      this.head = node;
    }else{
      let current=this.head;
      let previous;
      let count=0;
      
      while(count < index){
         previous = current;
         current = current.next;
         count++;
      }
      
      node.next = current;
      previous.next =node;
    }
    
    this.size++;
  }
  
   
  removeAtPosition(index){    
    if(index < 0 || this.size < index){
       return ;
    }
    
    if(index === 0 ){
      const secondNode=this.head.next
       this.head = secondNode;
    }
    
    let current=this.head;
    let previous;
    let count=0;

    while(count <= index){
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current;

    this.size--;
  }
  
   reverseLinear(){    
    let prev =null;
    let current=this.head;
    let next =null;

    while(current !== null){
      next= current.next
      current.next = prev;
      prev = current;
      current = next
    }

    this.head = prev;
  }
  

  getAt(index){
    let current=this.head;
    let count=0;

    while(current){
      if(count === index){
        console.log(current)
      }
      current = current.next;
      count++;
    }

  }
  
  printList(){
    console.log("printList")
    let currentNode=this.head;
    
    while(currentNode){
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
    
  }
  
}


const ll = new LinkedList()

ll.insertFirst(1)
ll.insertFirst(2)
ll.insertFirst(9)
ll.insertFirst(10)
ll.insertFirst(12)

ll.reverseLinear()
ll.printList()
ll.reverseLinear()
ll.printList()
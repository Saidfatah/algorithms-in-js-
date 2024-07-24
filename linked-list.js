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
    let currentNode=this.head;
    
    while(currentNode){
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
    
  }
  
}


const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(101)
ll.insertFirst(102)
ll.insertFirst(104)
ll.insertFirst(109)

ll.insertAtPosition(3,768)

//ll.insertLast(999)
ll.printList()

let todo=[];

let req= prompt("Enter the request that you want"); 

while(true)

{
    req= prompt("Enter the request that you want");
    if(req=="quit"){
        console.log("Quitting the todo app");
        break;
    }
     if(req=="list"){
        console.log("------------");
        for(task of todo){
            console.log(task);                                                                                                                
        }
        console.log("--------------");

    }else if(req=="add"){
         let task=prompt("Please enter your task");
         todo.push(task);
         console.log("task added successfully");
    }
    req= prompt("Enter the request that you want"); 
    

}

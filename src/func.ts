function greet(name:string){
    console.log("Hello"+name);
    
}
greet("Hi Pgal")
function sum(a: number, b: number): number {
    return a + b;
}
console.log( sum(20,34));

function isLegal(age:number){
    if(age>18){
        console.log("Is legal ");
        
    }
    else{
        console.log("Not legal");
    }
}

// function taking another input 
function delayedCall(fn:()=>void){
    setTimeout(fn,1000)
}
delayedCall(function(){
    console.log("Delayed function");
})
function processArray(array,fn){
for(let i=0;i<array.length;i++){
console.log("index",i,"value",array[i],"return of value",fn(array[i]));
}
}
processArray([1,2,3,4,5],function cube(x) { return x*x*x;});
processArray([1,2,3,4,5],function square(x){ return x*x;});

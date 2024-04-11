for(var i=1;i<10;i++){
    console.log(i);
}
console.log(i);  // Global scope


for(let i=1;i<10;i++){
    console.log(i);
}
console.log(i);  // local  scope - Produce wrong result



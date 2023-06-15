// for loop
console.time('for loop')
for(var i=1;i<=10;i++){
    console.log(i)
}
console.timeEnd('for loop')

//while
console.time('While loop')
var i=1;
while(i<=10){
    console.log(i)
    i++;
}
console.timeEnd('While loop')



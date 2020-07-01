let arr=[1,2,3,4,5];
let len=arr.length;
let arr2=[];
let chunk=function(arr,len){
    for(let i=0;i<=len/2;i+=2)
    {
        arr2[i]=arr.splice(0,2);
    }
}
console.log(chunk(arr,len));
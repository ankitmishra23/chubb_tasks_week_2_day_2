
//implement the array methods.

//chunk method

let arr=[1,2,3,4,5,6,7,8,9,10];
let len=arr.length;
let arr2=[];
function chunk(arr,n){
    while(arr.length)
    {
        arr2.push(arr.splice(0,n));
    }
}
let n=2;
chunk(arr,n);
console.log(arr2);


//pull method

let a=2;
let b=3;
let arr3=[1,2,2,3,3,4,4,5,5,1,2,3,4,5];
let arr4=[];
function pull(arr3,...arg)
{
    for(let i=0;i<arg.length;i++)
    {
        arr4=arr3.filter(x=>!arg.includes(x));
    }
}

pull(arr3,a,b);
console.log(arr4);


//difference


let A=[1,2,3,4,5];
let B=[1,2,5,6,7];
let C=[];
function customdifference(A,B)
{
    for(let i=00;i<B.length;i++)
    {
        C=A.filter(x=>!B.includes(x));
    }
}

customdifference(A,B);
console.log(C);


//take

let Ab=[1,2,3,4,5,6,7,8,9,10];
let Ac=[];
function take(Ab,n)
{
    Ac.push(Ab.slice(0,n));
}
take(Ab,7);
console.log(Ac);


//filter
let users=[{ 'user': 'barney', 'age': 36, 'active': true },
{ 'user': 'fred',   'age': 40, 'active': false }]


let fil=[];
function customfilter(users,filter_crtieria)
{
    users.forEach(element => {
        if(element.active===true)
        {
            fil.push(element);
        }
    });
}

customfilter(users,true);
console.log(fil);

//find

let users2 = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

let ans;
  function customfind(users2,key)
  {
      users2.forEach(element=>{
          if(element.age===key)
          {
              ans=element.user;
              return;
          }
      })
  }

  customfind(users2,1);
  console.log("found at "+ans);


  //sum

  let sumarr=[1,2,3,4,5,6,7,8,9,10];
  let sumans=0;
  function customsum(sumarr)
  {
      sumarr.forEach(element=>{
          sumans+=element;
      })
  }

  customsum(sumarr);
  console.log("sum is "+sumans);


  //reduce

let sumarr2=[1,2,3,4,5,6];

  let customreduceans=0;
  function customreduce(sumarr2,cb)
  {
        sumarr2.forEach(element=>{
            customreduceans=cb(customreduceans,element);
        })
  }

  customreduce(sumarr2,function(n1,n2)
  {
      return n1+n2;
  })
  {
      console.log("after performing reduce value is "+customreduceans);
  }


  //gte

  let val1=10;
  let val2=30;

  let customgte=(a,b)=>{
      return a>b?true:false;
  }
  console.log(customgte(val1,val2));


  //keys

  let val="ankitmishra";
  let ansarr=[];
  function customkeys(val)
  {
      for(let i=0;i<val.length;i++)
      {
          ansarr.push(String(i));
      }
  }

  customkeys(val);
  console.log("keys are "+ansarr);


  //values

  let name2="ankit";
  let customvalues=(name2)=>{
        return name2.split('');
  }
  console.log("values for keys are "+customvalues(name2));



  //camelcase

  let st="Hello World";
  function customcamelcase(st){
    return st.toLowerCase().replace(/[^A-Za-z0-9]+(.)/g,(m,val)=>{
        return val.toUpperCase();
    })
  }
console.log(customcamelcase(st));


//endsWith

function customendswith(st,...arg)
{
    if(arg.length==1)
    {
        if(st[st.length-1]===arg[0])
        {
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
    else{
        if(st[arg[1]]===arg[0])
        {
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}

customendswith("Hello","l",2);
customendswith("hello","l");



//tail

let arrtail=[1,2,3,4,5,6,7,8,9,10];
let customtail=(arr)=>{
    return arr.slice(1,arr.length);
}
console.log("new array is "+customtail(arrtail));


//union

let a1=[1,2,3,4,5];
let a2=[1,5,6,7,8];
let a4=[45,56,67];
let a3=[... new Set([...a1,...a2,...a4])];
console.log("new array is "+a3);

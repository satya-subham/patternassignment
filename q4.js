let num=5;
let count=0;
let a=0;b=1
for(let i=1;i<=num;i++){
  let stars="  "
  for(let j=1;j<=i;j++){
    stars=stars+" "+a;
    count= a+b;
    a=b;
    b=count
  }
  console.log(stars)
}
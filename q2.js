let num = 5;
 let ab = num;
let bc = num;
for(let i = 1; i<5; i++){
  stars = ``
  for(let j = 1; j<5*2; j++){
    if(j==ab||j==bc){
       stars += "  * "
    }else stars +="    "
   
  }ab++
  bc--
  console.log(stars)
}
ab = 1;
bc = num*2-1;
for(let i = 1; i<=5; i++){
  stars = ``
  for(let j = 1; j<=5*2; j++){
    if(j==ab||j==bc){
       stars += "  * "
    }else stars +="    "
   
  }ab++
  bc--
  console.log(stars)
}

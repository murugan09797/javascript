let arr = [2,4,4,3,4,0,0,0];   
																																																			
function duplicate(arr){

 let array = [];
 for(let i =0; i<arr.length;i++){
  if(arr[i] == arr[i +1] ){
   array.push(arr[i] + "")
  }else{
  
  array.push(arr[i])
  }
 }  
 return array.filter((e)=> typeof(e) === "number")
}
console.log("fun",duplicate(arr))
// function hasPairWithSum(arr, sum){
//     var len = arr.length;
//     let pairs = []
//     for(var i =0; i<len-1; i++){
//        for(var j = i+1;j<len; j++){
//           if (arr[i] + arr[j] === sum)
//               pairs.push([arr[i],arr[j]]);
//        }
//     }
//     return (pairs.length>0)?pairs:false
//   }
  
  // Better
  function hasPairWithSum(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    pairs = []
    for (let i = 0; i < len; i++){
      if (mySet.has(arr[i])) {              // 3,5
         pairs.push([sum-arr[i],arr[i]])
      }
      mySet.add(sum - arr[i]);
    }
    return pairs.length>0?pairs:false;
  }
  
 console.log(hasPairWithSum([6,4,3,2,1,7], 9))
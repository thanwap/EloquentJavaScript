function every(array, test) {
    let result = true;
    let count = 0;
    while(result && count < array.length){
      if(!test(array[count])){
        result = false;
      }
        count++;
    }
    return result;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
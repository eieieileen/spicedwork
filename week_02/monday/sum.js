function sum(num) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
     console.log(sum);
   return sum; 
  
} 

sum(5, 10, 15, 88);
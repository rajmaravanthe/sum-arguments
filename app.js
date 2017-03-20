

function sum () {
   var args = arguments;
   var sum = 0;
   for(var i=0; i<args.length; i++) { // iterate the arguments and add each number;
       sum += args[i];
   }
   return sum;
}
document.write("Area of circle is "+ sum(3,5,6,7,3));//  call method sum
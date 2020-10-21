/*displaying concat()
var a=[1,5,5,3,4,5,6,7,5];
var b=[8,9];
var c=a.concat(b);
console.log(c);
//displaying indexof()
var  a=[9,7,5,2];
console.log(a.indexOf(5));
//displaying join()
var a=["social","science","maths","english"];
var c;
console.log(c=a.join(" & "));
//displaying lastindexOf method
console.log(a.lastIndexOf(5));
//displaying reverse
var x=a.reverse();
console.log(x);
//displaying sort method
var colors=["white","yellow","blue","pink","black"];
console.log(colors.sort());
//displaying tostring method
var days=["mon","tues","wed"];
//console.log(days.toString());
//displaying valueOf method
console.log(days.valueOf());
//displaying slice method
var student=["mano","kavi","savitha","mary","tina","emy","query"];
console.log(student.slice(0,5));
console.log(student.slice(-5,-3));
console.log(student.slice(-5,3));//if end value does not cross the start value,slicing is not possible
console.log(student.slice(2,-2));*/

//display splicing method
var num=[10,20,60,80,90];
console.log("removed values=" + num.splice(0,3,"50","70"));
console.log("new array after sliced="+num);


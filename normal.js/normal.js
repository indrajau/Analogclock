/*var obj={num:2}
var funtionName=function(arg1,arg2,arg3){
    return this.num+arg1+arg2+arg3;
};
console.log(funtionName.call(obj,arg1,arg2,arg3));
console.log(funtionName.apply(obj[arg1,arg2,arg3]));
var bound=funtionName.bind(obj);
console.log(bound(arg1,arg2,arg3)); */

var obj={num : 2};
var addToThis = function(a,b,c){
    return this.num+a+b+c;
}
console.log(addToThis.call(obj,3));
console.log(addToThis.call(obj,1,2,3));
console.log(addToThis.apply(obj,[1,2,3]));
var bound=addToThis.bind(obj);
console.log(bound(1,2,3));
let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5);

let mutiply=function(x)
{
    return function(y)
    {
        console.log(x*y);
        }
}

let mutiplyTwo=mutiply(2);
mutiplyTwo(2);

let mutiplyThree=mutiply(3);
mutiplyThree(5);
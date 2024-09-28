// function add(a: number, b: number, num3?: number) {
//     return num3 ? a + b + num3 : a + b;
// }

// // ? if you have optional parameter
// console.log(add(4, 6));

// const sub = (num1: number, num2: number , num3=10): number => num1 - num2-num3;

// console.log("subtraction" + sub(3, 2));

// const mul = function (num1: number, num2: number): number {
//     return num1 * num2;
// };

// function add2(num1:number,num2:number, ...num3:number[]){
//     return num1+num2+num3.reduce((a,b)=>a+b,0);
// }

// let number = [1,2,3,4,5];
// console.log(add2(10,20,...number));

// // rest parameter
// console.log(add2(10,20,1,2,3,4,5,6,7));

// ----- generics --------

function getItems<Type>(items: Type[]):Type[]{
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
let concatString=getItems<String>(['a',"b",'c','d','e']);


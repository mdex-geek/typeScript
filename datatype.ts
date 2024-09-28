// let lname :String = 'garg';

// let name :String;
// name = "deepanshu";

// let name_cap = name.toUpperCase();

// let age:number;
// age =90.3;

// let dob = "10";
// let result :number = parseInt(dob);

// let isvalid:boolean = false;
// console.log(isvalid);

// console.log(name_cap); 

// ------ Array ---------------------

// let emplist : String [];

// emplist = ["garg","deepanshu","mdex"];

// let numlist :Array<number> = [10,20,30,40,50];

// let result = numlist.filter((num)=>num>2);

// let num  = emplist.find((emp)=> emp === 'deepanshu');
// console.log(num);

// let sum:number = numlist.reduce((acc,num)=>acc+num);
// console.log(sum);


// -------------- ENUM ---------------//
const enum color{
    Red,
    green,
    blue
}

let c:color = color.Red;


// ----------tuple ----------------------//
// a tuple is a fixed-length array type where each element has a specific type. 
//It’s a way to represent an ordered set of values with different types.

//let myTuple: [string, number, boolean] = ['hello', 42, true];

let swapnumber : [firstnumber :number ,Secondnumber:number];

function swapnum(num1 :number ,num2:number):[number,number]{
    return [num2,num1];
}

swapnumber=swapnum(10,20);

swapnumber[0];
swapnumber[1];

let department :any;
department = "IT";
department =10;

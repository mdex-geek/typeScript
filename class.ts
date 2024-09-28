// import type { Login, User } from "./interface";

import * as UserLogin from './interface';
// this is a different syntax from it says what ever you have use it is UserLogin and using that like .

interface Address{
    street : String;
    city : String;
    state: String;
    pincode : number;
}

class Employee implements UserLogin.Login {
    #id: number;
    // # for private
    protected name: String;
    address: Address;

    constructor(id: number, name: String, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    login(): UserLogin.User {
      return { email:"",id:901,name:"john"}
    };

    static getemplyeeCount() {
        return 50;
    }
    getNameWithAddress(): String {
        return `${this.name} stays at ${this.address}`;
    }

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }
}

// class Manager extends Employee {
//     constructor(id: number, name: String, address: String) {
//         super(id, name, address);
//     }

//     getNameWithAddress(): String {
//         return `${this.name} is manage at ${this.address}`;
//     }
// }

// let mike = new Manager(10,'mike','cherise drive');
// console.log(mike.getNameWithAddress());

let emp = new Employee(1, 'john', {city:"palwal",pincode:121102,state:"haryana",street:"ABC"});


console.log(emp);

let address = emp.getNameWithAddress();
console.log(address);
console.log(Employee.getemplyeeCount());

emp.empId =100;
console.log(emp.empId);
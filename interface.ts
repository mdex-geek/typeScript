export interface User {
  name: String;
  age?: number;
  id: number;
  email: String;
}

// let user :User = {email:"",id:901,name:"john"};
let { name: userName, email: UserLogin }: User = {
  email: "",
  id: 901,
  name: "john",
};
// this is what we call object destructuring

// UserLogin = ""

interface Employee extends User {
  salary: number;
}

let employee: Employee = { name: "garg", email: "", id: 101, salary: 90000 };

export interface Login {
  login(): User;
}

let [user1,user2,...restUser]: Array<User> = [
  {
    name: "tom",
    email: "",
    id: 12,
  },

  {
    name: "parada",
    email: "parada@user.com",
    id: 89,
  },

  {
    name: "parada",
    email: "parada@user.com",
    id: 895,
  },

  {
    name: "parada",
    email: "parada@user.com",
    id: 9,
  },
];

// console.log(user1);
// console.log(user2);
// console.log(restUser);

let result = restUser.filter(user =>user.id >3);
console.log(result);
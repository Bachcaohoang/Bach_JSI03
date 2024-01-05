// Câu 9
let  m = [1,2,3,4,5,6,"hh" ,"9",80,100];
let mSquared = m.filter(item => typeof item === 'number').map(item => Math.pow(item, 2));
console.log(mSquared);
// câu10
let str = "High knowledge, high return";
let arr = str.split(" ").filter(item => item !== "").map(item => item.toLowerCase());
console.log(arr);
// câu11
class Employee{
    constructor(name, salary){
        this.name = name, this.salary = salary
    }
displayInfo(){
            console.log(this.name + " lương: " + this.salary)
        }
}

class Manager extends Employee{
    constructor(name, salary, department){
       super(name,salary), this.department = department;
    }
    displayInfo(){
        console.log("Tên: " + this.name + ", lương: " + this.salary + ", phòng ban: "+ this.department)
        // console.log(" daaddad "+ Employee.salary);
    }
}
var KHOA = new Employee("KHOA", 1000000)
var BACH = new Manager("BACH",34400000,"Tài chính kế toán")

BACH.displayInfo();
KHOA.displayInfo();

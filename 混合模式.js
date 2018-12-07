// 混合模式 = 构造函数+原型模式
// 比较常用
function Parent() {
    this.name = 'huang';
    this.age = '12';
    this.show = function () {
        console.log('姓名：' + this.name + '年龄：' + this.age)
    }
}

Parent.prototype.work = 'coder';
Parent.prototype.salary = 3000;
Parent.prototype.annualSalary = function () {
    console.log('月薪 = ' + this.salary)
    return '年薪 ： 12 * 月薪 = ' + 12 * this.salary
}

var children = new Parent()
var salary = children.annualSalary()
console.log(salary)
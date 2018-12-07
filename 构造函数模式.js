var lev = function () {
    return 'test'
}

// 工厂函数在函数内new一个Object对象 然后给对象赋值
// 并且可以给对象赋值一个函数， 建议在外面定义函数
function Parent() {
    this.name = 'huang'
    this.age = '12'
    this.lev = lev
}

var x = new Parent()
console.log(x.name)

// 工厂函数一般用的比较少
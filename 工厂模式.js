 var lev = function () {
    return 'test'
}

// 工厂函数在函数内new一个Object对象 然后给对象赋值
// 并且可以给对象赋值一个函数， 建议在外面定义函数
function Parent() {
    var Child = new Object()
    Child.name = 'huang'
    Child.age = '12'
    Child.lev = lev
    return Child
}

var x = Parent()
console.log(x.name)

// 工厂函数一般用的比较少
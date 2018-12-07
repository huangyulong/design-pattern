var Car = (function(){
    var name = 'huangyulong'

    function sayName() {
        console.log(name)
        return name
    }

    return {
        name: name,
        sayName: sayName
    }
})()

var ford = Car
console.log(ford.name)
console.log(ford.sayName())
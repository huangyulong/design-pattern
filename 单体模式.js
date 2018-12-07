/**
 * 单体模式可以将特定的属性和方法放到一个对象中，可以减少全局命名，
*/

var Singleton = {
    prop: '1',
    other_prop: 'value',
    method: function() {},
    other_method: function() {}
}

var otherSingle = (function(value){
    var a = 1;

    function add(value) {
        return a += value
    }

    return {
        b: '',
        method: function(value) {
            console.log(value)
            return value
        }
    }
}())

otherSingle.method()
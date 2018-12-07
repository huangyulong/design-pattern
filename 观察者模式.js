// 也叫发布订阅模式

// 创建一个目标对象，原型中包含添加观察者和删除观察者还有发布消息
function Subject() {
    this.observers = []
}
Subject.prototype = {
    constructor: Subject,
    subscribe: function (fn) {
        this.observers.push(fn)
        return this
    },
    unsubscribe: function (fn) {
        this.observers = this.observers.filter(function (item) {
            if(item !== fn) {
                return item
            }
        })
        return this
    },
    fire: function (data, context) {
        this.observers.forEach(function (item) {
            item.call(context, data)
        })
        return this
    }
}

// 创建两个观察者 MainView 和 SideView 
function MainView() {}
MainView.prototype.render = function (data) {
    console.log('MainView = ' + data)
}

function SideView () {}
SideView.prototype.render = function (data) {
    console.log('SideView = ' + data)
}

var subject = new Subject()
var mainView = new MainView()
var sideView = new SideView()

subject.subscribe(mainView.render)
subject.subscribe(sideView.render)
subject.fire('fire')

// 一旦目标函数发布了消息  那么观察者们就会收到消息并及时更新消息

// 这种一对多的类型 可以适用于消息通知类型或者其他类似的类型


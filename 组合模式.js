/**
 * 组合模式创建一个公共的方法  然后通过prototype给其原型添加公共的方法，
 * 不会被继承的子组件修改
 * 
*/

var Student = function(subject, score) {
    this.subject = subject;
    this.score = score;
}

Student.prototype = {
    show: function() {
        console.log("科目-" + this.subject + "；分数：" + this.score)
    }
}

var Huangyulong = function(subjec, score) {
    this.subject = subject;
    this.score = score;
}

var huang = new Student('english', 80)

huang.show()
// 类（class）
class Animal {
    // 在类的constructor中只能修改类中声明的成员，无法为实例添加属性，因为成员不存在
    // 在es6中，可以在constructor中可以修改类中声明的属性，也可以为实例添加任意属性方法

    private name: string = "jojo" ; // 声明实例私有属性，此属性只允许在类的内部访问
    age: number = 100 ; // 声明实例属性， 定义在实例上

    constructor(name: string){
        this.name = name // 构造器中访问私有属性 并修改其值
    } 

    sayName(){ // 声明继承方法，定义在类的prototype上
        return `i'm ${this.name}` // 实例方法内部 访问实例私有属性
    } 
}


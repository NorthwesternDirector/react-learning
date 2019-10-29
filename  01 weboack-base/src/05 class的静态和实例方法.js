class Animal{

	constructor (name,age){
		this.name = name //实例属性
		this.age = age
  }
  
	static info = "abc" //静态属性
	//等同于 animal.info = "abc"

	eat(){ //实例方法
	//等同于 animal.prototype.eat
		console.log("eat") } 
	
	
	static run(){ // 静态方法
	//等同于 animal. run=function(){}
			console.log("run")
	}
} 

const a1 = new Animal("baibai",19)

console.log(a1)
a1.eat()
//a1.run()

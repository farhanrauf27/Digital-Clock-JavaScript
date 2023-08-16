// Task 1: Code a Person class
class Person {
    constructor(name,age,energy){
        this.name=name;
        this.age=age;
        this.energy=energy;
    }
    name = "Tom"
    age = 20
    energy = 100
 sleep(){
    let x=this.energy+10
    console.log("Increased Energy level is: "+x)
}
 doSomethingFun(){
    let y=this.energy -10
    console.log("Decrased Energy level is: " +y)
}
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name,age,energy,xp,hourlyWage){
        super()
        this.xp=xp
        this.hourlyWage=hourlyWage
    }
    xp = 0
    hourlyWage = 10;
 goToWork(){
    let c=this.xp+10
    console.log("Increased xp is: "+c)
}
}
// Task 3: Code an intern object, run methods
function intern() {
    let intern=new Worker("Bob",21,110,0,10)
    intern.goToWork()
    return intern
}

// Task 4: Code a manager object, methods
function manager() {
    let manager= new Worker("Alice",30,120,100,30)
    manager.doSomethingFun()
    return manager
    
}


function GeneralCar(givenname,givenspeed){
    this.name=givenname;
    this.topspeed=givenspeed
    this.run=function(){
        console.log(`${this.name}is running`)
    }
    // run(nisaan)
}
car1=new GeneralCar('nisaan',180)
console.log(car1)
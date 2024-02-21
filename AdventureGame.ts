import chalk from "chalk"
import inquirer from"inquirer"
// Classes Players & Opponents
class players{
    name:string
fuel:number=100
constructor(name:string){
    this.name=name;
}
fuelDecrease(){
    let fuel = this.fuel - 25
    this.fuel = fuel
}
fuelIncrease(){
    this.fuel = 100
}
}
class opponents{
    name:string
fuel:number=100
    static select: string
constructor(name:string){
    this.name=name;
}
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

}  
// Players Name & Opponents Select
let Players = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please Enter Your Name:"
});
console.log(players.name)
let Opponents = await inquirer.prompt({
type:"list",
name:"select",
message:"Select your Opponent",
choices:["Skeleton","Assassin","Zombie"]
});
console.log(opponents.select);
// Gather DATA
let p1 = new players(players.name);
let o1 = new opponents(opponents.select);
do{}
while(true)
if (opponents.select == "Skeleton"){
let ask = await inquirer.prompt({
    type:"list",
    name:"opt",
    message:"Select your opponent",
    choices:["Attack","Drink portion","Run for your life.."],
});
if(ask.opt == "Attack"){
    let num=Math.floor(Math.random()*2)
    if (num>0) {
p1.fuelDecrease()
console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
    }
    if (num<=0){
    o1.fuelDecrease()
console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
}
}
if(ask.opt == "Drink Portion"){
   p1.fuelIncrease()
   console.log(chalk.bold.italic.green(`Your drink health portion your fuel is ${p1.fuel}`))
}
if(ask.opt == "Run for your life"){
    console.log(chalk.red.bold.italic("You loose, Better Luck Next Time"))
}
}